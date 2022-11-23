<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-11-23 09:48:16
 * @Description: 
-->
# ToggleComponent

继承自 `ValueComponent<boolean>`

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### toggleEl

```ts
toggleEl: HTMLElement
```

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this;
```

### getValue

```ts
getValue(): boolean;
```

### setValue

```ts
setValue(on: boolean): this;
```

### setTooltip

```ts
setTooltip(tooltip: string): this;
```

### onClick

```ts
onClick(): void;
```

### onChange

```ts
onChange(callback: (value: boolean) => any): this;
```
