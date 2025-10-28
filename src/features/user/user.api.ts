export type User = {
  name: string;
  lastName: string;
  birthDay: string;
};

export async function fetchUser(): Promise<User> {
  const res = await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/user.json"
  );
  if (!res.ok) throw new Error("No se pudo obtener el usuario");
  return res.json();
}
