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

  //fetch a user from the database, if the user exists, return the user id. If the user does not exist, make a new user and return the user id.

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

  //make a useEffect hook to check if the user is logged in. If the user is logged in, check if the user exists in the database. If the user exists, set the user state to the user id. If the user does not exist, create a new user and set the user state to the user id. If the user is not logged in, set the user state to null.

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
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export const useAuth = () => {
  return useContext(AuthContext);
};
