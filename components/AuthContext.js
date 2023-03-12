"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  const getUser = async (email) => {
    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        return doc.data();
      });
      return querySnapshot.docs[0].id;
    } catch (error) {
      console.error("Error fetching user data: ", error);
      return null;
    }
  };

  useEffect(() => {
    if (session) {
      getUser(session.user.email).then((user) => {
        if (user) {
          setUser(user);
          setLoading(false);
        } else {
          setUser(null);
          setLoading(false);
        }
      });
    } else {
      setUser(null);
      setLoading(false);
    }
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
