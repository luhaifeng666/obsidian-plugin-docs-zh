---
title: 设置
---

# Settings

如果您想用户可以自行对插件进行配置，那么您可以将 _设置_ 选项暴露给他们。

在本指南中，您将学到如何创建类似如下的设置页面 👇

![Settings](/images/settings.png)

给插件添加设置的主要原因是保存用户的配置，即使在用户退出 Obsidian 后，配置依旧可以保留。下例示范了如何从磁盘读写配置：

:::: code-group
::: code-group-item main.ts
```ts title="main.ts"
import { Plugin } from "obsidian";
import { ExampleSettingTab } from "./settings";

interface ExamplePluginSettings {
  dateFormat: string;
}

const DEFAULT_SETTINGS: Partial<ExamplePluginSettings> = {
  dateFormat: "YYYY-MM-DD",
};

export default class ExamplePlugin extends Plugin {
  settings: ExamplePluginSettings;

  async onload() {
    await this.loadSettings();

    this.addSettingTab(new ExampleSettingTab(this.app, this));
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
```
:::
::::

这里做了很多事情 🤯, 让我们来仔细看看每个部分。

## 创建设置定义

首先，您需要去创建一个定义，`ExamplePluginSettings`，用于那些您想让用户去配置的设置项。当插件被启用后，您可以通过 `settings` 的属性访问到这些配置。

```ts
interface ExamplePluginSettings {
  dateFormat: string;
}

export default class ExamplePlugin extends Plugin {
  settings: ExamplePluginSettings;

  // ...
}
```

## 保存以及加载设置对象

[`loadData()`](../api/classes/Plugin_2.md#loaddata) 以及 [`saveData()`](../api/classes/Plugin_2.md#savedata) 可以很方便的从磁盘存取数据。下例中也介绍了两个辅助方法，可以更轻松地从插件的其他部分使用 `loadData()` 和 `saveData()`.

```ts
export default class ExamplePlugin extends Plugin {

  // ...

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
```

最后，在插件加载时确保载入了设置：

```ts
async onload() {
  await this.loadSettings();

  // ...
}
```

## 提供默认值

当用户首次启用插件，此时还没有添加设置。上例中给空缺的设置提供了默认值。

要想明白这是怎么生效的，来一起看看下面的代码：

```ts
Object.assign(DEFAULT_SETTINGS, await this.loadData())
```

`Object.assign()` 是个 JavaScript 函数，可以将一个对象的所有属性复制到另外一个对象中。所有通过 `loadData()` 返回的属性都会覆盖 `DEFAULT_SETTINGS` 中的属性。

```ts
const DEFAULT_SETTINGS: Partial<ExamplePluginSettings> = {
  dateFormat: "YYYY-MM-DD",
};
```

:::tip
`Partial<Type>` 是 TypeScript 提供的能力，用于返回一个类型，其中 `Type` 所有的属性都是可选属性。它启用类型检查，同时让您只定义要为其提供默认值的属性。
:::

## 注册设置tab

现在插件已经可以保存以及加载设置了，但是用户尚且不能修改任何一项配置。通过添加一个设置标签，您可以为您的插件用户提供一个易用的界面去更新他们的设置：

```ts
this.addSettingTab(new ExampleSettingTab(this.app, this));
```

在这里，`ExampleSettingTab` 是一个继承自 [`PluginSettingTab`](../api/classes/PluginSettingTab.md) 的类：

:::: code-group
::: code-group-item settings.ts
```ts
import ExamplePlugin from "main";
import { App, PluginSettingTab, Setting } from "obsidian";

export class ExampleSettingTab extends PluginSettingTab {
  plugin: ExamplePlugin;

  constructor(app: App, plugin: ExamplePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;

    containerEl.empty();

    new Setting(containerEl)
      .setName("Date format")
      .setDesc("Default date format")
      .addText((text) =>
        text
          .setPlaceholder("MMMM dd, yyyy")
          .setValue(this.plugin.settings.dateFormat)
          .onChange(async (value) => {
            this.plugin.settings.dateFormat = value;
            await this.plugin.saveSettings();
          })
      );
  }
}
```
:::
::::

在 `display()` 中您可以为设置标签创建内容。想要获取更多信息，可以查阅 [HTML elements](html-elements.md)。

`new Setting(containerEl)` 方法向容器标签中添加一个设置。本例通过 `addText()` 方法使用文本字段，但也有其他几种可用的设置类型。

当文本字段发生变化时更新设置对象，并将其保存到磁盘中：

```ts {2,3}
.onChange(async (value) => {
  this.plugin.settings.dateFormat = value;
  await this.plugin.saveSettings();
})
```

干的漂亮！💪 用户会感谢您提供了一种可以让他们得以自定义使用您插件的方式。在开始下一个指南前，去试试添加另外一项配置吧~
