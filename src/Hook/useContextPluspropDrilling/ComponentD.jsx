/*
const ComponentD = (props) => {
  return (
<div className='m-4 p-5 border-2 border-black bg-slate-200'>
    <div>ComponentD</div>
<p className="text-xl font-semibold text-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300">
  {`BYE HANDSOME ${props.name || "Guest"}`}
</p>
    </div>  
  )
}
 
export default ComponentD
*/ 
import React, { useContext } from 'react';
import { UserContext } from './ComponentA';

const ComponentD = () => {
  const User = useContext(UserContext);
  return (
    <>
      <div className='m-4 p-5 border-2 border-black '>
        <div >ComponentD</div>
        <h2 className='m-2 p-2 hover:shadow-lg hover:scale-105 transition-all duration-300 text-xl font-semibold text-gray-800'>
          {`Hello goodMorning ${User}  !`}</h2>
      </div>
    </>
  )
}

export default ComponentD;