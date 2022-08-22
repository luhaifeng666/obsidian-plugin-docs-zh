
const fs = require('fs')
const { viteCommonjs } = require('@originjs/vite-plugin-commonjs')
const { defineUserConfig } = require("@vuepress/cli")
const { searchPlugin } = require('@vuepress/plugin-search')
const { commentPlugin } = require('vuepress-plugin-comment2')
const { commentTheme } = require('./public/themes')
// 获取目标目录下的文件
const getFiles = function (baseUrl, name) {
	let urls = fs.readdirSync(`./docs${name}${baseUrl}`).map(item => {
		return `${name}${baseUrl}/${item}`
	})
	return urls
}
// 生成侧边栏
const getSidebarMenuItem = function (paths, baseUrl, name) {
  return paths.reduce((arr, path) => {
		if(Array.isArray(path)) {
      if (path.every(item => typeof(item) === 'string')) {
        arr.push(...path)
      } else {
        path.children.forEach(item => {
          getSidebarMenuItem(item, path.url, name)
        })
      }
		} else {
			let children = path.children ? getSidebarMenuItem(path.children, `${baseUrl}${path.url}`, name) : getFiles(`${baseUrl}${path.url}`, name)
			arr.push({
				text: path.name,
				collapsible: true,
				children
			})
		}
    return arr
	}, [])
}
// 侧边栏对象
let sidebar = {}
// 侧边栏配置
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
      { name: 'Tutorials', url: 'tutorials'},
      { name: '示例', url: 'examples' },
      { name: '发布', url: 'publishing' },
      { name: 'API', url: 'api/', children: [
		      ['/zh/api/overview.md'],
          { name: '类', url: 'classes' },
          { name: '枚举', url: 'enums' },
          { name: '方法', url: 'functions' },
          { name: '接口', url: 'interfaces' },
          { name: '类型', url: 'types' }
        ]
      },
      ['/zh/manifest-reference.md', '/zh/contribute.md']
    ]
	},
  {
		name: '/zh2.0/',
		baseUrl: '',
		paths: [
      ['/zh2.0/introduction.md'],
      { name: '快速开始', url: 'getting-started' },
      { name: '用户界面', url: 'user-interface'},
      { name: '编辑器', url: 'editor', children: [
          {
            name: '扩展', url: '/extensions'
          },
          ['/zh2.0/editor/index.md', '/zh2.0/editor/markdown-post-processing.md']
        ]
      },
      ['/zh2.0/vault.md', '/zh2.0/events.md'],
      { name: '发布', url: 'publishing' },
      { name: 'Reference', url: 'reference', children: [
          {
            name: 'typescript',
            url: '/typescript/',
            children: [
              {
                name: 'classes',
                url: 'classes'
              }, {
                name: 'enums',
                url: 'enums'
              }, {
                name: 'functions',
                url: 'functions'
              }, {
                name: 'interfaces',
                url: 'interfaces'
              }, {
                name: 'types',
                url: 'types'
              } 
            ]
          },
          ['/zh2.0/reference/manifest.md']
        ]
      },
      { name: 'Tutorials', url: 'tutorials'},
      { name: '示例', url: 'examples' },
      ['/zh2.0/developer-tools.md', '/zh2.0/contribute.md']
    ]
	},
]
// 遍历生成目录结构
pageConfig.forEach(item => {
	sidebar[item.name] = getSidebarMenuItem(item.paths, item.baseUrl, item.name)
})

module.exports = defineUserConfig({
  title: 'Obsidian 插件开发文档',
  base: '/obsidian-plugin-docs-zh/',
  description: ' ',
  head: [
		['link', { rel: 'icon', href: 'https://forum.obsidian.md/uploads/default/optimized/1X/bf119bd48f748f4fd2d65f2d1bb05d3c806883b5_2_32x32.png' }]
	],
  markdown: {
		lineNumbers: true
	},
  theme: commentTheme({
    navbar: [
			{ text: '首页', link: '/' },
			{ text: '文档', link: '/zh/' },
			{ text: '文档v2.0', link: '/zh2.0/' },
		],
    lastUpdated: 'Last Updated',
		sidebarDepth: 5,
    repo: 'https://github.com/luhaifeng666/obsidian-plugin-docs-zh',
    sidebar
  }),
  plugins: [
    viteCommonjs(),
    commentPlugin({
      // 插件选项
      provider: 'Giscus',
      repo: 'luhaifeng666/obsidian-plugin-docs-zh',
      repoId: 'R_kgDOHE7GmA',
      category: 'Ideas',
      categoryId: 'DIC_kwDOHE7GmM4CPfmT',
      mapping: 'title'
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    })
  ]
})
