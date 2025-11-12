import React, { useState, useEffect } from "react";

const TitleCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <p>Check the browser tab title!</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increase
      </button>
      <p>Current Count: {count}</p>
    </div>
  );
};

export default TitleCount;
