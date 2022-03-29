# CodeMirror

Obsidian 使用 [CodeMirror](https://codemirror.net/) 作为底层文本编辑器。
:::danger 警告
仅当 [编辑器](../guides/editor.md) 无法满足你的需求时再去考虑 CodeMirror。

尽管 Obsidian 将底层的 CodeMirror 实例通过 API 的方式暴露给了插件, 但是大部分的插件不应该直接使用它。而是尽可能的使用 [`Editor`](../api/classes/Editor.md)，它是一种高级抽象，用于桥接 CodeMirror 不同版本间的破坏性改动。
:::

你可以在一个活动的 Markdown 窗口中访问到 CodeMirror:

```ts
const view = this.app.workspace.getActiveViewOfType(MarkdownView);

if (view) {
  const editor = view.sourceMode.cmEditor;
}
```

当用户打开一个新的编辑器时，你也可以使用 [`registerCodeMirror()`](../api/classes/Plugin_2.md#registercodemirror) 方法去注册一个回调函数。
