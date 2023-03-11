import { data } from "./recipes";

export async function seedRecipes() {
  await fetch("https://restapi.fr/api/cookchef_rachid", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
}
