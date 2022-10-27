<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-10-27 09:51:39
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

### addAction

```ts
addAction(icon: string, title: string, callback: (evt: MouseEvent) => any, size?: number): HTMLElement;
```
