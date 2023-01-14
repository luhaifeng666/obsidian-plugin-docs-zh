<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:41:38
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-01-14 09:15:56
 * @Description: 
-->
# HTMLElement

任何 HTML 元素。一些元素直接实现此接口，而另一些元素通过继承它的接口实现它。

## Properties

### _EVENTS

```ts
_EVENTS: { fullscreenchange?: EventListenerInfo[]; fullscreenerror?: EventListenerInfo[]; abort?: EventListenerInfo[]; animationcancel?: EventListenerInfo[]; ... 87 more ...; paste?: EventListenerInfo[]; }
```

## Methods

### on

```ts
on: <K extends "input" | "progress" | "select" | "fullscreenchange" | "fullscreenerror" | "abort" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | ... 80 more ... | "paste">(this: HTMLElement, type: K, selector: string, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]...
```

### off

```ts
off: <K extends "input" | "progress" | "select" | "fullscreenchange" | "fullscreenerror" | "abort" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | ... 80 more ... | "paste">(this: HTMLElement, type: K, selector: string, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]...
```

### onClickEvent

```ts
onClickEvent: (this: HTMLElement, listener: (this: HTMLElement, ev: MouseEvent) => any, options?: boolean | AddEventListenerOptions) => void
```

### onNodeInserted

```ts
onNodeInserted: (this: HTMLElement, listener: () => any, once?: boolean) => () => void
```

### onWindowMigrated

```ts
onWindowMigrated: (this: HTMLElement, listener: (win: Window) => any) => () => void
```

### trigger

```ts
trigger: (eventType: string) => void
```
