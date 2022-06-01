# debounce

```ts
export function debounce<T extends unknown[]>(cb: (...args: [
    ...T
]) => any, timeout?: number, resetTimer?: boolean): Debouncer<T>;
```

标准的防抖方法。

## Parameters

| 参数 | 描述 |
|-----------|-------------|
| `cb` | 回调函数 |
| `timeout` | 延时 |
| `resetTimer` | 在防抖方法被再次调用时是否需要清空延时 |
