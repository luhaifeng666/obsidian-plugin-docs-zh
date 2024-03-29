---
title: 开发者工具
---
<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-07 11:00:59
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-12-07 22:55:13
 * @Description: 
-->
# 开发者工具

本页为插件开发者们列出了一些工具。虽然它们不是开发插件所必需的，但是他们可以简化插件开发。

## Obsidian 工具

[Obsidian Tools](https://github.com/obsidian-tools/obsidian-tools) 是一个提供给插件开发者们的工具集。

## 在本地下载所有插件

如果您遇到了麻烦，看看其他人如何解决它是很有帮助的。通过将整个插件库下载到您的电脑上，您可以通过搜索源码去寻求灵感。

- [konhi/obsidian-repositories-downloader](https://github.com/konhi/obsidian-repositories-downloader)
- [luckman212/obsidian-plugin-downloader](https://github.com/luckman212/obsidian-plugin-downloader)
- [claremacrae/obsidian-repos-downloader](https://github.com/claremacrae/obsidian-repos-downloader)

## Beta 测试

在您[提交](publishing/submit-your-plugin.md)插件之前，您可能想让用户先尝试使用它。

即使插件尚未发布，您的 beta 版本用户也可以通过 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 这个插件安装它。

## 徽章

要想为您的插件添加包含下载量的徽章，将以下代码粘贴到您的 README 中并将 `<PLUGIN_ID>` 替换为您的插件 id：

```md
![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22<PLUGIN_ID>%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)
```

比如，下面是 Calendar 插件的下载量：

![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22calendar%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

:::tip

如果您想自定义徽章，使用 [Shields.io dynamic badge](https://shields.io/#dynamic-badge) 并设置以下参数：

| Parameter | Value |
|-|-|
| `data type` | `json` |
| `data url` | `https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json` |
| `query` | `$["your-plugin-id"].downloads` |

要想添加 logo，在图片地址后拼接 `&logo=obsidian` 即可。

:::
