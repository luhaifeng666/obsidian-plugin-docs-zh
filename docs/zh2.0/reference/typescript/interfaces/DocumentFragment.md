<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:39:46
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-21 10:39:48
 * @Description: 
-->
# DocumentFragment

A minimal document object that has no parent. It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is that because the document fragment isn't part of the active document tree structure, changes made to the fragment don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.

## Methods

### find

```ts
find: (selector: string) => HTMLElement
```

### findAll

```ts
findAll: (selector: string) => HTMLElement[]
```
