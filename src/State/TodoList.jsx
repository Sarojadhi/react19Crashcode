/*
  This is a simple todo list application using react useState hook with out framer motion and css styling

import { useState } from "react";
const TodoList = () => {
  const [input, setinput] = useState("");
  const [list, setlist] = useState([]);
  const add = () => {
    setlist([...list, input]);
    setinput("");
  };
  return (
    <>
      <div className="m-4 p-5 flex flex-col items-center bg-gray-200 py-8">
        <div>TodoList</div>
        <input
          type="text"
          value={input}
          placeholder="Enter Task"
          onChange={(e) => setinput(e.target.value)}
        />
        <button onClick={add}>Add</button>
        <ul>
          {list.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default TodoList;

*/
// This is a simple todo list application using react useState hook with out framer motion and css styling

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // ➕ Add task
  const addTask = () => {
    if (input.trim()) {
      const newTask = { text: input, done: false, id: Date.now() };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  // ⌨️ Add task with Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  // ❌ Delete with confirmation
  const deleteTask = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this task: "${taskToDelete.text}"?`
    );
    if (confirmDelete) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  // ✅ Mark Done / Undo
  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  // 🧹 Clear input
  const clearInput = () => setInput("");

  return (
    <div className="m-4 p-5 flex flex-col items-center bg-gray-200 py-8">
      <div className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter task"
          className="border p-2 rounded w-64"
        />
        {input && (
          <button
            onClick={clearInput}
            className="bg-gray-300 text-black px-2 py-1 rounded"
          >
            ✖
          </button>
        )}
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>

      <ul className="mt-5 space-y-3 w-[350px]">
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between gap-2 border-b pb-2"
            >
              <span
                className={`flex-1 break-words ${
                  task.done ? "line-through text-gray-500" : "text-black"
                }`}
              >
                {task.text}
              </span>

              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => toggleDone(task.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded text-sm"
                >
                  {task.done ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

export default TodoList;
