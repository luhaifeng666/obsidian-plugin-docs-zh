# Component

## Constructor

```ts
constructor();
```

## Methods

### load

```ts
load(): void;
```

将此组件加载为它的子元素

### onload

```ts
onload(): void;
```

覆写此方法以加载您的组件

### unload

```ts
unload(): void;
```

卸载此组件及其子元素

### onunload

```ts
onunload(): void;
```

覆写此方法以卸载您的插件

### addChild

```ts
addChild<T extends Component>(component: T): T;
```

添加一个子组件，如果此组件已经被加载，则加载它

### removeChild

```ts
removeChild<T extends Component>(component: T): T;
```

移除一个子组件，卸载它

### register

```ts
register(cb: () => any): void;
```

注册一个在卸载时调用的回调函数

### registerEvent

```ts
registerEvent(eventRef: EventRef): void;
```

注册卸载时要分离的事件

### registerDomEvent

```ts
registerDomEvent<K extends keyof WindowEventMap>(el: Window, type: K, callback: (this: HTMLElement, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
```

注册卸载时要分离的 DOM 事件

### registerDomEvent

```ts
registerDomEvent<K extends keyof DocumentEventMap>(el: Document, type: K, callback: (this: HTMLElement, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
```

注册卸载时要分离的 DOM 事件

### registerDomEvent

```ts
registerDomEvent<K extends keyof HTMLElementEventMap>(el: HTMLElement, type: K, callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
```

注册卸载时要分离的 DOM 事件

### registerScopeEvent

```ts
registerScopeEvent(keyHandler: KeymapEventHandler): void;
```

注册卸载时要分离的键事件

### registerInterval

```ts
registerInterval(id: number): number;
```

注册卸载时要取消的间隔（来自 setInterval）
使用 {@link window.setInterval} 而不是 {@link setInterval} 以避免 TypeScript 混淆 NodeJS 和 Browser 的 API
