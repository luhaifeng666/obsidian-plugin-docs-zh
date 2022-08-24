---
title: Manifest
---
<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-24 13:36:59
 * @Description: 
-->
# Manifest

This page describe the schema for the plugin manifest, `manifest.json`.

## Properties

| Property        | Type    | Required | Description                                            |
|-----------------|---------|----------|--------------------------------------------------------|
| `author`        | string  | **Yes**  | The plugin author's name.                              |
| `description`   | string  | **Yes**  | The long description of your plugin.                   |
| `id`            | string  | **Yes**  | The ID of your plugin.                                 |
| `isDesktopOnly` | boolean | **Yes**  | Whether your plugin uses NodeJS or Electron APIs.      |
| `minAppVersion` | string  | **Yes**  | The minimum required Obsidian version for your plugin. |
| `name`          | string  | **Yes**  | The display name of your plugin.                       |
| `version`       | string  | **Yes**  | The version of your plugin.                            |
| `authorUrl`     | string  | No       | A URL to your own website.                             |
