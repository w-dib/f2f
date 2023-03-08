"use client";
import { useSession } from "next-auth/react";
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Rules() {
  const { data: session } = useSession();
  const router = useRouter();
  const [user, setUser] = useState("");

  const getUser = async () => {
    const q =
      session &&
      query(collection(db, "users"), where("email", "==", session?.user.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      return doc.data();
    });
    console.log(querySnapshot.docs[0].data());
    setUser(querySnapshot.docs[0].id);
  };
  if (session) {
    getUser();
  }

  return (
    <div>
      <button onClick={() => router.push(`/user/${user}`)}>Chat</button>
    </div>
  );
}

export default Rules;
