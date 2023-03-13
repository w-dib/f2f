"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { signOut } from "next-auth/react";
import { useAuth } from "@/components/AuthContext";
import LoadingCircle from "@/components/LoadingCircle";
function User() {
  const { user, loading } = useAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function fetchUserInfo() {
      if (user) {
        const docRef = doc(db, "users", user);
        const docSnap = await getDoc(docRef);
        const userInfo = docSnap.data();
        console.log(userInfo.image);
        setUserInfo(userInfo);
      }
    }
    fetchUserInfo();
  }, [user]);

  if (loading) {
    return <LoadingCircle />;
  }

  if (userInfo) {
    return (
      <div className="flex flex-col max-w-lg items-center mx-auto">
        <h1 className="text-white">{userInfo.name}</h1>
        <div onClick={() => signOut({ callbackUrl: "/" })}>
          <img src={userInfo.image} />
        </div>
      </div>
    );
  }
}

export default User;
