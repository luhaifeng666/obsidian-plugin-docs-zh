<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-02-14 09:56:47
 * @Description: 
-->
# prepareFuzzySearch

```ts
export function prepareFuzzySearch(query: string): (text: string) => SearchResult | null;
```

构造一个在目标字符串上运行的模糊搜索回调。
如果搜索次数超过数千次，性能可能会出现问题。
如果性能有问题，可以考虑使用 `prepareSimpleSearch` 来代替。

## Parameters

| Parameter | Description |
|-----------|-------------|
| `query` | the fuzzy query. |
