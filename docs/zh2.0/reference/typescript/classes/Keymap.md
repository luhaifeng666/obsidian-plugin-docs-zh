<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-19 11:04:19
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
static isModEvent(evt?: UserEvent | null): PaneType | boolean;
```

Translates an event into the type of pane that should open.
Returns 'tab' if the modifier key Cmd/Ctrl is pressed OR if this is a middle-click MouseEvent.
Returns 'split' if Cmd/Ctrl+Alt is pressed.
Returns 'window' if Cmd/Ctrl+Alt+Shift is pressed.
