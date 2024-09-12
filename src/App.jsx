import { useEffect, useState } from 'react'
import './App.css'
import { CategoryProvider } from './utilities/CategoryContext'
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = newTask => {
      setTasks([...tasks, {...newTask, id: Date.now(), completed: false}]);
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const completeTask = id => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
  }

  return (
    <>
      <CategoryProvider>
        <div className='container mx-auto p-4'>
          <h1 className='text-3xl font-bold text-center mb-6'>Task Manager</h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
        </div>
      </CategoryProvider>
    </>
  )
}

export default App
