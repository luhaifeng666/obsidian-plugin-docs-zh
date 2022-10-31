<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-10-31 10:05:32
 * @Description: 
-->
# MarkdownEditView

实现 `MarkdownSubView`, `HoverParent`

这是提供给移动端 Obsidian 的编辑器，也是即将推出的WYSIWYG编辑器。

## Constructor

```ts
constructor(view: MarkdownView);
```

## Properties

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
