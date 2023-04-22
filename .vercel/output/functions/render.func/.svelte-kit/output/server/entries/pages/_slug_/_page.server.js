import { e as error } from '../../../chunks/index2.js';

async function load({ params, fetch }) {
  const url = `/api/posts/title/${params.slug}`;
  const response = await fetch(url);
  const post = await response.json();
  if (response.ok) {
    return {
      post,
    };
  }

  throw error(500, "Couldn't fetch the post.");
}

export { load };
