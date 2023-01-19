---
title: 功能区操作
---
<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-07 11:00:59
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-01-19 23:06:39
 * @Description: 
-->
# 功能区操作

在 Obsidian 界面左侧的侧边栏被称之为 _功能区_。除类似于打开首选项或者其他 vault(库) 等系统操作之外，功能区还可以托管插件定义的操作。

要想添加操作到功能区，使用 [`addRibbonIcon()`](../reference/typescript/classes/Plugin_2.md#addribbonicon) 事件:

::: code-group

```ts [main.ts] {5-7}
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addRibbonIcon("dice", "Print to console", () => {
      console.log("Hello, you!");
    });
  }
}
```

:::

第一个参数指定使用哪个图标。想要获取更多关于可使用的图标以及如何添加自定义图表的信息，可以查阅 [Icons](icons.md) 这篇文档。
