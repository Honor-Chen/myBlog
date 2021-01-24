module.exports = {
	base: '/myBlog/', // 改变非根路径
	title: '鹿子博客',
	description: 'honor-chen-blog',
	head: [
		[
			'link',
			{ rel: 'icon', href: '/assets/favicon.ico' }
		]
	],
	configureWebpack: {
		resolve: {
			alias: {
				'@': '../.vuepress'
			}
		}
	},
	themeConfig: {
		logo: '/assets/logo.jpg',
		smoothScroll: true,
		navbar: true,
		// sidebar: 'auto',
		// search: true,
		// searchMaxSuggestions: 10,
		lastUpdated: 'Last Updated',
		nav: [
			// {
			// 	text: '主页',
			// 	link: '/'
			// },
			{
				text: '小前端生态圈',
				items: [
					{
						text: 'JavaScript',
						link: '/front-end-ecosystem/JavaScripts/'
					},
					{
						text: 'ES6',
						link: '/front-end-ecosystem/es6/'
					},
					{
						text: 'TypeScript',
						link: '/front-end-ecosystem/TypeScript/'
					},
					{
						text: 'Vue 生态系统',
						link: '/front-end-ecosystem/vue/'
					},
					{
						text: 'React 生态系统',
						link: '/front-end-ecosystem/react/'
					}
				],
			},
			{
				text: '面试资料',
				items: [
					{
						text: '前端面试之道',
						link: '/front-end-interview/frontEndWay/'
					}
				],
			},
			// {
			// 	text: '服务生态圈',
			// 	link: '/servers-ecosystem/'
			// },
			{
				text: '随笔',
				link: '/essay/'
			},
			// {
			// 	text: '关于我',
			// 	items: [
			// 		{
			// 			text: '关于我 A',
			// 			link: 'http://www.idspring.cn'
			// 		}
			// 	]
			// },
			{
				text: 'GitHub',
				link: 'https://github.com/Honor-Chen'
			}
		],
		sidebar: {
			'/front-end-ecosystem/JavaScripts/': [
				{
					title: 'JavaScripts 生态系统',
					collapsable: false, // 是否展开
					children: [
						'javascript-1',
						'javascript-2'
					]
				}
			],
			'/front-end-ecosystem/es6/': [
				{
					title: 'ES6 生态系统',
					collapsable: false, // 是否展开
					children: [
					]
				}
			],
			'/front-end-ecosystem/TypeScript/': [
				{
					title: 'TypeScript 生态系统',
					collapsable: false, // 是否展开
					children: [
						'TS-1.md',
						'TS-2.md'
					]
				}
			],
			'/front-end-ecosystem/vue/': [
				{
					title: 'vue 生态系统',
					collapsable: false, // 是否展开
					children: [
						'source-code.md',
						'Vue.js 源码调试准备工作.md',
						'[Vue3.0系列]-vite小工具.md'
					]
				}
			],
			'/front-end-ecosystem/react/': [
				{
					title: 'react 生态系统',
					collapsable: false, // 是否展开
					children: [
						'react-1.md',
						'react-2.md'
					]
				}
			],
			'/servers-ecosystem/': [
			],
			'/essay/': [
				{
					title: '杂记',
					collapsable: false, // 是否展开
					children: [
						'前端路由.md',
						'Interview-面试.md',
						'git.md'
					]
				}
			],
			'/front-end-interview/frontEndWay/': [
				{
					title: '前端面试之道',
					collapsable: false, // 是否展开
					children: [
						'0查看指南.md',
						'1JS 基础知识点及常考面试题（一）.md',
						'2JS 基础知识点及常考面试题（二）.md',
						'3ES6 知识点及常考面试题.md',
						'4JS 异步编程及常考面试题.md',
						'5手写 Promise.md',
						'6Event Loop.md',
						'7JS 进阶知识点及常考面试题.md',
						'8JS 思考题.md',
						'9DevTools Tips.md',
						'10浏览器基础知识点及常考面试题.md',
						'11浏览器缓存机制.md',
						'12浏览器渲染原理.md',
						'13安全防范知识点.md',
						'14从 V8 中看 JS 性能优化.md',
						'15性能优化琐碎事.md',
						'16Webpack 性能优化.md',
						'17实现小型打包工具.md',
						'18React 和 Vue 两大框架之间的相爱相杀.md',
						'19Vue 常考基础知识点.md',
						'20Vue 常考进阶知识点.md',
						'21React 常考基础知识点.md',
						'22React 常考进阶知识点.md',
						'23监控.md',
						'24UDP.md',
						'25TCP.md',
						'26HTTP 及 TLS.md',
						'27HTTP[2 及 HTTP[3.md',
						'28输入 URL 到页面渲染的整个流程.md',
						'29设计模式.md',
						'30常见数据结构.md',
						'31常考算法题解析.md',
						'32CSS 常考面试题资料.md',
						'33如何写好一封简历.md',
						'34面试常用技巧.md',
						'35前方的路，让我们结伴同行.md'
					]
				}
			]
		}
	},
	plugins: [
			'@vuepress/last-updated',
			[
				'vuepress-plugin-gotop-plus', {
					// 是否在移动设备上显示(default: true)
					mobileShow: false,
					// 回到页首元素显示触发的高度阈值(default: 50)
					threshold: 50
				}
			],
			'@vuepress/active-header-links',
			'@vuepress/google-analytics',
			{
					'ga': 'UA-00000000-0' // UA-00000000-0
			},
			'@vuepress/medium-zoom',
			'@vuepress/nprogress'
	]
}