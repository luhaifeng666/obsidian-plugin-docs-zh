<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-03-24 23:00:24
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-08 22:33:55
 * @Description: 
-->
---
title: 事件
---

# Events

Obsidian 中的许多接口允许你订阅整个应用中的事件，例如当用户对文件进行更改时。

每当插件卸载时，任何注册的事件处理程序都需要被分离。确保发生这种情况的最安全方法是使用 [`registerEvent()`](./reference/typescript/classes/Component.md#registerevent) 方法。

:::: code-group
::: code-group-item tsconfig.json
```ts {5-7}
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.registerEvent(this.app.vault.on('create', () => {
      console.log('a new file has entered the arena')
    }));
  }
}
```
:::
::::

## 定时事件

如果你想定时重复调用一个方法的话，可以使用 [`window.setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) 函数和 [`registerInterval()`](../api/classes/Component.md#registerinterval) 方法。

下例中实现了在状态栏中显示当前时间，并且每秒更新：

```ts {11-13}
import { moment, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  statusBar: HTMLElement;

  async onload() {
    this.statusBar = this.addStatusBarItem();

    this.updateStatusBar();

    this.registerInterval(
      window.setInterval(() => this.updateStatusBar(), 1000)
    );
  }

  updateStatusBar() {
    this.statusBar.setText(moment().format("H:mm:ss"));
  }
}
```

:::tip
[Moment](https://momentjs.com/) 是一个非常流行的用来处理时间跟日期的 Javascript 库。Obsidian 内部使用了这个库，你无需手动安装。你可以直接从 Obsidian API 中引入：

```ts
import { moment } from "obsidian";
```

:::
