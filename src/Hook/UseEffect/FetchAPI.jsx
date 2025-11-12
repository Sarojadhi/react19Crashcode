import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("Error while fetching:", error));
  }, []);

  return (
    <div className="m-4 p-5 flex flex-col items-center bg-gray-200 py-8">
      <h2 className="text-xl font-bold mb-4">Fetch API Data</h2>
      <p className="mb-4">
        Data fetched from https://jsonplaceholder.typicode.com/users
      </p>

      <ul className="w-full max-w-md">
        {users.map((user) => (
          <li
            key={user.id}
            className="m-2 p-4 border-b border-gray-500 rounded shadow-lg bg-white"
          >
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAPI;
