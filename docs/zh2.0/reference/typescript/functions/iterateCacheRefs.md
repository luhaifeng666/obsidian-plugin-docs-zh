<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-12-05 09:47:56
 * @Description: 
-->
# iterateCacheRefs

```ts
export function iterateCacheRefs(cache: CachedMetadata, cb: (ref: ReferenceCache) => boolean | void): boolean;
```

迭代链接以及 embeds。当回调函数返回 true 时终止迭代。

## Parameters

| Parameter | Description |
|-----------|-------------|
| `cache` | |
| `cb` | |
