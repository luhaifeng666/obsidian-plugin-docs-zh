<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-05 09:49:20
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-19 11:13:24
 * @Description: 
-->
# ToggleComponent

Extends `ValueComponent<boolean>`

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
