---
title: 视图插件
---
<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 19:35:52
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-08-31 11:29:41
 * @Description: 
-->

# 视图插件

视图插件是一个可以让您访问编辑器[视窗](viewport.md)的[编辑器扩展](index.md)。

:::tip
本页旨在为 Obsidian 插件开发者们精炼 CodeMirror 6 的官方文档。要想获取更多关于状态管理的详细信息，请查阅 [Affecting the View](https://codemirror.net/docs/guide/#affecting-the-view) 这篇文档。
:::

## 前置准备

- 对[视窗](viewport.md)有基本了解。

## 创建一个视图插件

视图插件是在视窗被重新计算 __后__ 执行的编辑器扩展。这意味着它们可以访问视窗，这也意味着视图插件不能对视窗做出任何有巨大影响的改动。比如在文档中插入块或者换行符。

:::tip
如果您想做出影响编辑器垂直布局的变动，比如插入块或者换行符，您需要使用[状态字段](state-fields.md)。
:::

要想创建一个视图插件，需要创建一个继承自 [PluginValue](https://codemirror.net/docs/ref/#view.PluginValue) 的类，并将它传给 [ViewPlugin.fromClass()](https://codemirror.net/docs/ref/#view.ViewPlugin^fromClass) 方法。

```ts
import {
  ViewUpdate,
  PluginValue,
  EditorView,
  ViewPlugin,
} from "@codemirror/view";

class ExamplePlugin implements PluginValue {
  constructor(view: EditorView) {
    // ...
  }

  update(update: ViewUpdate) {
    // ...
  }

  destroy() {
    // ...
  }
}

export const examplePlugin = ViewPlugin.fromClass(ExamplePlugin);
```

以下三个视图插件的方法控制它的生命周期：

- `constructor()` 方法用于插件的初始化。
- `update()` 方法在发生改变时更新您的插件，比如在用户输入或者选择一些文本时。
- `destroy()` 方法在插件卸载后进行清理操作。

虽然例子中的视图插件生效了，但是它做的事情并不多。如果您想更好地理解导致插件更新的原因，您可以在 `update()` 方法中添加 `console.log(update);` 这行代码以在控制台中打印所有的更新内容。

## 下一步

从您的视图插件中提供[装饰](decorations.md)以更改文档的显示方式。
