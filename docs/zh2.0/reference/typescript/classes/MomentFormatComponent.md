<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-11-08 16:19:24
 * @Description: 
-->
# MomentFormatComponent

继承自 `TextComponent`

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### sampleEl

```ts
sampleEl: HTMLElement
```

## Methods

### setDefaultFormat

```ts
setDefaultFormat(defaultFormat: string): this;
```

在 input 被清空时设置默认形式。也应用于 placeholder。

### setSampleEl

```ts
setSampleEl(sampleEl: HTMLElement): this;
```

### setValue

```ts
setValue(value: string): this;
```

### onChanged

```ts
onChanged(): void;
```

### updateSample

```ts
updateSample(): void;
```
