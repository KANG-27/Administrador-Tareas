function TaskList({ tasks, updateTask, toogleComplete, deleteTask }) {


  return (
    <div className="w-full mt-20 ml-16">
      <h1 className="text-start text-4xl">Proximo</h1>
      {tasks.length === 0 ? (
        <div className="h-full flex justify-center items-center">
          <p>No se encontraron tarjetas...</p>
        </div>
      ) : (
        tasks.map((task, index) => (
          <div key={index}>
            <div className="flex w-full  items-center mt-10">
              <span className="material-symbols-outlined text-gray-600">
                date_range
              </span>
              <p className="text-primary-color mx-2">{task.date}</p>
              <hr className="border-primary-color border w-[80%]" />
            </div>
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
                    {task.date}
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
        ))
      )}
    </div>
  );
}

export default TaskList;
