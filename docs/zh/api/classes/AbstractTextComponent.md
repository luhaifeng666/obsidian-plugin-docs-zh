<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-03-24 23:00:24
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-07-13 16:13:53
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
