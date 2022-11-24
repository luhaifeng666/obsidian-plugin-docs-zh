<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-11-24 14:52:53
 * @Description: 
-->
# ValueComponent

继承自 `BaseComponent`

## Constructor

```ts
constructor();
```

## Methods

### registerOptionListener

```ts
registerOptionListener(listeners: Record<string, (value?: T) => T>, key: string): this;
```

### getValue

```ts
abstract getValue(): T;
```

### setValue

```ts
abstract setValue(value: T): this;
```
