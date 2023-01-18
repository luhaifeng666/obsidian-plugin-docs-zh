---
title: 创建您的第一个插件
---
# 创建您的第一个插件

通过这篇指南，您将学会如何开发一个 Obsidian  插件。 如果您更喜欢通过视频的方式来学习, 可以查看由 [Antone Heyward](https://www.youtube.com/channel/UC9w43btR2UUsfR6ZUf3AlqQ) 提供的视频 [Create Your Own Obsidian Plugin](https://www.youtube.com/watch?v=9lA-jaMNS0k)。

:::danger 开始之前
:fire: **千万不要在您的主库里开发插件！** 当您开发一个插件的时候, 一个错误可能会对您的库做出一些意外修改。 您也会存在 **库被永久删除** 的风险。
:::

## 开发前准备

在使用这篇指南之前，您需要做如下准备:

- 本地需要安装 [Git](https://git-scm.com/)。
- 一个 [GitHub](https://github.com) 账号。
- [Node.js](https://Node.js.org/en/about/) 的本地开发环境。

## 第一步: 下载示例插件

:::tip
以下步骤将会引导您创建自己的插件，如果您想要跳过一些手动步骤（诸如拉取代码库，修改插件名称等），可以尝试使用 [obsidian-plugin-generator](https://www.npmjs.com/package/obsidian-plugin-generator) 这个插件。

该插件会自动拉取官方的示例项目，并根据您输入的内容自动替换插件名称等内容。
:::

首先, 您需要下载一个工作示例插件，并基于这个插件完成剩余步骤。

1. 跳转至 [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin) 页面。
2. 点击 **Use this template**。
3. 在 **Repository name** 选项中, 输入您的插件名称。 Obsidian 的插件名称往往以 `obsidian-` 开头。 举个 :chestnut: , `obsidian-instant-coffee`。
4. 点击 **Create repository from template**。

现在您已经基于 Obsidian 的示例插件创建了一个属于自己的仓库。接下来，您需要将源码下载到本地。

1. 跳转到您刚才创建的代码仓库。
2. 点击 **Code**, 并复制代码仓库地址。
3. 打开终端连接至仓库。

```bash
cd path/to/vault/.obsidian/plugins
```

1. 将源码下载至插件所在的文件夹。

```bash
git clone https://github.com/your-username/obsidian-instant-coffee.git
```

## 第二步: 构建插件

在这一步骤中, 您将构建插件代码。

1. 跳转到插件所在文件夹。

```bash
cd path/to/vault/.obsidian/plugins/obsidian-instant-coffee
```

1. 安装依赖。

::: code-group

```bash [npm]
npm install
```

```bash [yarn]
yarn install
```

:::

1. 编译插件代码。 执行下述命令会生成 `main.js` 文件，该文件中包含插件的编译版本。

::: code-group

```bash [npm]
npm run dev
```

```bash [yarn]
yarn run dev
```

:::

## 第三步: 启用插件

要想 Obsidian 加载这个插件, 您需要先去启用它。

1. 打开 Obsidian 的 **Preferences** 选项。
2. 在侧边栏菜单中, 点击 **Community plugins**。
3. 在 **Installed plugins** 栏目下, 通过点击插件后面的切换按钮启用 **Sample Plugin** 这个插件。

现在您已经将自己开发的自定义插件跑起来啦~ 棒! 💪

然而, "Sample Plugin" 可能并不是您心仪的插件名称。让我们来改变它。

## 第四步: 修改插件的 manifest 配置

在这个步骤中, 您将通过修改 _manifest_ 来重命名您的插件。 插件清单 `manifest.json` 文件中包含了插件的名称以及版本等信息。

1. 在编辑器（比如 [Visual Studio Code](https://code.visualstudio.com/)）中打开 `obsidian-instant-coffee` 目录。
2. 在编辑器中打开 `manifest.json` 文件。
3. 修改 `id` 属性的值作为插件 id , 比如 `obsidian-instant-coffee`。
4. 修改 `name` 属性的值作为插件名称, 这个名称要尽量友好(见名知意)。比如 `Instant coffee`。
5. 如果您愿意的话, 也可以对 `description`, `author`, 以及 `authorUrl` 属性做出修改。

插件同时也是一个 Nodejs 的包, 您可以在 `package.json` 中对其进行配置。 眼下您无需对其操心过多。现在, 我们去修改它来匹配 _manifest_ 中的属性。

1. 在编辑器中打开 `package.json` 。
2. 修改 `name` 属性的值为 `manifest.json` 中 `id` 对应的值。
3. 修改 `version` 属性的值为 `manifest.json` 中 `version` 对应的值。
4. 修改 `description` 属性的值为 `manifest.json` 中 `description` 对应的值。
5. 重启 Obsidian 以重新加载您的插件。

## 第五步: 修改插件源码

在这个步骤中, 您需要修改插件源码，并重载插件以便让改动生效。

1. 在编辑器中打开 `main.ts` 。
2. 找到添加 _ribbon icon_ 的那一行代码。

```ts
this.addRibbonIcon('dice', 'Sample Plugin', () => {
  new Notice('This is a notice!');
});
```

1. 修改提示文案，您想改啥就改啥。

```ts
new Notice('Hello, you!');
```

1. 重启 Obsidian 以重新加载您的插件。
1. 点击左侧菜单的图标，会弹出 `Hello, you!` 的提示信息。并确认当您鼠标移动到图标上时会显示 "Sample Plugin" 提示信息。

## 接下来

您已经开发了属于您自己的 Obsidian 插件！ 🚀 您可以尝试通过改变更多的代码去看看它做了什么。以此为起点, 您可以通过查阅其他一些指南去发掘插件的更多功能。
