<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-19 11:03:42
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
addAction(icon: IconName, title: string, callback: (evt: MouseEvent) => any): HTMLElement;
```
