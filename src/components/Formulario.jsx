import { MARCAS, ALLYEARS, PLANES } from "../constants/index.js";
import { Fragment } from "react";

import useCotizador from "../hooks/useCotizador.jsx";
import Error from "./Error.jsx";

const Formulario = () => {
  const years = ALLYEARS();
  const {
    cotizadorSeguro,
    handleChange,
    datos,
    error,
    setError,
    setResultado,
    setCargando,
  } = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      setResultado();
      setError("todos los campos son obligatorios");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    setCargando(true);
    cotizadorSeguro();
  };
  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5 ">
          <label className="block">Marca</label>

          <select
            name="marca"
            id="marca"
            className="w-full p-3 bg-white border-gray-200 border"
            onChange={(e) => handleChange(e)}
            value={datos.marca}
          >
            <option value="">Seleccionar Marca</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.marca}>
                {marca.marca}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5  ">
          <label className="block">Año</label>

          <select
            name="año"
            id="año"
            className="w-full p-3 bg-white border-gray-200 border"
            onChange={(e) => handleChange(e)}
            value={datos.año}
          >
            <option value="">Seleccionar Año</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5  ">
          <label className="block">Plan</label>
          <div className={"flex gap-3 items-center"}>
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.plan}</label>
                <input
                  type="radio"
                  name="plan"
                  id={plan.plan}
                  onChange={(e) => handleChange(e)}
                  value={plan.plan}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          value={"Calcular Presupuesto"}
          className=" font-black uppercase rounded-lg cursor-pointer p-2.5 w-full  bg-indigo-800 text-center transition-all hover:bg-indigo-900 hover:rounded-xl text-white "
        />
      </form>
    </>
  );
};

export default Formulario;
