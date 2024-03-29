import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel({
      edge: false,

      // an array of dependencies that esbuild should treat
      // as external when bundling functions
      external: [],

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app
      split: false,
    }),
    csrf: {
      checkOrigin: false,
    },
  },
  preprocess: preprocess({}),
};

export default config;
