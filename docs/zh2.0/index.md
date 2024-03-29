---
title: 声明
---
<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-07 11:00:59
 * @LastEditors: luhaifeng666 youzui@hotmail.com
 * @LastEditTime: 2023-08-21 16:58:04
 * @Description: 
-->

# Obsidian 插件开发文档

::: danger 提示

该文档的原文档现已不再维护，官方文档已经迁移至 [`新地址`](https://docs.obsidian.md/Home)。本文档目前尚可作参考，如若发现有不对劲的地儿，可移步至官方文档进行查阅~

官方的 Github 地址[`请戳这里`~](https://github.com/obsidianmd/obsidian-developer-docs)!

感谢诸位这段时间的使用与支持~

:::

这是一份 **非官方的** Obsidian 插件开发文档。

该文档由 [@marcusolsson](https://github.com/marcusolsson) 以及 Obsidian 社区共同维护。 如果您觉得文档对您有用的话, 可以给文档的**原作者**买杯咖啡支持一下:

<a href="https://buymeacoffee.com/marcusolsson">
  <img src="/images/default-violet.webp" width="200" />
</a>

如果本站对您帮助不大的话，也许下列链接会对您有所帮助:

**由 Obsidian 团队提供的资源:**

- [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin)
- [Obsidian API](https://github.com/obsidianmd/obsidian-api)

**由社区成员提供的资源:**

- [for Plugin Developers](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/for+Plugin+Developers "for Plugin Developers - Obsidian Hub - Obsidian Publish") in Obsidian Hub
- [Plugins mini FAQ](https://forum.obsidian.md/t/plugins-mini-faq/7737)
- [How to create a plugin for Obsidian](https://www.youtube.com/watch?v=XaES2G3PVpg) by [@phibr0](https://github.com/phibr0)
- [Create Your Own Obsidian Plugin](https://www.youtube.com/watch?v=9lA-jaMNS0k) by [Antone Heyward](https://www.youtube.com/channel/UC9w43btR2UUsfR6ZUf3AlqQ)
- [Unofficial API FAQ](https://liamca.in/Obsidian/API+FAQ/index) by [Liam Cain](https://liamca.in)
- [Obsidian Tools](https://github.com/obsidian-tools/obsidian-tools)
- [Getting Started with CodeMirror 6](https://github.com/nothingislost/obsidian-cm6-attributes#getting-started-with-codemirror-6) by [NothingIsLost](https://github.com/nothingislost)

## 贡献者

<VPTeamMembers align="center" size="small" :members="members" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/luhaifeng666.png',
    name: 'luhaifeng666',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/luhaifeng666' }
    ]
  },
  {
    avatar: 'https://www.github.com/RealBigBrownBear.png',
    name: 'RealBigBrownBear',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/RealBigBrownBear' }
    ]
  }
]
</script>
