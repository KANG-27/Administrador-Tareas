import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [selected, setSelected] = useState("all");

  const { tasks, updateTask, toogleComplete, deleteTask } = useTasks();

  return (
    <div className="App flex">
      <Navbar setSelected={setSelected} selected={selected} />
      {selected === "newCard" && (
        <TaskForm updateTask={updateTask} setSelected={setSelected} />
      )}
      {selected === "all" && (
        <TaskList
          tasks={tasks}
          setSelected={setSelected}
          updateTask={updateTask}
          toogleComplete={toogleComplete}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
}

export default App;
