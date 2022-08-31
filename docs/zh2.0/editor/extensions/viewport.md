---
title: 视窗
---
<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-07 11:00:59
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-08-31 10:49:36
 * @Description: 
-->

# 视窗

Obsidian 编辑器支持上万行的 [庞大文件](https://codemirror.net/examples/million/)。其中一个可能的原因是因为编辑器只渲染可见的（多一点点）的内容。

试想下您想编辑一个内容多到一屏无法展示完整的大型文档。Obsidian 编辑器创建了一个可以在文档中移动的 “窗口”，只渲染在这个“窗口”里的内容（而忽略窗口以外的内容）。这个窗口被称之为编辑器的 __视窗__。

![Viewport](/images/img/viewport.svg)

无论何时当用户滚动浏览文档，或者是文档内容发生了变化，视图就会过期，需要重新计算。

如果您想构建一个基于视图的编辑器扩展，可以查阅[视图插件](view-plugins.md)这篇文档。

:::tip
本页旨在为 Obsidian 插件开发者们精炼 CodeMirror 6 官方文档。想要获取更多关于状态管理的内容，请查阅 [Viewport](https://codemirror.net/docs/guide/#viewport) 这篇文档。
:::
