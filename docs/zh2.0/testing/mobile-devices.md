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
