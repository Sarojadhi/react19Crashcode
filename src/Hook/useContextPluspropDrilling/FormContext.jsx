import React, { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    address: "",
    password: "",
  });

  const updateForm = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <FormContext.Provider value={{ form, updateForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
