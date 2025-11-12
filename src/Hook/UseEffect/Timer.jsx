import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [time, settime] = useState(0)
  useEffect(() => {
  
  const interval = setInterval(()=>{
    settime(oldTime =>oldTime+1)
  }, 1000)
  return () => clearInterval(interval)
  }, [])

  return (
    <>
    <div className=' m-4 p-5 flex flex-col items-center bg-gray-200 py-8'>
      <h1 className='text-2xl font-bold' >Timer</h1>
    <div className='text-2xl font-bold'>Time : {time} s</div>
    </div>
    </>
  )
}

export default Timer