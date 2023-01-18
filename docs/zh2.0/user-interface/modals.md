---
title: 对话框
---
# 对话框

对话框用于展示信息以及接受用户的输入信息。要想创建一个对话框，需要创建一个继承自 [`Modal`](../reference/typescript/classes/Modal.md) 的类:

```ts modal.ts
import { App, Modal } from "obsidian";

export class ExampleModal extends Modal {
  constructor(app: App) {
    super(app);
  }

  onOpen() {
    let { contentEl } = this;
    contentEl.setText("Look at me, I'm a modal! 👀");
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}
```

- [`onOpen()`](../reference/typescript/classes/Modal.md#onopen) 方法在对话框打开时被调用，它负责创建对话框中的内容。想要获取更多信息，可以查阅 [HTML elements](html-elements.md)。
- [`onClose()`](../reference/typescript/classes/Modal.md#onclose) 方法在对话框被关闭时调用，它负责清理对话框所占用的资源。

要想打开一个对话框，需要创建一个 `ExampleModal` 的实例并调用其上的 [`open()`](../reference/typescript/classes/Modal.md#open) 方法:

::: code-group

```ts [main.ts]
import { Plugin } from "obsidian";
import { ExampleModal } from "./modal";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "display-modal",
      name: "Display modal",
      callback: () => {
        new ExampleModal(this.app).open();
      },
    });
  }
}
```

:::

## 接受用户输入

上例中的对话框仅展示了一些文本内容。让我们一起来看一个稍微复杂点的需要处理用户输入的例子。

![Modal with user input](/images/img/modal-input.png)

::: code-group

```ts [modal.ts]
import { App, Modal, Setting } from "obsidian";

export class ExampleModal extends Modal {
  result: string;
  onSubmit: (result: string) => void;

  constructor(app: App, onSubmit: (result: string) => void) {
    super(app);
    this.onSubmit = onSubmit;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.createEl("h1", { text: "What's your name?" });

    new Setting(contentEl)
      .setName("Name")
      .addText((text) =>
        text.onChange((value) => {
          // highlight-next-line
          this.result = value
        }));

    new Setting(contentEl)
      .addButton((btn) =>
        btn
          .setButtonText("Submit")
          .setCta()
          .onClick(() => {
            // highlight-start
            this.close();
            this.onSubmit(this.result);
            // highlight-end
          }));
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}
```

:::

结果被保存在 `this.result` 中，并且在用户点击 **Submit** 时通过 `onSubmit` 回调函数返回它：

```ts
new ExampleModal(this.app, (result) => {
  new Notice(`Hello, ${result}!`);
}).open();
```

## 从建议列表中选择

[`SuggestModal`](../reference/typescript/classes/SuggestModal.md) 是一个比较特殊的对话框，用于展示一个列表供用户选择。

![Modal with suggestions](/images/img/suggest-modal.gif)

::: code-group

```ts [modal.ts]
import { App, Notice, SuggestModal } from "obsidian";

interface Book {
  title: string;
  author: string;
}

const ALL_BOOKS = [
  {
    title: "How to Take Smart Notes",
    author: "Sönke Ahrens",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
  },
];

export class ExampleModal extends SuggestModal<Book> {
  // Returns all available suggestions.
  getSuggestions(query: string): Book[] {
    return ALL_BOOKS.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Renders each suggestion item.
  renderSuggestion(book: Book, el: HTMLElement) {
    el.createEl("div", { text: book.title });
    el.createEl("small", { text: book.author });
  }

  // Perform action on the selected suggestion.
  onChooseSuggestion(book: Book, evt: MouseEvent | KeyboardEvent) {
    new Notice(`Selected ${book.title}`);
  }
}
```

:::

除却 `SuggestModal` 外，Obsidian API 提供了一个专门用于建议的对话框类型: [`FuzzySuggestModal`](../reference/typescript/classes/FuzzySuggestModal.md)。尽管它不能让您对每个项目的呈现方式做相同的控制，但是您可以获得一个开箱即用的 [模糊搜索功能](https://en.wikipedia.org/wiki/Approximate_string_matching) out-of-the-box.

![Fuzzy string search](/images/img/fuzzy-suggestion-modal.png)

```ts
export class ExampleModal extends FuzzySuggestModal<Book> {
  getItems(): Book[] {
    return ALL_BOOKS;
  }

  getItemText(book: Book): string {
    return book.title;
  }

  onChooseItem(book: Book, evt: MouseEvent | KeyboardEvent) {
    new Notice(`Selected ${book.title}`);
  }
}
```
