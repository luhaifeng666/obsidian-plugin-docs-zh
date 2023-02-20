<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-02-20 10:13:35
 * @Description: 
-->
# requireApiVersion

```ts
export function requireApiVersion(version: string): boolean;
```

如果 API 的版本大于等于要求的版本，则返回 true。
使用此方法限制需要指定 API 版本的功能，以避免在老版本的 Obsidian 构建时崩溃。

## Parameters

| Parameter | Description |
|-----------|-------------|
| `version` | |
