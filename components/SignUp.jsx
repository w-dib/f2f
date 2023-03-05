"use client";
import { Press_Start_2P } from "next/font/google";
import { useSession, signIn } from "next-auth/react";
import { BsLinkedin } from "react-icons/bs";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const p2 = Press_Start_2P({ weight: "400", subsets: ["latin"] });
function SignUp() {
  const { data: session } = useSession();
  const router = useRouter();

  const createNewUser = async () => {
    signIn("linkedin", {
      callbackUrl: `http://localhost:3000/rules`,
    });
  };

  return (
    <div>
      {!session ? (
        <div className="mt-5 md:mt-16 pb-7">
          <div className="flex justify-between md:justify-start text-white text-3xl font-normal">
            <button
              onClick={() => createNewUser()}
              className={`${p2.className} md:mr-5 px-3 py-2 bg-[#21FF7E] text-black rounded-md text-base hover:bg-[#29a35c] hover:text-white cursor-pointer`}
            >
              <span>Sign Up With </span>
              <BsLinkedin className="mb-2 h-6 w-6 inline-block" />
            </button>
          </div>
          <hr className="h-px mt-5 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      ) : (
        <div className="mt-5 md:mt-16 pb-7">
          <div className="flex justify-between md:justify-start text-white text-3xl font-normal">
            <button
              onClick={() => router.push("/dashboard")}
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
