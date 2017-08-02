// vue vue-router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import test from './test'

// 路由每个根节点都是引入的模块
export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			hidden: true,
			redirect: '/test'
		},
		test
	]
})