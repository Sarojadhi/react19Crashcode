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
import ComponentA from './Hook/useContextc+ propDrilling/ComponentA'
import Card from './Component/Card'
import ThemeToggles from './Component/ThemeToggles'
const App = () => {
  return (
    <>
    {<Welcome />}
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
     <ComponentA />
     <div className="p-6">
      <h1 className="text-3xl font-bold">Theme Switcher (useContext + Tailwind)</h1>

      <ThemeToggles />
      <Card />
    </div> 
    </> 
  )
}

export default App;