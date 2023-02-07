<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-02-07 16:43:54
 * @Description: 
-->
# TextFileView

继承自 `EditableFileView`

该类实现了一个基于纯文本的可编辑文件视图，可以在给定的编辑器中加载以及保存它。

注意，默认情况下该视图仅在其关闭时被保存。要想自动保存，您的编辑器需要在内容发生变化时调用 `this.requestSave()`。

## Constructor

```ts
constructor(leaf: WorkspaceLeaf);
```

## Properties

### data

```ts
data: string
```

内存数据

### requestSave

```ts
requestSave: () => void
```

从当前时间开始2s内退出保存

## Methods

### onUnloadFile

```ts
onUnloadFile(file: TFile): Promise<void>;
```

### onLoadFile

```ts
onLoadFile(file: TFile): Promise<void>;
```

### save

```ts
save(clear?: boolean): Promise<void>;
```

### getViewData

```ts
abstract getViewData(): string;
```

从编辑器中获取数据。该方法在将编辑器中的内容保存到文件中时被调用。

### setViewData

```ts
abstract setViewData(data: string, clear: boolean): void;
```

设置数据到编辑器中。该方法通常用来加载文件内容。

如果设置了 clear, 浙江意味着我们正在打开一个完全不同的文件。
在情况下，您应该调用 clear() 方法，或者在给定要设置的新数据的情况下实现一个稍微更有效的清除机制。

### clear

```ts
abstract clear(): void;
```

清空编辑器。该方法通常在我们需要打开一个完全不同的文件时调用，所以最好清除编辑器的所有状态，比如撤销/重做历史记录，以及任何与之前文件相关的缓存/索引。
