import Formulario from "./Formulario";
import useCotizador from "../hooks/useCotizador";
import Cotizacion from "./Cotizacion";

const AppSeguro = () => {
  const { resultado } = useCotizador();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de Seguros de Autos
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 shadow-lg p-10 mx-auto">
        <Formulario />
        {resultado && <Cotizacion />}
      </main>
    </>
  );
};

export default AppSeguro;
