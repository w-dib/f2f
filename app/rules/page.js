"use client";
import { useSession } from "next-auth/react";
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Press_Start_2P } from "next/font/google";
const p2 = Press_Start_2P({ weight: "400", subsets: ["latin"] });

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
    <div className="flex flex-col items-center">
      <button
        className={`${p2.className} md:mr-5 px-3 py-2 bg-[#21FF7E] text-black rounded-md text-base hover:bg-[#29a35c] hover:text-white cursor-pointer`}
        onClick={() => router.push(`/user/${user}`)}
      >
        I agree
      </button>
    </div>
  );
}
export default Rules;
