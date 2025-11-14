import { useState } from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  const [name, setname] = useState("Saroj")
  return (
    <>
<div className='m-4 p-5 border-2 border-black bg-slate-200'>
    <div>ComponentA</div>
    <p>{`Hello ${name}`}</p>
    <ComponentB name={name} />
    </div>
    </> 
  )
}

export default ComponentA