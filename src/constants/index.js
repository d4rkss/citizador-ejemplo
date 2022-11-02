export const MARCAS = [
  {
    id: 1,
    marca: "Europeo",
  },
  {
    id: 2,
    marca: "Chino",
  },
  {
    id: 3,
    marca: "Americano",
  },
];

export function ALLYEARS() {
  const years = [];
  const YEARMAX = new Date().getFullYear();
  for (let i = YEARMAX; i > YEARMAX - 20; i--) {
    years.push(i);
  }
  return years;
}

export const PLANES = [
  {
    id: 1,
    plan: "Basico",
  },
  {
    id: 2,
    plan: "Deluxe",
  },
];
