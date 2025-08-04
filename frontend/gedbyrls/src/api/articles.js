import { STRAPI_API_URL } from "./config";

export async function getArticles() {
  const response = await fetch(`${STRAPI_API_URL}/articles?populate=*`);
  if (!response.ok) throw new Error("Erreur lors du chargement des articles");
  const data = await response.json();
  return data.data;
}
