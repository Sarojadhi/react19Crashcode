import  { useState } from 'react'

const InputBox = () => {
     const [name, setname] = useState("");
  return ( 
    <div className='m-4 p-5  text-center  border-amber-1000 border-2 rounded-lg bg-gray-200 flex flex-col items-center'>
        <input
         type="text"
          placeholder= "Enter your name"
          value = {name}
           onChange={(e)=>setname(e.target.value)}
           className='m-2 p-2 border border-gray-300 rounded ' />
        <h2>👋 Hii! 😄  {name || "User"} Handsome</h2>
    </div>
  )
}

export default InputBox