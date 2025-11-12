import React, { useState, useEffect } from 'react';

const LogMessage = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]); // runs whenever 'count' changes

  return (
    <>
      <h2>Log Message Example</h2>
      <button
        onClick={() => setcount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click Me
      </button>
      <p>You clicked {count} times</p>
    </>
  );
};

export default LogMessage;
