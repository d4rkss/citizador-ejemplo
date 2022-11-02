export const generarID = () => {
  const random = Math.random().toString(36).suctr;
  const fecha = Date.now().toString(36);
  return fecha + random;
};

export const formatearFecha = (fecha) => {
  const fechanueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return fechanueva.toLocaleDateString("es-ES", opciones);
};

export const formatearCantidad = (cantidad) => {
  return cantidad.toLocaleString("es-PE", {
    style: "currency",
    currency: "PEN",
  });
};

export const obtenerAños = (cantidad) => {
  const years = [];
  const YEARMAX = new Date().getFullYear();
  for (let i = YEARMAX; i > YEARMAX - cantidad; i--) {
    years.push(i);
  }
  return years;
};

export const diferenciaYear = (year) => new Date().getFullYear() - year;

export const calcularMarca = (marca) => {
  let incremento;
  switch (marca) {
    case "Europeo":
      incremento = 1.3;
      break;
    case "Chino":
      incremento = 1.05;
      break;
    case "Americano":
      incremento = 1.15;
      break;
    default:
      break;
  }
  return incremento;
};

export const calcularPlan = (plan) => {
  let precioPlan;
  switch (plan) {
    case "Deluxe":
      precioPlan = 1.5;
      break;
    case "Basico":
      precioPlan = 1.2;
    default:
      break;
  }
  return precioPlan;
};
