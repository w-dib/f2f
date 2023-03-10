//This is a Next.js page component that presents a list of rules that users have to agree
//to before using the platform. The component checks whether the current user has accepted
//the rules before and redirects them to the user profile page if they have. Otherwise,
//the user is presented with the list of rules and checkboxes to accept them. Once the
//user has accepted the rules, they are redirected to their user profile page.
"use client";
import { useSession } from "next-auth/react";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Press_Start_2P } from "next/font/google";
import LoadingCircle from "@/components/LoadingCircle";
import { useAuth } from "@/components/AuthContext";

const p2 = Press_Start_2P({ weight: "400", subsets: ["latin"] });

function Rules() {
  const { data: session } = useSession();
  const router = useRouter();
  const { user, loading } = useAuth();
  const [existingUser, setExistingUser] = useState(false);
  const [isChecked, setIsChecked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const checkExistingUser = async () => {
    const docRef = doc(db, "users", user);
    const docSnap = await getDoc(docRef);
    if (docSnap.data().rulesAccepted === true) {
      setExistingUser(true);
    } else {
      setExistingUser(false);
    }
  };

  useEffect(() => {
    if (user) {
      checkExistingUser();
    }
  }, [user]);

  //// If the user accepted the rules before
  // they are redirected to their user profile page
  useEffect(() => {
    if (existingUser) {
      router.push(`/user/${user}/`);
    }
  }, [existingUser]);

  const addNewUser = async () => {
    const docRef = doc(db, "users", user);
    await updateDoc(docRef, { rulesAccepted: true });
    router.push(`/user/${user}/NewUser/`);
  };

  const handleCheckboxChange = (index) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
  };

  const isAllChecked = isChecked.every((checked) => checked);

  if (loading) {
    return <LoadingCircle />;
  }

  return (
    <div className="mt-32 md:mt-64 bg-black shadow-md">
      <div className=" text-white mx-auto mt-3 max-w-md flex flex-col items-left space-y-4 p-5">
        <p className="text-xl text-[#21FF7E]">
          Finding the right co-founder is a serious endeavour. Please confirm
          that you have read and agree to the following rules:
        </p>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked[0]}
            onChange={() => handleCheckboxChange(0)}
            className="h-7 w-7"
          />

          <span className="ml-10 max-w-xs">
            I confirm that I am searching for a co-founder. (This means someone
            with at least 10% equity.)
          </span>
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked[1]}
            onChange={() => handleCheckboxChange(1)}
            className="h-7 w-7"
          />
          <span className="ml-10 max-w-xs">
            I confirm that I will not use this platform to sell services or
            promote my product.
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked[2]}
            onChange={() => handleCheckboxChange(2)}
            className="h-7 w-7"
          />
          <span className="ml-10 max-w-xs">
            I confirm that I will not use this platform to try to hire
            non-founder employees for my company.
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked[3]}
            onChange={() => handleCheckboxChange(3)}
            className="h-7 w-7"
          />
          <span className="ml-10 max-w-xs">
            I confirm that I will treat everyone I meet on the platform with
            respect, and will not act in a way that is rude or offensive.
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked[4]}
            onChange={() => handleCheckboxChange(4)}
            className="h-7 w-7"
          />
          <span className="ml-10 max-w-xs">
            I confirm that I will not use this platform for any purpose other
            than to find a co-founder.
          </span>
        </label>
        <button
          disabled={!isAllChecked}
          className={`${p2.className} md:mr-5 px-3 py-2 bg-[#21FF7E] text-black rounded-md text-base hover:bg-[#29a35c] hover:text-white cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed`}
          onClick={() => addNewUser()}
        >
          I agree
        </button>
      </div>
    </div>
  );
}
export default Rules;
