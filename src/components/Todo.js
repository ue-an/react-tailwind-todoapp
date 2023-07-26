import React, { useState } from "react";

const Todo = props => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const handleChange = e => {
    setNewName(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (newName !== "") {  
      props.editTask(props.id, newName);
      setNewName('');
      setEditing(false);
    }
    setEditing(false);
  }

  const editingTemplate = (
    <form className=" dark:text-gray-300 border-gray-700 border-2 p-3 rounded-md  " onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 ">
        <label className=" text-gray-500">
          {props.name}
        </label>
        <label htmlFor={props.id}>
          New task name:
        </label>
        <input
        id={props.id}
        type="text"
        value={newName}
        onChange={handleChange}
        />
      </div>
      <div className=" py-2 flex gap-3 text-sm">
        <button
        type="button"
        className=" dark:hover:opacity-50 dark:bg-gray-700 hover:opacity-50 dark:text-white border-gray-700 border-2 rounded-md py-1 px-2  "
        onClick={() => {setEditing(false)}}
        >
          Cancel
        </button>
        <button type='submit' className="dark:hover:bg-accent dark:bg-gray-700 dark:text-white hover:text-accent hover:border-accent border-gray-700 border-2 rounded-md py-1 px-2  ">
          Save
        </button>
      </div>
    </form>
  );
  
  const viewTemplate = (
    <div className=" dark:text-gray-300 grid py-2">
    <div className="grid-cols-1">
      <div className=" flex gap-2">
          <div className=" p-2 flex flex-col justify-start">
            <input
              id={props.id}
              type="checkbox"
              defaultChecked={props.completed}
              onChange={() => props.toggleTaskCompleted(props.id)}
            />
          </div>
          <label className="" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
    </div>
    <div className=" pl-9 grid-cols-1">
      <div className=" text-sm flex gap-2">
        <button
        type="button"
        className=" dark:hover:bg-accent dark:bg-gray-600 dark:text-white hover:border-accent hover:text-accent border-primary border-2 rounded-md py-1 px-2"
        onClick={() => setEditing(true)}
        >
          Edit 
        </button>
        <button
          type="button"
          className=" dark:hover:opacity-50 dark:text-white dark:bg-red-700 hover:opacity-50 text-red-800 border-red-700 border-2 rounded-md py-1 px-2"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  );

 return (
  <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
 );
}

export {Todo};