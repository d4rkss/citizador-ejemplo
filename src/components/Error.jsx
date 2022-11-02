import useCotizador from "../hooks/useCotizador";

const Error = () => {
  const { error } = useCotizador();
  return (
    <div className=" font-black text-center bg-red-600 rounded-xl animate-bounce">
      <h2 className="uppercase p-4 text-white  ">{error}</h2>
    </div>
  );
};

export default Error;
