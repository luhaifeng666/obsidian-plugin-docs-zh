<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-09-20 16:20:36
 * @Description: 
-->
# DropdownComponent

继承自 `ValueComponent<string>`

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### selectEl

```ts
selectEl: HTMLSelectElement
```

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this;
```

### addOption

```ts
addOption(value: string, display: string): this;
```

### addOptions

```ts
addOptions(options: Record<string, string>): this;
```

### getValue

```ts
getValue(): string;
```

### setValue

```ts
setValue(value: string): this;
```

### onChange

```ts
onChange(callback: (value: string) => any): this;
```
