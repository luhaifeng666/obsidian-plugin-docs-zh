<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-19 10:59:13
 * @Description: 
-->
# ButtonComponent

继承自 `BaseComponent`

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### buttonEl

```ts
buttonEl: HTMLButtonElement
```

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this;
```

### setCta

```ts
setCta(): this;
```

### removeCta

```ts
removeCta(): this;
```

### setWarning

```ts
setWarning(): this;
```

### setTooltip

```ts
setTooltip(tooltip: string, options?: TooltipOptions): this;
```

### setButtonText

```ts
setButtonText(name: string): this;
```

### setIcon

```ts
setIcon(icon: IconName): this;
```

### setClass

```ts
setClass(cls: string): this;
```

### onClick

```ts
onClick(callback: (evt: MouseEvent) => any): this;
```
