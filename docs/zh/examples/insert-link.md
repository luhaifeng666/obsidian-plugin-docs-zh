# 插入链接

本例中添加了一个指令，用于打开一个模态框去插入一个 Markdown 链接。它将编辑器中选中的文字作为默认的链接文本，之后再将用户插入的链接替换选中的内容。

本例中使用到了 [commands](../guides/commands.md), [modals](../guides/modals.md), 以及 [editor](../guides/editor.md) 中的知识。如果你理解本例有些困难，建议在继续往下阅读之前先去查阅相关文档。

下图中展示了你将创建的内容:

![Insert link modal](/images/example-insert-link.gif)

以下是完整的代码:

:::: code-group
::: code-group-item main.ts
```ts
import { Editor, Plugin } from "obsidian";
import { InsertLinkModal } from "./modal";

export default class InsertLinkPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "insert-link",
      name: "Insert link",
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();

        const onSubmit = (text: string, url: string) => {
          editor.replaceSelection(`[${text}](${url})`);
        };

        new InsertLinkModal(this.app, selectedText, onSubmit).open();
      },
    });
  }
}
```
:::
::::

:::: code-group
::: code-group-item modal.ts
```ts
import { App, Modal, Setting } from "obsidian";

export class InsertLinkModal extends Modal {
  linkText: string;
  linkUrl: string;

  onSubmit: (linkText: string, linkUrl: string) => void;

  constructor(
    app: App,
    defaultLinkText: string,
    onSubmit: (linkText: string, linkUrl: string) => void
  ) {
    super(app);
    this.linkText = defaultLinkText;
    this.onSubmit = onSubmit;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.createEl("h1", { text: "Insert link" });

    new Setting(contentEl).setName("Link text").addText((text) =>
      text.setValue(this.linkText).onChange((value) => {
        this.linkText = value;
      })
    );

    new Setting(contentEl).setName("Link URL").addText((text) =>
      text.setValue(this.linkUrl).onChange((value) => {
        this.linkUrl = value;
      })
    );

    new Setting(contentEl).addButton((btn) =>
      btn
        .setButtonText("Insert")
        .setCta()
        .onClick(() => {
          this.close();
          this.onSubmit(this.linkText, this.linkUrl);
        })
    );
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}
```
:::
::::
