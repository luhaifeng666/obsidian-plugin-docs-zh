<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-03-15 10:34:17
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
| `query` | 用空格隔开的词 |
