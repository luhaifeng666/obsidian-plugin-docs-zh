<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:39:13
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-01-03 08:39:54
 * @Description: 
-->
# Document

在浏览器中加载并充当网页内容（即 DOM 树）的入口点的任何网页。

## Properties

### _EVENTS

```ts
_EVENTS: { fullscreenchange?: EventListenerInfo[]; fullscreenerror?: EventListenerInfo[]; pointerlockchange?: EventListenerInfo[]; pointerlockerror?: EventListenerInfo[]; ... 91 more ...; paste?: EventListenerInfo[]; }
```

## Methods

### on

```ts
on: <K extends "input" | "progress" | "select" | "fullscreenchange" | "fullscreenerror" | "abort" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | ... 84 more ... | "visibilitychange">(this: Document, type: K, selector: string, listener: (this: Document, ev: DocumentEventMap[...
```

### off

```ts
off: <K extends "input" | "progress" | "select" | "fullscreenchange" | "fullscreenerror" | "abort" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | ... 84 more ... | "visibilitychange">(this: Document, type: K, selector: string, listener: (this: Document, ev: DocumentEventMap[...
```
