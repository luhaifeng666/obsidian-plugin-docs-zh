<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-01-01 10:34:35
 * @Description: 
-->
# Command

## Properties

### id

```ts
id: string
```

全局唯一的 ID 用以识别改指令。

### name

```ts
name: string
```

用于搜索的名称（命名要友好，见名知意）。

### icon

```ts
icon: string
```

在 toolbar 中使用的 icon ID。

### mobileOnly

```ts
mobileOnly: boolean
```

### repeatable

```ts
repeatable: boolean
```

是否在按住热键的时候需要重复触发该指令，默认值为 false。

### callback

```ts
callback: () => any
```

单纯的回调函数，全局可触发。

### checkCallback

```ts
checkCallback: (checking: boolean) => boolean | void
```

复杂的回调函数，会覆盖 callback。
用于 “检查” 您的指令是否可以在当前环境下执行。
比如，如果您的指令要求当前选中的窗口是 MarkdownSourceView，那么当条件符合时您仅需要返回 true。返回 false 或者 undefined 将导致指令不会显示在命令面板中。

### editorCallback

```ts
editorCallback: (editor: Editor, ctx: MarkdownView | MarkdownFileInfo) => any
```

只有当用户在编辑器中是才会被触发的指令回调。
会覆盖 `callback` 以及 `checkCallback`。

### editorCheckCallback

```ts
editorCheckCallback: (checking: boolean, editor: Editor, ctx: MarkdownView | MarkdownFileInfo) => boolean | void
```

只有当用户在编辑器中是才会被触发的指令回调。
会覆盖 `editorCallback`、 `callback` 以及 `checkCallback`。

### hotkeys

```ts
hotkeys: Hotkey[]
```

设置默认热键。建议插件尽量避免设置默认热键，以避免与用户设置的其他热键产生冲突，尽管自定义热键拥有更高的优先级。
