import { NoTask } from './NoTask';
import { CreateTask } from './CreateTask'
import { Header } from './components/Header'
import { useState } from 'react';

import './global.css'
import { TasksList } from './components/TasksList';


export function App() {

  const [tasksList, setTasksList] = useState([
    {
      id: 1,
      content: 'Ola pessoal',
      isChecked: true
    },
    {
      id: 2,
      content: 'Segundo Post',
      isChecked: false
    }
])

  function handleCreateNewTask (content) {
    event.preventDefault();

    setTasksList([...tasksList, { id: tasksList.length + 1, content: content, isChecked: false}])
  }

  function handleCheck (content) {
    const updateTasks = tasksList.map(x => {
      if (x.content === content) 
        x.isChecked = !x.isChecked
      return x;
      })

    setTasksList(updateTasks);
  }

  function handleDeleteTask(content) {
    setTasksList(state => [...state.filter(x => x.content !== content)]);
  }

  const createdTasks = tasksList.length;

  const finishedTasks = tasksList.filter(x => x.isChecked).length;

  return (
    <>
      <div >
        <Header />
        <CreateTask handleCreateNewTask={handleCreateNewTask} createdTasks={createdTasks} finishedTasks={finishedTasks} />
        {tasksList.map(task => {
          return ( 
          <TasksList
              key={task.content}
              content={task.content}
              isChecked={task.isChecked}
              handleCheck={() => handleCheck(task.content)}
              handleDeleteTask={() => handleDeleteTask(task.content)}
          />
          )
        })}
        {tasksList.length <= 0 ? <NoTask /> : null}
        
      </div>
      
    </>
  )
}

