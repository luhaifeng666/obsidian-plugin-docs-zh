<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-19 11:08:23
 * @Description: 
-->
# MenuItem

## Constructor

```ts
constructor();
```

## Methods

### setTitle

```ts
setTitle(title: string | DocumentFragment): this;
```

### setIcon

```ts
setIcon(icon: IconName | null): this;
```

### setChecked

```ts
setChecked(checked: boolean | null): this;
```

### setDisabled

```ts
setDisabled(disabled: boolean): this;
```

### setIsLabel

```ts
setIsLabel(isLabel: boolean): this;
```

### onClick

```ts
onClick(callback: (evt: MouseEvent | KeyboardEvent) => any): this;
```

### setSection

```ts
setSection(section: string): this;
```

设置此菜单项应属于的部分。
查找现有菜单的部分 ID，检查 DOM 元素以查看它们的 `data-section` 属性。
