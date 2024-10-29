import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    const savedTasks = localStorage.getItem("taskData");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); // Parsea el JSON a un objeto
    }
  }, []);

  const updateTasks = (newTask) => {
    const updateTask = [...tasks, newTask];
    setTasks(updateTask);
    localStorage.setItem("taskData", JSON.stringify(updateTask));
  };


  return (
    <div className="App flex">
      <Navbar setSelected={setSelected} selected={selected} />
      {selected === "newCard" && (
        <TaskForm onSaveTask={updateTasks} setSelected={setSelected} />
      )}
      {selected === "all" &&
        <TaskList tasks={tasks} setSelected={setSelected} setTasks={setTasks}/>
      }
    </div>
  );
}

export default App;
