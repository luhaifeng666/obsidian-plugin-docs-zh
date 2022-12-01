# debounce

```ts
export function debounce<T extends unknown[]>(cb: (...args: [
    ...T
]) => any, timeout?: number, resetTimer?: boolean): Debouncer<T>;
```

一个标准的防抖函数。

## Parameters

| Parameter | Description |
|-----------|-------------|
| `cb` | The function to call. |
| `timeout` | The timeout to wait. |
| `resetTimer` | Whether to reset the timeout when the debouncer is called again. |
