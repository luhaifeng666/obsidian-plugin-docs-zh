<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-19 11:06:56
 * @Description: 
-->
# Menu

继承自 `Component`

实现 `CloseableComponent`

## Constructor

```ts
constructor();
```

## Methods

### setNoIcon

```ts
setNoIcon(): this;
```

### setUseNativeMenu

```ts
setUseNativeMenu(useNativeMenu: boolean): this;
```

Force this menu to use native or DOM.
(Only works on the desktop app)

### addItem

```ts
addItem(cb: (item: MenuItem) => any): this;
```

Adds a menu item. Only works when menu is not shown yet

### addSeparator

```ts
addSeparator(): this;
```

Adds a separator. Only works when menu is not shown yet

### showAtMouseEvent

```ts
showAtMouseEvent(evt: MouseEvent): this;
```

### showAtPosition

```ts
showAtPosition(position: MenuPositionDef, doc?: Document): this;
```

### hide

```ts
hide(): this;
```

### close

```ts
close(): void;
```

### onHide

```ts
onHide(callback: () => any): void;
```
