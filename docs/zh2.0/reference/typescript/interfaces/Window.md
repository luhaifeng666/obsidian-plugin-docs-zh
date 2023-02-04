<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:48:27
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-02-04 10:50:45
 * @Description: 
-->
# Window

包含 DOM 文档的窗口；document 属性指向该窗口中加载的 DOM 文档。

## Properties

### activeWindow

```ts
activeWindow: Window
```

主动聚焦的窗口对象。通常与 `window` 一样，但是当使用弹窗时会有所不同。

### activeDocument

```ts
activeDocument: Document
```

主动聚焦的文档对象。通常与 `document` 一样，但是当使用弹窗时会有所不同。
