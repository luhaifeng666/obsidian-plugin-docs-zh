<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-03-24 23:00:24
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-14 22:15:53
 * @Description: 
-->
# HTML 元素

Obsidian API 中的一些组件，比如 [settings tab](settings.md)，会暴露 _container elements（容器元素）_:

```ts {12}
import { App, PluginSettingTab } from "obsidian";

class ExampleSettingTab extends PluginSettingTab {
  plugin: ExamplePlugin;

  constructor(app: App, plugin: ExamplePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;

    // ...
  }
}
```

Container elements（容器元素） 是 `HTMLElement` 对象，可以在 Obsidian 中创建自定义界面。

## 使用 `createEl()` 创建 HTML 元素

每个 `HTMLElement`，其中也包含 container element（容器元素），对外暴露出 `createEl()` 方法，该方法在原始元素下创建一个 `HTMLElement`。

下例中展示了您该如何在 container element（容器元素）中添加一个 `<h1>` 标签：

```ts
containerEl.createEl("h1", { text: "Heading 1" });
```

`createEl()` 方法返回新元素的引用：

```ts
const book = containerEl.createEl("div");
book.createEl("div", { text: "How to Take Smart Notes" });
book.createEl("small", { text: "Sönke Ahrens" });
```

## 给您的元素添加样式

您可以通过在插件的根目录下添加 `styles.css` 文件来给您的插件添加自定义样式。现在来给上面的 book 示例添加一些样式：

:::: code-group
::: code-group-item styles.css
```css
.book {
  border: 1px solid var(--background-modifier-border);
  padding: 10px;
}

.book__title {
  font-weight: 600;
}

.book__author {
  color: var(--text-muted);
}
```
:::
::::

:::tip
`--background-modifier-border` 以及 `--text-muted` 都是 Obsidian 来定义以及使用的 [CSS变量](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)。如果您将这些变量应用到您的样式中，那么即使用户使用不同的主题，您的插件看起来也会很棒！🌈
:::

要想在 HTML 元素中使用这些样式，可以给它们设置 `cls` 属性：

```ts
const book = containerEl.createEl("div", { cls: "book" });
book.createEl("div", { text: "How to Take Smart Notes", cls: "book__title" });
book.createEl("small", { text: "Sönke Ahrens", cls: "book__author" });
```

现在它已经比之前好看多了! 🎉

![Styled book item](/images/styles.png)

### 动态样式

如果您想基于用户的设置或者其他值来改变元素的样式，可以使用 `toggleClass` 方法：

```ts
element.toggleClass("danger", status === "error");
```
