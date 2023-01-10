<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:40:39
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-01-10 14:58:27
 * @Description: 
-->
# Element

Element 是最通用的基类，Document 中的所有对象都继承自该基类。 它只有各种元素共有的方法和属性。 更具体的类继承自 Element。

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
