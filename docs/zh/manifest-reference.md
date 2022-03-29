# Manifest 配置参考

这里罗列了插件的 `manifest.json` 配置文件中的属性描述。

## 属性

| 属性        | 类型    | 是否必填 | 描述                                            |
|-----------------|---------|----------|--------------------------------------------------------|
| `author`        | string  | **是**  | 插件的作者姓名。                              |
| `description`   | string  | **是**  | 插件的描述信息。                   |
| `id`            | string  | **是**  | 插件 ID。                                 |
| `isDesktopOnly` | boolean | **是**  | 插件使用 NodeJS 还是 Electron 的 API。      |
| `minAppVersion` | string  | **是**  | 安装插件要求的 Obsidian 最低版本。 |
| `name`          | string  | **是**  | 插件的名称。                       |
| `version`       | string  | **是**  | 插件的版本。                            |
| `authorUrl`     | string  | 否       | 作者的个人网站地址。                             |
