<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-02-15 09:24:54
 * @Description: 
-->
# prepareSimpleSearch

```ts
export function prepareSimpleSearch(query: string): (text: string) => SearchResult | null;
```

构造一个运行在目标字符串上的简单搜索回调函数。

## Parameters

| Parameter | Description |
|-----------|-------------|
| `query` | the space-separated words |
