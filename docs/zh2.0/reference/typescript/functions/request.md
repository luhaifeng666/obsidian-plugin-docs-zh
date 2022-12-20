<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-20 10:47:53
 * @Description: 
-->
# request

```ts
export function request(request: RequestUrlParam | string): Promise<string>;
```

Similar to `fetch()`, request a URL using HTTP/HTTPS, without any CORS restrictions.
Returns the text value of the response.

## Parameters

| Parameter | Description |
|-----------|-------------|
| `request` | |
