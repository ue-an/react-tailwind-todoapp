import { Todo } from './components/Todo';
import { Form } from './components/Form';
import { FilterButton } from './components/FilterButtons';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import React from 'react';
import SunIco from './assets/light-mode.png';
import MoonIco from './assets/dark-mode.png';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
}
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  /* ADD & TOGGLE FUNC*/
  const [tasks, setTasks] = useState(props.tasks);

  const addTask = name => {
    const newTask = {
      id: `todo-${nanoid()}`,
      name,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  const toggleTaskCompleted = id => {
    //checks browser synchronization
    // const stats = tasks.map((task) => {
    //   return (task["completed"]);
    // })
    // console.log(stats);
    const updatedTasks = tasks.map((task) => {
      //if this task has the same ID as the edited task
      if(id === task.id){
        //use object spread to make a new object
        //whose 'completed' prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  /* DELETE FUNC */
  const deleteTask = id => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  /* EDIT FUNC */
  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const [filter, setFilter] = useState('All');
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
    key={name}
    name={name} 
    isPressed={name === filter}
    setFilter={setFilter}
    />
  ));

  //displays data in browser>inspect>console
  // console.log(props.tasks);
  const taskList = tasks?.filter(FILTER_MAP[filter])
  .map((task) => (
  <Todo
  id={task.id}
  name={task.name}
  completed={task.completed}
  key={task.id}
  toggleTaskCompleted={toggleTaskCompleted}
  deleteTask={deleteTask}
  editTask={editTask}
  />));

  let taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  let headingText = `${taskList.length} ${taskNoun} remaining`;

  const [isDark, setIsDark] = useState(false)

  const handleSetIsDark = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
    else {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }

  return (
    <div className=' duration-300 transition-all dark:bg-primary bg-white flex flex-col h-screen'>
      <div className=' dark:border-white border-black border-2 drop-shadow-lg rounded-xl flex flex-col gap-3 p-9 w-full max-w-[800px] m-auto text-lg'>
        <button onClick={handleSetIsDark} className=' dark:text-white flex justify-start'>
          { isDark ? <img className=' w-9' src={SunIco} /> : <img className='w-6' src={MoonIco} />}
        </button>
        <h1 className=' dark:text-accent flex justify-center font-bold text-3xl'>ReactToDo</h1>
      
        <Form
        addTask={addTask}
         />
      
        <div className='flex gap-3'>
          {filterList}
        </div>
        <h2 className='dark:text-gray-300' id='list-heading'>{ headingText }</h2>
        <ul role="list"
        className=''
        >
        {taskList}
        </ul>
      </div>
    </div>
  );
  
}

export default App;
