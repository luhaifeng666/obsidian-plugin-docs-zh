<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-02-12 09:42:48
 * @Description: 
-->
# loadPdfJs

```ts
export function loadPdfJs(): Promise<any>;
```

加载 PDF.js 并返回一个 promise 对象到全局 pdfjsLib 对象中。
也可以在该 promise resolve 后使用 `window.pdfjsLib` 获取相同的引用。
