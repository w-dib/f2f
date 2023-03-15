import { useState } from "react";

export function useMultiStepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      return currentStepIndex;
    }
  };

  const previous = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    } else {
      return currentStepIndex;
    }
  };

  const goTo = (index) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
    previous,
    goTo,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
}
