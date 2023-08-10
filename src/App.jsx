import { NoTask } from './NoTask'
import { Task } from './Task'
import { Header } from './components/Header'
import { TasksList } from './components/TasksList'
import './global.css'

export function App() {
  return (
    <>
      <div >
        <Header />
        <Task />
        <TasksList />
        <NoTask />
        
      </div>
      
    </>
  )
}

