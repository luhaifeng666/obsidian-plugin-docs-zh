---
title: 编辑器扩展
---
<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-07 11:00:59
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-25 10:40:16
 * @Description: 
-->

# 编辑器扩展

编辑器扩展可以让您自行改变在 Obsidian 中编辑文档的体验。本页解释了什么是编辑器扩展，以及在何时使用它们。

Obsidian 中的 Markdown 编辑器底层使用的是 CodeMirror 6 (CM6)。跟 Obsidian 一样，CM6 也有自己的插件，称之为 __扩展（extensions）__。换句话说，Obsidian 的 __编辑器扩展__ 和 __CodeMirror 6 的扩展__ 是一回事。

构建编辑器扩展所用到的 API 有些不合常规，因此在您开始使用之前需要您对其架构有基本的认知。本篇文档旨在为您提供足够的背景信息以及实例以供您入门。如果您想要了解更多关于构建编辑器扩展的内容，可以查阅 [CodeMirror 6 documentation](https://codemirror.net/docs/) 这篇文档。

## 我是否需要一个编辑器扩展？

构建编辑器扩展可能会是个挑战，因此在您开始构建之前，您需要考虑是否真的需要它。

- 如果您想改变阅读视图下如何将 Markdown 转换为 HTML，可以考虑构建一个 [Markdown post processor](../../editor/markdown-post-processing.md)。
- 如果您想改变文档在实时预览时的外观和感觉，您需要构建一个编辑器扩展。

## 注册编辑器扩展

CodeMirror 6 (CM6) 是使用 web 技术编辑代码的强大引擎。作为它的核心，编辑器本身具有最少的功能集。任何您期望在流行的编辑器上可以获得功能都可以作为 __扩展__ 供您挑选。尽管 Obsidian 附带了许多开箱即用的扩展，您依旧可以注册属于您自己的。

要想注册一个编辑器扩展，需要在您的 Obsidian 插件的 `onload` 方法中使用 [registerEditorExtension](../../reference/typescript/classes/Plugin_2.md#registereditorextension)。

```ts
onload() {
  this.registerEditorExtension([examplePlugin, exampleField]);
}
```

尽管 CM6 支持多种扩展，但其中两个最常见的分别是 [View plugins](view-plugins.md) 以及 [State fields](state-fields.md)。

```ts
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
