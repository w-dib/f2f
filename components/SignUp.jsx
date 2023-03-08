"use client";
import { Press_Start_2P } from "next/font/google";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const p2 = Press_Start_2P({ weight: "400", subsets: ["latin"] });
function SignUp() {
  const { data: session } = useSession();
  const [user, setUser] = useState("");

  const router = useRouter();
  const getUser = async () => {
    const q =
      session &&
      query(collection(db, "users"), where("email", "==", session?.user.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      return doc.data();
    });
    setUser(querySnapshot.docs[0].id);
  };
  if (session) {
    getUser();
  }
  // const createNewUser = async () => {
  //   signIn();
  // };

  return (
    <div>
      {!session ? (
        <div className="mt-5 md:mt-16 pb-7">
          <div className="flex justify-between md:justify-start text-white text-3xl font-normal">
            <button
              onClick={() => signIn(undefined, { callbackUrl: "/rules" })}
              className={`${p2.className} md:mr-5 px-3 py-2 bg-[#21FF7E] text-black rounded-md text-base hover:bg-[#29a35c] hover:text-white cursor-pointer`}
            >
              <span>Sign Up</span>
            </button>
          </div>
          <hr className="h-px mt-5 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      ) : (
        <div className="mt-5 md:mt-16 pb-7">
          <div className="flex justify-between md:justify-start text-white text-3xl font-normal">
            <button
              onClick={() => router.push(`/user/${user}`)}
              className={`${p2.className} md:mr-5 px-3 py-2 bg-[#21FF7E] text-black rounded-md text-base hover:bg-[#29a35c] hover:text-white cursor-pointer`}
            >
              <p>My Dashboard</p>
            </button>
          </div>
          <hr className="h-px mt-5 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      )}
    </div>
  );
}

export default SignUp;
