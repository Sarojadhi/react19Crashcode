/* import { useState } from 'react'
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

*/

import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();
const ComponentA = () => {
  const [User, setUser] = useState("saroj");
  return (
    <>
      <div className="m-4 p-5 border-2 border-black bg-slate-200">
        <div>ComponentA</div>
        <p>{`Hello ${User}`} </p>
        <UserContext.Provider value={User}>
          <ComponentB user={User} />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default ComponentA;
