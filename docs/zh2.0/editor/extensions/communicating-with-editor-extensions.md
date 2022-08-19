<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-07 11:00:59
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-19 13:47:40
 * @Description: 
-->
# 与编辑器扩展通信

当您创建了编辑器的扩展后，您可能想要让外部编辑器与之通信。比如通过[指令](../../user-interface/commands.md)或者[功能栏操作](../../user-interface/ribbon-actions.md)

You can access the CodeMirror 6 editor from a [MarkdownView](../../reference/typescript/classes/MarkdownView.md). However, since the Obsidian API doesn't actually expose the editor, you need to tell TypeScript to trust that it's there, using `@ts-expect-error`.

您可以从 [Markdown 视图](../../reference/typescript/classes/MarkdownView.md)中访问 CodeMirror 6 编辑器。但是，由于 Obsidian API 实际上并未公开编辑器，因此您需要使用 `@ts-expect-error` 绕过 Typescript 的验证。

```ts
import { EditorView } from "@codemirror/view";

// @ts-expect-error, not typed
const editorView = view.editor.cm as EditorView;
```

## 视图插件

您可以通过 `EditorView.plugin()` 方法访问[视图插件](view-plugins.md)实例。

:::: code-group
:::code-group-item main.ts

```ts {8-12}
this.addCommand({
  id: "example-editor-command",
  name: "Example editor command",
  editorCallback: (editor, view) => {
    // @ts-expect-error, not typed
    const editorView = view.editor.cm as EditorView;

    const plugin = editorView.plugin(examplePlugin);

    if (plugin) {
      plugin.addPointerToSelection(editorView);
    }
  },
});
```

:::
::::

## 状态字段

您可以在编辑器视图内直接派发变动以及[state effects](state-fields.md#dispatching-state-effects)。

:::: code-group
:::code-group-item main.ts

```ts {8-12}
this.addCommand({
  id: "example-editor-command",
  name: "Example editor command",
  editorCallback: (editor, view) => {
    // @ts-expect-error, not typed
    const editorView = view.editor.cm as EditorView;

    editorView.dispatch({
      effects: [
        // ...
      ]
    });
  },
});
```
:::
::::
