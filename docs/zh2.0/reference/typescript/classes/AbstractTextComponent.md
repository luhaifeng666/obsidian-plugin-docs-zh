<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-09-20 16:20:20
 * @Description: 
-->
# AbstractTextComponent

继承自 `ValueComponent<string>`

## Constructor

```ts
constructor(inputEl: T);
```

## Properties

### inputEl

```ts
inputEl: T
```

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this;
```

### getValue

```ts
getValue(): string;
```

### setValue

```ts
setValue(value: string): this;
```

### setPlaceholder

```ts
setPlaceholder(placeholder: string): this;
```

### onChanged

```ts
onChanged(): void;
```

### onChange

```ts
onChange(callback: (value: string) => any): this;
```
