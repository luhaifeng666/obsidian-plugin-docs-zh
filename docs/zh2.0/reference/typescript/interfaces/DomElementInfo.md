<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:40:08
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-01-06 14:04:14
 * @Description: 
-->
# DomElementInfo

## Properties

### cls

```ts
cls: string | string[]
```

需要被分配的 class。可以是以空格分割的字符串，或者是字符串数组。

### text

```ts
text: string | DocumentFragment
```

需要被分配的 text。

### attr

```ts
attr: { [key: string]: string | number | boolean; }
```

需要被添加的 HTML 属性。

### title

```ts
title: string
```

HTML 标题（用于 hover 时的 tooltip 显示）。

### parent

```ts
parent: Node
```

要分配给的父元素。

### value

```ts
value: string
```

### type

```ts
type: string
```

### prepend

```ts
prepend: boolean
```

### placeholder

```ts
placeholder: string
```

### href

```ts
href: string
```
