---
title: Markdown 后处理器
---

# Markdown post processing

如果你想改变 Markdown 文档在预览时的呈现方式，你可以添加自定义的 _Markdown post processor(Markdown 后处理器)_。如名称所示，后处理器在 Markdown 被处理成 HTML **后**执行。它支持向被渲染的文档中添加，删除，或者替换 [HTML 元素](html-elements.md)。

下例查找在两个冒号 `:` 之间的任意代码块, 并替换成合适的 emoji 符号：

:::: code-group
::: code-group-item main.ts
```ts {6,15}
import { Plugin } from "obsidian";
import { Emoji } from "./emoji";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor((element, context) => {
      const codeblocks = element.querySelectorAll("code");

      for (let index = 0; index < codeblocks.length; index++) {
        const codeblock = codeblocks.item(index);
        const text = codeblock.innerText.trim();
        const isEmoji = text[0] === ":" && text[text.length - 1] === ":";

        if (isEmoji) {
          context.addChild(new Emoji(codeblock, text));
        }
      }
    });
  }
}
```
:::
::::

`Emoji` 类继承自 [`MarkdownRenderChild`](../api/classes/MarkdownRenderChild.md)，并将代码块替换为带有 `span` 标签的 emoji 符号：

:::: code-group
::: code-group-item emoji.ts
```ts {3,19-22}
import { MarkdownRenderChild } from "obsidian";

export class Emoji extends MarkdownRenderChild {
  static ALL_EMOJIS: Record<string, string> = {
    ":+1:": "👍",
    ":sunglasses:": "😎",
    ":smile:": "😄",
  };

  text: string;

  constructor(containerEl: HTMLElement, text: string) {
    super(containerEl);

    this.text = text;
  }

  onload() {
    const emojiEl = this.containerEl.createSpan({
      text: Emoji.ALL_EMOJIS[this.text] ?? this.text,
    });
    this.containerEl.replaceWith(emojiEl);
  }
}
```
:::
::::

## 后处理 Markdown 代码块

你知道你可以通过创建一个具有如下文本定义的 `mermaid` 代码块的方式，在 Obsidian 中创建 [Mermaid](https://mermaid-js.github.io/) 图表？：

````md
```mermaid
flowchart LR
    Start --> Stop
```
````

如果你切换为预览模式，代码块中的文本将变成以下图表形式：

```mermaid
flowchart LR
    Start --> Stop
```

如果你想去添加类似 Mermaid 的自定义代码块，你可以使用 [`registerMarkdownCodeBlockProcessor`](../api/classes/Plugin_2.md#registermarkdowncodeblockprocessor)。以下示例将包含 CSV 数据的代码块呈现为表格：

:::: code-group
::: code-group-item main.ts
```ts
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor("csv", (source, el, ctx) => {
      const rows = source.split("\n").filter((row) => row.length > 0);

      const table = el.createEl("table");
      const body = table.createEl("tbody");

      for (let i = 0; i < rows.length; i++) {
        const cols = rows[i].split(",");

        const row = body.createEl("tr");

        for (let j = 0; j < cols.length; j++) {
          row.createEl("td", { text: cols[j] });
        }
      }
    });
  }
}
```
:::
::::
