"use client";
import FormWrapper from "./FormWrapper";

function BasicInfo() {
  return (
    <FormWrapper title="Basic Info" childrenSteps="1">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col mt-5 ">
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

{
  /* Gender & Age */
}
{
  /* <div className="flex justify-between">
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
              <input required
                type="number"
                placeholder="25"
                className="focus:border-2  bg-gray-800 rounded-md p-2"
              />
            </div>
          </div> */
}
