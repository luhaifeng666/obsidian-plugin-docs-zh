<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:39:46
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-01-05 15:00:32
 * @Description: 
-->
# DocumentFragment

没有父级的最小的文档对象。它被用作 Document 的轻量级版本，用于存储由节点组成的文档结构的一部分，类似标准的文档。关键的区别在于由于文档片段不属于活动文档树形结构的一部分，因此对这些片段做出改动时不会影响到文档本身，不会造成回流，也不会在做出改变时导致任何的性能损失。

## Methods

### find

```ts
find: (selector: string) => HTMLElement
```

### findAll

```ts
findAll: (selector: string) => HTMLElement[]
```
