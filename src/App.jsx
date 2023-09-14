import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTask) => [...prevTask, task]);
  };

  const checkHandler = (id) => {
    setTasks((prevTask) => {
      console.log(id);
      return prevTask.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    });
  };

  const deleteHandler = (id) => {
    setTasks((prevTask) => {
      console.log(id);
      return prevTask.filter((task) => task.id !== id);
    });
  };

  return (
    <Card>
      <h1 className="title">TODO list</h1>
      <Form addTask={addTask} />
      <TaskList
        tasks={tasks}
        checkHandler={checkHandler}
        deleteHandler={deleteHandler}
      />
    </Card>
  );
}

export default App;
