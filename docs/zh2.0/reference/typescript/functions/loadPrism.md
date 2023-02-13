<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-02-13 10:46:04
 * @Description: 
-->
# loadPrism

```ts
export function loadPrism(): Promise<any>;
```

加载 Prism.js 并返回一个 promise 对象到全局 pdfjsLib 对象中。
也可以在该 promise resolve 后使用 `Prism` 获取相同的引用。
