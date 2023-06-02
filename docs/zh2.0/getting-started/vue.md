---
title: Vue
---
# Vue

在这篇指南里，您将使用 [Vue](https://vuejs.org) 框架来开发 Obsidian 插件，并动手引入基于 Vue 3 的 [Naive UI](https://www.naiveui.com/zh-CN/os-theme) 库在插件设置页里绘制一个简单的按钮，并与 Obsidian 的原生按钮进行比较。

::: tip
当然您并不一定非要使用 Naive UI 库，还有很多其它基于 Vue 框架的组件库可供选择，这里我们只是举个例子。
:::

## 开发前准备

在开始之前，您需要做如下准备：

- 检查 [是否有人已经为您想要的东西开发了插件](https://obsidian.md/plugins) ！可能已经有了一个跟您预期足够相似的现有插件，您可以和它的开发者进行合作。
- 在本地安装 [Git](https://git-scm.com) 。
- 一个 [GitHub](https://github.com) 账号 。
- 在本地安装 [Node.js](https://nodejs.org) 的开发环境。

## 第一步：下载插件开发模板

:::tip
以下步骤将会引导您创建自己的插件，如果您想要跳过一些手动步骤（诸如拉取代码库、修改插件名称等），可以尝试使用 [obsidian-plugin-generator](https://www.npmjs.com/package/obsidian-plugin-generator) 这个插件。

该插件会自动拉取官方的示例项目，并根据您输入的内容自动完成替换插件名称等操作。
:::

首先，您需要下载一个基于 Vue 框架的 Obsidian 插件开发模板，并基于这个模板完成剩余的步骤。

1. 跳转至 [Obsidian Vue Sample Plugin](https://github.com/RealBigBrownBear/obsidian-vue-sample-plugin) 页面。
2. 依次点击 **Use this template** -> **Create a new repository** 。
3. 在 **Repository name** 选项中，输入您的插件名称。 Obsidian 的插件名称往往以 `obsidian-` 开头。举个例子： `obsidian-instant-coffee` 。
4. 点击 **Create repository from template** 。

现在您已经基于 Obsidian 的插件开发模板创建了一个属于自己的仓库。接下来，您需要将源码下载到本地。

1. 跳转到您刚才创建的代码仓库。
2. 点击 **Code** ，并复制代码仓库地址。
3. 打开终端，进入您本地 Obsidian 仓库插件所在的文件夹。

```bash
cd path/to/vault/.obsidian/plugins
```

4. 将源码下载到该文件夹下。

```bash
git clone https://github.com/your-username/obsidian-instant-coffee.git
```

## 第二步：安装项目依赖

1. 打开终端，进入您的插件文件夹。

```bash
cd path/to/vault/.obsidian/plugins/obsidian-instant-coffee
```

2. 安装项目依赖。

::: code-group

```bash [npm]
# 以下命令二选一
npm run chore
npm install
```

```bash [yarn]
# 以下命令二选一
yarn run chore
yarn install
```

:::

3. 安装 Naive UI 库。

::: code-group

```bash [npm]
npm install -D naive-ui
```

```bash [yarn]
yarn install -D naive-ui
```

## 第三步：修改插件的 manifest 配置

可以参照 [创建您的第一个插件 - 修改插件的 manifest 配置](../getting-started/create-your-first-plugin.md#第四步-修改插件的-manifest-配置) 。

## 第四步：查看 `src` 文件夹

::: tip
与其它 Obsidian 插件开发模板不同的是，基于 Vue 框架的插件开发模板其 `main.ts` 文件位于 `src` 目录下，我们建议所有的代码都放在 `src` 文件夹里。
:::

在这个开发模板中，我们已经为您编写好了一个附带插件设置页的 Obsidian 插件所需要的最基本的代码。它们看起来应该是这样的：

::: code-group

```ts [main.ts]
import { Plugin } from "obsidian";
import { VueSamplePluginSettingTab } from "./setting-tab";

// 注册插件
export default class VueSamplePlugin extends Plugin {
    // 在用户激活插件和插件更新时触发，这将是您设置插件大部分功能的地方
    onload() {
        // 加入插件设置页
        this.addSettingTab(new VueSamplePluginSettingTab(this.app, this));
    }
    // 在用户禁用插件时触发，插件所调用的任何资源必须在这里得到释放，以防止 Obsidian 的性能受到影响
    onunload() {
    }
}
```

```ts [setting-tab.ts]
import { App, PluginSettingTab } from "obsidian";
import VueSamplePlugin from "./main";

// 注册插件设置页
export class VueSamplePluginSettingTab extends PluginSettingTab {
    plugin: VueSamplePlugin;
    constructor(app: App, plugin: VueSamplePlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    // 当插件设置页被激活时显示的内容
    display() {
        const { containerEl } = this;
        containerEl.empty();
    }
}
```

```ts [vue-env.d.ts]
// 声明 vue 模块，该操作将允许在 ts 文件中使用 import 导入 vue 模块
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
```

:::

如果您还不知道如何为插件创建一个设置页，可以参考 [设置](../user-interface/settings.md) 这篇文档。

下面让我们使用基于 Vue 3 的 Naive UI 库来改写它。

## 第五步：编写 Vue 组件

在插件文件夹的 `src` 目录下创建名为 `SettingTab.vue` 的文件，文件内容如下：

::: code-group

```vue [SettingTab.vue]
<template>
    <div>
        <button>native-ui</button>
    </div>
    <br />
    <div>
        <n-button>naive-ui</n-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NButton } from "naive-ui";

export default defineComponent({
    components: {
        NButton
    }
})
</script>
```

:::

其中，`<button></button>` 为 Obsidian 原生的按钮，`<n-button></n-button>` 为 Naive UI 库的按钮。

## 第六步：挂载 Vue 组件

打开 `src` 文件夹下的 `setting-tab.ts` 文件，该文件定义了插件设置页的内容，现在让我们在插件设置页里挂载我们刚刚编写好的 `SettingTab` 组件。

想要使用 Vue 组件，首先需要创建一个 Vue 组件实例，然后在一个 [HTML element](../user-interface/html-elements.md) 中挂载它。在下面的例子里，我们创建了一个 `SettingTab` 组件实例并把它直接挂载到了 `this.containerEl` 元素上：

::: code-group

```ts {3-4,18} [setting-tab.ts]
import { App, PluginSettingTab } from "obsidian";
import VueSamplePlugin from "./main";
import { createApp } from "vue";
import SettingTab from "./SettingTab.vue";

// 注册插件设置页
export class VueSamplePluginSettingTab extends PluginSettingTab {
    plugin: VueSamplePlugin;
    constructor(app: App, plugin: VueSamplePlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    // 当插件设置页被激活时显示的内容
    display() {
        const { containerEl } = this;
        containerEl.empty();
        // 挂载 SettingTab 组件
        createApp(SettingTab).mount(containerEl);
    }
}
```

:::

您可以使用 `createApp` 方法创建一个 Vue 组件实例，然后用 `mount` 方法将创建的 Vue 组件实例挂载到到任意 `HTMLElement` 上，当您使用完该 Vue 组件实例后记得调用 `unmount` 方法确保 Vue 组件实例已被移除。

## 第七步：编译

就是现在，让我们享受编译的快感！

1. 开发模式：

::: code-group

```bash [npm]
npm run dev
```

```bash [yarn]
yarn run dev
```

:::

2. 发布模式：

::: code-group

```bash [npm]
npm run build
```

```bash [yarn]
yarn run build
```

:::

执行上述命令会在插件文件夹的 **根目录** 生成插件的编译版本—— `main.js` 文件。

马上到 Obsidian 加载这个插件，看看效果吧 ~ 💪

:::tip
在开发模式下，修改 `src` 文件夹中的代码都可以自动热更新到 `main.js` 文件中。
:::

## 第八步：修改 `styles.css` 文件

`styles.css` 文件包含了插件的 CSS 样式信息，它会在 Obsidian 加载插件的时候一并进行加载。

:::tip
`styles.css` 文件并不是必需的，如果您的插件不需要额外修改 CSS 样式，可以删除该文件。
:::

## 接下来

您已经学会使用 Vue 框架来开发您的 Obsidian 插件了！🎉 以此为起点，您可以尝试添加更多的代码，发挥您的想象力，去发掘 Obsidian 更多的可能性！

想要获取如何使用 Naive UI 库的更多信息，可以查阅 Naive UI 库的 [官方文档](https://www.naiveui.com/zh-CN/os-theme/docs/introduction) 。
