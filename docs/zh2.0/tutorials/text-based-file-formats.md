---
title: 开发支持其他格式文件的插件
---
# 开发支持其他格式文件的插件

Obsidian 内置对 Markdown 文件以及其他多媒体类型文件，例如图片以及 PDF 的支持。作为一个插件开发者，您可以扩展 Obsidian 以支持其他的文件类型。在本教程中，您将构建一个用于阅读及编辑 CSV 文件的 Obsidian 插件。

在看完本教程后，您将可以：

- 使用 [TextFileView](../reference/typescript/classes/TextFileView.md) 去展示及编辑基于文本的文件格式。

## 前置准备

- [创建您的第一个插件](../getting-started/create-your-first-plugin.md)。
- 理解如何去创建基本的 [HTML 元素](../user-interface/html-elements.md)。

## 第一步 — 注册一个 `TextFileView`

[TextFileView](../reference/typescript/classes/TextFileView.md) 是一个用于从插件中读写文本文件的 [自定义视图](../user-interface/views.md)。在此步骤中，您将扩展 TextFileView 以及当用户打开一个 CSV 文件时通知 Obsidian 去使用它。

1. 创建一个名为 `view.ts` 的新文件，并写入以下内容：

::: code-group

```ts [view.ts]
import { TextFileView } from "obsidian";

export const VIEW_TYPE_CSV = "csv-view";

export class CSVView extends TextFileView {
  getViewData() {
    return this.data;
  }

  setViewData(data: string, clear: boolean) {
    this.data = data;
  }

  clear() {
    this.data = "";
  }

  getViewType() {
    return VIEW_TYPE_CSV;
  }
}
```

:::

1. 在 `main.ts` 文件中，在 `onload` 方法中注册视图。

::: code-group

```ts [main.ts]
import { CSVView, VIEW_TYPE_CSV } from "./view"
```

:::

::: code-group

```ts [main.ts]
this.registerView(
  VIEW_TYPE_CSV,
    (leaf: WorkspaceLeaf) => new CSVView(leaf)
);
```

:::

1. 注册您想要视图处理的扩展。

::: code-group

```ts [main.ts]
this.registerExtensions(["csv"], VIEW_TYPE_CSV);
```

:::

1. 重新构建插件。
1. 在文件管理器中，点击 CSV 文件以打开视图。

不幸的是，视图并未展示数据，因为它还不知道如何去展示。要想在视图中渲染 CSV 数据，需要在 `setViewData` 方法中添加以下代码：

```ts {4-5}
setViewData(data: string, clear: boolean) {
  this.data = data;

  this.contentEl.empty();
  this.contentEl.createDiv({ text: this.data });
}
```

现在您可以在 Obsidian 中加载并显示 CSV 数据了。视图将 CSV 文件的原始内容打印在一个 `div` 标签内。在稍后的教程中，您将把数据渲染成 HTML 的表格，但在此之前，您首先需要将数据解析成更加合适的数据结构。

## 第二步 - 文本数据的编码及解码

TextFileView 提供了一个方便的属性，`this.data`, 您可以将文本内容作为 `string` 类型存储其中。虽然它适用于更简单的用例，但与此同时它也将使得访问单个单元格的值变得较为困难。在本步骤中，您将创建表数据的更加有用的内存表示。

TextFileView 提供了一组有用的方法用于处理文本文件：

- `getViewData()` 返回当前数据状态。Obsidian 使用此方法在写入文件前将视图数据解码成纯文本内容。
- `setViewData()` 在 Obsidian 从文件中读取新数据时更新视图。使用此方法将文本数据编码成更易于使用的格式。
- `clear()` 方法会在 Obsidian 卸载文件时重置视图。

当表格是一个二维的数据结构时，使用二维的字符串数组，`string[][]` 将会是个更好的选择。

要想将 `this.data` 替换为自定义的内存表示：

1. 添加 `string[][]` 类型的 `tableData` 属性。
2. 更新 `getViewData()` 及 `setViewData()` 方法以将 CSV  数据转换为 `tableData`。
3. 更新 `clear()` 方法以重置视图数据。

以下是解析 CSV 数据的基本实现。在现实使用中，可以考虑使用一个更加有效的解析器，比如 [Papa Parse](https://www.papaparse.com/)。

```ts
export class CSVView extends TextFileView {
  tableData: string[][];

  getViewData() {
    return this.tableData.map((row) => row.join(",")).join("\n");
  }

  setViewData(data: string, clear: boolean) {
    this.tableData = data.split("\n").map((line) => line.split(","));
  }

  clear() {
    this.tableData = [];
  }

  // ...
}
```

选择一个更加合适的数据结构将使数据处理变得更加容易。

:::tip
无论何时用户打开一个不同的文件，`setViewData` 中的 `clear` 参数始终为 `true`。使用它可以提升您视图的性能。比如，如果您正在缓存特定文件的数据，并且想要在加载新文件时清除缓存。
:::

## 第三步 - 渲染数据

为一种文件格式创建一个自定义视图的一个益处是您可以通过更加友好的方式将它呈现出来。在本步骤中，您将会把表格数据渲染成 `table` 标签。

您可以通过把 HTML 标签插入到 TextFileView 中的 `contentEl` 属性中的方式将它们插入到视图中。要想获取更多关于如何创建 HTML 标签的信息，请查阅 [HTML 标签](../user-interface/html-elements.md) 这篇文档。

```ts
this.contentEl.createEl("table");
```

TextFileView 也暴露出 `onOpen()` 及 `onClose()` 钩子，使您可以分别设置及移除您的视图。

1. 添加一个 `HTMLElement` 类型的 `tableEl` 属性。
2. 添加 `onOpen()` 方法去创建一个 `table` 标签。
3. 添加 `onClose()` 方法以清除任何您已经创建的标签。

```ts
export class CSVView extends TextFileView {
  tableEl: HTMLElement;

  // ...

  async onOpen() {
    this.tableEl = this.contentEl.createEl("table");
  }

  async onClose() {
    this.contentEl.empty();
  }
}
```

`onOpen()` 以及 `onClose()` 方法只有在用户打开及关闭视图的时候才会执行。要想在潜在的文件发生改变时更新视图，您需要通过 `setViewData()` 方法更新 HTML 标签。通过保持对 `tableEl` 的引用，您可以只更新数据发生变化的那一部分视图。

要想在磁盘中的数据发生变化时更新视图：

1. 在 `CSVView` 类中，添加一个辅助方法用于在 `tableEl` 标签中渲染表格数据。

```ts
refresh() {
  // Remove previous data.
  this.tableEl.empty();

  const bodyEl = this.tableEl.createEl("tbody");

  this.tableData.forEach((row, i) => {
    const rowEl = bodyEl.createEl("tr");

    row.forEach((cell, j) => {
      rowEl.createEl("td", { text: cell });
    });
  });
}
```

1. 在 `setViewData()` 方法中调用 `refresh()` 辅助方法。

```ts {4}
setViewData(data: string, clear: boolean) {
  this.tableData = data.split("\n").map((line) => line.split(","));

  this.refresh();
}
```

您的插件现在可以适当的将 CSV 数据呈现为表格。您难道不会问，能否更加友好些呢？

:::tip
取决于您当前使用的 Obsidian 主题，您也许想要设置 table 的样式。要想为您的表格添加基础的 CSS 样式，可以将以下内容添加到根目录下的 `style.css` 文件中。

```css
table {
  border-collapse: collapse;
}

table,
td {
  border: 1px solid var(--background-modifier-border);
}

td {
  padding: 4px 8px;
}
```

:::

## 第四步 - 编辑数据

到目前为止，用户仅仅可以阅读文件的内容。在本步骤中，您将为每一个单元格添加一个 `input` 标签，以允许用户编辑 CSV 的值及将它们写入磁盘。

上一步骤中的 `refresh()` 辅助方法为每个单元格创建了一个 `td` 标签。现在，它将单元格中的值作为文本添加到 `td` 标签中。

```ts
row.forEach((cell, j) => {
  rowEl.createEl("td", { text: cell });
});
```

要想让用户可以编辑内容，改用 `input` 标签添加到 `td` 标签中。

```ts
row.forEach((cell, j) => {
  rowEl
    .createEl("td")
    .createEl("input", { attr: { value: cell } });
});
```

用户现在可以编辑表格中的内容看了，但是 `input` 实际上没有更新表格的数据，当您关闭再打开视图时，先前改变的内容并不会被保持。

要想保存改变的内容，添加 `oninput` 事件处理器以在 `input` 中的值发生改变时更新 `tableData`。

```ts {6-11}
row.forEach((cell, j) => {
  const inputEl = rowEl
    .createEl("td")
    .createEl("input", { attr: { value: cell } });

  input.oninput = (ev) => {
    if (ev.currentTarget instanceof HTMLInputElement) {
      this.tableData[i][j] = ev.currentTarget.value;
      this.requestSave();
    }
  };
});
```

input 更新的事件处理器更新 table 在内存中的内容，并通过调用 `this.requestSave()` 方法告知 Obsidian 更新磁盘中的内容。

:::tip
将 `input` 标签的 background 及 border 移除看起来会更好。

```css
input {
  background: none;
  border: none;
}
```

:::

## 下一步

在本教程中，您已经构建了一个可以让用户在 Obsidian 中展示以及编辑 CSV 文件的插件。您可以通过相同的步骤去支持其他格式的文件，比如 [Org Mode](https://orgmode.org/) 以及 [BibTex](http://www.bibtex.org/)。

## 完整示例

```ts
import { TextFileView } from "obsidian";

export const VIEW_TYPE_CSV = "csv-view";

export class CSVView extends TextFileView {
  tableData: string[][];
  tableEl: HTMLElement;

  getViewData() {
    return this.tableData.map((row) => row.join(",")).join("\n");
  }

  // If clear is set, then it means we're opening a completely different file.
  setViewData(data: string, clear: boolean) {
    this.tableData = data.split("\n").map((line) => line.split(","));

    this.refresh();
  }

  refresh() {
    this.tableEl.empty();

    const tableBody = this.tableEl.createEl("tbody");

    this.tableData.forEach((row, i) => {
      const tableRow = tableBody.createEl("tr");

      row.forEach((cell, j) => {
        const input = tableRow
          .createEl("td")
          .createEl("input", { attr: { value: cell } });

        input.oninput = (ev) => {
          if (ev.currentTarget instanceof HTMLInputElement) {
            this.tableData[i][j] = ev.currentTarget.value;
            this.requestSave();
          }
        };
      });
    });
  }

  clear() {
    this.tableData = [];
  }

  getViewType() {
    return VIEW_TYPE_CSV;
  }

  async onOpen() {
    this.tableEl = this.contentEl.createEl("table");
  }

  async onClose() {
    this.contentEl.empty();
  }
}
```

```css
table {
  border-collapse: collapse;
}

table,
td {
  border: 1px solid var(--background-modifier-border);
}

td {
  padding: 4px 8px;
}

input {
  background: none;
  border: none;
}
```
