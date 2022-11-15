<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-11-15 09:44:36
 * @Description: 
-->
# SliderComponent

继承自 `ValueComponent<number>`

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### sliderEl

```ts
sliderEl: HTMLInputElement
```

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this;
```

### setLimits

```ts
setLimits(min: number, max: number, step: number | 'any'): this;
```

### getValue

```ts
getValue(): number;
```

### setValue

```ts
setValue(value: number): this;
```

### getValuePretty

```ts
getValuePretty(): string;
```

### setDynamicTooltip

```ts
setDynamicTooltip(): this;
```

### showTooltip

```ts
showTooltip(): void;
```

### onChange

```ts
onChange(callback: (value: number) => any): this;
```
