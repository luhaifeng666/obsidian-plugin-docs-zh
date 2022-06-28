<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-03-24 23:00:24
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-06-28 16:11:58
 * @Description: 
-->
# Menu

Extends `Component`

## Constructor

```ts
constructor(app: any);
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
showAtPosition(position: Point): this;
```

### hide

```ts
hide(): this;
```

### onHide

```ts
onHide(callback: () => any): void;
```
