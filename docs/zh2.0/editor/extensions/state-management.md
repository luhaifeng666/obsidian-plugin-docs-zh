---
title: 状态管理
---
<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-24 14:17:30
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-08-30 11:12:50
 * @Description: 
-->

# 状态管理

本页旨在介绍[编辑器扩展](index.md)的状态管理。

:::tip
本页旨在为 Obsidian 插件开发者们精炼 CodeMirror 6 官方文档。要想获取更多关于状态管理的详细信息，请查阅 [State and Updates](https://codemirror.net/docs/guide/#state-and-updates) 这篇文档。
:::

## 状态变化

在大部分的应用中，您可能会通过为一个属性或者变量分配一个新值的方式来更新状态。这样一来，原先的值就会永远丢失。

```ts
let note = "";
note = "Heading"
note = "# Heading"
note = "## Heading" // How to undo this?
```

为了支持对用户工作区的类似撤销以及重置更改的功能，诸如 Obsidian 的应用会保留所有的历史改动。要撤回改动，您可以返回改动前的时间点。

|   | State      |
|---|------------|
| 0 |            |
| 1 | Heading    |
| 2 | # Heading  |
| 3 | ## Heading |

在 TypeScript 中，您会得到这样的结果：

```ts
const changes: ChangeSpec[] = [];

changes.push({ from: 0, insert: "Heading" });
changes.push({ from: 0, insert: "# " });
changes.push({ from: 0, insert: "#" });
```

## Transactions

试想一个在按下双引号 `"` 后会在选中文本前后加上该标点符号的功能。实现该功能的一种方式是：

1. 在选中的文本前添加 `"`。
2. 在选中的文本后添加 `"`。

注意这种实现包含了 __两次__ 操作。如果您将这两个操作添加到了撤销历史记录中，那么用户将需要撤回 __两次__，每次撤回一个双引号。为了避免这个问题，是否可以将这两次改动合并成一次？

在编辑器扩展中，一组发生在一起的状态变化被称之为 __transaction__。

如果结合您到目前为止所学的知识，如果允许 transaction 只包含单个状态更改, 那么可以将状态视为 transaction 的 _历史_。

在编辑器扩展中，将所有这些功能放在一起来实现环绕特性，下面是你如何添加或分派事务到编辑器视图的方法:

```ts
view.dispatch({
  changes: [
    { from: selectionStart, insert: `"` },
    { from: selectionEnd, insert: `"` }
  ]
});
```

## 下一步

在本页中，您了解了如何将状态建模为一系列状态更改，以及如何将它们分组到事务中。

要想知道如何管理您编辑器中的自定义状态，请查阅 [状态字段](state-fields.md) 这篇文档。
