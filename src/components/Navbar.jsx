function Navbar({ setSelected }) {
  return (
    <section className="bg-[#95AB9B] w-[30%] h-[100vh] pt-10 pl-10">
      <h1 className="text-white text-3xl font-semibold">
        Administrador de tareas
      </h1>
      <nav className="mt-10">
        <ul className="flex flex-col gap-5">
          <li
            className="flex item-center"
            onClick={() => setSelected("newCard")}
          >
            <div className="bg-primary-color w-[25px] h-[25px] rounded-full mr-5">
              +
            </div>
            <p className="text-xl">Añadir tarjeta</p>
          </li>
          <li
            className="flex items-center"
            onClick={() => setSelected("search")}
          >
            <span className="material-symbols-outlined mr-5">search</span>
            <p className="text-xl">Buscar</p>
          </li>
          <li className="flex items-center" onClick={() => setSelected("all")}>
            <span className="material-symbols-outlined mr-5">calendar_month</span>
            <p className="text-xl">Todo</p>
          </li>
          <li
            className="flex items-center"
            onClick={() => setSelected("today")}
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
