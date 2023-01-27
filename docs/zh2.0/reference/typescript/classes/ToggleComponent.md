<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-05 09:49:20
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-01-23 10:36:38
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
setTooltip(tooltip: string, options?: TooltipOptions): this;
```

### onClick

```ts
onClick(): void;
```

### onChange

```ts
onChange(callback: (value: boolean) => any): this;
```
