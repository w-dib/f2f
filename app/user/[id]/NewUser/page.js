/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@/components/AuthContext";
import LoadingCircle from "@/components/LoadingCircle";
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { Press_Start_2P } from "next/font/google";

const p2 = Press_Start_2P({ weight: "400", subsets: ["latin"] });

function NewUser() {
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
      <div className="flex flex-col text-white scroll-y-auto">
        <div className="p-5 text-2xl text-[#21FF7E] text-left bg-black">
          <div className="md:px-5 max-w-lg mx-auto">
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

          {/* Basic info */}
          <div className="p-5 divide-y divide-[#21FF7E] md:border md:border-gray-50 md:rounded-md">
            <div className="flex justify-between">
              <span className="text-2xl text-[#21FF7E] text-left mb-2">
                Basic info
              </span>
              <span className="text-2xl">1/4</span>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col  mt-10">
                <label className="text-sm font-bold">
                  LinkedIn URL<span className="text-red-500">*</span>
                  <p className="font-normal">URL should start with https://</p>
                </label>
                <input
                  type="text"
                  placeholder="https://www.linkedin.com/in/..."
                  className="focus:border-2  bg-gray-800 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-sm font-bold">
                  Location<span className="text-red-500">*</span>
                  <p className="font-normal">Where do you live?</p>
                </label>{" "}
                <input
                  type="text"
                  placeholder="Dubai, UAE"
                  className="focus:border-2  bg-gray-800 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-sm font-bold">
                  About Me<span className="text-red-500">*</span>
                  <p className="font-normal">Tell us about yourself</p>
                </label>{" "}
                <textarea
                  rows="4"
                  placeholder="Example: I am a software engineer who has been working in the FinTech industry for 3 years. I have been working on a project for the past 6 months, and I am looking for a co-founder to help me build it."
                  className="
                block p-2.5 w-full text-sm border-gray-300 focus:border-2  bg-gray-800 rounded-md"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-sm font-bold">
                  Acomplishments<span className="text-red-500">*</span>
                </label>{" "}
                <textarea
                  rows="4"
                  placeholder="Talk about things you've built, awards you've won, funds you've raised, or anything else you're professionally proud of."
                  className="
                block p-2.5 w-full text-sm  border-gray-300 focus:border-2  bg-gray-800 rounded-md"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-sm font-bold">
                  Previous Experience<span className="text-red-500">*</span>
                </label>{" "}
                <textarea
                  rows="4"
                  placeholder="Example: Google, senior software engineer (2018-present)."
                  className="
                block p-2.5 w-full text-sm  border-gray-300 focus:border-2  bg-gray-800 rounded-md"
                />
              </div>
              {/* Create a radio dial */}
              <div className="flex flex-col ">
                <label className="text-sm font-bold">
                  Are you a technical founder?
                  <span className="text-red-500">*</span>
                  <p className="font-normal">
                    Are you experienced in: Engineering, Product, or Data
                    Science?
                  </p>
                </label>{" "}
                <div className="flex flex-row space-x-4">
                  <div className="flex flex-row items-center space-x-2">
                    <input
                      type="radio"
                      name="project"
                      value="yes"
                      className="focus:border-2  bg-gray-800 rounded-md p-2"
                    />
                    <p>Yes</p>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <input
                      type="radio"
                      name="project"
                      value="no"
                      className="focus:border-2  bg-gray-800 rounded-md p-2"
                    />
                    <p>No</p>
                  </div>
                </div>
              </div>

              {/* Gender & Age */}
              {/* <div className="flex justify-between">
                <div className="flex flex-col ">
                  <label className="text-sm font-bold">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <select className="focus:border-2  bg-gray-800 rounded-md p-2 focus:text-white md:w-60">
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col ">
                  <label className="text-sm font-bold">
                    Age<span className="text-red-500">*</span>
                  </label>{" "}
                  <input
                    type="number"
                    placeholder="25"
                    className="focus:border-2  bg-gray-800 rounded-md p-2"
                  />
                </div>
              </div> */}

              <button
                className={`${p2.className} w-32 mx-auto px-3 py-2 bg-[#21FF7E] text-black rounded-md text-base hover:bg-[#29a35c] hover:text-white cursor-pointer`}
              >
                <p>Next</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUser;
