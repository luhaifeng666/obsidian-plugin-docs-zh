<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-02-17 10:16:26
 * @Description: 
-->
# request

```ts
export function request(request: RequestUrlParam | string): Promise<string>;
```

与 `fetch()` 方法类似，使用 HTTP/HTTPS 请求一个地址，没有任何跨域限制。
返回响应结果文本值。

## Parameters

| Parameter | Description |
|-----------|-------------|
| `request` | |
