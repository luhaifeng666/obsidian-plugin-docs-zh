<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-11-03 09:52:06
 * @Description: 
-->
# MarkdownSourceView

实现 `MarkdownSubView`, `HoverParent`

## Constructor

```ts
constructor(view: MarkdownView);
```

## Properties

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
