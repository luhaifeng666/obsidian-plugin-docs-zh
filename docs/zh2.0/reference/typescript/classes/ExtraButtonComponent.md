<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-19 11:01:08
 * @Description: 
-->
# ExtraButtonComponent

继承自 `BaseComponent`

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### extraSettingsEl

```ts
extraSettingsEl: HTMLElement
```

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this;
```

### setTooltip

```ts
setTooltip(tooltip: string, options?: TooltipOptions): this;
```

### setIcon

```ts
setIcon(icon: IconName): this;
```

### onClick

```ts
onClick(callback: () => any): this;
```
