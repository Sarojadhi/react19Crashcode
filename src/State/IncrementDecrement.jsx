
import { useState } from 'react'
const IncrementDecrement = () => {
            const [count, setcount] = useState(0)
  return (
    <div className="m-4 p-5 flex flex-col items-center bg-gray-200">
        <h2 className="text-2xl font-bold mb-6">UseState Counter Component</h2>
        <h3 className="text-xl font-semibold mb-4">Count: {count}</h3>
        <div className="flex space-x-4">
        <button onClick = {()=>setcount(count+1)}className="bg-blue-500 px-3 py-1 text-white rounded ">Increment</button>
        <button onClick = {()=>setcount(0)}className="bg-blue-500 px-3 py-1 text-white rounded">Reset</button>
        <button onClick = {()=>setcount(count-1)}className="bg-blue-500 px-3 py-1 text-white rounded ">Decrement</button>
        </div>
    </div>
  )
}

export default IncrementDecrement;