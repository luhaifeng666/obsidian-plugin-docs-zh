
// const fs = require('fs')
const { defineUserConfig } = require("@vuepress/cli")
const { searchPlugin } = require('@vuepress/plugin-search')
const { commentPlugin } = require('vuepress-plugin-comment2')
const { commentTheme } = require('./public/themes')
// 获取目标目录下的文件
// const getFiles = function (baseUrl, name) {
// 	let urls = fs.readdirSync(`./docs${name}${baseUrl}`).map(item => {
// 		return `${name}${baseUrl}/${item}`
// 	})
// 	return urls
// }
// // 生成侧边栏
// const getSidebarMenuItem = function (paths, baseUrl, name) {
//   return paths.reduce((arr, path) => {
// 		if(Array.isArray(path)) {
//       if (path.every(item => typeof(item) === 'string')) {
//         arr.push(...path)
//       } else {
//         path.children.forEach(item => {
//           getSidebarMenuItem(item, path.url, name)
//         })
//       }
// 		} else {
// 			let children = path.children ? getSidebarMenuItem(path.children, `${baseUrl}${path.url}`, name) : getFiles(`${baseUrl}${path.url}`, name)
// 			arr.push({
// 				text: path.name,
// 				collapsible: true,
// 				children
// 			})
// 		}
//     return arr
// 	}, [])
// }
// // 侧边栏对象
// let sidebar = {}
// // 侧边栏配置
// const pageConfig = [
// 	{
// 		name: '/zh/',
// 		baseUrl: '',
// 		paths: [
//       ['/zh/introduction.md'],
//       { name: '快速开始', url: 'getting-started' },
//       { name: '概念', url: 'concepts'},
//       { name: '指南', url: 'guides'},
//       { name: '高阶指南', url: 'advanced-guides'},
//       { name: 'Tutorials', url: 'tutorials'},
//       { name: '示例', url: 'examples' },
//       { name: '发布', url: 'publishing' },
//       { name: 'API', url: 'api/', children: [
// 		      ['/zh/api/overview.md'],
//           { name: '类', url: 'classes' },
//           { name: '枚举', url: 'enums' },
//           { name: '方法', url: 'functions' },
//           { name: '接口', url: 'interfaces' },
//           { name: '类型', url: 'types' }
//         ]
//       },
//       ['/zh/manifest-reference.md', '/zh/contribute.md']
//     ]
// 	},
//   {
// 		name: '/zh2.0/',
// 		baseUrl: '',
// 		paths: [
//       ['/zh2.0/introduction.md'],
//       { name: '快速开始', url: 'getting-started' },
//       { name: '用户界面', url: 'user-interface'},
//       { name: '编辑器', url: 'editor', children: [
//           {
//             name: '扩展', url: '/extensions'
//           },
//           ['/zh2.0/editor/index.md', '/zh2.0/editor/markdown-post-processing.md']
//         ]
//       },
//       ['/zh2.0/vault.md', '/zh2.0/events.md'],
//       { name: '发布', url: 'publishing' },
//       { name: 'Reference', url: 'reference', children: [
//           {
//             name: 'typescript',
//             url: '/typescript/',
//             children: [
//               {
//                 name: 'classes',
//                 url: 'classes'
//               }, {
//                 name: 'enums',
//                 url: 'enums'
//               }, {
//                 name: 'functions',
//                 url: 'functions'
//               }, {
//                 name: 'interfaces',
//                 url: 'interfaces'
//               }, {
//                 name: 'types',
//                 url: 'types'
//               } 
//             ]
//           },
//           ['/zh2.0/reference/manifest.md']
//         ]
//       },
//       { name: 'Tutorials', url: 'tutorials'},
//       { name: '示例', url: 'examples' },
//       ['/zh2.0/developer-tools.md', '/zh2.0/contribute.md']
//     ]
// 	},
// ]
// // 遍历生成目录结构
// pageConfig.forEach(item => {
// 	sidebar[item.name] = getSidebarMenuItem(item.paths, item.baseUrl, item.name)
// })

const sidebar = {
  "/zh/": [
      "/zh/introduction.md",
      {
          "text": "快速开始",
          "collapsible": true,
          "children": [
              "/zh/getting-started/create-your-first-plugin.md",
              "/zh/getting-started/development-workflow.md"
          ]
      },
      {
          "text": "概念",
          "collapsible": true,
          "children": [
              "/zh/concepts/codemirror.md",
              "/zh/concepts/plugin-anatomy.md",
              "/zh/concepts/vault.md",
              "/zh/concepts/workspace.md"
          ]
      },
      {
          "text": "指南",
          "collapsible": true,
          "children": [
              "/zh/guides/commands.md",
              "/zh/guides/context-menus.md",
              "/zh/guides/custom-views.md",
              "/zh/guides/editor.md",
              "/zh/guides/events.md",
              "/zh/guides/html-elements.md",
              "/zh/guides/icons.md",
              "/zh/guides/markdown-post-processing.md",
              "/zh/guides/modals.md",
              "/zh/guides/ribbon-actions.md",
              "/zh/guides/settings.md",
              "/zh/guides/status-bar.md"
          ]
      },
      {
          "text": "高阶指南",
          "collapsible": true,
          "children": [
              "/zh/advanced-guides/react.md",
              "/zh/advanced-guides/svelte.md"
          ]
      },
      {
          "text": "Tutorials",
          "collapsible": true,
          "children": [
              "/zh/tutorials/text-based-file-formats.md"
          ]
      },
      {
          "text": "示例",
          "collapsible": true,
          "children": [
              "/zh/examples/insert-link.md"
          ]
      },
      {
          "text": "发布",
          "collapsible": true,
          "children": [
              "/zh/publishing/release-your-plugin-with-github-actions.md",
              "/zh/publishing/submission-guidelines.md",
              "/zh/publishing/submit-your-plugin.md"
          ]
      },
      {
          "text": "API",
          "collapsible": true,
          "children": [
              "/zh/api/overview.md",
              {
                  "text": "类",
                  "collapsible": true,
                  "children": [
                      "/zh/api/classes/AbstractTextComponent.md",
                      "/zh/api/classes/App.md",
                      "/zh/api/classes/BaseComponent.md",
                      "/zh/api/classes/ButtonComponent.md",
                      "/zh/api/classes/Component.md",
                      "/zh/api/classes/DropdownComponent.md",
                      "/zh/api/classes/EditableFileView.md",
                      "/zh/api/classes/Editor.md",
                      "/zh/api/classes/EditorSuggest.md",
                      "/zh/api/classes/Events.md",
                      "/zh/api/classes/ExtraButtonComponent.md",
                      "/zh/api/classes/FileManager.md",
                      "/zh/api/classes/FileSystemAdapter.md",
                      "/zh/api/classes/FileView.md",
                      "/zh/api/classes/FuzzySuggestModal.md",
                      "/zh/api/classes/HoverPopover.md",
                      "/zh/api/classes/ItemView.md",
                      "/zh/api/classes/Keymap.md",
                      "/zh/api/classes/MarkdownEditView.md",
                      "/zh/api/classes/MarkdownPreviewRenderer.md",
                      "/zh/api/classes/MarkdownPreviewView.md",
                      "/zh/api/classes/MarkdownRenderChild.md",
                      "/zh/api/classes/MarkdownRenderer.md",
                      "/zh/api/classes/MarkdownSourceView.md",
                      "/zh/api/classes/MarkdownView.md",
                      "/zh/api/classes/Menu.md",
                      "/zh/api/classes/MenuItem.md",
                      "/zh/api/classes/MetadataCache.md",
                      "/zh/api/classes/Modal.md",
                      "/zh/api/classes/MomentFormatComponent.md",
                      "/zh/api/classes/Notice.md",
                      "/zh/api/classes/PluginSettingTab.md",
                      "/zh/api/classes/Plugin_2.md",
                      "/zh/api/classes/PopoverSuggest.md",
                      "/zh/api/classes/Scope.md",
                      "/zh/api/classes/SearchComponent.md",
                      "/zh/api/classes/Setting.md",
                      "/zh/api/classes/SettingTab.md",
                      "/zh/api/classes/SliderComponent.md",
                      "/zh/api/classes/SuggestModal.md",
                      "/zh/api/classes/TAbstractFile.md",
                      "/zh/api/classes/TFile.md",
                      "/zh/api/classes/TFolder.md",
                      "/zh/api/classes/Tasks.md",
                      "/zh/api/classes/TextAreaComponent.md",
                      "/zh/api/classes/TextComponent.md",
                      "/zh/api/classes/TextFileView.md",
                      "/zh/api/classes/ToggleComponent.md",
                      "/zh/api/classes/ValueComponent.md",
                      "/zh/api/classes/Vault.md",
                      "/zh/api/classes/View.md",
                      "/zh/api/classes/Workspace.md",
                      "/zh/api/classes/WorkspaceItem.md",
                      "/zh/api/classes/WorkspaceLeaf.md",
                      "/zh/api/classes/WorkspaceMobileDrawer.md",
                      "/zh/api/classes/WorkspaceParent.md",
                      "/zh/api/classes/WorkspaceRibbon.md",
                      "/zh/api/classes/WorkspaceSidedock.md",
                      "/zh/api/classes/WorkspaceSplit.md",
                      "/zh/api/classes/WorkspaceTabs.md"
                  ]
              },
              {
                  "text": "枚举",
                  "collapsible": true,
                  "children": [
                      "/zh/api/enums/PopoverState.md"
                  ]
              },
              {
                  "text": "方法",
                  "collapsible": true,
                  "children": [
                      "/zh/api/functions/addIcon.md",
                      "/zh/api/functions/arrayBufferToBase64.md",
                      "/zh/api/functions/arrayBufferToHex.md",
                      "/zh/api/functions/base64ToArrayBuffer.md",
                      "/zh/api/functions/debounce.md",
                      "/zh/api/functions/finishRenderMath.md",
                      "/zh/api/functions/fuzzySearch.md",
                      "/zh/api/functions/getAllTags.md",
                      "/zh/api/functions/getBlobArrayBuffer.md",
                      "/zh/api/functions/getLinkpath.md",
                      "/zh/api/functions/hexToArrayBuffer.md",
                      "/zh/api/functions/htmlToMarkdown.md",
                      "/zh/api/functions/iterateCacheRefs.md",
                      "/zh/api/functions/iterateRefs.md",
                      "/zh/api/functions/loadMathJax.md",
                      "/zh/api/functions/loadMermaid.md",
                      "/zh/api/functions/loadPdfJs.md",
                      "/zh/api/functions/loadPrism.md",
                      "/zh/api/functions/normalizePath.md",
                      "/zh/api/functions/parseFrontMatterAliases.md",
                      "/zh/api/functions/parseFrontMatterEntry.md",
                      "/zh/api/functions/parseFrontMatterStringArray.md",
                      "/zh/api/functions/parseFrontMatterTags.md",
                      "/zh/api/functions/parseLinktext.md",
                      "/zh/api/functions/parseYaml.md",
                      "/zh/api/functions/prepareFuzzySearch.md",
                      "/zh/api/functions/prepareQuery.md",
                      "/zh/api/functions/prepareSimpleSearch.md",
                      "/zh/api/functions/renderMatches.md",
                      "/zh/api/functions/renderMath.md",
                      "/zh/api/functions/renderResults.md",
                      "/zh/api/functions/request.md",
                      "/zh/api/functions/requestUrl.md",
                      "/zh/api/functions/requireApiVersion.md",
                      "/zh/api/functions/resolveSubpath.md",
                      "/zh/api/functions/sanitizeHTMLToDom.md",
                      "/zh/api/functions/setIcon.md",
                      "/zh/api/functions/sortSearchResults.md",
                      "/zh/api/functions/stringifyYaml.md",
                      "/zh/api/functions/stripHeading.md"
                  ]
              },
              {
                  "text": "接口",
                  "collapsible": true,
                  "children": [
                      "/zh/api/interfaces/AjaxOptions.md",
                      "/zh/api/interfaces/BlockCache.md",
                      "/zh/api/interfaces/BlockSubpathResult.md",
                      "/zh/api/interfaces/CacheItem.md",
                      "/zh/api/interfaces/CachedMetadata.md",
                      "/zh/api/interfaces/CloseableComponent.md",
                      "/zh/api/interfaces/Command.md",
                      "/zh/api/interfaces/Constructor.md",
                      "/zh/api/interfaces/DataAdapter.md",
                      "/zh/api/interfaces/DataWriteOptions.md",
                      "/zh/api/interfaces/Debouncer.md",
                      "/zh/api/interfaces/EditorChange.md",
                      "/zh/api/interfaces/EditorPosition.md",
                      "/zh/api/interfaces/EditorRange.md",
                      "/zh/api/interfaces/EditorRangeOrCaret.md",
                      "/zh/api/interfaces/EditorSelection.md",
                      "/zh/api/interfaces/EditorSelectionOrCaret.md",
                      "/zh/api/interfaces/EditorSuggestContext.md",
                      "/zh/api/interfaces/EditorSuggestTriggerInfo.md",
                      "/zh/api/interfaces/EditorTransaction.md",
                      "/zh/api/interfaces/EmbedCache.md",
                      "/zh/api/interfaces/EventListenerInfo.md",
                      "/zh/api/interfaces/EventRef.md",
                      "/zh/api/interfaces/FileStats.md",
                      "/zh/api/interfaces/FrontMatterCache.md",
                      "/zh/api/interfaces/FuzzyMatch.md",
                      "/zh/api/interfaces/HeadingCache.md",
                      "/zh/api/interfaces/HeadingSubpathResult.md",
                      "/zh/api/interfaces/Hotkey.md",
                      "/zh/api/interfaces/HoverParent.md",
                      "/zh/api/interfaces/ISuggestOwner.md",
                      "/zh/api/interfaces/Instruction.md",
                      "/zh/api/interfaces/KeymapContext.md",
                      "/zh/api/interfaces/KeymapEventHandler.md",
                      "/zh/api/interfaces/KeymapInfo.md",
                      "/zh/api/interfaces/LinkCache.md",
                      "/zh/api/interfaces/ListItemCache.md",
                      "/zh/api/interfaces/ListedFiles.md",
                      "/zh/api/interfaces/Loc.md",
                      "/zh/api/interfaces/MarkdownPostProcessor.md",
                      "/zh/api/interfaces/MarkdownPostProcessorContext.md",
                      "/zh/api/interfaces/MarkdownPreviewEvents.md",
                      "/zh/api/interfaces/MarkdownSectionInformation.md",
                      "/zh/api/interfaces/MarkdownSubView.md",
                      "/zh/api/interfaces/ObsidianProtocolData.md",
                      "/zh/api/interfaces/OpenViewState.md",
                      "/zh/api/interfaces/PluginManifest.md",
                      "/zh/api/interfaces/Point.md",
                      "/zh/api/interfaces/Pos.md",
                      "/zh/api/interfaces/PreparedQuery.md",
                      "/zh/api/interfaces/Rect_2.md",
                      "/zh/api/interfaces/ReferenceCache.md",
                      "/zh/api/interfaces/RequestParam.md",
                      "/zh/api/interfaces/RequestUrlParam.md",
                      "/zh/api/interfaces/RequestUrlResponse.md",
                      "/zh/api/interfaces/SearchResult.md",
                      "/zh/api/interfaces/SearchResultContainer.md",
                      "/zh/api/interfaces/SectionCache.md",
                      "/zh/api/interfaces/Stat.md",
                      "/zh/api/interfaces/SubpathResult.md",
                      "/zh/api/interfaces/TagCache.md",
                      "/zh/api/interfaces/ViewState.md",
                      "/zh/api/interfaces/ViewStateResult.md"
                  ]
              },
              {
                  "text": "类型",
                  "collapsible": true,
                  "children": [
                      "/zh/api/types/EditorCommandName.md",
                      "/zh/api/types/KeymapEventListener.md",
                      "/zh/api/types/MarkdownViewModeType.md",
                      "/zh/api/types/Modifier.md",
                      "/zh/api/types/ObsidianProtocolHandler.md",
                      "/zh/api/types/SearchMatchPart.md",
                      "/zh/api/types/SearchMatches.md",
                      "/zh/api/types/SplitDirection.md",
                      "/zh/api/types/UserEvent.md",
                      "/zh/api/types/ViewCreator.md"
                  ]
              }
          ]
      },
      "/zh/manifest-reference.md",
      "/zh/contribute.md"
  ],
  "/zh2.0/": [
      "/zh2.0/introduction.md",
      {
          "text": "快速开始",
          "collapsible": true,
          "children": [
              "/zh2.0/getting-started/create-your-first-plugin.md",
              "/zh2.0/getting-started/development-workflow.md",
              "/zh2.0/getting-started/index.md",
              "/zh2.0/getting-started/plugin-anatomy.md",
              "/zh2.0/getting-started/react.md",
              "/zh2.0/getting-started/svelte.md"
          ]
      },
      {
          "text": "用户界面",
          "collapsible": true,
          "children": [
              "/zh2.0/user-interface/commands.md",
              "/zh2.0/user-interface/context-menus.md",
              "/zh2.0/user-interface/html-elements.md",
              "/zh2.0/user-interface/icons.md",
              "/zh2.0/user-interface/index.md",
              "/zh2.0/user-interface/modals.md",
              "/zh2.0/user-interface/ribbon-actions.md",
              "/zh2.0/user-interface/settings.md",
              "/zh2.0/user-interface/status-bar.md",
              "/zh2.0/user-interface/views.md",
              "/zh2.0/user-interface/workspace.md"
          ]
      },
      {
          "text": "编辑器",
          "collapsible": true,
          "children": [
              {
                  "text": "扩展",
                  "collapsible": true,
                  "children": [
                      "/zh2.0/editor/extensions/communicating-with-editor-extensions.md",
                      "/zh2.0/editor/extensions/decorations.md",
                      "/zh2.0/editor/extensions/index.md",
                      "/zh2.0/editor/extensions/state-fields.md",
                      "/zh2.0/editor/extensions/state-management.md",
                      "/zh2.0/editor/extensions/view-plugins.md",
                      "/zh2.0/editor/extensions/viewport.md"
                  ]
              },
              "/zh2.0/editor/index.md",
              "/zh2.0/editor/markdown-post-processing.md"
          ]
      },
      "/zh2.0/vault.md",
      "/zh2.0/events.md",
      {
          "text": "发布",
          "collapsible": true,
          "children": [
              "/zh2.0/publishing/release-your-plugin-with-github-actions.md",
              "/zh2.0/publishing/submission-guidelines.md",
              "/zh2.0/publishing/submit-your-plugin.md"
          ]
      },
      {
          "text": "Reference",
          "collapsible": true,
          "children": [
              {
                  "text": "typescript",
                  "collapsible": true,
                  "children": [
                      {
                          "text": "classes",
                          "collapsible": true,
                          "children": [
                              "/zh2.0/reference/typescript/classes/AbstractTextComponent.md",
                              "/zh2.0/reference/typescript/classes/App.md",
                              "/zh2.0/reference/typescript/classes/BaseComponent.md",
                              "/zh2.0/reference/typescript/classes/ButtonComponent.md",
                              "/zh2.0/reference/typescript/classes/Component.md",
                              "/zh2.0/reference/typescript/classes/DropdownComponent.md",
                              "/zh2.0/reference/typescript/classes/EditableFileView.md",
                              "/zh2.0/reference/typescript/classes/Editor.md",
                              "/zh2.0/reference/typescript/classes/EditorSuggest.md",
                              "/zh2.0/reference/typescript/classes/Events.md",
                              "/zh2.0/reference/typescript/classes/ExtraButtonComponent.md",
                              "/zh2.0/reference/typescript/classes/FileManager.md",
                              "/zh2.0/reference/typescript/classes/FileSystemAdapter.md",
                              "/zh2.0/reference/typescript/classes/FileView.md",
                              "/zh2.0/reference/typescript/classes/FuzzySuggestModal.md",
                              "/zh2.0/reference/typescript/classes/HoverPopover.md",
                              "/zh2.0/reference/typescript/classes/ItemView.md",
                              "/zh2.0/reference/typescript/classes/Keymap.md",
                              "/zh2.0/reference/typescript/classes/MarkdownEditView.md",
                              "/zh2.0/reference/typescript/classes/MarkdownPreviewRenderer.md",
                              "/zh2.0/reference/typescript/classes/MarkdownPreviewView.md",
                              "/zh2.0/reference/typescript/classes/MarkdownRenderChild.md",
                              "/zh2.0/reference/typescript/classes/MarkdownRenderer.md",
                              "/zh2.0/reference/typescript/classes/MarkdownSourceView.md",
                              "/zh2.0/reference/typescript/classes/MarkdownView.md",
                              "/zh2.0/reference/typescript/classes/Menu.md",
                              "/zh2.0/reference/typescript/classes/MenuItem.md",
                              "/zh2.0/reference/typescript/classes/MenuSeparator.md",
                              "/zh2.0/reference/typescript/classes/MetadataCache.md",
                              "/zh2.0/reference/typescript/classes/Modal.md",
                              "/zh2.0/reference/typescript/classes/MomentFormatComponent.md",
                              "/zh2.0/reference/typescript/classes/Notice.md",
                              "/zh2.0/reference/typescript/classes/PluginSettingTab.md",
                              "/zh2.0/reference/typescript/classes/Plugin_2.md",
                              "/zh2.0/reference/typescript/classes/PopoverSuggest.md",
                              "/zh2.0/reference/typescript/classes/Scope.md",
                              "/zh2.0/reference/typescript/classes/SearchComponent.md",
                              "/zh2.0/reference/typescript/classes/Setting.md",
                              "/zh2.0/reference/typescript/classes/SettingTab.md",
                              "/zh2.0/reference/typescript/classes/SliderComponent.md",
                              "/zh2.0/reference/typescript/classes/SuggestModal.md",
                              "/zh2.0/reference/typescript/classes/TAbstractFile.md",
                              "/zh2.0/reference/typescript/classes/TFile.md",
                              "/zh2.0/reference/typescript/classes/TFolder.md",
                              "/zh2.0/reference/typescript/classes/Tasks.md",
                              "/zh2.0/reference/typescript/classes/TextAreaComponent.md",
                              "/zh2.0/reference/typescript/classes/TextComponent.md",
                              "/zh2.0/reference/typescript/classes/TextFileView.md",
                              "/zh2.0/reference/typescript/classes/ToggleComponent.md",
                              "/zh2.0/reference/typescript/classes/ValueComponent.md",
                              "/zh2.0/reference/typescript/classes/Vault.md",
                              "/zh2.0/reference/typescript/classes/View.md",
                              "/zh2.0/reference/typescript/classes/Workspace.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceContainer.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceFloating.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceItem.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceLeaf.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceMobileDrawer.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceParent.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceRibbon.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceRoot.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceSidedock.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceSplit.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceTabs.md",
                              "/zh2.0/reference/typescript/classes/WorkspaceWindow.md"
                          ]
                      },
                      {
                          "text": "enums",
                          "collapsible": true,
                          "children": [
                              "/zh2.0/reference/typescript/enums/PopoverState.md"
                          ]
                      },
                      {
                          "text": "functions",
                          "collapsible": true,
                          "children": [
                              "/zh2.0/reference/typescript/functions/addIcon.md",
                              "/zh2.0/reference/typescript/functions/arrayBufferToBase64.md",
                              "/zh2.0/reference/typescript/functions/arrayBufferToHex.md",
                              "/zh2.0/reference/typescript/functions/base64ToArrayBuffer.md",
                              "/zh2.0/reference/typescript/functions/debounce.md",
                              "/zh2.0/reference/typescript/functions/finishRenderMath.md",
                              "/zh2.0/reference/typescript/functions/fuzzySearch.md",
                              "/zh2.0/reference/typescript/functions/getAllTags.md",
                              "/zh2.0/reference/typescript/functions/getBlobArrayBuffer.md",
                              "/zh2.0/reference/typescript/functions/getLinkpath.md",
                              "/zh2.0/reference/typescript/functions/hexToArrayBuffer.md",
                              "/zh2.0/reference/typescript/functions/htmlToMarkdown.md",
                              "/zh2.0/reference/typescript/functions/iterateCacheRefs.md",
                              "/zh2.0/reference/typescript/functions/iterateRefs.md",
                              "/zh2.0/reference/typescript/functions/loadMathJax.md",
                              "/zh2.0/reference/typescript/functions/loadMermaid.md",
                              "/zh2.0/reference/typescript/functions/loadPdfJs.md",
                              "/zh2.0/reference/typescript/functions/loadPrism.md",
                              "/zh2.0/reference/typescript/functions/normalizePath.md",
                              "/zh2.0/reference/typescript/functions/parseFrontMatterAliases.md",
                              "/zh2.0/reference/typescript/functions/parseFrontMatterEntry.md",
                              "/zh2.0/reference/typescript/functions/parseFrontMatterStringArray.md",
                              "/zh2.0/reference/typescript/functions/parseFrontMatterTags.md",
                              "/zh2.0/reference/typescript/functions/parseLinktext.md",
                              "/zh2.0/reference/typescript/functions/parseYaml.md",
                              "/zh2.0/reference/typescript/functions/prepareFuzzySearch.md",
                              "/zh2.0/reference/typescript/functions/prepareQuery.md",
                              "/zh2.0/reference/typescript/functions/prepareSimpleSearch.md",
                              "/zh2.0/reference/typescript/functions/renderMatches.md",
                              "/zh2.0/reference/typescript/functions/renderMath.md",
                              "/zh2.0/reference/typescript/functions/renderResults.md",
                              "/zh2.0/reference/typescript/functions/request.md",
                              "/zh2.0/reference/typescript/functions/requestUrl.md",
                              "/zh2.0/reference/typescript/functions/requireApiVersion.md",
                              "/zh2.0/reference/typescript/functions/resolveSubpath.md",
                              "/zh2.0/reference/typescript/functions/sanitizeHTMLToDom.md",
                              "/zh2.0/reference/typescript/functions/setIcon.md",
                              "/zh2.0/reference/typescript/functions/sortSearchResults.md",
                              "/zh2.0/reference/typescript/functions/stringifyYaml.md",
                              "/zh2.0/reference/typescript/functions/stripHeading.md"
                          ]
                      },
                      {
                          "text": "interfaces",
                          "collapsible": true,
                          "children": [
                              "/zh2.0/reference/typescript/interfaces/AjaxOptions.md",
                              "/zh2.0/reference/typescript/interfaces/BlockCache.md",
                              "/zh2.0/reference/typescript/interfaces/BlockSubpathResult.md",
                              "/zh2.0/reference/typescript/interfaces/CacheItem.md",
                              "/zh2.0/reference/typescript/interfaces/CachedMetadata.md",
                              "/zh2.0/reference/typescript/interfaces/CloseableComponent.md",
                              "/zh2.0/reference/typescript/interfaces/Command.md",
                              "/zh2.0/reference/typescript/interfaces/Constructor.md",
                              "/zh2.0/reference/typescript/interfaces/DataAdapter.md",
                              "/zh2.0/reference/typescript/interfaces/DataWriteOptions.md",
                              "/zh2.0/reference/typescript/interfaces/Debouncer.md",
                              "/zh2.0/reference/typescript/interfaces/EditorChange.md",
                              "/zh2.0/reference/typescript/interfaces/EditorPosition.md",
                              "/zh2.0/reference/typescript/interfaces/EditorRange.md",
                              "/zh2.0/reference/typescript/interfaces/EditorRangeOrCaret.md",
                              "/zh2.0/reference/typescript/interfaces/EditorScrollInfo.md",
                              "/zh2.0/reference/typescript/interfaces/EditorSelection.md",
                              "/zh2.0/reference/typescript/interfaces/EditorSelectionOrCaret.md",
                              "/zh2.0/reference/typescript/interfaces/EditorSuggestContext.md",
                              "/zh2.0/reference/typescript/interfaces/EditorSuggestTriggerInfo.md",
                              "/zh2.0/reference/typescript/interfaces/EditorTransaction.md",
                              "/zh2.0/reference/typescript/interfaces/EmbedCache.md",
                              "/zh2.0/reference/typescript/interfaces/EventListenerInfo.md",
                              "/zh2.0/reference/typescript/interfaces/EventRef.md",
                              "/zh2.0/reference/typescript/interfaces/FileStats.md",
                              "/zh2.0/reference/typescript/interfaces/FrontMatterCache.md",
                              "/zh2.0/reference/typescript/interfaces/FuzzyMatch.md",
                              "/zh2.0/reference/typescript/interfaces/HeadingCache.md",
                              "/zh2.0/reference/typescript/interfaces/HeadingSubpathResult.md",
                              "/zh2.0/reference/typescript/interfaces/Hotkey.md",
                              "/zh2.0/reference/typescript/interfaces/HoverParent.md",
                              "/zh2.0/reference/typescript/interfaces/ISuggestOwner.md",
                              "/zh2.0/reference/typescript/interfaces/Instruction.md",
                              "/zh2.0/reference/typescript/interfaces/KeymapContext.md",
                              "/zh2.0/reference/typescript/interfaces/KeymapEventHandler.md",
                              "/zh2.0/reference/typescript/interfaces/KeymapInfo.md",
                              "/zh2.0/reference/typescript/interfaces/LinkCache.md",
                              "/zh2.0/reference/typescript/interfaces/ListItemCache.md",
                              "/zh2.0/reference/typescript/interfaces/ListedFiles.md",
                              "/zh2.0/reference/typescript/interfaces/LivePreviewState.md",
                              "/zh2.0/reference/typescript/interfaces/Loc.md",
                              "/zh2.0/reference/typescript/interfaces/MarkdownPostProcessor.md",
                              "/zh2.0/reference/typescript/interfaces/MarkdownPostProcessorContext.md",
                              "/zh2.0/reference/typescript/interfaces/MarkdownPreviewEvents.md",
                              "/zh2.0/reference/typescript/interfaces/MarkdownSectionInformation.md",
                              "/zh2.0/reference/typescript/interfaces/MarkdownSubView.md",
                              "/zh2.0/reference/typescript/interfaces/ObsidianProtocolData.md",
                              "/zh2.0/reference/typescript/interfaces/OpenViewState.md",
                              "/zh2.0/reference/typescript/interfaces/PluginManifest.md",
                              "/zh2.0/reference/typescript/interfaces/Point.md",
                              "/zh2.0/reference/typescript/interfaces/Pos.md",
                              "/zh2.0/reference/typescript/interfaces/PreparedQuery.md",
                              "/zh2.0/reference/typescript/interfaces/Rect_2.md",
                              "/zh2.0/reference/typescript/interfaces/ReferenceCache.md",
                              "/zh2.0/reference/typescript/interfaces/RequestParam.md",
                              "/zh2.0/reference/typescript/interfaces/RequestUrlParam.md",
                              "/zh2.0/reference/typescript/interfaces/RequestUrlResponse.md",
                              "/zh2.0/reference/typescript/interfaces/SearchResult.md",
                              "/zh2.0/reference/typescript/interfaces/SearchResultContainer.md",
                              "/zh2.0/reference/typescript/interfaces/SectionCache.md",
                              "/zh2.0/reference/typescript/interfaces/Stat.md",
                              "/zh2.0/reference/typescript/interfaces/SubpathResult.md",
                              "/zh2.0/reference/typescript/interfaces/TagCache.md",
                              "/zh2.0/reference/typescript/interfaces/ViewState.md",
                              "/zh2.0/reference/typescript/interfaces/ViewStateResult.md",
                              "/zh2.0/reference/typescript/interfaces/WorkspaceWindowInitData.md"
                          ]
                      },
                      {
                          "text": "types",
                          "collapsible": true,
                          "children": [
                              "/zh2.0/reference/typescript/types/Constructor.md",
                              "/zh2.0/reference/typescript/types/EditorCommandName.md",
                              "/zh2.0/reference/typescript/types/KeymapEventListener.md",
                              "/zh2.0/reference/typescript/types/MarkdownViewModeType.md",
                              "/zh2.0/reference/typescript/types/Modifier.md",
                              "/zh2.0/reference/typescript/types/ObsidianProtocolHandler.md",
                              "/zh2.0/reference/typescript/types/SearchMatchPart.md",
                              "/zh2.0/reference/typescript/types/SearchMatches.md",
                              "/zh2.0/reference/typescript/types/SplitDirection.md",
                              "/zh2.0/reference/typescript/types/UserEvent.md",
                              "/zh2.0/reference/typescript/types/ViewCreator.md"
                          ]
                      }
                  ]
              },
              "/zh2.0/reference/manifest.md"
          ]
      },
      {
          "text": "Tutorials",
          "collapsible": true,
          "children": [
              "/zh2.0/tutorials/text-based-file-formats.md"
          ]
      },
      {
          "text": "示例",
          "collapsible": true,
          "children": [
              "/zh2.0/examples/insert-link.md"
          ]
      },
      "/zh2.0/developer-tools.md",
      "/zh2.0/contribute.md"
  ]
}

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
