<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-19 10:59:57
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-23 09:57:34
 * @Description: 
-->
# ColorComponent

继承自 `ValueComponent<string>`

选择颜色的组件。色值的默认格式是由哈希前缀加上6位16进制数组成的字符串，比如 `#000000`;

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Methods

### getValue

```ts
getValue(): HexString;
```

### getValueRgb

```ts
getValueRgb(): RGB;
```

### getValueHsl

```ts
getValueHsl(): HSL;
```

### setValue

```ts
setValue(value: HexString): this;
```

### setValueRgb

```ts
setValueRgb(rgb: RGB): this;
```

### setValueHsl

```ts
setValueHsl(hsl: HSL): this;
```

### onChange

```ts
onChange(callback: (value: string) => any): this;
```
