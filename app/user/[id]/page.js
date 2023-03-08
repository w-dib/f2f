"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

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
    <div>
      {userId && (
        <>
          <h1 className="text-white">{userId}</h1>
          <img src={user.image} />
        </>
      )}
    </div>
  );
}

export default User;
