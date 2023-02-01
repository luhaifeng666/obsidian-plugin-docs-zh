<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:48:11
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-02-01 21:03:45
 * @Description: 
-->
# UIEvent

简单的用户界面事件。

## Properties

### targetNode

```ts
targetNode: Node
```

### win

```ts
win: Window
```

### doc

```ts
doc: Document
```

## Methods

### instanceOf

```ts
instanceOf: <T>(type: new (...data: any[]) => T) => this is T
```

跨窗口的 instanceof 检查，用于替代在 UIEvents 上的 instanceof 检查。
