# 状态栏

要想在状态栏中创建新块，可以在 `onload()` 事件中调用 [`addStatusBarItem()`](../api/classes/Plugin_2.md#addstatusbaritem) 方法。你可以将自定义元素插入到 `addStatusBarItem()` 事件返回的 [HTML 元素](html-elements.md) 中。

:::warning Obsidian 手机客户端
手机端 Obsidian App [**不支持**](https://discord.com/channels/686053708261228577/707816848615407697/832321402106544179) 自定义状态栏项目。
:::

:::: code-group
::: code-group-item main.ts
```ts
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    const item = this.addStatusBarItem();
    item.createEl("span", { text: "Hello from the status bar 👋" });
  }
}
```
:::
::::

:::tip
想要知道更多关于如何使用 `createEl()` 事件的信息，可以查阅 [HTML 元素](html-elements.md) 这篇文档。
:::

你可以通过多次调用 `addStatusBarItem()` 方法来添加多个状态栏项目。由于 Obsidian 在它们之间添加了间隙，因此如果你需要控制间距，则需要在同一个状态栏项上创建多个 HTML 元素。

:::: code-group
::: code-group-item main.ts
```ts
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    const fruits = this.addStatusBarItem();
    fruits.createEl("span", { text: "🍎" });
    fruits.createEl("span", { text: "🍌" });

    const veggies = this.addStatusBarItem();
    veggies.createEl("span", { text: "🥦" });
    veggies.createEl("span", { text: "🥬" });
  }
}
```
:::
::::

上述示例在状态栏中的显示效果如下图所示：

![Status bar](/images/status-bar.png)
