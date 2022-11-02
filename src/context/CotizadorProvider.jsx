import { createContext, useState } from "react";
import {
  calcularMarca,
  calcularPlan,
  diferenciaYear,
  formatearCantidad,
} from "../helpers";
const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const cotizadorSeguro = () => {
    let resultado = 2000;

    const diferencia = diferenciaYear(datos.año);
    resultado = resultado - diferencia * resultado * (3 / 100);
    resultado = resultado * calcularMarca(datos.marca);
    resultado = resultado * calcularPlan(datos.plan);
    resultado = formatearCantidad(resultado);
    setResultado(resultado);
  };

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const [datos, setDatos] = useState({
    marca: "",
    año: "",
    plan: "",
  });

  const [resultado, setResultado] = useState();
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);
  return (
    <CotizadorContext.Provider
      value={{
        cotizadorSeguro,
        handleChange,
        datos,
        setError,
        error,
        resultado,
        setDatos,
        setResultado,
        setCargando,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;
