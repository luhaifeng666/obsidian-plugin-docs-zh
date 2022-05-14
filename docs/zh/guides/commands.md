---
title: 指令
---

# Commands

Commands(指令) 是指用户可以通过 [Command Palette(命令面板)](https://help.obsidian.md/Plugins/Command+palette) 或者热键的方式来执行的操作。

![Command](/images/command.png)

要想在你的插件中添加指令，可以在 `onload()` 方法中调用 [`addCommand()`](../api/classes/Plugin_2.md#addcommand) 方法：

:::: code-group
::: code-group-item tsconfig.json
```ts {5-11}
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "print-greeting-to-console",
      name: "Print greeting to console",
      callback: () => {
        console.log("Hey, you!");
      },
    });
  }
}
```
:::
::::

## 带条件的指令

如果你的指令只能在某些条件下运行，可以考虑使用 [`checkCallback`](../api/interfaces/Command.md#checkcallback)。

`checkCallback` 执行两次。第一次执行预检以确定指令是否可以执行，第二次执行操作。

由于两次执行需要时间，你需要在每次调用时进行校验。

为了确定回调函数是否应该执行预检或者操作，回调函数中会接收 `checking` 参数。 

- 如果 `checking` 是 `true`，执行预检。
- 如果 `checking` 是 `false`，执行操作。

下例中的指令取决于所需要的值。在每次执行过程中，回调函数会检查该值是否存在，但仅在检查为假时执行该操作。

```ts {4}
this.addCommand({
  id: 'example-command',
  name: 'Example command',
  checkCallback: (checking: boolean) => {
    const value = getRequiredValue();

    if (value) {
      if (!checking) {
        doCommand(value);
      }

      return true
    }

    return false;
  },
});
```

## 编辑器指令

如果你的指令需要访问编辑器，你也可以使用 [`editorCallback`](../api/interfaces/Command.md#editorcallback) 方法，它的入参是当前活动的编辑器对象以及它的视图。

```ts {4}
this.addCommand({
  id: 'example-command',
  name: 'Example command',
  editorCallback: (editor: Editor, view: MarkdownView) => {
    const sel = editor.getSelection()

    console.log(`You have selected: ${sel}`);
  },
}
```

::: tip
编辑器指令仅在存在可用的活动编辑器时才会出现在命令面板中。
:::

如果编辑器回调函数仅在给定的确定条件下运行的话，可以考虑使用 [`editorCheckCallback`](../api/interfaces/Command.md#editorcheckcallback) 方法。要想获取更多信息，可以参考 [conditional commands](#conditional-commands)。

```ts {4}
this.addCommand({
  id: 'example-command',
  name: 'Example command',
  editorCheckCallback: (checking: boolean, editor: Editor, view: MarkdownView) => {
    const value = getRequiredValue();

    if (value) {
      if (!checking) {
        doCommand(value);
      }

      return true
    }

    return false;
  },
});
```

## 热键

用户可以通过快捷方式或者 _热键_ 来使用指令。尽管他们可以自行配置，你也可以给他们提供一个默认的热键。

:::warning
要避免为打算提供给其他人使用的插件设置默认热键。因为这很有可能跟其他插件定义的热键或者用户自定义的热键相冲突。
:::

在本例中，用户可以通过同时按住 Ctrl（或者 Mac 上的 Command）键和 Shift 键，然后按键盘上的字母 a 来运行指令。

```ts {4}
this.addCommand({
  id: 'example-command',
  name: 'Example command',
  hotkeys: [{ modifiers: ["Mod", "Shift"], key: "a" }],
  callback: () => {
    console.log('Hey, you!');
  },
});
```

::: tip
Mod 键是一个特殊的修饰键，在 Windows 和 Linux 上变为 Ctrl，在 macOS 上变为 Command。
:::
