# Svelte

该指南解释了如何配置你的插件以使用 [Svelte](https://svelte.dev/), 一个轻量级的可用于替换诸如 React 以及 Vue 这些的框架。

Svelte 是围绕一个可以预编译你的代码为普通 Javascript 的编辑器构建的，这意味着在运行时不需要加载任何类库。这也意味着不需要使用虚拟 DOM 去追踪状态的变化，允许你的插件以最小的额外开销运行。

如果你想学习到更多关于 Svelte 的只是，以及如何去使用它，可以查阅 [tutorial](https://svelte.dev/tutorial/basics) 以及 [documentation](https://svelte.dev/docs) 这两篇文档。

本指南假定你已经阅读完[创建你的第一个插件](../getting-started/create-your-first-plugin) 这篇文档。

:::tip Visual Studio Code
Svelte 有一个[官方的 Visual Studio Code 扩展](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) 可以提供 Svelte 组件语法高亮以及智能提示。
:::

## 配置你的插件

要想构建一个 Svelte 应用，你需要去安装依赖以及配置你的插件以编译使用 Svelte 编写的代码。

1. 将 Svelte 添加到你插件的依赖中：

:::: code-group
::: code-group-item npm

```bash
  npm install --save-dev svelte svelte-preprocess @tsconfig/svelte esbuild-svelte
```

:::

::: code-group-item yarn

```bash
  yarn add --dev svelte svelte-preprocess @tsconfig/svelte esbuild-svelte
```

:::
::::

1. 修改 `tsconfig.json` 文件以为常见的 Svelte 问题启用额外的类型检查。`types` 属性非常关键，它可以让 Typescript 识别出 `.svelte` 文件。

:::: code-group
::: code-group-item tsconfig.json

```json
   {
     "extends": "@tsconfig/svelte/tsconfig.json",
     "compilerOptions": {
       "types": ["svelte", "node"],

       // ...
     }
   }
```

:::
::::

1. 将下面的内容从 `tsconfig.json` 中移除，该配置与 Svelte 的配置相冲突。

:::: code-group
::: code-group-item tsconfig.json

```json
"inlineSourceMap": true,
```

:::
::::

1. 在 `esbuild.config.mjs` 文件中引入以下内容：

:::: code-group
::: code-group-item esbuild.config.mjs

```js
import esbuildSvelte from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";
```

:::
::::

1. 将 Svelte 添加到插件列表中。

:::: code-group
::: code-group-item esbuild.config.mjs

```js{15}
 esbuild
 .build({
   plugins: [
     esbuildSvelte({
       compilerOptions: { css: true },
       preprocess: sveltePreprocess(),
     }),
   ],
   // ...
 })
 .catch(() => process.exit(1));
```

:::
::::

## 创建一个 Svelte 组件

在插件的根目录下，创建一个名为 `Component.svelte` 的新文件：

:::: code-group
::: code-group-item Component.svelte

```tsx
<script lang="ts">
  export let variable: number;
</script>

<div class="number">
  <span>My number is {variable}!</span>
</div>

<style>
  .number {
    color: red;
  }
</style>
```

:::
::::

## 加载 Svelte 组件

要想使用 Svelte 组件，需要在一个即存的 [HTML element](../guides/html-elements.md). 中加载它。比如，如果在 Obsidian 的自定义 [`ItemView`](../api/classes/ItemView.md) 中进行加载：

:::: code-group
::: code-group-item view.ts

```ts
import { ItemView, WorkspaceLeaf } from "obsidian";

import Component from "./Component.svelte";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
  component: Component;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_EXAMPLE;
  }

  getDisplayText() {
    return "Example view";
  }

  async onOpen() {
    this.component = new Component({
      target: this.contentEl,
      props: {
        variable: 1
      }
    });
  }

  async onClose() {
    this.component.$destroy();
  }
}
```

:::
::::

:::tip

Svelte 要求 TypeScript 的版本至少是 4.5。如果当你构建插件的时候看到如下报错，你需要升级 TypeScript 到一个更新的版本。

```plain
error TS5023: Unknown compiler option 'preserveValueImports'.
```

要想解决这个报错，在控制台中运行如下指令：

```bash
yarn upgrade typescript@~4.5.0
```

:::


:::tip

Svelte 要求 TypeScript 的版本至少是 4.5。如果当你构建插件的时候看到如下报错，你需要升级 TypeScript 到一个更新的版本。

```plain
error TS5023: Unknown compiler option 'preserveValueImports'.
```

要想解决这个报错，在控制台中运行如下指令：

```bash
yarn upgrade typescript@~4.5.0
```

:::

## 创建一个 Svelte 的 store

要为你的插件创建一个 store 以及在通用的 Svelte 组件中访问它来代替通过 prop 的方式访问，需要遵循如下步骤：

1. 创建一个名为 `store.ts` 的文件：

```jsx title="store.ts"
   import { writable } from "svelte/store";
   import type ExamplePlugin from "./main";

   const plugin = writable<ExamplePlugin>();
   export default { plugin };
```

2. 配置 store

:::: code-group
::: code-group-item view.ts

```ts
   import { ItemView, WorkspaceLeaf } from "obsidian";
   import type ExamplePlugin from "./main";
   import store from "./store";
   import Component from "./Component.svelte";

   export const VIEW_TYPE_EXAMPLE = "example-view";

   export class ExampleView extends ItemView {
     // ...

     async onOpen() {
       store.plugin.set(this.plugin);

       this.component = new Component({
         target: this.contentEl,
         props: {
           variable: 1
         }
       });
     }
   }
```

:::
::::

3. 在组件中使用 store：

:::: code-group
::: code-group-item Component.svelte

```jsx
   <script lang="ts">
     import type MyPlugin from "./main";

     let plugin: MyPlugin;
     store.plugin.subscribe((p) => (plugin = p));
   </script>
```

:::
::::
