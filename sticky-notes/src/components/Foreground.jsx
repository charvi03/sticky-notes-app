import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../redux/features/taskSlice"
import Card from "./Card";
import { IoIosAdd } from "react-icons/io";

function Foreground() {
  const ref = useRef(null);
  const dispatch = useDispatch(); 
  const tasks = useSelector((state) => state.tasks.tasks); 
  const [showInput, setShowInput] = useState(false);
  const [newTask, setNewTask] = useState(""); 
  

  const handleAddTask = () => {
    if (newTask) {
      dispatch(addTask(newTask));  
     
      setNewTask("");
      setShowInput(false); 
    }
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id)); 
  };

  return (
    <div ref={ref} className="fixed z-[3] w-full flex gap-10 flex-wrap p-8">
      <div className="w-full text-zinc-400 font-semibold text-3xl flex py-2 px-8 justify-between h-[8em]">
        <h2>Sticky notes </h2>
        <span
          className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center"
          onClick={() => setShowInput(!showInput)}
        >
          <IoIosAdd color="white" cursor="pointer" size="1em" />
        </span>
      </div>

      {showInput && (
        <div className="w-[20em] px-8 py-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task..."
            className="bg-zinc-700 text-white px-4 py-2 rounded-lg border-2 w-full"
          />
          <button
            className="bg-zinc-800 text-white px-4 py-2 rounded-lg mt-2"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
      )}

      {tasks?.map((task) => (
        <Card key={task.id} data={task} reference={ref} onRemove={() => handleRemoveTask(task.id)} />
      ))}
    </div>
  );
}

export default Foreground;
