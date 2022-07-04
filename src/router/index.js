import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: HomeView
	},
	{
		path: "/list",
		name: "List",
		component: () =>
			import("@/views/List.vue"),
	},
	{
		path: "/my",
		name: "My",
		component: () =>
			import("@/views/My.vue"),
	},
	{
		path: "/card",
		name: "Card",
		component: () =>
			import("@/views/Card.vue"),
	},
	{
		path: "/search",
		name: "Search",
		component: () =>
			import("@/views/Search/index.vue"),
		children: [
			{
				path: "",
				name: "SearchMain",
				component: () => import("@/views/Search/main.vue")
			},
			{
				path: "search-list",
				name: "SearchList",
				component: () => import("@/views/Search/search-list.vue")
			}
		]
	},
	{  //动态路由 => params => {{ $route.params.id }}
		path: "/dynamic/:id/:name",
		name: "Dynamic",
		component: () => import("@/views/test/dynamic.vue"),
		props: { keyxxx: "路由参数传达，组件中也是通过 prop:['keyxxx'] 获取" },
		children: [ //嵌套路由
			{
				path: 'profile', // 不要斜杆
				component: () => import("@/views/test/profile.vue")
			},
			{
				path: 'gonameview', // 命名视图
				components: { //
					default: () => import("@/views/test/go-not-name-view.vue"),
					viewName: () => import("@/views/test/go-name-viewName-view.vue"),
				},
			},
		]
	},
	{   // 不存在的路由地址,重定向到404页面，如果404页面存在的话
		path: "*",
		name: "other",
		redirect: "/404.vue"
	}

]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	console.log("路由跳转前会做的一些事情");
	next();
})

export default router
