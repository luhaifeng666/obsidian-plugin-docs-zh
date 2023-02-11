<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-05 09:49:20
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-02-11 09:51:56
 * @Description: 
-->
# debounce

```ts
export function debounce<T extends unknown[], V>(cb: (...args: [
    ...T
]) => V, timeout?: number, resetTimer?: boolean): Debouncer<T, V>;
```

一个标准的防抖函数。

## Parameters

| Parameter | Description |
|-----------|-------------|
| `cb` | 回调函数。 |
| `timeout` | 延迟时间。 |
| `resetTimer` | 再次调用该函数时是否重置延迟时间。 |
