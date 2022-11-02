---
title: 移动设备
---

# 移动端开发

学习如何开发移动设备上的插件。

## 在桌面模拟移动设备

您可以直接通过开发者工具模拟 Obsidian 在移动设备上运行。

1. 打开 **开发者工具**。
2. 选择 **Console** 标签。
3. 输入以下内容并按 `Enter` 键。

```ts
this.app.emulateMobile(true);
```

想要禁用移动设备模拟，输入以下内容并按 `Enter` 键：

```ts
this.app.emulateMobile(false);
```

:::tip

要想来回切换移动设备模拟，您可以使用 `this.app.isMobile` 标签：

```ts
this.app.emulateMobile(!this.app.isMobile);
```

:::

## 平台的特定功能

使用 `Platform` 以探测当前您的插件所运行的平台：

```ts
import { Platform } from "obsidian";

if (Platform.isIosApp) {
  // ...
}

if (Platform.isAndroidApp) {
  // ...
}
```

## 在移动设备上禁用您的插件

如果您的插件需要使用 Node.js 或者 Electron API，您可以阻止用户在移动设备上安装您的插件。

要想仅支持桌面端 app，在 [manifest.json](../reference/manifest.md) 中将 `isDesktopOnly` 的值设置为 `true`。

## 故障排除

这部分罗列了在开发移动端插件时常见的一些问题。

### Node 以及 Electron APIs

Node.js 以及 Electron API 在移动端设备上无法获取。任何对它们的调用都会导致您的插件崩溃。

### 正则表达式中的后行断言(lookbehind)

目前在 iOS 中不支持正则表达式中的后行断言(lookbehind)。要想兼容 iOS 用户，请查阅 [平台的特定功能](#平台的特定功能)。

有关最新支持状态，请查阅 [Can I Use](https://caniuse.com/js-regexp-lookbehind)。查看 "Safari on iOS" 部分。
