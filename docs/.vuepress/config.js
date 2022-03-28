
const fs = require('fs')
const BASE_URL = './docs/zh/'

let getFiles = function(type) {
	let baseUrl = type && `${type.split('/')[1]}/`
	let urls = fs.readdirSync(`${BASE_URL}${type}`).map(item => {
		return `/zh/${baseUrl}${item}`
	})
	return urls
}
let sidebar = {}
const pageConfig = [
	{
		name: '/zh/',
		baseUrl: '/',
		paths: [['introduction.md'],
    // {
		// 	name: '快速开始',
		// 	url: 'getting-started'
		// }, {
		// 	name: '概念',
		// 	url: 'concepts'
		// }, {
		// 	name: '指南',
		// 	url: 'guides'
		// }, {
		// 	name: '高阶指南',
		// 	url: 'advanced-guides'
		// }, {
		// 	name: '示例',
		// 	url: 'examples'
		// }, {
		// 	name: '发布',
		// 	url: 'publishing'
		// }, {
		// 	name: '接口',
		// 	url: 'api'
		// },
    // ['manifest-reference.md', 'contribute.md']
    ]
	}
]
pageConfig.forEach(item => {
	sidebar[item.name] = []
	item.paths.forEach(path => {
		if(!Array.isArray(path)) {
			let children = getFiles(`${item.baseUrl}${path.url}`)
			let conf = {
				text: path.name,
				collapsible: true,
				children
			}
			sidebar[item.name].push(conf)
		} else {
			sidebar[item.name].push(...path)
		}
	})
})

console.log(sidebar)

module.exports = {
  title: 'Obsidian 插件中文文档',
  base: '/obsidian-plugin-docs-zh/',
  description: ' ',
  head: [
		['link', { rel: 'icon', href: 'https://forum.obsidian.md/uploads/default/optimized/1X/bf119bd48f748f4fd2d65f2d1bb05d3c806883b5_2_32x32.png' }]
	],
  markdown: {
		lineNumbers: true
	},
  themeConfig: {
    navbar: [
			{ text: '首页', link: '/' },
			{ text: '文档', link: '/zh/' },
			{ text: 'GitHub', link: 'https://github.com/luhaifeng666/obsidian-plugin-docs-zh' },
		],
    lastUpdated: 'Last Updated',
		sidebarDepth: 3,
    // 可折叠的侧边栏
    sidebar
  },
  plugins: [
    // [
    //   '@vuepress/plugin-search',
    //   {
    //     locales: {
    //       '/': {
    //         placeholder: 'Search',
    //       },
    //       '/zh/': {
    //         placeholder: '搜索',
    //       },
    //     },
    //   },
    // ],
  ]
}