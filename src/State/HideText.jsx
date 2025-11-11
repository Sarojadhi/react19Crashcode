import React, { useState } from 'react';

const HideText = () => {
  const [show, setShow] = useState(true);

  return (
    <div className=" text-center mt-4 mb-30 border-amber-1000 border-2 rounded-lg bg-gray-200 flex flex-col items-center">
      {show && <p>This is some text that can be hidden</p>}
      <button
        onClick={() => setShow(!show)}
        className="m-6 p-6 bg-blue-500 text-white px-3 py-1 rounded"
      >
        {show ? 'Hide' : 'Show'} Text
      </button>

      
    </div>
  );
};

export default HideText;
