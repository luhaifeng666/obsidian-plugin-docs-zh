<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-11-07 10:19:16
 * @Description: 
-->
# Modal

实现 `CloseableComponent`

## Constructor

```ts
constructor(app: App);
```

## Properties

### app

```ts
app: App
```

### scope

```ts
scope: Scope
```

### containerEl

```ts
containerEl: HTMLElement
```

### modalEl

```ts
modalEl: HTMLElement
```

### titleEl

```ts
titleEl: HTMLElement
```

### contentEl

```ts
contentEl: HTMLElement
```

### shouldRestoreSelection

```ts
shouldRestoreSelection: boolean
```

## Methods

### open

```ts
open(): void;
```

### close

```ts
close(): void;
```

### onOpen

```ts
onOpen(): void;
```

### onClose

```ts
onClose(): void;
```
