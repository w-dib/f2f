"use client";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

function User() {
  const pathname = window?.location.pathname;
  const userId = pathname.substring(6);
  const [user, setUser] = useState({});

  useEffect(() => {
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
  }, []);

  console.log(user);

  return (
    <div>
      <h1 className="text-white">{userId}</h1>
    </div>
  );
}

export default User;
