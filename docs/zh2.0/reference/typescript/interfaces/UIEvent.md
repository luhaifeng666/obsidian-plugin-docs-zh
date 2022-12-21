<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-21 10:48:11
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-21 10:48:13
 * @Description: 
-->
# UIEvent

Simple user interface events.

## Properties

### targetNode

```ts
targetNode: Node
```

### win

```ts
win: Window
```

### doc

```ts
doc: Document
```

## Methods

### instanceOf

```ts
instanceOf: <T>(type: new (...data: any[]) => T) => this is T
```

Cross-window capable instanceof check, a drop-in replacement
for instanceof checks on UIEvents.
