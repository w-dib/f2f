"use client";
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { useAuth } from "../AuthContext";
import FormWrapper from "./FormWrapper";

function BasicInfo() {
  const [userInfo, setUserInfo] = useState(null);
  const { user, loading } = useAuth();

  useEffect(() => {
    async function fetchUserInfo() {
      if (user) {
        const docRef = doc(db, "users", user);
        const docSnap = await getDoc(docRef);
        const userInfo = docSnap.data();
        setUserInfo(userInfo);
      }
    }
    fetchUserInfo();
  }, [user]);

  return (
    <FormWrapper title="Basic Info" childrenSteps="1">
      <div className="flex flex-col space-y-4">
        <div className="mx-auto relative mt-3">
          <img
            className="rounded-full h-16 w-16 md:h-20 md:w-20"
            src={
              userInfo?.image ||
              `https://ui-avatars.com/api/?name=${userInfo?.name}`
            }
            alt="profile picture"
          />
          <AiFillCamera className="text-gray-300 rounded-full bg-red-500 absolute cursor-pointer p-1 bottom-0 right-0 h-6 w-6 md:h-7 md:w-7" />
        </div>
        <div className="flex flex-col ">
          <label autoFocus className="text-sm font-bold">
            LinkedIn URL<span className="text-red-500">*</span>
            <p className="font-normal">URL should start with https://</p>
          </label>
          <input
            required
            type="text"
            placeholder="https://www.linkedin.com/in/..."
            className="focus:border-2  bg-gray-800 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">
            Location<span className="text-red-500">*</span>
            <p className="font-normal">Where do you live?</p>
          </label>{" "}
          <input
            required
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
            rows="3"
            placeholder="Example: I am a software engineer working on a project for the past 6 months, and I am looking for a co-founder to help me build it."
            className="
            block p-2.5 w-full text-sm border-gray-300 focus:border-2  bg-gray-800 rounded-md"
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-sm font-bold">
            Acomplishments<span className="text-red-500">*</span>
          </label>{" "}
          <textarea
            rows="3"
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
            rows="3"
            placeholder="Example: Google, DevOps (2018-present)."
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
              Are you experienced in: Engineering, Product, or Data Science?
            </p>
          </label>{" "}
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-center space-x-2">
              <input
                required
                type="radio"
                name="project"
                value="yes"
                className="focus:border-2  bg-gray-800 rounded-md p-2"
              />
              <p>Yes</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <input
                required
                type="radio"
                name="project"
                value="no"
                className="focus:border-2  bg-gray-800 rounded-md p-2"
              />
              <p>No</p>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default BasicInfo;
