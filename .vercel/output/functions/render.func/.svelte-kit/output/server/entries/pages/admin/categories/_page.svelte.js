import { c as create_ssr_component, f as each, e as escape, d as createEventDispatcher, v as validate_component } from '../../../../chunks/index.js';
/* empty css                                                      *//* empty css                                                       */
const CategoriesEdit_svelte_svelte_type_style_lang = '';

const CategoryPosts_svelte_svelte_type_style_lang = '';

/* src/lib/Admin/Categories/CategoryPosts.svelte generated by Svelte v3.55.0 */

const css$4 = {
	code: "a.svelte-1sbap9l.svelte-1sbap9l{text-decoration:none}.category__posts.svelte-1sbap9l.svelte-1sbap9l{width:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;margin:1vh 0}.category__posts.svelte-1sbap9l .category__post.svelte-1sbap9l{display:flex;justify-content:center;align-items:center;background-color:#efeef0;margin:1vh;padding:0.5vh 1.5vh;border-radius:30px;color:black;text-align:center;font-size:1.2rem;cursor:pointer}",
	map: null
};

const CategoryPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { posts = [] } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	$$result.css.add(css$4);

	return `<div class="${"category__posts svelte-1sbap9l"}">${each(posts, post => {
		return `<a href="${"/" + escape(post.url, true)}" class="${"svelte-1sbap9l"}"><div class="${"category__post svelte-1sbap9l"}">${escape(post.title)}</div>
    </a>`;
	})}
</div>`;
});

const CategorySingle_svelte_svelte_type_style_lang = '';

/* src/lib/Admin/Categories/CategorySingle.svelte generated by Svelte v3.55.0 */

const css$3 = {
	code: ".categories__category.svelte-15uz2vg.svelte-15uz2vg{width:32%;background-color:#111111;padding:2vh;margin:1.5vh 0;border-radius:5px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;color:white}.categories__category.svelte-15uz2vg .category__title.svelte-15uz2vg{width:100%;font-size:2rem;font-weight:800;display:flex;justify-content:center;align-items:center}.categories__category.svelte-15uz2vg .category__footer.svelte-15uz2vg{width:100%;display:flex;justify-content:center;align-items:center}.categories__category.svelte-15uz2vg .category__footer .category__date i.svelte-15uz2vg{margin-right:0.5vh}.categories__category.svelte-15uz2vg .category__footer .category__tools.svelte-15uz2vg{display:flex}.categories__category.svelte-15uz2vg .category__footer .category__tools div.svelte-15uz2vg{height:3.5vh;width:3.5vh;border-radius:50%;display:flex;justify-content:center;align-items:center;color:white;font-size:1.3rem;cursor:pointer}.categories__category.svelte-15uz2vg .category__footer .category__tools div.category__edit.svelte-15uz2vg{background-color:royalblue;margin-right:1vh}.categories__category.svelte-15uz2vg .category__footer .category__tools div.category__delete.svelte-15uz2vg{background-color:red}",
	map: null
};

const CategorySingle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	createEventDispatcher();
	let { label = "" } = $$props;
	let { category_id = 0 } = $$props;
	let { createdAt = "" } = $$props;
	let { color = "" } = $$props;
	let { posts = [] } = $$props;

	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.category_id === void 0 && $$bindings.category_id && category_id !== void 0) $$bindings.category_id(category_id);
	if ($$props.createdAt === void 0 && $$bindings.createdAt && createdAt !== void 0) $$bindings.createdAt(createdAt);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	$$result.css.add(css$3);

	return `<div class="${"categories__category svelte-15uz2vg"}" style="${"border : 3px solid " + escape(color, true) + ";"}">
  <div class="${"category__title svelte-15uz2vg"}">${escape(label)}</div>

  ${validate_component(CategoryPosts, "CategoryPosts").$$render($$result, { posts }, {}, {})}
  <div class="${"category__footer svelte-15uz2vg"}"><div class="${"category__tools svelte-15uz2vg"}"><div class="${"category__edit svelte-15uz2vg"}"><i class="${"fa-solid fa-pen-to-square svelte-15uz2vg"}"></i></div>
      <div class="${"category__delete svelte-15uz2vg"}"><i class="${"fa-solid fa-trash-can svelte-15uz2vg"}"></i></div></div></div>
</div>`;
});

const CategoriesGrid_svelte_svelte_type_style_lang = '';

/* src/lib/Admin/Categories/CategoriesGrid.svelte generated by Svelte v3.55.0 */

const css$2 = {
	code: ".categories__display.svelte-1w5hm9i{width:90%;height:90vh;border-radius:10px;padding-bottom:5vh;-ms-overflow-style:none;scrollbar-width:none;overflow-y:scroll;display:flex;flex-wrap:wrap;justify-content:space-around;align-content:flex-start}.categories__display.svelte-1w5hm9i::-webkit-scrollbar{display:none}",
	map: null
};

const CategoriesGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	createEventDispatcher();
	let { categories = [] } = $$props;

	if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0) $$bindings.categories(categories);
	$$result.css.add(css$2);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `<div class="${"categories__display svelte-1w5hm9i"}">${each(categories, category => {
			return `${validate_component(CategorySingle, "CategorySingle").$$render($$result, Object.assign(category), {}, {})}`;
		})}</div>

${``}`;
	} while (!$$settled);

	return $$rendered;
});

const CategoriesForm_svelte_svelte_type_style_lang = '';

const CategoriesAdd_svelte_svelte_type_style_lang = '';

/* src/lib/Admin/Categories/CategoriesAdd.svelte generated by Svelte v3.55.0 */

const css$1 = {
	code: ".categories__add.svelte-pyb8iu.svelte-pyb8iu{margin:2vh 0;cursor:pointer}.categories__add.svelte-pyb8iu i.svelte-pyb8iu{color:white;font-size:4rem}",
	map: null
};

const CategoriesAdd = create_ssr_component(($$result, $$props, $$bindings, slots) => {

	$$result.css.add(css$1);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `<div class="${"categories__add svelte-pyb8iu"}"><i class="${"fa-solid fa-circle-plus svelte-pyb8iu"}"></i></div>

${``}`;
	} while (!$$settled);

	return $$rendered;
});

const CategoriesPanel_svelte_svelte_type_style_lang = '';

/* src/lib/Admin/Categories/CategoriesPanel.svelte generated by Svelte v3.55.0 */

const css = {
	code: ".admin__categories.svelte-1nay1i8{width:100%;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}",
	map: null
};

const CategoriesPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { categories = [] } = $$props;

	if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0) $$bindings.categories(categories);
	$$result.css.add(css);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `<div class="${"admin__categories svelte-1nay1i8"}">${validate_component(CategoriesAdd, "CategoriesAdd").$$render($$result, {}, {}, {})}
  ${validate_component(CategoriesGrid, "CategoriesGrid").$$render(
			$$result,
			{ categories },
			{
				categories: $$value => {
					categories = $$value;
					$$settled = false;
				}
			},
			{}
		)}
</div>`;
	} while (!$$settled);

	return $$rendered;
});

/* src/routes/admin/categories/+page.svelte generated by Svelte v3.55.0 */

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data = {} } = $$props;
	let categories = data.categories;

	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${($$result.head += '<!-- HEAD_svelte-1gkbdyr_START -->' + `${($$result.title = `<title>Categories panel</title>`, "")}` + '<!-- HEAD_svelte-1gkbdyr_END -->', "")}

${validate_component(CategoriesPanel, "CategoriesPanel").$$render(
			$$result,
			{ categories },
			{
				categories: $$value => {
					categories = $$value;
					$$settled = false;
				}
			},
			{}
		)}`;
	} while (!$$settled);

	return $$rendered;
});

export { Page as default };
