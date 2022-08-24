# React

在本指南中，您将配置您的插件以使用 [React](https://reactjs.org/)。假设您已经拥有一个使用 [custom view](../user-interface/views.md) 的插件，并且想使用 React 来改写它。

虽然您并不需要使用单独的框架来开发一个插件，以下是您想使用 React 的几点原因：

- 您有使用 React 的经验，并且想使用熟悉的技术。
- 您想在插件中重复使用现有的 React 组件。
- 您的插件需要复杂的状态管理，或者有使用常规 [HTML element](../user-interface/html-elements.md) 无法实现的其他功能。

## 配置您的插件

1. 将 React 添加到依赖中:

   ```bash
   npm install react react-dom
   ```

2. 添加 React 的类型声明:

   ```bash
   npm install --save-dev @types/react @types/react-dom
   ```

3. 在 `tsconfig.json` 的 `compilerOptions` 对象中开启 JSX 支持：

:::: code-group
::: code-group-item tsconfig.json

```ts
{
  "compilerOptions": {
    "jsx": "react"
  }
}
```

:::
::::

## 创建 React 组件

在插件的根目录下创建名为 `ReactView.tsx` 的文件，文件内容如下：

:::: code-group
::: code-group-item ReactView.tsx

```tsx
import * as React from "react";

export const ReactView = () => {
  return <h4>Hello, React!</h4>;
};
```

:::
::::

## 挂载 React 组件

要想使用 React 组件，需要在一个 [HTML element](../user-interface/html-elements.md) 中挂载它。下例中将 `ReactView` 组件挂载到了 `this.containerEl.children[1]` 元素上：

:::: code-group
::: code-group-item view.tsx

```tsx
import { ItemView, WorkspaceLeaf } from "obsidian";
// highlight-start
import * as React from "react";
import * as ReactDOM from "react-dom";
// highlight-end
import { ReactView } from "./ReactView";
import { createRoot } from "react-dom/client";

const VIEW_TYPE_EXAMPLE = "example-view";

class ExampleView extends ItemView {
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
    // highlight-start
    const root = createRoot(this.containerEl.children[1]);
    root.render(
      <React.StrictMode>
        <ReactView />,
      </React.StrictMode>
    );
    // highlight-end
  }

  async onClose() {
    // highlight-next-line
    ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);
  }
}
```

:::
::::

想要获取更多关于 `ReactDOM.render()` 以及 `ReactDOM.unmountComponentAtNode()` 的信息，可以去查阅
 [ReactDOM](https://reactjs.org/docs/react-dom.html) 这篇文档。

您可以将您的 React 组件挂载到任意 `HTMLElement` 上，可以看 [status bar items](../user-interface/status-bar.md) 这个示例。当您使用完组件后请调用`ReactDOM.unmountComponentAtNode()` 方法确保组件被彻底移除。

## 创建应用上下文

如果您想从 React 组件中获取到 [`App`](../reference/typescript/classes/App.md) 对象，您需要将其作为依赖传递。随着插件的迭代更新，尽管您在很少的几个地方使用了 `App` 对象，它也会在整个组件树中被传递。

还有一个选择就是给应用创建一个 React 上下文，使得 `App` 变成全局对象以便在 React 视图中的所有组件都可以获取到它。

1. 使用 `React.createContext()` 去创建应用上下文
:::: code-group
::: code-group-item context.ts

```tsx
import * as React from "react";
import { App } from 'obsidian';

export const AppContext = React.createContext<App>(undefined);
```

:::
::::

1. 用上下文提供者包装`ReactView`并将应用作为值传递

:::: code-group
::: code-group-item view.ts

```tsx
const root = createRoot(this.containerEl.children[1]);
root.render(
  <AppContext.Provider value={this.app}>
    <ReactView />
  </AppContext.Provider>,
  this.containerEl.children[1]
);
```

:::
::::

1. 创建自定义钩子以便在组件中更方便的使用上下文。

:::: code-group
::: code-group-item hooks.ts

```tsx
import { AppContext } from "./context";

export const useApp = (): App | undefined => {
  return React.useContext(AppContext);
};
```

:::
::::

4. 在 `ReactView` 中的任意 React 组件中使用钩子函数以获取 app。

:::: code-group
::: code-group-item ReactView.ts

```tsx
import * as React from "react";
import { useApp } from "./hooks";

export const ReactView = () => {
  const { vault } = useApp();

  return <h4>{vault.getName()}</h4>;
};
```

:::
::::

要想获取更多信息，可以查阅 React 文档中的 [Context](https://reactjs.org/docs/context.html) and [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)。
