"use client";
import { Press_Start_2P } from "next/font/google";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";

const p2 = Press_Start_2P({ weight: "400", subsets: ["latin"] });
function SignUp() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (user) {
    return (
      <div className="mt-5 md:mt-16 pb-7">
        <div className="flex justify-between md:justify-start text-white text-3xl font-normal">
          <button
            onClick={() => router.push(`/user/${user}/EditUser`)}
            className={`${p2.className} md:mr-5 px-3 py-2 bg-[#21FF7E] text-black rounded-md text-base hover:bg-[#29a35c] hover:text-white cursor-pointer`}
          >
            <p>My Dashboard</p>
          </button>
        </div>
        <hr className="h-px mt-5 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    );
  }

  return (
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
  );
}

export default SignUp;
