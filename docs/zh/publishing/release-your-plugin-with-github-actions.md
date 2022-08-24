# 使用 GitHub Actions 发布您的插件

通过手动的方式创建插件的 release 比较费事也容易出错。在本指南中，您将通过配置 [GitHub Actions](https://github.com/features/actions) 的方式，在您创建新的 tag 时自动创建对应的 release。

:::tip
Github Action 工作流起初由 [argentum](https://forum.obsidian.md/u/argentum) 创建和共享。想要获取更多信息以及其他变更，可以查阅 [forum announcement](https://forum.obsidian.md/t/using-github-actions-to-release-plugins/7877/3) 这篇文档。
:::

1. 在您插件的根目录下，创建 `.github/workflows/release.yml` 文件，并将以下内容写入文件：

   ```bash
   name: Release Obsidian plugin

   on:
     push:
       tags:
         - "*"

   env:
     PLUGIN_NAME: your-plugin-id # Change this to match the id of your plugin.

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v2
         - name: Use Node.js
           uses: actions/setup-node@v1
           with:
             node-version: "14.x"

         - name: Build
           id: build
           run: |
             npm install
             npm run build
             mkdir ${{ env.PLUGIN_NAME }}
             cp main.js manifest.json styles.css ${{ env.PLUGIN_NAME }}
             zip -r ${{ env.PLUGIN_NAME }}.zip ${{ env.PLUGIN_NAME }}
             ls
             echo "::set-output name=tag_name::$(git tag --sort version:refname | tail -n 1)"

         - name: Create Release
           id: create_release
           uses: actions/create-release@v1
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
             VERSION: ${{ github.ref }}
           with:
             tag_name: ${{ github.ref }}
             release_name: ${{ github.ref }}
             draft: false
             prerelease: false

         - name: Upload zip file
           id: upload-zip
           uses: actions/upload-release-asset@v1
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
           with:
             upload_url: ${{ steps.create_release.outputs.upload_url }}
             asset_path: ./${{ env.PLUGIN_NAME }}.zip
             asset_name: ${{ env.PLUGIN_NAME }}-${{ steps.build.outputs.tag_name }}.zip
             asset_content_type: application/zip

         - name: Upload main.js
           id: upload-main
           uses: actions/upload-release-asset@v1
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
           with:
             upload_url: ${{ steps.create_release.outputs.upload_url }}
             asset_path: ./main.js
             asset_name: main.js
             asset_content_type: text/javascript

         - name: Upload manifest.json
           id: upload-manifest
           uses: actions/upload-release-asset@v1
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
           with:
             upload_url: ${{ steps.create_release.outputs.upload_url }}
             asset_path: ./manifest.json
             asset_name: manifest.json
             asset_content_type: application/json

         - name: Upload styles.css
           id: upload-css
           uses: actions/upload-release-asset@v1
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
           with:
             upload_url: ${{ steps.create_release.outputs.upload_url }}
             asset_path: ./styles.css
             asset_name: styles.css
             asset_content_type: text/css
   ```

2. 在控制台中提交这些文件。

   ```bash
   git add .github/workflows/release.yml
   git commit -m "Add release workflow"
   git push origin main
   ```

3. 创建一个与 `manifest.json` 文件中的版本号相对应的 tag。

   ```bash
   git tag -a 1.0.1 -m "1.0.1"
   git push origin 1.0.1
   ```

   - `-a` 创建了一个 [注释标签](https://git-scm.com/book/en/v2/Git-Basics-Tagging#_creating_tags).
   - `-m` 用来指定版本的名称。在 Obsidian 插件中必须与版本号一致。

4. 打开仓库所在的 github 地址并点击 **Actions** 标签。您的工作流可能还在运行或者已经运行结束。

5. 当工作流运行结束，回到仓库首页并点击 **Releases** 标签。该工作流已创建 GitHub 版本并将所需资产作为二进制附件上传。

您已将插件设置为在创建新标签时自动创建 GitHub 版本。

- 如果这是插件的第一个版本，您现在可以去 [提交您的插件](submit-your-plugin.md)。
- 如果是插件的版本更新，那么现在插件的使用者们可以去更新插件的最新版本了。

## 使用标准版本自动标记您的版本

您也可以使用[标准版本](https://github.com/conventional-changelog/standard-version)根据您您创建的提交自动应用标签。

标准版本使用 [Conventional Commits](https://www.conventionalcommits.org/) 给您的提交添加一致性，并根据您的提交自动生成 `CHANGELOG.md` 。举个栗子：

- 如果您的提交信息以 `fix:` 开头，那么它会影响补丁版本。
- 如果您的提交信息以 `feat:` 开头，那么它会影响次级版本。
- 如果您的提交信息的第三行以 `BREAKING CHANGE:` 开头，那么它会影响主要版本。

:::tip
如果您使用的是 Visual Studio Code，[Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) 插件可以帮您去创建 Conventional Commits。
:::

要想开启插件的标准版本：

1. 安装标准版本。
:::: code-group
::: code-group-item npm
```bash
  npm install --save-dev standard-version
  ```
:::

::: code-group-item yarn
```bash
  yarn add --dev standard-version
   ```
:::
::::

2. 在 `package.json` 文件中添加以下属性:

   ```json
   {
     "scripts": {
       "release": "standard-version"
     },
     "standard-version": {
       "t": ""
     }
   }
   ```

   - `"t": ""` 配置标准版本移除开头的 `v` 以符合 Obsidian 的规则。

要想创建版本:

1. 根据 Conventional Commits 提交您的修改。

   ```bash
   git commit -m "feat: Add settings"
   ```

2. 创建新的 release 并更新 changelog.

:::: code-group
::: code-group-item npm
```bash
  npm run release
  ```
:::

::: code-group-item yarn
```bash
  yarn run release
   ```
:::
::::

::: tip
默认情况下，如果主版本号低于 **1**，比如 0.3.4，`feat:` 和 `BREAKING CHANGE:` 会更新补丁和次要版本，而不是更新次要和主要版本。要想提高次要版本和主要版本，可以使用如下命令：


```bash npm
# Release as minor
npm run release -- --release-as minor
# Release as major
npm run release -- --release-as major
```

```bash yarn
# Release as minor
yarn run release -- --release-as minor
# Release as major
yarn run release -- --release-as major
```

:::

1. 推送的新的 tag。

```bash
git push --follow-tags origin main
```

- `main` 是指想要推送的远程分支的名称。

Github 会通过 GitHub Actions 打包并发布插件。
