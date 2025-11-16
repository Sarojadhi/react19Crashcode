import React from "react";
import { useForm } from "../Hook/useContextPluspropDrilling/FormContext";

const Step1 = ({ setStep }) => {
  const { form, updateForm } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setStep(2);         // move to next step
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Step 1: Basic Info</h2>

      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => updateForm("name", e.target.value)}
        className="border p-2 w-full mb-3"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => updateForm("email", e.target.value)}
        className="border p-2 w-full mb-3"
        required
      />

      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Next →
      </button>
    </form>
  );
};

export default Step1;
