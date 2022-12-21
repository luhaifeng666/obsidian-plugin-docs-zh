<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:40:39
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-21 10:40:40
 * @Description: 
-->
# Element

Element is the most general base class from which all objects in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element.

## Methods

### find

```ts
find: (selector: string) => Element
```

### findAll

```ts
findAll: (selector: string) => HTMLElement[]
```

### findAllSelf

```ts
findAllSelf: (selector: string) => HTMLElement[]
```
