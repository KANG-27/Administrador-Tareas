import { useEffect, useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saveTask = localStorage.getItem("taskData");
    if (saveTask) {
      const parsedTasks = JSON.parse(saveTask).map((task) => ({
        ...task,
        date: task.date ? new Date(task.date) : null, // Convertir a Date al cargar
      }));
      orderTask(parsedTasks);
    }
  }, []);

  //   actualizar lista
  const updateTask = (newTask) => {
    const formattedTask = {
      ...newTask,
      date: newTask.date ? new Date(`${newTask.date}T00:00:00`) : null,
    };
    const updatedTasks = [...tasks, formattedTask];

    orderTask(updatedTasks);
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

  const orderTask = (element) => {
    const orderTask = element.sort((a, b) => (a.date || 0) - (b.date || 0));
    setTasks(orderTask);
  };
  return { tasks, updateTask, toogleComplete, deleteTask };
}
