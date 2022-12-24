# View

继承自 `Component`

## Constructor

```ts
constructor(leaf: WorkspaceLeaf);
```

## Properties

### app

```ts
app: App
```

### icon

```ts
icon: string
```

### navigation

```ts
navigation: boolean
```

视图是否用于导航。
如果您的视图是个静态视图，不打算被导航离开，请设置为 false。
（比如：文件搜索，日历等等。）
如果您的视图打开文件或可以以其他方式导航，请将其设置为 true。
（比如：Markdonw 编辑器视图, 看板视图, PDF 视图等等）

### leaf

```ts
leaf: WorkspaceLeaf
```

### containerEl

```ts
containerEl: HTMLElement
```

## Methods

### onOpen

```ts
protected onOpen(): Promise<void>;
```

### onClose

```ts
protected onClose(): Promise<void>;
```

### getViewType

```ts
abstract getViewType(): string;
```

### getState

```ts
getState(): any;
```

### setState

```ts
setState(state: any, result: ViewStateResult): Promise<void>;
```

### getEphemeralState

```ts
getEphemeralState(): any;
```

### setEphemeralState

```ts
setEphemeralState(state: any): void;
```

### getIcon

```ts
getIcon(): IconName;
```

### onResize

```ts
onResize(): void;
```

在该视图尺寸发生变化时被调用。

### getDisplayText

```ts
abstract getDisplayText(): string;
```

### onPaneMenu

```ts
onPaneMenu(menu: Menu, source: 'more-options' | 'tab-header' | string): void;
```

填充窗格菜单。

(替换之前移除的 `onHeaderMenu` 和 `onMoreOptionsMenu` 方法)
