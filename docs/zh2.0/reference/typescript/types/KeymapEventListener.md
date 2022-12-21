<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-21 10:49:25
 * @Description: 
-->
# KeymapEventListener

```ts
export type KeymapEventListener = (evt: KeyboardEvent, ctx: KeymapContext) => false | any;
```

Return `false` to automatically preventDefault
