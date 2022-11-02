import Spinner from "./Spinner";
import useCotizadort from "../hooks/useCotizador";
import { useCallback } from "react";

const Cotizacion = () => {
  const { cargando, setCargando, datos, resultado } = useCotizadort();
  const plan = useCallback(datos.plan, [resultado]);
  const año = useCallback(datos.año, [resultado]);
  const marca = useCallback(datos.marca, [resultado]);

  setTimeout(() => {
    setCargando(false);
  }, 2000);

  return (
    <div className=" text-white rounded-2xl mt-3 p-6 bg-gradient-to-r from-slate-600 to-slate-500">
      {cargando === true ? (
        <Spinner />
      ) : (
        <>
          <h2 className=" text-center text-4xl uppercase font-black">
            Resumen:
          </h2>
          <p className="text-center">
            Plan: <span className="font-black">{plan}</span>
          </p>
          <p className="text-center">
            Marca:<span className="font-black">{marca}</span>
          </p>
          <p className="text-center">
            Año del Auto: <span className="font-black">{año}</span>
          </p>
          <p className="text-center text-2xl">
            Año del Auto: <span className="font-black">{resultado}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Cotizacion;
