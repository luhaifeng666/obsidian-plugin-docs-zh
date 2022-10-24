<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-10-24 10:06:50
 * @Description: 
-->
# FileView

继承自 `ItemView`

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

视图是否用于导航。
如果您的视图是不被用于导航的静态视图，请将其设置为 false。
（比如：文件搜索，日历等等。）
如果您的视图用于打开文件或者以其他方式导航，请将其设置为 true
（比如：Markdown 编辑器视图，Kanban 视图，PDF 视图等等）
文件视图默认是可以被导航的。

## Methods

### getDisplayText

```ts
getDisplayText(): string;
```

### onload

```ts
onload(): void;
```

覆盖它以加载您的组件

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

### canAcceptExtension

```ts
canAcceptExtension(extension: string): boolean;
```
