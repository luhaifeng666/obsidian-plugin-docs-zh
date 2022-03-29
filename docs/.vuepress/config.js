
const fs = require('fs')
const BASE_URL = './docs/zh/'

const getFiles = function (baseUrl) {
	let urls = fs.readdirSync(`${BASE_URL}${baseUrl}`).map(item => {
		return `/zh/${baseUrl}/${item}`
	})
	return urls
}

const getSidebarMenuItem = function (paths, baseUrl) {
  return paths.reduce((arr, path) => {
		if(!Array.isArray(path)) {
			let children = path.children ? getSidebarMenuItem(path.children, path.url) : getFiles(`${baseUrl}${path.url}`)
			arr.push({
				text: path.name,
				collapsible: true,
				children
			})
		} else {
			arr.push(...path)
		}
    return arr
	}, [])
}

let sidebar = {}
const pageConfig = [
	{
		name: '/zh/',
		baseUrl: '',
		paths: [
      ['/zh/introduction.md'],
      { name: '快速开始', url: 'getting-started' },
      { name: '概念', url: 'concepts'},
      { name: '指南', url: 'guides'},
      { name: '高阶指南', url: 'advanced-guides'},
      { name: '示例', url: 'examples' },
      { name: '发布', url: 'publishing' },
      { name: 'API', url: 'api/', children: [
          { name: '类', url: 'classes' },
          { name: '枚举', url: 'enums' },
          { name: '方法', url: 'functions' },
          { name: '接口', url: 'interfaces' },
          ['/zh/api/overview.md'],
          { name: '类型', url: 'types' }
        ]
      },
      ['/zh/manifest-reference.md', '/zh/contribute.md']
    ]
	}
]
pageConfig.forEach(item => {
	sidebar[item.name] = getSidebarMenuItem(item.paths, item.baseUrl)
})

module.exports = {
  title: 'Obsidian 插件开发文档',
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
    sidebar
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ]
  ]
}