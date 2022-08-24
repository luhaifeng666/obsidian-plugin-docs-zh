<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 19:36:06
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-24 08:49:32
 * @Description: 
-->

# 编辑器

[`Editor`](../api/classes/Editor.md) 类透出在编辑模式下读取以及操作 Markdown 文档的操作。

如果您想在命令中访问编辑器，可以使用 [editorCallback](./commands.md#editor-commands)。

如果您想在其他地方使用编辑器，您可以通过活动视图访问到它。

```ts {5}
const view = this.app.workspace.getActiveViewOfType(MarkdownView);

// Make sure the user is editing a Markdown file.
if (view) {
  const cursor = view.editor.getCursor();

  // ...
}
```

::: tip
Obsidian 使用 [CodeMirror](https://codemirror.net/) (CM) 作为底层文本编辑器，并且将 CodeMirror 作为 API 的一部分暴露出来。`Editor` 作为CM5（桌面端）和 CM6（移动端）中的桥接功能而被抽象出来。使用 `Editor` 而不是直接访问 CodeMirror，那么您的插件就可以在两个平台上都可以运行。
:::

## 在光标处插入文本

[`replaceRange()`](../api/classes/Editor.md#replacerange) 方法用于替换选中的文本。如果您没有选中文本，那么文本将会在光标处被插入。

下例中的指令会将当前日期插入光标所在位置：

```ts
import { Editor, moment, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "insert-todays-date",
      name: "Insert today's date",
      editorCallback: (editor: Editor) => {
        editor.replaceRange(moment().format("YYYY-MM-DD"), editor.getCursor());
      },
    });
  }
}
```

![Insert today's date](/images/editor-todays-date.gif)

## 替换当前选中的内容

如果您想编辑选中的文本，使用 [`replaceSelection()`](../api/classes/Editor.md#replaceselection) 方法去替换选中的文本。

下例中的指令读取当前选中的内容并替换成大写：

:::: code-group
::: code-group-item main.ts
```ts {9-10}
import { Editor, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "convert-to-uppercase",
      name: "Convert to uppercase",
      editorCallback: (editor: Editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection(selection.toUpperCase());
      },
    });
  }
}
```
:::
::::

![Convert to uppercase](/images/editor-uppercase.gif)
