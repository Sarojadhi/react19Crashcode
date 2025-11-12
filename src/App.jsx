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
    </>
  )
}

export default App;