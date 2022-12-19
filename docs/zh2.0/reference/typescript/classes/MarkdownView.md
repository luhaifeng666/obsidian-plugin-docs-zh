<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-19 11:06:29
 * @Description: 
-->
# MarkdownView

继承自 `TextFileView`

实现 `MarkdownFileInfo`

## Constructor

```ts
constructor(leaf: WorkspaceLeaf);
```

## Properties

### editor

```ts
editor: Editor
```

### previewMode

```ts
previewMode: MarkdownPreviewView
```

### currentMode

```ts
currentMode: MarkdownSubView
```

### hoverPopover

```ts
hoverPopover: HoverPopover
```

## Methods

### getViewType

```ts
getViewType(): string;
```

### getMode

```ts
getMode(): MarkdownViewModeType;
```

### getViewData

```ts
getViewData(): string;
```

从编辑器中获取数据。它将被调用以将编辑器中的内容保存到文件中。

### clear

```ts
clear(): void;
```

清空编辑器。该方法通常在我们即将完全打开一个新文件时被调用，因此最好清除任何编辑器的状态，如撤消重做历史，以及与先前文件内容关联的任何缓存/索引。

### setViewData

```ts
setViewData(data: string, clear: boolean): void;
```

将数据写入编辑器。该方法常被用来加载文件内容。

如果将 clear 的值设置为 true，这意味着我们即将打开一个新的文件。

在那种情况下，您应该调用 clear() 方法，或者实现一个更有效的设置新数据时的清空机制

### showSearch

```ts
showSearch(replace?: boolean): void;
```
