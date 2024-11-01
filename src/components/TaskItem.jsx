function TaskItem({ tasks, updateTask, deleteTask, toogleComplete }) {
  const today = new Date();
  return (
    <div className="w-full mt-20 ml-16">
      <h1 className="text-start text-4xl">
        Hoy{" "}
        <span className="text-base text-primary-color">
          {today.toLocaleDateString("es-CO")}
        </span>
      </h1>
      {tasks.map((task, index) =>
          task.date.toLocaleDateString("es-CO", { month: "long" }) ===
            today.toLocaleDateString("es-CO", { month: "long" }) && (
            <>
              <hr className="border-primary-color border w-[90%] mt-5" />

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
            </>
          )
      )}
    </div>
  );
}
export default TaskItem;
