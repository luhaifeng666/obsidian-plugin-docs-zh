<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-19 11:04:46
 * @Description: 
-->
# MarkdownEditView

实现 `MarkdownSubView`, `HoverParent`, `MarkdownFileInfo`

这是提供给移动端 Obsidian 的编辑器，也是即将推出的WYSIWYG编辑器。

## Constructor

```ts
constructor(view: MarkdownView);
```

## Properties

### app

```ts
app: App
```

### hoverPopover

```ts
hoverPopover: HoverPopover
```

## Methods

### clear

```ts
clear(): void;
```

### get

```ts
get(): string;
```

### set

```ts
set(data: string, clear: boolean): void;
```

### getSelection

```ts
getSelection(): string;
```

### getScroll

```ts
getScroll(): number;
```

### applyScroll

```ts
applyScroll(scroll: number): void;
```
