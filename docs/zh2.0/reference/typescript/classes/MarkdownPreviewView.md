<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-11-01 09:53:43
 * @Description: 
-->
# MarkdownPreviewView

继承自 `MarkdownRenderer`

实现 `MarkdownSubView`, `MarkdownPreviewEvents`

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### containerEl

```ts
containerEl: HTMLElement
```

## Methods

### get

```ts
get(): string;
```

### set

```ts
set(data: string, clear: boolean): void;
```

### clear

```ts
clear(): void;
```

### rerender

```ts
rerender(full?: boolean): void;
```

### getScroll

```ts
getScroll(): number;
```

### applyScroll

```ts
applyScroll(scroll: number): void;
```
