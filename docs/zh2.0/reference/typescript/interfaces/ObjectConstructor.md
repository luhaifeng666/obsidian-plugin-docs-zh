<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:44:13
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-21 10:44:15
 * @Description: 
-->
# ObjectConstructor

## Methods

### isEmpty

```ts
isEmpty: (object: Record<string, any>) => boolean
```

### each

```ts
each: <T>(object: { [key: string]: T; }, callback: (value: T, key?: string) => boolean | void, context?: any) => boolean
```
