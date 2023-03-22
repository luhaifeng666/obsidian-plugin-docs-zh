---
title: Manifest
---
<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-03-22 11:30:04
 * @Description: 
-->
# Manifest

本页描述了插件清单 manifest.json 的结构。

## Properties

| Property        | Type    | Required | Description                                            |
|-----------------|---------|----------|--------------------------------------------------------|
| `author`        | string  | **Yes**  | 插件作者的名字。                              |
| `description`   | string  | **Yes**  | 您插件的详细描述。                   |
| `id`            | string  | **Yes**  | 您插件的ID.                                 |
| `isDesktopOnly` | boolean | **Yes**  | 您的插件是否使用 NodeJS 或者 Electron APIs。      |
| `minAppVersion` | string  | **Yes**  | 您插件所要求的 Obsidian 的最低版本。 |
| `name`          | string  | **Yes**  | 您插件的显示名称。                       |
| `version`       | string  | **Yes**  | 您插件的版本号。                            |
| `authorUrl`     | string  | No       | 您自己网页的地址。                             |
| `fundingUrl`    | string  | No       | 一个用户可以支持您项目的地址。     |
