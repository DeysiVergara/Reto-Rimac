export type Plan = {
  name: string;
  price: number;
  description: string[];
  age: number;
};

export async function fetchPlans(): Promise<Plan[]> {
  const res = await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/plans.json"
  );
  if (!res.ok) throw new Error("Error al obtener planes");
  const data = await res.json();
  return data.list;
}
