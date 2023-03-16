"use client";
import FormWrapper from "./FormWrapper";
function CofounderPreference() {
  return (
    <FormWrapper title="Cofounder Preference" childrenSteps="3">
      <div className="flex flex-col space-y-4">
        {/* Idea or no idea */}
        <div className="flex flex-col mt-5">
          <label className="text-sm font-bold">
            Are you looking for a co-founder who already has a specific idea, or
            are you open to exploring new ideas together?
            <span className="text-red-500">*</span>
          </label>{" "}
          <div className="flex flex-col">
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="I want to see co-founders who have a specific idea"
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>I want to see co-founders who have a specific idea</p>
            </div>
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="I want to see co-founders who are not set on a specific idea
                "
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>
                I want to see co-founders who are not set on a specific idea
              </p>
            </div>
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="No preference."
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>No preference.</p>
            </div>
          </div>
        </div>
        {/* Technical or non-technical */}
        <div className="flex flex-col mt-5">
          <label className="text-sm font-bold">
            Do you prefer technical or non-technical profiles?
            <span className="text-red-500">*</span>
          </label>{" "}
          <div className="flex flex-col">
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="Technical"
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>Technical</p>
            </div>
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="Non-Technical"
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>Non-Technical </p>
            </div>
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="No preference."
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>No preference.</p>
            </div>
          </div>
        </div>
        {/* Location Preference */}
        <div className="flex flex-col mt-5">
          <label className="text-sm font-bold">
            Where does your ideal co-founder live?{" "}
            <span className="text-red-500">*</span>
          </label>{" "}
          <div className="flex flex-col">
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="My region"
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>My region</p>
            </div>
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="My Country"
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>My Country</p>
            </div>
            <div className="flex flex-row justify-start">
              <input
                required
                type="radio"
                name="project"
                value="No preference."
                className="focus:border-2  bg-gray-800 rounded-md p-2 mr-3"
              />
              <p>No preference.</p>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default CofounderPreference;
