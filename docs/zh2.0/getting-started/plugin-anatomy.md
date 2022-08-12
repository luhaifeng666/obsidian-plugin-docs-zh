<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-07 11:00:59
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-12 11:18:59
 * @Description: 
-->
# 插件剖析

[`Plugin`](../reference/typescript/classes/Plugin_2.md) 类中定义了插件的生命周期，并且将操作暴露给其他插件：

:::: code-group
::: code-group-item main.ts

```ts {1,3}
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    // Configure resources needed by the plugin.
  }
  async onunload() {
    // Release any resources configured by the plugin.
  }
}
```

:::
::::

## 插件生命周期

[`onload()`](../reference/typescript/classes/Component.md#onload) 生命周期函数在用户激活 Obsidian 插件时触发。这将是您设置插件大部分功能的地方。

[`onunload()`](../reference/typescript/classes/Component.md#onunload) 生命周期函数在插件被禁用时触发。插件所调用的任何资源必须在这里得到释放，以防止在您的插件被禁用后对 Obsidian 的性能产生影响。

为了更好的理解这些方法会在何时被调用，当插件被加载或者被卸载时，您可以在控制台中打印一条消息。控制台是个很有用的工具，可以让开发者们监控他们代码的状态。

要想打开控制台:

1. 通过在 Windows 和 Linux 系统中按下组合键 Ctrl+Shift+I，或者在 macOS 系统中按下组合键 Cmd-Option-I 的方式打开或关闭开发者工具。
2. 在开发者工具的窗口中点击 Console 标签打开控制台。

:::: code-group
::: code-group-item main.ts

```ts title="main.ts"
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    // highlight-next-line
    console.log('loading plugin')
  }
  async onunload() {
    // highlight-next-line
    console.log('unloading plugin')
  }
}
```

:::
::::
