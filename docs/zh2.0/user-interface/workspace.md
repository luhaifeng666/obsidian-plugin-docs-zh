---
title: 工作区
---
<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-07 11:00:59
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-24 13:53:30
 * @Description: 
-->
# 工作区

Obsidian 允许您配置在任何指定的时间对您可见的内容。当您不需要文件搜索的时候隐藏它、并列显示多个文档、或者在您编辑文档的时候显示文档大纲。关于应用内的可见内容配置窗口在 _workspace_ 配置项中。

workspace 是[树形结构](https://en.wikipedia.org/wiki/Tree_(data_structure))的, 树上的每一个节点都是一个 [工作区项](../reference/typescript/classes/WorkspaceItem.md)。 有两种类型的工作区项： [_父节点_](../reference/typescript/classes/WorkspaceParent.md) and [_叶子节点_](../reference/typescript/classes/WorkspaceLeaf.md)。 两者之间的主要区别在于 _parents_ 可以包含 _leaves_ 以及其他 _parents_ ，而 _leaves_ 不可以包含任何其他项。

_parents_ 也存在两种类型， [_splits_](../reference/typescript/classes/WorkspaceSplit.md) 以及 [_tabs_](../reference/typescript/classes/WorkspaceTabs.md), 用来决定其中的子项如何呈现给用户:

<img src="https://mermaid.ink/img/pako:eNp1j8EOgjAMhl9l6QkSeIEdTFS8eYODml0qG7LIGBkjxix7d4eKqAk9NO33f2lSB6XmAihUjb6VNRpLioy1JFTfNdK6fOz-i5A0XZF1FO0FVnH8H2yWgu0cvCKL594Vofl5f5qH3xMfflzgp4lDAkoYhZKHf9xoMbC1UIIBDSNHc2XAWh-8oeNoxY5Lqw3QCpteJICD1fm9LYFaM4hJyiReDKq35R9DHl05" />

- split 沿垂直或水平方向依次排列其子项。
- tabs 每次只显示一个子项。

在 workspace 下面有三种特殊的 split: _left_, _right_, and _root_ 。下图是典型的 workspace 示例：

<img src="https://mermaid.ink/img/pako:eNp9kcFqwzAQRH9F7CmB5Ad8KKRxCm1zagK96LK11rGIbRlZJhThf69Wjt24DfFhWGaeRyvkITOKIIG8NJesQOvEMZW1CN-nsee2wYzEev0k9pQ7zyLaptSuv8d8GOM8yyNGn4oAsU7UwMVyRsowHPGr9SzXktGLwGax2BPmy-Wd7Pk3G9K4Dydbf7jZarLTvz9so72bnzGYL__K4z04sjzdbj0Akx2h13npPHx7FL6PIaygIluhVuHRPKMSXEEVSUjCqNCeJci6D1zXKHS0U9oZC0mOZUsrwM6Zw3edQeJsRyOUajxZrK5U_wPvVaWm" />

leaf 是一个能以不同形式展示内容的窗口。leaf 的类型决定了内容该要如何展示，以及对应哪个具体的 _view_。举个例子，一个 `graph` 类型的 leaf 对应显示 [graph view](https://help.obsidian.md/Plugins/Graph+view)。

## Splits

默认情况下，root split 按照垂直方向排列。当您创建了一个新的 leaf，Obsidian 在用户界面中创建一个新列。当您拆分一个 leaf，被拆分出来的 leaves 会被添加到新的 split 中去。当没有限制 root split 的层级时，实际上每个层级的实用性会降低。

<img src="https://mermaid.ink/img/pako:eNp9kE1vwjAMhv9K5FMrwQHYLj1MGoIbJ-Doi9c4o6JNkHGFUNX_vjQaQ-PLh9jx-9hvlA7KYBkKcHU4lTsSNdsFehNDQtA5uyDcIazjxRwPdaWIPvtK7RyhR38Lm_H4w9RMbpJlq5jy_CkxvRJX5tMpy50jDd1bw4SmbYnrNsPZP9IHt9n_96SRP_Htlfh-EWEEDUtDlY0_1g0ogu64YYQilpZkj4C-j1x7sKS8tJUGgcJRfeQRUKthc_YlFCotX6BFRd9CzS_V_wCEuYMl" />

左右的 splits 的工作方式略有不同。当您拆分一个 leaf 到侧边栏，Obsidian 会生成一个新的 tabs，并将新的 leaf 插入到其中。事实上，这意味着它们在任何时候只能拥有三层的 workpace，并且直接子级必须是 tabs 。

<img src="https://mermaid.ink/img/pako:eNp1kb1ugzAURl8F3QmkZMAkC0OnZMuUZvRyg6-DFcCRuaiqEO9eJ6TEKdSDf46OPn-WeyisIshBV_arKNFxdNrJJvKjvVWG017C0VxKHo9SNvGZtHWUSBhGj_Hcpv3Jz09QEeo0jg9-SZIXEi8UXhCt1x9jRhD3gI-cJSjeEsS8Imom995QhA3vIPtbOZtX3szRdvEVYnqFCK6cCmdLcPNPQiBnk7yFFdTkajTKf1Z_VyRwSTVJyP1WobtKkM3gve6mkGmvDFsHucaqpRVgx_bzuykgZ9fRr7QzeHFYP63hBwwdoww" />

## 检查工作区

您可以通过 [App](../reference/typescript/classes/App.md) 对象访问工作区。下例中打印了在工作区中每个 leaf 的类型:

```ts  {6-8}
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addRibbonIcon("dice", "Print leaf types", () => {
      this.app.workspace.iterateAllLeaves((leaf) => {
        console.log(leaf.getViewState().type);
      });
    });
  }
}
```

## Leaf lifecycle

插件可以向 workspace 中添加任意类型的 leaf，也可以通过 [自定义视图][custom views](views.md)。以下是一些添加 leaf 到 workspace 的方式。想要了解更多，可以查阅 [`Workspace`](../reference/typescript/classes/Workspace.md) 这篇文档。

- 如果您想在根 split 中添加一个新的 leaf， 使用 [`workspace.getLeaf(true)`](../reference/typescript/classes/Workspace.md#getleaf) 方法.
- 如果您想在侧边栏中添加任意一个新的 leaf，可以使用 [`workspace.getLeftLeaf()`](../reference/typescript/classes/Workspace.md#getleftleaf) 以及 [`workspace.getRightLeaf()`](../reference/typescript/classes/Workspace.md#getrightleaf)方法。两者都可以让您决定是否需要将 leaf 添加到新的 split 上。

您也可以使用 [`createLeafInParent()`](../reference/typescript/classes/Workspace.md#createleafinparent)方法在您选择的 split 中显式的添加 leaf。

除非明确删除，否则即使在插件被禁用后，插件添加到工作区上的任何 leaf 依旧会被保留。插件负责删除它们添加到 工作区的任何叶子节点。

要想从 workspace 中删除一个 leaf，在您想要删除的 leaf 上调用 [`detach()`](../reference/typescript/classes/WorkspaceLeaf.md#detach)方法。您也可以通过使用 [`detachLeavesOfType()`](../reference/typescript/classes/Workspace.md#detachleavesoftype).

## Leaf 组

您可以使用 [linked panes](https://help.obsidian.md/User+interface/Workspace/Panes/Linked+pane) 方法来分配多个 leaf 到同一个组中以创建 [`setGroup()`](../reference/typescript/classes/WorkspaceLeaf.md#setgroup).

```ts
leaves.forEach((leaf) => leaf.setGroup("group1");
```
