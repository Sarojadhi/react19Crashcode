import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// ROUTER PAGES
import HOME from "./ReactRouter/HOME.jsx";
import ABOUT from "./ReactRouter/ABOUT.jsx";
import CONTACT from "./ReactRouter/CONTACT.jsx";
import Service from "./ReactRouter/Service.jsx";
import Login from "./ReactRouter/Login.jsx";
import Unauthorized from "./ReactRouter/Unauthorized.jsx";
import AdminPage from "./ReactRouter/AdminPage.jsx";
import Navbar from "./ReactRouter/NavBar.jsx";

// PROTECTED ROUTE
import ProtectedRoute from "./Component/ProtectedRoute.jsx";

// COMPONENTS
import Dashboard from "./Component/Dashboard.jsx";
import Email from "./Component/Email.jsx";
import Phone from "./Component/Phone.jsx";
import Welcome from "./Component/Welcome.jsx";
import ThemeToggles from "./Component/ThemeToggles.jsx";
import Card from "./Component/Card.jsx";

// PROPS DEMO
import UserCard from "./props/UserCard.jsx";
import UserList from "./props/UserList.jsx";
import StudentProps from "./props/studentProps.jsx";
import data from "./Data/Data.json";

// STATE COMPONENTS
import IncrementDecrement from "./State/IncrementDecrement.jsx";
import HideText from "./State/HideText.jsx";
import InputBox from "./State/InputBox.jsx";
import TodoList from "./State/TodoList.jsx";
import AnimationDemo from "./State/AnimationDemo.jsx";
import DownArrow from "./State/DownArrow.jsx";

// USE EFFECT
import LogMessage from "./Hook/UseEffect/LogMessage.jsx";
import TitleCount from "./Hook/UseEffect/TitleCount.jsx";
import FetchAPI from "./Hook/UseEffect/FetchAPI.jsx";
import Timer from "./Hook/UseEffect/Timer.jsx";
import ThemeToggle from "./Hook/UseEffect/Theme-Toggle.jsx";

// USE CONTEXT DEMO
import ComponentA from "./Hook/useContextPluspropDrilling/ComponentA.jsx";
import { FormProvider } from "./Hook/useContextPluspropDrilling/FormContext.jsx";

// MULTI-STEP FORM
import Step1 from "./Component/Step1.jsx";
import Step2 from "./Component/Step2.jsx";
import Step3 from "./Component/Step3.jsx";

// USE REDUCER DEMO
import SimpleWay from "./Hook/useReducer/SimpleWay.jsx";

// REDUX COMPONENTS
import AllProduct from "./Redux/AllProduct.jsx";

const App = () => {
  const [step, setStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user"))?.isAuthenticated || false
  );

  // LOGIN PAGE SHOW ONLY IF NOT LOGGED IN
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <>
      {/* NAVBAR + CART */}
      <Navbar />

      {/* PRODUCTS */}
      <div className="pt-20 px-6 bg-gray-100 min-h-screen">
        <AllProduct /> {/* Renders all products once */}
      </div>
      {/* ROUTES */}
      <div className="pt-20 px-6">
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<HOME />} />
          <Route path="/about" element={<ABOUT />} />
          <Route path="/services" element={<Service />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* CONTACT NESTED ROUTES */}
          <Route path="/contact" element={<CONTACT />}>
            <Route index element={<Email />} />
            <Route path="phone" element={<Phone />} />
          </Route>

          {/* PROTECTED ROUTES */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      {/* EXTRA COMPONENTS */}
      <Welcome />
      <ThemeToggles />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Theme Switcher (useContext)</h1>
        <Card />
        <div className="m-4 p-5 border-2 bg-slate-100">
          <UserCard user={data.user?.[0]} />
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

      {/* MULTI-STEP FORM */}
      <FormProvider>
        <div className="max-w-md mx-auto mt-10 p-4">
          {step === 1 && <Step1 setStep={setStep} />}
          {step === 2 && <Step2 setStep={setStep} />}
          {step === 3 && <Step3 setStep={setStep} />}
        </div>
      </FormProvider>

      <SimpleWay />
    </>
  );
};

export default App;
