import { useEffect, useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saveTask = localStorage.getItem("taskData");
    if (saveTask) {
      setTasks(JSON.parse(saveTask));
    }
  }, []);

  //   actualizar lista
  const updateTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("taskData", JSON.stringify(updatedTasks));
  };

  //   completar tarea
  const toogleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, complete: !task.complete } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("taskData", JSON.stringify(updatedTasks));
  };
  //   eliminar tarea
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    localStorage.setItem("taskData", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);

  };
  return { tasks, updateTask, toogleComplete, deleteTask };
}
