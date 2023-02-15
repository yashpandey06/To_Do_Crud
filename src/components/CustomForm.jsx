import { useState } from 'react';

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <form
      className="todo flex justify-center"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input p-3 text-xl mx-2 border-4 border-black"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
       
      </div>
      <button
        className="btn border-4 px-4 mx-2"
        aria-label="Add Task"
        type="submit"
        >
        <PlusIcon />
       
      </button>
    </form>
  )
}
export default CustomForm