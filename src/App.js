import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    // Cargar tareas del localStorage al iniciar el componente
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Guardar las tareas en localStorage cada vez que cambien
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
        <TaskList tasks={tasks} setTasks={setTasks} setSelected={setSelected}/>
      }
    </div>
  );
}

export default App;
