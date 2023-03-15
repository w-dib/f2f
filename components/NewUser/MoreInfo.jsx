"use client";
import { useState } from "react";
import FormWrapper from "./FormWrapper";

const options = [
  { id: "engineering", label: "Engineering" },
  { id: "product", label: "Product" },
  { id: "legal", label: "Legal" },
  { id: "design", label: "Design" },
  { id: "operations", label: "Operations" },
  { id: "Sales", label: "Sales" },
  { id: "marketing", label: "Marketing" },
];

function MoreInfo() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleOptionSelect(optionId) {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  }

  return (
    <FormWrapper title="More About You" childrenSteps="2">
      <div className="flex flex-col space-y-4">
        {/* Gender & Age box */}
        <div className="flex justify-between mt-5">
          <div className="flex flex-col ">
            {/* Gender box */}
            <div className="flex flex-col ">
              <label className="text-sm font-bold">Gender</label>
              <select className="focus:border-2  bg-gray-800 rounded-md p-2 focus:text-white md:w-60">
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          {/* Age box */}
          <div className="flex flex-col ">
            <label className="text-sm font-bold">
              Age<span className="text-red-500">*</span>
            </label>{" "}
            <input
              required
              type="number"
              placeholder="25"
              className="focus:border-2  bg-gray-800 rounded-md p-2"
            />
          </div>
        </div>

        {/* Existing Idea radio dial */}
        <div className="flex flex-col">
          <label className="text-sm font-bold">
            Do you already have a startup, MVP or idea?
            <span className="text-red-500">*</span>
          </label>{" "}
          <div className="flex flex-col">
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="Yes, I've got an idea and I want a co-founder who can help
                me bring it to life."
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>
                Yes, I&apos;ve got an idea and I want a co-founder who can help
                me bring it to life.
              </p>
            </div>
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="I have some ideas in mind, but I'm also open to exploring
                new ideas."
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>
                I have some ideas in mind, but I&apos;m also open to exploring
                new ideas.
              </p>
            </div>
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="No, I'm open to helping a co-founder with their existing
                idea as a team."
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>
                No, I&apos;m open to helping a co-founder with their existing
                idea as a team.
              </p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="flex flex-col ">
          <label className="text-sm font-bold">
            What are some ideas you&apos;re interested in pursuing?
          </label>{" "}
          <textarea
            rows="2"
            placeholder="Example: DeFi platforms, Open Banking, e-Commerce, etc."
            className="
            block p-2.5 w-full text-sm border-gray-300 focus:border-2  bg-gray-800 rounded-md"
          />
        </div>

        {/* Start date */}

        <div className="flex flex-col">
          <label className="text-sm font-bold">
            When do you want to start working on a startup full-time?
            <span className="text-red-500">*</span>
          </label>{" "}
          <div className="flex flex-col">
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="I'm already working full-time on my startup"
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>I&apos;m already working full-time on my startup</p>
            </div>
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="I'm planning to go full-time in the next year"
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>I&apos;m planning to go full-time in the next year</p>
            </div>
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="I'm ready to go full-time as soon as I meet the right co-founder
                "
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>
                I&apos;m ready to go full-time as soon as I meet the right
                co-founder
              </p>
            </div>
          </div>
        </div>

        {/* Role */}

        <div className="flex flex-col space-y-4">
          <label className="font-medium" htmlFor="startup-areas-select">
            Which areas of a startup are you willing to take responsibility
            for?*
          </label>
          <div
            id="startup-areas-select"
            className="relative flex flex-wrap gap-2"
          >
            {options.map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  id={option.id}
                  type="checkbox"
                  value={option.id}
                  checked={selectedOptions.includes(option.id)}
                  onChange={() => handleOptionSelect(option.id)}
                  className="w-4 h-4"
                />
                <label
                  htmlFor={option.id}
                  className="ml-2 text-sm text-white md:w-20 w-36 cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col ">
          <label className="text-sm font-bold">
            What are your expectations for splitting equity?
          </label>{" "}
          <textarea
            rows="2"
            placeholder="In terms of equity, what are your expectations for both giving and receiving as a potential co-founder?"
            className="
            block p-2.5 w-full text-sm  border-gray-300 focus:border-2  bg-gray-800 rounded-md"
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-sm font-bold">
            Anything else you would like to add about yourself?
          </label>{" "}
          <textarea
            rows="2"
            placeholder="Feel free to add any information that you feel was not covered above."
            className="
            block p-2.5 w-full text-sm  border-gray-300 focus:border-2  bg-gray-800 rounded-md"
          />
        </div>
      </div>
    </FormWrapper>
  );
}

export default MoreInfo;
