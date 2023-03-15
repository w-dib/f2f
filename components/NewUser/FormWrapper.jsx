import { useMultiStepForm } from "@/components/NewUser/useMultiStepForm";

export function FormWrapper({ title, children, childrenSteps }) {
  const { currentStepIndex, steps } = useMultiStepForm(children);

  return (
    <div>
      <div className="flex justify-between">
        <span className="text-2xl text-[#21FF7E] text-left mb-2">{title}</span>
        <span className="text-2xl">{childrenSteps} / 4</span>
      </div>
      <hr />
      {/* Render the current step */}
      {children}
    </div>
  );
}

export default FormWrapper;
