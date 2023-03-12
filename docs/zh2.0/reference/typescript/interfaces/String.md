<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:46:22
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-03-12 17:59:30
 * @Description: 
-->
# String

允许对文本字符串进行操作和格式化，并确定字符串中的子字符串的位置。

## Methods

### contains

```ts
contains: (target: string) => boolean
```

### startsWith

```ts
startsWith: { (searchString: string, position?: number): boolean; (searchString: string, position?: number): boolean; }
```

如果 searchString 转换为 String 的元素序列与此对象(转换为 String )的对应元素从开始位置起相同，则返回true。否则返回 false。

### endsWith

```ts
endsWith: { (searchString: string, endPosition?: number): boolean; (target: string, length?: number): boolean; }
```

如果 searchString 转换为 String 的元素序列与此对象(转换为 String )的对应元素从结束位置起相同，则返回true。否则返回 false。

### format

```ts
format: (...args: string[]) => string
```
