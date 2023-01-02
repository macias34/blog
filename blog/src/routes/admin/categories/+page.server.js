import { error } from "@sveltejs/kit";

export async function load({ fetch }) {
  const url = `/api/categories`;
  const response = await fetch(url);
  const categories = await response.json();

  if (response.ok) {
    return {
      categories,
    };
  }

  throw error(500, "Couldn't fetch categories");
}
