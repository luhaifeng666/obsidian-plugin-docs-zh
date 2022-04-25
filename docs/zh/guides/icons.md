# Icons

Obsidian API 中的一些 UI 组件允许你配置与之对应的icon。你可以从内置的 icon 中选择一个，或者添加自定义的icon。

## 浏览可用的 icon

如果你想查看所有可用的 icon 以及它们相关的名称，你可以安装由 mgmeyers 提供的 [Icon Swapper](https://github.com/mgmeyers/obsidian-icon-swapper) 插件。尽管它的主要目的是使用自定义 icon 替换内置 icon，同时它也是 Obsidian 中可用图标的列表。

## 绘制 icons

如果你想在你自定义的接口中使用 icon，可以使用 [`setIcon`](../api/functions/setIcon.md) 方法去添加一个 icon 到 [HTML element](html-elements.md)。下例中展示了如何向状态栏中添加 icon：

:::: code-group
::: code-group-item main.ts
```ts
import { Plugin, setIcon } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    const item = this.addStatusBarItem();
    setIcon(item, "info", 14);
  }
}
```
:::
::::

## 添加你自己的 icon

要想在插件中添加自定义 icon，可以使用 [`addIcon`](../api/functions/addIcon.md) 方法：

:::: code-group
::: code-group-item main.ts
```ts
import { addIcon, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    addIcon("circle", `<circle cx="50" cy="50" r="50" fill="currentColor" />`);

    this.addRibbonIcon("circle", "Click me", () => {
      console.log("Hello, you!");
    });
  }
}
```
:::
::::

`addIcon` 接受两个参数:

1. 一个唯一标识你的 icon 的名称。
2. 不包含 `<svg>` 标签的 icon SVG 内容。

需要注意的是，你的图标需要适合 `0 0 100 100` 视图框才能被正确绘制。

在调用完 `addIcon` 后，你就可以像使用任意内置 icon 一样使用该 icon。
