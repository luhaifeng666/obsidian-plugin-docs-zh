<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-10-28 11:16:50
 * @Description: 
-->
# Keymap

## Constructor

```ts
constructor();
```

## Methods

### pushScope

```ts
pushScope(scope: Scope): void;
```

### popScope

```ts
popScope(scope: Scope): void;
```

### isModifier

```ts
static isModifier(evt: MouseEvent | TouchEvent | KeyboardEvent, modifier: Modifier): boolean;
```

检查在此事件中修饰键是否被按下。

### isModEvent

```ts
static isModEvent(evt?: UserEvent | null): boolean;
```

当按下 Cmd/Ctrl 键或者鼠标中键时返回 true。
