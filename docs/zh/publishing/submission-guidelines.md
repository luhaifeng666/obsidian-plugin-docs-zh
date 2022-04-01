# 提交指南

该页面列出了插件作者在提交他们的插件时常见的审查意见。

## 使用 `normalizePath()` 方法清理自定义的 paths(路径)

当你在 vault 中接收文件或文件夹的自定义 paths(路径) 时，或者当你在插件中构建你自己的 paths(路径) 时，要使用 [`normalizePath()`](../api/functions/normalizePath) 方法。

`normalizePath()` 方法接收一个 path(路径) 作为参数并清理它以确保文件系统以及跨平台使用的安全。这个方法：

- 清理正斜杠和反斜杠的使用，例如将 1 个或多个 `\` 或 `/` 替换为单个 `/`。
- 移除头尾的正斜杠与反斜杠。
- 将连续空格，`\u00A0`， 替换为常规空格。
- 通过 [String.prototype.normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) 方法执行路径。

```ts
import { normalizePath } from "obsidian";
const pathToPlugin = normalizePath(app.vault.configDir + "//plugins/my-plugin");
// pathToPlugin contains ".obsidian/plugins/my-plugin" not .obsidian//plugins/my-plugin
```
