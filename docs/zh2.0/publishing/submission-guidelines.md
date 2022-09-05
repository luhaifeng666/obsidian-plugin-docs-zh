---
title: 提交指南
---
<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-24 14:17:30
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-09-05 09:03:05
 * @Description: 
-->
# 提交指南

This page lists common review comments plugin authors get when submitting their plugin.

本页列出了插件作者在提交插件之后获得的常见评论。

## 使用 `normalizePath()` 方法清理用户定义的路径

Use  whenever you accept user-defined paths to files or folders in the vault, or when you construct your own paths in the plugin code.

当您接受库中的文件或者文件夹的用户定义路径时，或者当您在插件代码中构建自己的路径时使用 [`normalizePath()`](../reference/typescript/functions/normalizePath) 方法，

`normalizePath()` takes a path and scrubs it to be safe for the file system and for cross-platform use. This function:

`normalizePath()` 方法获取路径并对其进行清理，以确保文件系统以及跨平台使用的安全。该方法：

- 清理正斜杠和反斜杠的使用，例如将 1 个或多个 `\` 或 `/` 替换为单个 `/`。
- 移除头尾的正斜杠与反斜杠。
- 将连续空格，`\u00A0`， 替换为常规空格。
- 通过 [String.prototype.normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) 方法执行路径。

```ts
import { normalizePath } from "obsidian";
const pathToPlugin = normalizePath(app.vault.configDir + "//plugins/my-plugin");
// pathToPlugin contains ".obsidian/plugins/my-plugin" not .obsidian//plugins/my-plugin
```
