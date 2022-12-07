<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-07 09:45:26
 * @Description: 
-->
# loadMermaid

```ts
export function loadMermaid(): Promise<any>;
```

加载 Mermaid 并返回一个 promise 对象到全局 mermaid 对象上。
也可在该 promise 对象 resolve 之后使用 `mermaid` 以获取相同的引用。
