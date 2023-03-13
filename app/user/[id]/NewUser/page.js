/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@/components/AuthContext";
import Loading from "@/components/loading";
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
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
    return <Loading />;
  }

  if (userInfo) {
    return (
      <div className="flex flex-col text-white">
        <div className="p-5 text-2xl text-[#21FF7E] text-left bg-black">
          <div className="md:px-5 max-w-lg mx-auto">
            <p>My Profile</p>
          </div>
        </div>
        <div className="flex flex-col max-w-lg mx-auto">
          <div className="p-5">
            <p>
              Your co-founder matching profile is almost live! The more detailed
              and accurate your responses are to the questions provided, the
              higher the likelihood of finding a co-founder who shares your
              vision and values. We suggest being honest and providing as much
              information as possible to ensure a successful matching process.
            </p>
          </div>

          <div className="mx-auto relative">
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
          <div className="p-5 divide-y divide-[#21FF7E]">
            <p className="text-2xl text-[#21FF7E] text-left mb-2">Basic info</p>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col  mt-10">
                <label className="text-sm font-bold">
                  LinkedIn URL<span className="text-red-500">*</span>
                  <p className="font-normal">URL should start with https://</p>
                </label>
                <input
                  type="text"
                  placeholder="https://www.linkedin.com/in/..."
                  className="focus:border-2 text-gray-500 bg-gray-800 rounded-md p-2"
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
                  className="focus:border-2 text-gray-500 bg-gray-800 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col ">
                {/* add text area below */}
                <label className="text-sm font-bold">
                  About Me<span className="text-red-500">*</span>
                  <p className="font-normal">Tell us about yourself</p>
                </label>{" "}
                <textarea
                  rows="4"
                  placeholder="I am a..."
                  className="
                block p-2.5 w-full text-sm  border-gray-300 focus:border-2 text-gray-500 bg-gray-800 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUser;
