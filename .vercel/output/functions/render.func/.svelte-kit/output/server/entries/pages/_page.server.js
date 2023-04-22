import { e as error } from '../../chunks/index2.js';

async function load({ fetch }) {
  const url = `/api/posts`;
  const response = await fetch(url);
  const posts = await response.json();
  if (response.ok) {
    return {
      posts,
    };
  }

  throw error(500, "Couldn't fetch posts");
}

export { load };
