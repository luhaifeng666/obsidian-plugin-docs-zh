---
title: 图标
---
<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-07 11:00:59
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-01-18 13:59:34
 * @Description: 
-->
# 图标

Obsidian API 中的一些 UI 组件允许您配置与之对应的icon。您可以从内置的 icon 中选择一个，或者添加自定义的icon。

## 浏览可用的 icon

浏览 [lucide.dev](https://lucide.dev/) 站点以查看所有可用的图标以及对应的名称。

## 绘制 icons

如果您想在您自定义的接口中使用 icon，可以使用 [`setIcon`](../reference/typescript/functions/setIcon.md) 方法去添加一个 icon 到 [HTML element](html-elements.md)。下例中展示了如何向状态栏中添加 icon：

::: code-group

```ts [main.ts]
import { Plugin, setIcon } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    const item = this.addStatusBarItem();
    setIcon(item, "info", 14);
  }
}
```

:::

## 添加您自己的 ico

要想在插件中添加自定义 icon，可以使用 [`addIcon`](../reference/typescript/functions/addIcon.md) 方法：

::: code-group

```ts [main.ts]
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

`addIcon` 接受两个参数:

1. 一个唯一标识您的 icon 的名称。
2. 不包含 `<svg>` 标签的 icon SVG 内容。

需要注意的是，您的图标需要适合 `0 0 100 100` 视图框才能被正确绘制。

在调用完 `addIcon` 后，您就可以像使用任意内置 icon 一样使用该 icon。
