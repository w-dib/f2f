"use client";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

function EditUser() {
  return (
    <div className="flex flex-col text-white">
      <div className="p-5 text-2xl text-[#21FF7E] text-left bg-black">
        <p>My Profile</p>
      </div>
      <div className="p-5">
        <p>
          Your co-founder matching profile is almost live! The more detailed and
          accurate your responses are to the questions provided, the higher the
          likelihood of finding a co-founder who shares your vision and values.
          We suggest being honest and providing as much information as possible
          to ensure a successful matching process.
        </p>
      </div>

      {/* <div className="mx-auto">
        <img src={user.image} />
      </div> */}
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
  );
}

export default EditUser;
