<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-03-24 23:00:24
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-07-26 23:54:49
 * @Description: 
-->
# FileView

Extends `ItemView`

## Constructor

```ts
constructor(leaf: WorkspaceLeaf);
```

## Properties

### allowNoFile

```ts
allowNoFile: boolean
```

### file

```ts
file: TFile
```

### navigation

```ts
navigation: boolean
```

是否将视图用于导航。

如果你的视图是不用于导航的静态视图，将其设置为 false。

（比如：文件搜索，日历等等。）

如果你的视图打开了一个文件或者可以以其他方式进行导航，将其设置为 true。

（比如：Markdown 编辑器, Kanban 视图，PDF 视图等等）。

文件视图可以默认为导航。

## Methods

### getDisplayText

```ts
getDisplayText(): string;
```

### onload

```ts
onload(): void;
```

Override this to load your component

### getState

```ts
getState(): any;
```

### setState

```ts
setState(state: any, result: ViewStateResult): Promise<void>;
```

### onLoadFile

```ts
onLoadFile(file: TFile): Promise<void>;
```

### onUnloadFile

```ts
onUnloadFile(file: TFile): Promise<void>;
```

### onMoreOptionsMenu

```ts
onMoreOptionsMenu(menu: Menu): void;
```

### onHeaderMenu

```ts
onHeaderMenu(menu: Menu): void;
```

### canAcceptExtension

```ts
canAcceptExtension(extension: string): boolean;
```
