<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-03-07 09:35:56
 * @Description: 
-->
# RequestUrlParam

## Properties

### url

```ts
url: string
```

### method

```ts
method: string
```

### contentType

```ts
contentType: string
```

### body

```ts
body: string | ArrayBuffer
```

### headers

```ts
headers: Record<string, string>
```

### throw

```ts
throw: boolean
```

是否在状态码 >= 400 时抛出一个错误
默认值为 true
