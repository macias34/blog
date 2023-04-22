import { c as create_ssr_component } from '../../chunks/index.js';

const Header_svelte_svelte_type_style_lang = '';

const _layout_svelte_svelte_type_style_lang = '';

/* src/routes/+layout.svelte generated by Svelte v3.55.0 */

const css = {
	code: "@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700;800&display=swap\");@import url(\"https://rsms.me/inter/inter.css\");*{margin:0;padding:0;box-sizing:border-box;font-family:\"Inter\", sans-serif}html{font-size:10px}.blog__wrapper{width:100%;overflow:hidden}.blog__wrapper a{color:wheat;text-decoration:none}",
	map: null
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);

	return `${($$result.head += '<!-- HEAD_svelte-1w3cryo_START -->' + `<script src="${"https://kit.fontawesome.com/fe735f6a5b.js"}" crossorigin="${"anonymous"}"></script>` + '<!-- HEAD_svelte-1w3cryo_END -->', "")}

<div class="${"blog__wrapper"}">${slots.default ? slots.default({}) : ``}
</div>`;
});

export { Layout as default };