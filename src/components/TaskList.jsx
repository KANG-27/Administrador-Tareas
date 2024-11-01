function TaskList({ tasks, updateTask, toogleComplete, deleteTask }) {
  let previousMonth = null; // Cambiar de useState a una variable

  return (
    <div className="w-full mt-20 ml-16">
      <h1 className="text-start text-4xl">Próximo</h1>
      {tasks.length === 0 ? (
        <div className="h-full flex justify-center items-center">
          <p>No se encontraron tarjetas...</p>
        </div>
      ) : (
        tasks.map((task, index) => {
          // Comprobar si la fecha es válida
          if (!task.date) {
            return null; // Ignorar tareas sin fecha
          }

          const currentMonth = task.date.toLocaleDateString("es-CO", {
            month: "long",
          });

          // Verificar si el mes actual es diferente del mes anterior
          const renderMonth = currentMonth !== previousMonth;

          // Actualizar el mes anterior para la próxima iteración
          previousMonth = currentMonth;

          return (
            <div key={index}>
              {/* Renderizar el nombre del mes solo si ha cambiado */}
              {renderMonth && (
                <div className="flex w-full items-center mt-10">
                  <span className="material-symbols-outlined text-gray-600">
                    date_range
                  </span>
                  <p className="text-primary-color mx-2">{currentMonth}</p>
                  <hr className="border-primary-color border w-[80%]" />
                </div>
              )}

              <div className="flex items-center justify-between w-[85%]">
                <div className="ml-10 my-5">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-6 w-6 text-green-600 border-gray-300 rounded mr-2 cursor-pointer"
                      checked={task.complete}
                      onChange={() => toogleComplete(index)}
                    />
                    <p className="text-3xl">{task.title}</p>
                  </div>
                  <div className="flex gap-5 items-center mt-2 ml-10">
                    <p className="text-primary-color flex items-center">
                      {task.time}{" "}
                      <span className="material-symbols-outlined">timer</span>
                    </p>
                    <p className="text-primary-color flex items-center">
                      {task.date.toLocaleDateString("es-CO")}
                      <span className="material-symbols-outlined">event</span>
                    </p>
                  </div>
                </div>
                <div>
                  <span
                    className="material-symbols-outlined mr-2 text-primary-color cursor-pointer"
                    onClick={() => updateTask(index)}
                  >
                    edit
                  </span>
                  <span
                    className="material-symbols-outlined text-primary-color cursor-pointer"
                    onClick={() => deleteTask(index)}
                  >
                    delete
                  </span>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default TaskList;
