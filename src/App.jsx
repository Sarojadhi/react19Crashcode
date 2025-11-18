import Welcome from './Component/Welcome'
import UserCard from './props/UserCard'
import UserList from './props/UserList'
import data from './Data/Data.json'
import StudentProps from './props/studentProps'
import IncrementDecrement from './State/IncrementDecrement'
import HideText from './State/HideText'
import InputBox from './State/InputBox'
import TodoList from './State/TodoList'
import AnimationDemo from './State/AnimationDemo'
import DownArrow from './State/DownArrow'
import LogMessage from './Hook/UseEffect/LogMessage'
import TitleCount from './Hook/UseEffect/TitleCount'
import FetchAPI from './Hook/UseEffect/FetchAPI'
import Timer from './Hook/UseEffect/Timer'
import ThemeToggle from './Hook/UseEffect/Theme-Toggle'
import ComponentA from './Hook/useContextPluspropDrilling/ComponentA'
import Card from './Component/Card'
import ThemeToggles from './Component/ThemeToggles'
import { useState } from 'react'
// Step components (from components folder)
import Step1 from "./Component/Step1";
import Step2 from "./Component/Step2";
import Step3 from "./Component/Step3";
import { FormProvider } from "./Hook/useContextPluspropDrilling/FormContext";
import SimpleWay from './Hook/useReducer/SimpleWay'
import Saroj from './Hook/UseEffect/Saroj'


const App = () => {
  const [step, setStep] = useState(1);
  return (
    <>
        <Saroj />

    {<Welcome />}
     <ThemeToggles />
      <div className="p-6">
      <h1 className="text-3xl font-bold">Theme Switcher (useContext + Tailwind)</h1>
     <Card />      
    <div className='m-4 p-5 border-2 border-black bg-slate-100'>
    { <UserCard user={data.user?.[0]} /> }
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
    </> 
  )
}

export default App;