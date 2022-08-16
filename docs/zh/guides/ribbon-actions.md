<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-03-24 23:00:24
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-15 11:08:06
 * @Description: 
-->
# 功能区操作

在 Obsidian 界面左侧的侧边栏被称之为 _功能区_。除类似于打开首选项或者其他 vault(库) 等系统操作之外，功能区还可以托管插件定义的操作。

要想添加操作到功能区，使用 [`addRibbonIcon()`](../api/classes/Plugin_2.md#addribbonicon) 事件：

:::: code-group
::: code-group-item main.ts

```ts {5-7}

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
::::

第一个参数指定使用哪个图标。想要获取更多关于可使用的图标以及如何添加自定义图表的信息，可以查阅 [Icons](icons.md) 这篇文档。
