<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-07 11:00:59
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-10 14:41:10
 * @Description: 
-->
# 开发流程

无论何时您对源码做出修改，插件都需要被重载。您可以通过重启 Obsidian 的方式来重载插件，但是很快你就会厌倦这种操作。

## 在 Obsidian 中重载插件

您可以通过在已安装的插件列表中重新启用插件的方式来重载插件：

1. 打开 **Perferences(偏好设置)**;
2. 点击 **Community plugins(第三方插件)**;
3. 在 **Installed plugins(已安装插件)** 中找到您的插件；
4. 关闭开关以禁用插件。
5. 打开开关以启用插件。

现在您运行的便是插件的最新版本。

## 热重载

[Hot-Reload](https://github.com/pjeby/hot-reload) 插件会在您的源码发生改变时重新加载插件。

要想获取关于该插件的更多信息，可以查看 [forum announcement](https://forum.obsidian.md/t/plugin-release-for-developers-hot-reload-the-plugin-s-youre-developing/12185) 这篇文档。
