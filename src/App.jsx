import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl'

function App() {

  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = taskName => {
    if (!taskItems.find(user => user.name == taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = task => {
    setTaskItems(
      taskItems.map(t => (t.name == task.name) ? { ...t, done: !t.done } : t)
    );
  }

  const cleanTasks = () => {
    setTaskItems(taskItems.filter(task => !task.done));
    setShowCompleted(false)
  }

  useEffect(() => {
    const data = localStorage.getItem('tasks');
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems]);


  return (
    <div className="App">
      <h4>Application web maded by Saul Medina</h4>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <TaskCreator createTask={createNewTask} />
      <TaskTable tasks={taskItems} toggleTask={toggleTask} />

      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={checked => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      />

      {
        showCompleted && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )
      }

    </div>
  )
}

export default App
