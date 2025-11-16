import React from "react";
import { useForm } from "../Hook/useContextPluspropDrilling/FormContext";

const Step2 = ({ setStep }) => {
  const { form, updateForm } = useForm();

  const handleNext = (e) => {
    e.preventDefault();
    setStep(3); // go to next step
  };

  return (
    <form onSubmit={handleNext} className="p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Step 2: Address Info</h2>

      <input
        type="text"
        placeholder="City"
        value={form.city}
        onChange={(e) => updateForm("city", e.target.value)}
        className="border p-2 w-full mb-3"
        required
      />

      <input
        type="text"
        placeholder="Address"
        value={form.address}
        onChange={(e) => updateForm("address", e.target.value)}
        className="border p-2 w-full mb-3"
        required
      />

      <div className="flex justify-between mt-2">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="px-4 py-2 bg-gray-400 text-white rounded"
        >
          ← Back
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Next →
        </button>
      </div>
    </form>
  );
};

export default Step2;
