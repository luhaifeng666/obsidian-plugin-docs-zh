---
title: 提交您的插件
---
<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 19:35:52
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-09-05 09:14:09
 * @Description: 
-->

# 提交您的插件

如果您想与 Obsidian 社区分享您的插件，最好的方式是将您的插件提交到[官方的插件库](https://github.com/obsidianmd/obsidian-releases/blob/master/community-plugins.json)中。当您的插件被审核过后，用户可以直接在 Obsidian 中安装您的插件。它也将出现在 Obsidian 网站的[插件目录](https://obsidian.md/plugins)中。在本指南中，您将学习如何提交自己的插件。

:::warning
本指南旨在为如何提交插件提供更丰富的说明。在您提交插件之前，请确保已经阅读过[官方的说明](https://github.com/obsidianmd/obsidian-sample-plugin#adding-your-plugin-to-the-community-plugin-list)。
:::

## 前置准备

遵循本指南，请确认您项目的更路径中存在以下文件：

- 用来描述插件以及使用方式的 `README.md` 文件。
- 用来决定其他开发者如何使用插件及其源码的 `LICENSE` 。如果在选择 license 时需要帮助的话，可以查阅 [Choose a License](https://choosealicense.com/) 这篇文档。
- 用来描述插件的 `manifest.json` 文件。想要获取更多相关信息，可以查阅 [Manifest](../reference/manifest.md).

## 第一步 — 创建发布

在此步骤中，您将准备提交一个插件版本。

1. 在 `manifest.json` 文件中, 根据 [Semantic Versioning](https://semver.org/) 版本规范修改 `version` 版本。

2. [创建 Github 版本](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release).
   - 版本的 tag 必须与 `manifest.json` 文件中的 version 字段相对应。
   - 在版本 tag 中不要加 `v`。

3. 输入版本的名称, 并且在描述栏中输入插件的描述信息。

4. 将下列文件上传至版本库, 作为二进制附件:

   - `main.js`
   - `manifest.json`
   - `styles.css` (可选)

:::tip
要想将创建版本的过程自动化，可以查阅 [Release your plugin with GitHub Actions](release-your-plugin-with-github-actions.md) 这篇文档。
:::

## Step 2 — 提交您的插件以供审核

在此步骤中，您将提交插件以供 Obsidian 团队进行审核。

1. Fork [obsidian-releases](https://github.com/obsidianmd/obsidian-releases) 到 GitHub. 想要获取更多关于如何 fork 的信息, 可以参考 [Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) 这篇文档。

2. 在 `community-plugins.json` 的 JSON 中创建一个新条目。 可以参考 [Recent Files](https://github.com/tgrosinger/recent-files-obsidian) 这篇文档中的示例。

   ```json
   {
     "id": "recent-files-obsidian",
     "name": "Recent Files",
     "author": "Tony Grosinger",
     "description": "Display a list of recently opened files",
     "repo": "tgrosinger/recent-files-obsidian",
     "branch": "main"
   }
   ```

   - `id`, `name`, `author`, 以及 `description` 字段将决定插件如何展呈现给用户, 并且应该与您的 [插件 manifest](../reference/manifest.md) 中的相应属性匹配。
   - `id` 是插件的唯一标识。 搜索Search `community-plugins.json` 文件，确认下没有相同id的其他插件。
   - `repo` 是您的 GitHub 仓库路径. 举个例子, 如果您的 Github 地址是 `https://github.com/your-username/your-repo-name`, 那么路径就是`your-username/your-repo-name`.
   - (可选的) `branch` 让您指定对应的 Github 分支。如果忽略，默认是 `master`。

   请记住在前一个条目的右大括号 `}` 之后添加一个逗号。

3. [创建一个 pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
4. 按照 description 栏中的说明拉取所需模板创建一个 pull request。
5. 点击 **Create pull request**。
6. 在 details 栏中填写 pull request 的描述信息。对于复选框，在方括号 `[x]` 之间插入一个 `x` 以将其标记为已完成。
7. 点击 **Create pull request** (最后一次 🤞)。

现在您已经将自己的插件提交到了 Obsidian 的公共仓库。放松下坐等 Obsidian 团队审核您的插件。审核的时间取决于 Obsidian 团队的当前的工作流程。这个团队目前还不大，所以在插件审核期间请耐心等待。

## 第三步 — Address 审核意见

一旦有人审核了您的插件，他们会在您的 pull request 下回复审核的结果。审核者可能会要求您更新插件，或者他们可能会给您提出一些改善意见。

虽然只有 Obsidian 团队成员可以提交您的插件，同时其他社区的成员可能也会要求去审核您的提交记录。

当您的 pull request 被 merge 后，用户就可以立即安装您的插件了。

:::tip 想要提供帮助？
如果您想去帮忙审核社区的插件，可以查阅 Liam Cain 所写的 [Plugin Review Guidelines](https://liamca.in/Obsidian/Plugin+Review+Guide/index) 这篇文档。
:::

## 更新已提交的插件

您只需要提交您最初版本的插件，之后，用户可以直接在 Obsidian 中自动自动更新您的插件。

要想发布您插件的最新版本，请参照 [创建发布](#第一步-—-创建发布) 的说明。

想要获取更多关于 Obsidian 如何拉取新版本的社区插件的信息，可以查阅 [How community plugins are pulled](https://github.com/obsidianmd/obsidian-releases#how-community-plugins-are-pulled) 这篇文档。
