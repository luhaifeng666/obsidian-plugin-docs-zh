<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:43:24
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-03-01 10:52:24
 * @Description: 
-->
# Node

Node 是一个接口，许多 DOM API 对象类型继承自该接口。它允许对这些类型进行类似处理；比如，继承相同的方法集，或者通过相同的方式进行测试。

## Methods

### createEl

```ts
createEl: <K extends "object" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 99 more ... | "wbr">(tag: K, o?: string | DomElementInfo, callback?: (el: HTMLElementTagNameMap[K]) => void) => HTM...
```

创建一个元素并插入到该节点中。

### createDiv

```ts
createDiv: (o?: string | DomElementInfo, callback?: (el: HTMLDivElement) => void) => HTMLDivElement
```

### createSpan

```ts
createSpan: (o?: string | DomElementInfo, callback?: (el: HTMLSpanElement) => void) => HTMLSpanElement
```

### createSvg

```ts
createSvg: <K extends "symbol" | "a" | "script" | "style" | "title" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | ... 41 more ... | "view">(tag: K, o?: string | SvgElementInfo, callback?: (el: SVGElementTagNameMap[K]) => void) ...
```
