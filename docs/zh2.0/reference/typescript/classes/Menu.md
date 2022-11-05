<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-11-05 21:23:56
 * @Description: 
-->
# Menu

继承自 `Component`

## Constructor

```ts
constructor();
```

## Methods

### setNoIcon

```ts
setNoIcon(): this;
```

### addItem

```ts
addItem(cb: (item: MenuItem) => any): this;
```

### addSeparator

```ts
addSeparator(): this;
```

### showAtMouseEvent

```ts
showAtMouseEvent(evt: MouseEvent): this;
```

### showAtPosition

```ts
showAtPosition(position: Point, doc?: Document): this;
```

### hide

```ts
hide(): this;
```

### onHide

```ts
onHide(callback: () => any): void;
```
