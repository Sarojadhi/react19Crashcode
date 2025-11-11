import Welcome from './Component/Welcome'
import UserCard from './props/UserCard'
import UserList from './props/UserList'
import data from './Data/Data.json'
import StudentProps from './props/studentProps'
import IncrementDecrement from './State/IncrementDecrement'

const App = () => {
  return (
    <>
    {<Welcome />}
    { <UserCard user={data.user?.[0]} /> }
     <UserList />
     <StudentProps name="Saroj Adhikari" age={22} isStudent={true} />
     <IncrementDecrement />
    </>
  )
}

export default App;