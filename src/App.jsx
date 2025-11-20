import { Routes, Route } from "react-router-dom";
import Welcome from "./Component/Welcome";
import UserCard from "./props/UserCard";
import UserList from "./props/UserList";
import data from "./Data/Data.json";
import StudentProps from "./props/studentProps";
import IncrementDecrement from "./State/IncrementDecrement";
import HideText from "./State/HideText";
import InputBox from "./State/InputBox";
import TodoList from "./State/TodoList";
import AnimationDemo from "./State/AnimationDemo";
import DownArrow from "./State/DownArrow";
import LogMessage from "./Hook/UseEffect/LogMessage";
import TitleCount from "./Hook/UseEffect/TitleCount";
import FetchAPI from "./Hook/UseEffect/FetchAPI";
import Timer from "./Hook/UseEffect/Timer";
import ThemeToggle from "./Hook/UseEffect/Theme-Toggle";
import ComponentA from "./Hook/useContextPluspropDrilling/ComponentA";
import Card from "./Component/Card";
import ThemeToggles from "./Component/ThemeToggles";
import { useState } from "react";
// Step components (from components folder)
import Step1 from "./Component/Step1";
import Step2 from "./Component/Step2";
import Step3 from "./Component/Step3";
import { FormProvider } from "./Hook/useContextPluspropDrilling/FormContext";
import SimpleWay from "./Hook/useReducer/SimpleWay";
// import Saroj from './Hook/UseEffect/Saroj'
// import HeaderWithReactRouter from "./HeaderWithReactRouter";
import ABOUT from "./ReactRouter/ABOUT.jsx";
import CONTACT from "./ReactRouter/CONTACT.jsx";
import HOME from "./ReactRouter/HOME.jsx";
import Navbar from "./ReactRouter/NavBar.jsx";
import Email from "./Component/Email.jsx";
import Phone from "./Component/Phone.jsx";
import Service from "./ReactRouter/Service.jsx";

const App = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      {/*<Saroj />*/}

      <Navbar />

      <div className="pt-20 px-6">
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/about" element={<ABOUT />} />
          <Route path="/services" element={<Service />} />

          <Route path="/contact" element={<CONTACT />}>
            <Route index element={<Email />} />
            <Route path="phone" element={<Phone />} />
          </Route>
          <Route
            path="*"
            element={
              <h2 className="text-center text-red-600 font-serif font-bold text-4xl">
                404 <br /> Page Not Found
              </h2>
            }
          />
        </Routes>
      </div>

      {<Welcome />}
      <ThemeToggles />
      <div className="p-6">
        <h1 className="text-3xl font-bold">
          Theme Switcher (useContext + Tailwind)
        </h1>
        <Card />
        <div className="m-4 p-5 border-2 border-black bg-slate-100">
          {<UserCard user={data.user?.[0]} />}
          <UserList />
          <StudentProps name="Saroj Adhikari" age={22} isStudent={true} />
          <IncrementDecrement />
          <HideText />
          <InputBox />
          <TodoList />
          <AnimationDemo />
          <DownArrow />
          <LogMessage />
          <TitleCount />
          <FetchAPI />
          <Timer />
          <ThemeToggle />
          <ComponentA />
        </div>
      </div>
      <FormProvider>
        <div className="max-w-md mx-auto mt-10 p-4">
          {step === 1 && <Step1 setStep={setStep} />}
          {step === 2 && <Step2 setStep={setStep} />}
          {step === 3 && <Step3 setStep={setStep} />}
        </div>
      </FormProvider>
      <SimpleWay />
      <ABOUT />
      <CONTACT />
      <HOME />
    </>
  );
};

export default App;
