"use client";
import { Press_Start_2P } from "next/font/google";
import { useSession, signIn } from "next-auth/react";
import { BsLinkedin } from "react-icons/bs";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const p2 = Press_Start_2P({ weight: "400", subsets: ["latin"] });
function SignUp() {
  const { data: session } = useSession();

  const createNewUser = async () => {
    signIn("linkedin", {
      callbackUrl: `http://localhost:3000/dashboard`,
    })
      .then(async (res) => {
        const userRef = collection(db, "users");
        const docRef = await addDoc(userRef, {
          name: session?.user.name,
          email: session?.user.email,
          photo: session?.user.image,
          createdAt: serverTimestamp(),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-between md:justify-start text-white text-3xl font-normal">
      <button
        onClick={() => createNewUser()}
        className={`${p2.className} md:mr-5 px-3 py-2 bg-[#21FF7E] text-black rounded-md text-base hover:bg-[#29a35c] hover:text-white cursor-pointer`}
      >
        <span>Sign Up With </span>
        <BsLinkedin className="mb-2 h-6 w-6 inline-block" />
      </button>
    </div>
  );
}

export default SignUp;
