# 库

以下内容摘自官方的 [Working with multiple Vaults](https://help.obsidian.md/How+to/Working+with+multiple+vaults) 文档:

> 在 Obsidian 中每个笔记集合都是一个库。库中包含一个目录，以及目录下的所有子目录。

当你的插件可以像其他任何 Node.js 应用一样访问文件系统时，[`Vault`](../api/classes/Vault.md) 模块使得在库中操作文件以及目录变得更加简单。

以下示例中递归打印了库中所有 Markdown 文件的路径:

```ts
const files = this.app.vault.getMarkdownFiles()

for (let i = 0; i < files.length; i++) {
  console.log(files[i].path);
}
```

:::tip 提示
如果你想列出 _所有_ 文件，而且不仅仅只是 Markdown 文档，可以使用 [`getFiles()`](../api/classes/Vault.md#getfiles) 方法来代替。
:::

## 读取文件

有两个方法可以用来读取文件内容: [`read()`](../api/classes/Vault.md#read) 以及 [`cachedRead()`](../api/classes/Vault.md#cachedread)。

- 如果你仅仅只想将内容展示给用户, 可以使用 `cachedRead()` 方法以避免多次从磁盘中读取文件。
- 如果你想读取文件内容，并在改变它之后写回磁盘，可以使用 `read()` 方法以避免文件可能会被之前的内容所覆盖。

::: details 区别
`cachedRead()` 方法以及 `read()` 方法两者之间的唯一区别体现在插件即将读取文件，而文件在 Obsidian 外被修改了的时候。一经文件系统通知 Obsidian 文件在外部被修改， `cachedRead()` 方法表现的 _完全_ 就像 `read()` 方法一样。同样的，如果你在 Obsidian 内容保存了文件，那么读取缓存也会被刷新。
:::

以下示例读取了库中的所有 Markdown 文件内容，并且返回了文档大小的均值:

:::: code-group
::: code-group-item main.ts
```ts
import { Notice, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addRibbonIcon("info", "Calculate average file length", async () => {
      const fileLength = await this.averageFileLength();
      new Notice(`The average file length is ${fileLength} characters.`);
    });
  }

  async averageFileLength(): Promise<number> {
    const { vault } = this.app;

    const fileContents: string[] = await Promise.all(
      vault.getMarkdownFiles().map((file) => vault.cachedRead(file))
    );

    let totalLength = 0;
    fileContents.forEach((content) => {
      totalLength += content.length;
    });

    return totalLength / fileContents.length;
  }
}
```
:::
::::

## 删除文件

有两个方法可以用来删除文件, 分别是 [`delete()`](../api/classes/Vault.md#delete), 以及 [`trash()`](../api/classes/Vault.md#trash)。使用哪个方法取决于你是否允许用户改变主意(找回文件)。

- 使用 `delete()` 方法会彻底删除文件。
- 使用 `trash()` 方法会将文件移入回收站。

当你使用 `trash()` 方法时, 你可以设置将文件移入系统的回收站，也可以设置将删除的文件移动至用户的库根目录下的 `.trash` 本地文件夹中。

## 文件还是文件夹？

一些操作返回或者接收一个 [`TAbstractFile`](../api/classes/TAbstractFile.md) 对象, 它既可以是一个文件，也可以是一个文件夹。在你使用它之前需要确认 `TAbstractFile` 的类型到底是什么。

```ts
const folderOrFile = this.app.vault.getAbstractFileByPath("folderOrFile");

if (folderOrFile instanceof TFile) {
  console.log("It's a file!");
} else if (folderOrFile instanceof TFolder) {
  console.log("It's a folder!");
}
```
