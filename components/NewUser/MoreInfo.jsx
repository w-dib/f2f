"use client";
import FormWrapper from "./FormWrapper";
function MoreInfo() {
  return (
    <FormWrapper title="More Info" childrenSteps="2">
      <div>
        {" "}
        <label>Street</label>
        <input autoFocus required type="text" />
        <label>City</label>
        <input required type="text" />
        <label>State</label>
        <input required type="text" />
        <label>Zip</label>
        <input required type="text" />
      </div>
    </FormWrapper>
  );
}

export default MoreInfo;
