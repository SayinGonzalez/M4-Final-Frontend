import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "./userSchema";
import UserForm from "./UserForm";

const UserCreate = () => {
  const [step, setStep] = useState(0);
  const methods = useForm({
    resolver: yupResolver(userSchema),
    mode: "onBlur"
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const onSubmit = (data) => {
    console.log("✅ Datos finales del usuario:", data);
  };

  return (
    <FormProvider {...methods}>
      <UserForm
        step={step}
        onSubmit={onSubmit}
        onNext={nextStep}
        onBack={prevStep}
        isLastStep={step === 3}
      />
    </FormProvider>
  );
};

export default UserCreate;
