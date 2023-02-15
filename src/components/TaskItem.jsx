import { useState } from 'react';



// Library imports
import { CheckIcon  } from '@heroicons/react/24/outline';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked ] = useState(task.checked);

  const handleCheckboxChange = (e) =>{
    setIsChecked(!isChecked);
    toggleTask(task.id);
  }

  return (
    <li className="flex justify-around items-center shadow-xl my-2 border-black  w-full">
      <div className="flex justify-center items-center">
        <input
          type="checkbox"
          className="mx-2"
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        
          {task.name}
          <p className=" mx-4 border-2  shadow-md rounded-md p-2">
            <CheckIcon strokeWidth={2} width={24} height={24}/>
          </p>
       
      </div>
      <div className=" flex  ml-8">
        <button
          className='btn border-2 shadow-md  rounded-md p-2'
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className="border-2 shadow-md  mx-2 rounded-md p-2"
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>

      </div>
    </li>
  )
}
export default TaskItem