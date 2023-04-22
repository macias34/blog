export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-72d7deaf.js","imports":["_app/immutable/start-72d7deaf.js","_app/immutable/chunks/index-2a8bc61d.js","_app/immutable/chunks/singletons-414637a6.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/parse-f0c618df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/categories",
				pattern: /^\/admin\/categories\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/images",
				pattern: /^\/admin\/images\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/api/categories",
				pattern: /^\/api\/categories\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/categories/_server.js')
			},
			{
				id: "/api/categories/[id]",
				pattern: /^\/api\/categories\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/categories/_id_/_server.js')
			},
			{
				id: "/api/images",
				pattern: /^\/api\/images\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/images/_server.js')
			},
			{
				id: "/api/images/upload",
				pattern: /^\/api\/images\/upload\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/images/upload/_server.js')
			},
			{
				id: "/api/images/[imageName]",
				pattern: /^\/api\/images\/([^/]+?)\/?$/,
				params: [{"name":"imageName","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/images/_imageName_/_server.js')
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/posts/_server.js')
			},
			{
				id: "/api/posts/title/[url]",
				pattern: /^\/api\/posts\/title\/([^/]+?)\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/posts/title/_url_/_server.js')
			},
			{
				id: "/api/posts/[id]",
				pattern: /^\/api\/posts\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/posts/_id_/_server.js')
			},
			{
				id: "/api/thumbnails",
				pattern: /^\/api\/thumbnails\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/thumbnails/_server.js')
			},
			{
				id: "/api/thumbnails/[thumbnailName]",
				pattern: /^\/api\/thumbnails\/([^/]+?)\/?$/,
				params: [{"name":"thumbnailName","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/thumbnails/_thumbnailName_/_server.js')
			},
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/auth/signup",
				pattern: /^\/auth\/signup\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
