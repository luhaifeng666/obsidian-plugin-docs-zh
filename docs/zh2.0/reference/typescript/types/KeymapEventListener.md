<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-03-27 19:24:38
 * @Description: 
-->
# KeymapEventListener

```ts
export type KeymapEventListener = (evt: KeyboardEvent, ctx: KeymapContext) => false | any;
```

返回 `false` 以自动阻止默认行为。
