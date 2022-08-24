---
title: 自定义视图
---

# 自定义视图

视图决定 Obsidian 如何去展示内容。比如 file explorer, graph view, 以及 Markdown view 等都是视图。当然，您也可以为自己的插件创建一个可以更好的展示其内容的自定义视图。

要想创建一个自定义视图，需要创建一个继承自 [`ItemView`](../api/classes/ItemView.md) 接口的类：

```ts view.ts
import { ItemView, WorkspaceLeaf } from "obsidian";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_EXAMPLE;
  }

  getDisplayText() {
    return "Example view";
  }

  async onOpen() {
    const container = this.containerEl.children[1];
    container.empty();
    container.createEl("h4", { text: "Example view" });
  }

  async onClose() {
    // Nothing to clean up.
  }
}
```

::: tip
要想获取更多关于如何使用 `createEl()` 方法的信息，可以查看 [HTML elements](html-elements.md)。
:::

每个视图都由一个唯一的名称来标识，并且有几个操作需要您指定要使用的视图。把它抽成一个常量，`VIEW_TYPE_EXAMPLE`，这是一个不错的方式。稍后您将在本指南中看到它。

- `getViewType()` 用于返回当前视图的唯一标识。
- `getDisplayText()` 用于返回一个更加人性化的视图名称。
- `onOpen()` 在视图打开时调用，它负责构建视图的内容。
- `onClose()` 在视图需要被关闭时调用，它负责释放视图占用的资源。

自定义视图需要在插件被启用时注册，并且在插件被禁用时释放。

```ts {6-9,17} main.ts
import { Plugin } from "obsidian";
import { ExampleView, VIEW_TYPE_EXAMPLE } from "./view";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.registerView(
      VIEW_TYPE_EXAMPLE,
      (leaf) => new ExampleView(leaf)
    );

    this.addRibbonIcon("dice", "Activate view", () => {
      this.activateView();
    });
  }

  async onunload() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);
  }

  async activateView() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);

    await this.app.workspace.getRightLeaf(false).setViewState({
      type: VIEW_TYPE_EXAMPLE,
      active: true,
    });

    this.app.workspace.revealLeaf(
      this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0]
    );
  }
}
```

[`registerView()`](../api/classes/Plugin_2.md#registerview) 的第二个参数是一个工厂函数，用于返回您想注册的视图实例。

:::warning
永远不要在插件中管理对视图的引用，因为 Obsidian 可能会调用视图工厂函数多次。为了避免视图中的副作用，在需要访问视图实例时使用 `getLeavesOfType()`。

```ts
this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE).forEach((leaf) => {
  if (leaf.view instanceof ExampleView) {
    // Access your view instance.
  }
});
```

:::

在 `onunload()` 方法中，确保在插件被禁用时清理视图：

- 通过调用 `close()` 方法允许视图自行清理。
- 分离使用视图的所有节点。

在您为插件注册了一个自定义视图后，您需要为用户提供一个激活它的方式。`activateView()` 是个很实用的方法，它做了以下三件事情：

- 使用自定义视图分离所有节点。
- 将自定义视图添加到正确的节点上。
- 显示包含自定义视图的节点。

:::tip
activateView() 方法限制您的插件一次最多显示一个视图。尝试注释掉对 detachLeavesOfType() 的调用，以允许用户创建多个视图。
:::

用户如何激活视图的方式取决于您。这是使用 [ribbon action](./ribbon-actions.md) 的例子，当然您也可以使用 [指令](./commands.md)。
