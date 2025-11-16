//import { useReducer } from "react"
// const emptyData ={ name:"",
//   email:"", 
//   password:"",
//    city:"",
//     address:""
  //  }  
 // const reducer = (data , action)=>{ 
  // console.log(data,action) 
  // return { ...data, [action.type]:action.val } 
  // } const SimpleWay = () =>
  //  { const[state, dispatch] = useReducer(reducer, emptyData) 
  // console.log(state) 
  // return ( 
  // <> 
  // <div>example of useReducer</div>
  //  <label htmlFor="name">Name:</label>
  //  <input 
  // type="text"
  //  onChange={(e)=>dispatch({type: "name", val:e.target.value})}
  //  placeholder="Name" />
  // <br /> 
  // <label htmlFor="email">Email:</label>
  //  <input type="email" onChange={(e)=>dispatch({type: "Email", val:e.target.value})}
  //  placeholder="Email" />
  // <br /> <label htmlFor="password">Password:</label> 
  // <input type="password" onChange={(e)=>dispatch({type:"password",val:e.target.value})}
  //  placeholder="Password" />
  // <br />
  //  <label htmlFor="city">City:</label>
  //  <input type="text" onChange={(e)=>dispatch({type: "city", val:e.target.value})} 
  // placeholder="City" />
  // <br />
  //  <label htmlFor="address">Address:</label>
  //  <input type="text" onChange={(e)=>dispatch({type:"address",val:e.target.value})} 
  // placeholder="Address" />
  // <br />
  //  <pre> {JSON.stringify( state, (key, value) => { 
  // if (key === "password" && typeof value === "string")
  //  { return "*".repeat(value.length); } return value; }, 2 )}
  //  </pre>
  //  <button>
  // Submit</button>
  //  </> 
  // ) 
  // } 
  // export default SimpleWay




import { useReducer } from "react";

const emptyData = {
  name: "",
  email: "",
  password: "",
  city: "",
  address: ""
};

const reducer = (data, action) => {
  return {
    ...data,
    [action.type]: action.val
  };
};

const SimpleWay = () => {
  const [state, dispatch] = useReducer(reducer, emptyData);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!\n" + JSON.stringify(state, null, 2));
  };

  // Handle Enter key to move to next input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent page reload
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1]?.focus(); // move to next input
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        useReducer Form Example
      </h1>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => dispatch({ type: "name", val: e.target.value })}
            onKeyDown={handleKeyDown}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => dispatch({ type: "email", val: e.target.value })}
            onKeyDown={handleKeyDown}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="password" className="block font-semibold mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) => dispatch({ type: "password", val: e.target.value })}
            onKeyDown={handleKeyDown}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="city" className="block font-semibold mb-1">
            City:
          </label>
          <input
            type="text"
            id="city"
            placeholder="City"
            value={state.city}
            onChange={(e) => dispatch({ type: "city", val: e.target.value })}
            onKeyDown={handleKeyDown}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="address" className="block font-semibold mb-1">
            Address:
          </label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            value={state.address}
            onChange={(e) => dispatch({ type: "address", val: e.target.value })}
            onKeyDown={handleKeyDown}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <pre className="bg-gray-100 p-3 rounded mt-6 text-gray-800 overflow-x-auto">
        {JSON.stringify(
          state,
          (key, value) => {
            if (key === "password" && typeof value === "string") {
              return "*".repeat(value.length);
            }
            return value;
          },
          2
        )}
      </pre>

      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default SimpleWay;
