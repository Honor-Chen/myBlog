module.exports = {
	base: '/myblog/', // 改变非根路径
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
			{
				text: '主页',
				link: '/'
			},
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
				text: '服务生态圈',
				link: '/servers-ecosystem/'
			},
			{
				text: '随笔',
				link: '/essay/'
			},
			{
				text: '关于我',
				items: [
					{
						text: '关于我 A',
						link: 'http://www.idspring.cn'
					}
				]
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
						'vue-1.md'
					]
				}
			],
			'/front-end-ecosystem/react/': [
				{
					title: 'vue 生态系统',
					collapsable: false, // 是否展开
					children: [
						'react-1.md',
						'react-2.md'
					]
				}
			],
			'/servers-ecosystem/': [
				'/'
			],
			'/essay/': [
				'/'
			]
		}
	},
	plugins: [
			'@vuepress/last-updated',
			'@vuepress/back-to-top',
			'@vuepress/active-header-links',
			'@vuepress/google-analytics',
			{
					'ga': 'UA-00000000-0' // UA-00000000-0
			},
			'@vuepress/medium-zoom',
			'@vuepress/nprogress'
	]
}