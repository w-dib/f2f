"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { signOut } from "next-auth/react";
import Loading from "@/components/Loading";
function User() {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const pathname = window?.location.pathname;
    if (pathname) {
      setUserId(pathname.substring(6));
    }
  }, []);

  useEffect(() => {
    if (userId) {
      const getUser = async () => {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
        } else {
          console.log("No such document!");
        }
      };
      getUser();
    }
  }, [userId]);

  return (
    <div className="flex flex-col max-w-lg items-center mx-auto">
      <h1 className="text-white">{userId}</h1>
      <div onClick={() => signOut({ callbackUrl: "/" })}>
        <img src={user.image} />
      </div>
    </div>
  );
}

export default User;
