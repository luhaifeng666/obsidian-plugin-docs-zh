<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:47:08
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-03-10 10:26:59
 * @Description: 
-->
# SvgElementInfo

## Properties

### cls

```ts
cls: string | string[]
```

要分配的 class。可以是用空格隔开的字符串或者字符串数组。

### attr

```ts
attr: { [key: string]: string | number | boolean; }
```

要添加的 HTML 属性。

### parent

```ts
parent: Node
```

要被分配到的父元素。

### prepend

```ts
prepend: boolean
```
