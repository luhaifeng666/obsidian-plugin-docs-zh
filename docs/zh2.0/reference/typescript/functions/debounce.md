<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-05 09:49:20
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-20 10:44:26
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
| `cb` | The function to call. |
| `timeout` | The timeout to wait. |
| `resetTimer` | Whether to reset the timeout when the debouncer is called again. |
