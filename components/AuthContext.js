"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  collection,
  getDocs,
  query,
  where,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  const getUser = async (email) => {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const user = [];
    querySnapshot.forEach((doc) => {
      user.push({ ...doc.data(), id: doc.id });
    });
    return user[0];
  };

  const createUser = async (email) => {
    const user = {
      email: session.user.email,
      name: session.user.name,
      image: session.user.image,
      createdAt: serverTimestamp(),
    };
    const docRef = await addDoc(collection(db, "users"), user);
    return { ...user, id: docRef.id };
  };

  useEffect(() => {
    if (session) {
      getUser(session.user.email).then((user) => {
        if (user) {
          setUser(user.id);
        } else {
          createUser(session.user.email).then((user) => {
            setUser(user.id);
          });
        }
      });
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [session]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export default AuthContext;
export const useAuth = () => {
  return useContext(AuthContext);
};
