import React from "react";
import { useForm } from "../Hook/useContextPluspropDrilling/FormContext";

const Step3 = ({ setStep }) => {
  const { form, updateForm } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Form Submitted!\nName: ${form.name}\nEmail: ${form.email}\nCity: ${form.city}\nAddress: ${form.address}\nPassword: ${form.password}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Step 3: Set Password</h2>

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => updateForm("password", e.target.value)}
        className="border p-2 w-full mb-3"
        required
      />

      <div className="flex justify-between mt-2">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="px-4 py-2 bg-gray-400 text-white rounded"
        >
          ← Back
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step3;
