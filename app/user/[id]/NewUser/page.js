/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@/components/AuthContext";
import LoadingCircle from "@/components/LoadingCircle";
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { Press_Start_2P } from "next/font/google";
import BasicInfo from "@/components/NewUser/BasicInfo";
import { useMultiStepForm } from "@/components/NewUser/useMultiStepForm";
import MoreInfo from "@/components/NewUser/MoreInfo";

const p2 = Press_Start_2P({ weight: "400", subsets: ["latin"] });

function NewUser() {
  const { user, loading } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const {
    step,
    steps,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    next,
    previous,
  } = useMultiStepForm([
    <BasicInfo key="basic-info" />,
    <MoreInfo key="more-info" />,
  ]);
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
      <div className="flex flex-col text-white scroll-y-auto">
        <div className="p-5 text-2xl text-[#21FF7E] text-left bg-black">
          <div className="md:px-5 max-w-xl mx-auto">
            <p>My Profile</p>
          </div>
        </div>
        <div className="flex flex-col max-w-xl mx-auto">
          <div className="p-5">
            <p>
              Your co-founder matching profile is almost live! The more detailed
              and accurate your responses are to the questions provided, the
              higher the likelihood of finding a co-founder who shares your
              vision and values.
            </p>
          </div>

          <div className="mx-auto md:mb-3 relative">
            <img
              className="rounded-full h-16 w-16 md:h-20 md:w-20"
              src={
                userInfo.image ||
                `https://ui-avatars.com/api/?name=${userInfo.name}`
              }
              alt="profile picture"
            />
            <AiFillCamera className="text-gray-300 rounded-full bg-red-500 absolute cursor-pointer p-1 bottom-0 right-0 h-5 w-5 md:h-6 md:w-6" />
          </div>
          <div className="flex flex-col text-white scroll-y-auto p-5 md:border md:border-gray-50 md:rounded-md mb-5">
            {step}
            <div className="flex justify-around w-full mt-5">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={previous}
                  className={`${p2.className} w-32 px-3 py-2 border-2 border-[#21FF7E] text-white rounded-md text-sm cursor-pointer hover:bg-[#29a35c] hover:border-[#29a35c]`}
                >
                  Back{" "}
                </button>
              )}
              <button
                type="button"
                onClick={next}
                className={`${p2.className} w-32 px-3 py-2 bg-[#21FF7E] text-black rounded-md text-sm hover:bg-[#29a35c] hover:text-white cursor-pointer`}
              >
                {isLastStep ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUser;
