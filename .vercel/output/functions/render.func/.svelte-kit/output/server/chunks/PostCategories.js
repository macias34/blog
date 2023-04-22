import { c as create_ssr_component } from './index.js';
/* empty css                                              */
/* src/lib/Post/PostCategories.svelte generated by Svelte v3.55.0 */

const css = {
	code: ".post__categories.svelte-1r772gy.svelte-1r772gy{width:100%;margin-bottom:1vh;display:flex;flex-wrap:wrap}.post__categories.svelte-1r772gy .post__category.svelte-1r772gy{height:4vh;display:flex;justify-content:center;align-items:center;border:3px solid;background-color:#111;margin-right:1vh;margin-bottom:1vh;padding:1vh 1.5vh;border-radius:30px;color:white;font-size:1.35rem;font-weight:500;cursor:pointer}",
	map: null
};

const PostCategories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { categories = [] } = $$props;

	if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0) $$bindings.categories(categories);
	$$result.css.add(css);

	return `<div class="${"post__categories svelte-1r772gy"}">${``}
</div>`;
});

export { PostCategories as P };
