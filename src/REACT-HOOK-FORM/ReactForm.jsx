import { useForm } from "react-hook-form";

const ReactForm = () => {
  const { register, handleSubmit } = useForm();

  const onsubmit = (data) => {
    console.log("test", data);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.from(form.elements).indexOf(e.target);
      form.elements[index + 1]?.focus();
    }
  };

  return (
    <div className="m-20 p-20 min-h-screen flex justify-center items-start bg-gray-100">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center mb-4">React Hook Form</h2>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">First Name</label>
          <input
            {...register("firstName")}
            onKeyDown={handleEnter}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter first name"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Middle Name</label>
          <input
            {...register("MiddleName")}
            onKeyDown={handleEnter}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter middle name"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Last Name</label>
          <input
            {...register("LastName")}
            onKeyDown={handleEnter}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter last name"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactForm;
