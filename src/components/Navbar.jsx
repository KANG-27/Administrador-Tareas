import { useEffect, useState } from "react";

function Navbar({ setSelected }) {
  const [previousElement, setPreviousElement] = useState(null);

  // Usar useEffect para aplicar la clase 'selected' al cargar la página
  useEffect(() => {
    const allElement = document.getElementById("all");
    if (allElement) {
      allElement.classList.add("selected");
      setPreviousElement(allElement);
    }
  }, []); // Se ejecuta solo una vez al montar el componente

  const selectItem = (event) => {
    const currentElement = document.getElementById(event.currentTarget.id);
    if (previousElement) {
      previousElement.classList.remove("selected");
    }

    currentElement.classList.add("selected");
    setPreviousElement(currentElement);

    console.log(currentElement);

    if (currentElement.id === "newCard") {
      console.log("entro");
      document
        .getElementById(event.currentTarget.id)
        .classList.remove("selected");
      document.getElementById("all").classList.add("selected");
      setPreviousElement(document.getElementById("all"));
    }

    setSelected(event.currentTarget.id);
  };

  return (
    <section className="bg-[#95AB9B] w-[30%] h-[100vh] pt-10">
      <h1 className="text-white text-3xl font-semibold">
        Administrador de tareas
      </h1>
      <nav className="mt-10 pl-10">
        <ul className="flex flex-col gap-5">
          <li
            className="flex item-center cursor-pointer"
            id="newCard"
            onClick={(e) => selectItem(e)}
          >
            <div className="bg-primary-color w-[25px] h-[25px] rounded-full mr-5">
              +
            </div>
            <p className="text-xl">Añadir tarjeta</p>
          </li>
          <li
            className="flex items-center cursor-pointer rounded-sm"
            id="search"
            onClick={(e) => selectItem(e)}
          >
            <span className="material-symbols-outlined mr-5">search</span>
            <p className="text-xl">Buscar</p>
          </li>
          <li
            className="flex items-center cursor-pointer selected"
            id="all"
            onClick={(e) => selectItem(e)}
          >
            <span className="material-symbols-outlined mr-5">
              calendar_month
            </span>
            <p className="text-xl">Todo</p>
          </li>
          <li
            className="flex items-center cursor-pointer"
            id="today"
            onClick={(e) => selectItem(e)}
          >
            <span className="material-symbols-outlined mr-5">today</span>
            <p className="text-xl">Hoy</p>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
