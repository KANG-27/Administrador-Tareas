import { useState } from "react";

function TaskForm({ setSelected, updateTask }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    complete: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(formData);
    setFormData({ title: "", date: "", time: "", complete: false });
    setSelected("all");
  };

  return (
    <div className="absolute w-full h-[100vh] flex items-center justify-center bg-three-color bg-opacity-100">
      <div className="bg-white w-[50%] rounded-lg p-10">
        <div className="flex justify-between">
          <h1 className="text-4xl text-primary-color">Añadir nueva tarjeta</h1>
          <p
            className="text-primary-color text-4xl cursor-pointer"
            onClick={() => {
              setSelected("all");
            }}
          >
            x
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-5 mx-10 mt-16"
        >
          <div className="flex justify-between">
            <h2 className="text-right text-3xl min-w-min">Titulo:</h2>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              className="text-left text-2xl w-[80%] border-primary-color border-b-2"
            />
          </div>
          {/* <hr className="border-primary-color border-1" /> */}

          <div className="flex justify-between">
            <h2 className="text-right text-3xl min-w-min">Fecha:</h2>
            <input
              onChange={handleChange}
              type="date"
              name="date"
              className="text-left text-2xl  w-[80%] border-primary-color border-b-2 "
            />
          </div>
          <div className="flex justify-between">
            <h2 className="text-right text-3xl min-w-min">Hora:</h2>
            <input
              onChange={handleChange}
              type="time"
              name="time"
              className="text-left text-2xl  w-[80%] border-primary-color border-b-2"
            />
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-primary-color text-white py-2 w-[50%] rounded-lg">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TaskForm;
