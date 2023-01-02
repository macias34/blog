import { error } from "@sveltejs/kit";

export async function load({ fetch }) {
  const url = `/api/images`;
  const response = await fetch(url);
  const imgs = await response.json();

  if (response.ok) {
    return {
      imgs,
    };
  }

  throw error(500, "Couldn't fetch posts");
}
