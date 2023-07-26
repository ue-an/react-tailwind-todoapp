import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (name !== "" ) {
      props.addTask(name);
      setName("");  
    }
    
  }

 return (
  <form className=" dark:text-gray-400 gap-3 flex flex-col items-center" onSubmit={handleSubmit}>
        <h2 className='label-wrapper'>
          <label htmlFor='new-todo-input' className='label__lg'>
            What needs to be done?
          </label>
        </h2>
        <input
        id='new-todo-input'
        className=' dark:border-accent border-slate-600 border-2 w-full'
        name='text'
        autoComplete='off'
        type="text"
        value={name}
        onChange={handleChange}
        />
        <button type='submit' className=' duration-300 transition-all hover:-translate-y-1 dark:hover:text-white dark:hover:bg-accent dark:bg-gray-800 dark:text-white hover:border-accent hover:text-accent border-primary border-2 text-xl py-1 drop-shadow-sm rounded-full w-full'>
          Add
        </button>
      </form>
 );
}
export { Form };