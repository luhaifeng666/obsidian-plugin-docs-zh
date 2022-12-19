<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-19 11:05:51
 * @Description: 
-->
# MarkdownSourceView

实现 `MarkdownSubView`, `HoverParent`, `MarkdownFileInfo`

## Constructor

```ts
constructor(view: MarkdownView);
```

## Properties

### app

```ts
app: App
```

### cmEditor

```ts
cmEditor: any
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
