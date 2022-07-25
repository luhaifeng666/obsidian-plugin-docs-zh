<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-03-24 23:00:24
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-07-25 22:47:54
 * @Description: 
-->
# ItemView

继承自 `View`

## Constructor

```ts
constructor(leaf: WorkspaceLeaf);
```

## Properties

### contentEl

```ts
contentEl: HTMLElement
```

## Methods

### onMoreOptionsMenu

```ts
onMoreOptionsMenu(menu: Menu): void;
```

### addAction

```ts
addAction(icon: string, title: string, callback: (evt: MouseEvent) => any, size?: number): HTMLElement;
```

### onHeaderMenu

```ts
onHeaderMenu(menu: Menu): void;
```
