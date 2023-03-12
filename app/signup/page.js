/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { db, auth } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Press_Start_2P } from "next/font/google";
import Link from "next/link";
import { toast } from "react-hot-toast";

const p2 = Press_Start_2P({ weight: "400", subsets: ["latin"] });

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        firstName,
        lastName,
        linkedIn
      ).then((userCredential) => {
        console.log("user created:", userCredential);
      });
    } catch (error) {
      console.log("error:", error);
      toast.error("Password must be at least 6 characters");
    }
  };

  return (
    <div className="mt-32 md:mt-64 bg-black shadow-md">
      <div className="flex flex-col p-5 mx-auto text-white max-w-lg">
        {/* Logo */}
        <Link href="/">
          <img className="h-7 w-auto" src="/img/f2f.svg" />
        </Link>
        <p className="mt-3 font-bold text-base">
          Sign up to access F2F&apos;s Co-Founder Matching Program
        </p>
        {/* Form */}
        <div className="mt-3">
          <form onSubmit={handleSignUp}>
            {/* Input for First Name info */}
            <div className="flex justify-between">
              <div>
                <input
                  className="leading-none w-40 md:w-full text-gray-50 p-3  focus:border-blue-700 my-1 border-0 bg-gray-800 rounded"
                  type="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              {/* label for last name info */}
              <div>
                <input
                  className="leading-none w-40 md:w-full text-gray-50 p-3 my-1 border-0 bg-gray-800 rounded"
                  type="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
            </div>
            {/* Input for Email */}
            <input
              className="leading-none w-full text-gray-50 p-3 my-1 border-0 bg-gray-800 rounded"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div>
              <input
                className="leading-none text-gray-50 p-3 w-full my-1 border-0 bg-gray-800 rounded"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <p className="text-xs text-gray-500 mb-1">
                Password must be at least 6 characters
              </p>
            </div>
            <div>
              <input
                className="leading-none text-gray-50 p-3 w-full my-1 border-0 bg-gray-800 rounded mb-3"
                type="linkedIn"
                id="linkedIn"
                placeholder="LinkedIn Profile URL"
                value={linkedIn}
                onChange={(event) => setLinkedIn(event.target.value)}
              />
            </div>

            <button
              className={`${p2.className} md:mr-5 px-3 py-2 bg-[#21FF7E] text-black rounded-md text-base hover:bg-[#29a35c] hover:text-white cursor-pointer`}
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-2 text-gray-500 text-xs">
            Already have an account?{" "}
            <Link href="/" className="text-white hover:text-[#21FF7E]">
              Click here to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
