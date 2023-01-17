---
title: Vue
---
# Vue

在这篇指南里，您将使用 [Vue](https://vuejs.org/) 框架来开发 Obsidian 插件，并动手引入基于 Vue 3 的 [Naive UI](https://www.naiveui.com/zh-CN/os-theme) 库在插件设置页绘制一个简单的按钮组件。

当然您并不一定非要使用 Naive UI 库，还有很多其它基于 Vue 框架的组件库可供选择，这里我们只是举个例子。

## 第一步：下载插件开发模板

首先, 您需要从 [Obsidian Vue Sample Plugin](https://github.com/renmu123/obsidian-vue-sample-plugin) 下载一个基于 Vue 框架的 Obsidian 插件开发模板，并基于这个模板完成剩余的步骤。

## 第二步：安装依赖

```bash npm
npm install
npm install -D naive-ui  // 安装 Naive UI 库
```

```bash yarn
yarn install
yarn install -D naive-ui  // 安装 Naive UI 库
```

## 第三步：为您的插件添加一个设置页

我们假设您已经阅读完 [创建您的第一个插件](../getting-started/create-your-first-plugin) 和 [设置](../user-interface/settings.md) 这两篇文档，知道基本的插件开发流程并已经为您的插件添加了一个设置页，下面让我们使用基于 Vue 3 的 Naive UI 库来改写它。

## 第四步：编写 Vue 组件

在插件文件夹的 `src` 目录下创建名为 `NaiveButton.vue` 的文件，文件内容如下：

```vue
<template>
  <n-button>naive-ui</n-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'

export default defineComponent({
  components: {
    NButton
  }
})
</script>
```

## 第五步：挂载 Vue 组件

打开 `src` 文件夹下的 `setting.ts` 文件，该文件定义了插件设置页的内容，现在让我们在插件设置页里挂载我们刚刚创建好的 `NaiveButton.vue` 组件。

要想使用 Vue 组件，需要在一个 [HTML element](../user-interface/html-elements.md) 中挂载它。下例中将 `NaiveButton` 组件直接挂载到了 `this.containerEl` 元素上：

```ts {3-4,15}
import { App, PluginSettingTab } from "obsidian"
import VueSamplePlugin from "./main"
import { createApp } from "vue"
import NaiveButton from "./NaiveButton.vue"

export class VueSamplePluginSettingTab extends PluginSettingTab {
    plugin: VueSamplePlugin
    constructor(app: App, plugin: VueSamplePlugin) {
        super(app, plugin)
        this.plugin = plugin
    }
    display() {
        const { containerEl } = this
        containerEl.empty()
        createApp(NaiveButton).mount(containerEl)
    }
}
```

你可以使用 `createApp` 方法创建一个 Vue 组件，然后用 `mount` 方法将创建的 Vue 组件挂载到到任意 `HTMLElement` 上，当您使用完 Vue 组件后记得调用 `unmount` 方法确保 Vue 组件已被移除。

## 第六步：编译！

就是现在，让我们享受编译的快感！

```bash npm
npm run dev
```

```bash yarn
yarn run dev
```

马上到 Obsidian 加载这个插件，看看效果吧 ~ 💪

## 接下来

您已经学会使用 Vue 框架来开发您的 Obsidian 插件了！🎉 以此为起点，您可以尝试添加更多的代码，发挥您的想象力，去发掘 Obsidian 更多的可能性！

要想获取如何使用 Naive UI 库的更多信息，可以查阅 Naive UI 库的 [官方文档](https://www.naiveui.com/zh-CN/os-theme/docs/introduction) 。
