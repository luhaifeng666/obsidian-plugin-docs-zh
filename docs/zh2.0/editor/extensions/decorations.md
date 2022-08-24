---
title: 装饰
---
# 装饰

装饰让您控制在[编辑器扩展中](index.md)如何绘制或者展示内容。如果您打算通过在编辑器中添加，替换或者样式化标签来更改外观，您很可能需要使用装饰。

阅读完此指南后，您将会：

- 理解如何使用装饰去改变编辑器的外观。
- 理解使用状态字段以及视图插件提供装饰之间的区别。

:::tip
本页旨在提炼 CodeMirror 6 官方为 Obsidian 插件开发者们所提供文档的精华部分。想要获取更多关于状态字段的详细信息，请查阅 [Decorating the Document](https://codemirror.net/docs/guide/#decorating-the-document) 此文档。
:::

## 先决条件

- 基本了解 [状态字段](state-fields.md)。
- 基本了解 [视图插件](view-plugins.md)。

## 概览

不使用装饰时，文档将呈现为纯文本的形式。一点也不有趣。使用装饰后，您将改变文档的展示形式，比如高亮文本或者添加自定义 HTML 标签：

您可以使用以下类型的装饰：

- 使用 [Mark decorations](https://codemirror.net/docs/ref/#view.Decoration%5Emark) 修改现有元素的样式。
- 使用 [Widget decorations](https://codemirror.net/docs/ref/#view.Decoration%5Ewidget) 在文档中插入标签。
- 使用 [Replace decorations](https://codemirror.net/docs/ref/#view.Decoration%5Ereplace) 隐藏或使用其他标签替换文档的部分内容。
- 使用 [Line decorations](https://codemirror.net/docs/ref/#view.Decoration%5Eline) 仅为线添加样式。

要想使用装饰，您需要在编辑器扩展内创建他们，并将扩展程序 __提供__ 给编辑器。您有两种将装饰提供给编辑器的方式，__直接__ 使用[状态字段](state-fields.md) 或者 __间接__ 使用[视图插件](view-plugins.md)。

## 何时使用视图插件或者状态字段

视图插件以及状态字段都可以为编辑器提供装饰，但是他们之间有些区别：

- 如果您可以根据视图内部的内容决定装饰，此时可以使用视图插件。
- 如果您需要在视图外部管理装饰，此时可以使用状态字段。
- 如果您想做出可能改变视图内容的修改，比如添加分割线，此时可以使用状态字段。

如果您可以使用任何一种方法来实现您的扩展, 那么视图插件往往能带来更好的性能。比如，试想下您打算实现一个用来检查文档拼写的编辑器扩展。

一种方法是将整个文档传递给外部拼写检查器，然后返回错误列表。在此情况下，不管当前视口中有什么，您需要将每条错误映射到装饰，并使用状态字段来管理装饰。

另一种方式是仅仅只检查展示在视口中的内容。在用户滚动浏览文档时，改扩展需要不断地执行拼写检查，但您可以拼写检查包含数百万行文本的文档。

![State field vs. view plugin](/images/img/decorations.svg)

## 提供装饰

想象一下，您想构建一个编辑器扩展，用表情符号替换项目符号列表项。 您可以使用视图插件或状态字段来完成此操作，但有一些区别。 在本节中，您将看到如何使用这两种类型的扩展来实现它。

两种实现共享相同的核心逻辑：

1. 使用 [syntaxTree](https://codemirror.net/docs/ref/#language.syntaxTree) 查找列表项。
2. 将每个列表项的前导连字符 `-` 替换为小部件。

### 小部件

小部件是您添加到编辑器中的自定义 HTML 标签。您可以在文档中的特定位置插入一个小部件，或者用一个小部件替换一段内容。

下例中定义了一个返回 `<span>👉</span>` HTML 标签的小部件。您将在稍后使用到它。

```ts
import { EditorView, WidgetType } from "@codemirror/view";

export class EmojiWidget extends WidgetType {
  toDOM(view: EditorView): HTMLElement {
    const div = document.createElement("span");

    div.innerText = "👉";

    return div;
  }
}
```

要想使用 emoji 小部件替换您文档中的一部分内容，可以使用[替换装饰](https://codemirror.net/docs/ref/#view.Decoration%5Ereplace)。

```ts
const decoration = Decoration.replace({
  widget: new EmojiWidget()
});
```

### 状态字段

提供来自状态字段的装饰：

1. 使用 `DecorationSet` 类型[定义状态字段](state-fields.md#defining-a-state-field)
2. 将 `provide` 属性添加到状态字段中。

```ts
provide(field: StateField<DecorationSet>): Extension {
  return EditorView.decorations.from(field);
},
```

```ts field.ts
import { syntaxTree } from "@codemirror/language";
import {
  Extension,
  RangeSetBuilder,
  StateField,
  Transaction,
} from "@codemirror/state";
import {
  Decoration,
  DecorationSet,
  EditorView,
  WidgetType,
} from "@codemirror/view";
import { EmojiWidget } from "emoji";

export const emojiListField = StateField.define<DecorationSet>({
  create(state): DecorationSet {
    return Decoration.none;
  },
  update(oldState: DecorationSet, transaction: Transaction): DecorationSet {
    const builder = new RangeSetBuilder<Decoration>();

    syntaxTree(transaction.state).iterate({
      enter(node) {
        if (node.type.name.startsWith("list")) {
          // Position of the '-' or the '*'.
          const listCharFrom = node.from - 2;

          builder.add(
            listCharFrom,
            listCharFrom + 1,
            Decoration.replace({
              widget: new EmojiWidget(),
            })
          );
        }
      },
    });

    return builder.finish();
  },
  provide(field: StateField<DecorationSet>): Extension {
    return EditorView.decorations.from(field);
  },
});
```

### 视图插件

To manage your decorations using a view plugin:

使用视图插件管理您的装饰：

1. [创建一个视图插件](view-plugins.md#creating-a-view-plugin).
1. 在您的插件中添加 `DecorationSet` 成员属性。
1. 在 `constructor()` 方法中初始化装饰。
1. 在 `update()` 中重新构建装饰。

以下示例仅在基础文档或视口更改时重建装饰。以下示例仅在基础文档或视口更改时重建装饰。

```ts plugin.ts
import { syntaxTree } from "@codemirror/language";
import { RangeSetBuilder } from "@codemirror/state";
import {
  Decoration,
  DecorationSet,
  EditorView,
  PluginSpec,
  PluginValue,
  ViewPlugin,
  ViewUpdate,
  WidgetType,
} from "@codemirror/view";
import { EmojiWidget } from "emoji";

class EmojiListPlugin implements PluginValue {
  decorations: DecorationSet;

  constructor(view: EditorView) {
    this.decorations = this.buildDecorations(view);
  }

  update(update: ViewUpdate) {
    if (update.docChanged || update.viewportChanged) {
      this.decorations = this.buildDecorations(update.view);
    }
  }

  destroy() {}

  buildDecorations(view: EditorView): DecorationSet {
    const builder = new RangeSetBuilder<Decoration>();

    for (let { from, to } of view.visibleRanges) {
      syntaxTree(view.state).iterate({
        from,
        to,
        enter(node) {
          if (node.type.name.startsWith("list")) {
            // Position of the '-' or the '*'.
            const listCharFrom = node.from - 2;

            builder.add(
              listCharFrom,
              listCharFrom + 1,
              Decoration.replace({
                widget: new EmojiWidget(),
              })
            );
          }
        },
      });
    }

    return builder.finish();
  }
}

const pluginSpec: PluginSpec<EmojiListPlugin> = {
  decorations: (value: EmojiListPlugin) => value.decorations,
};

export const emojiListPlugin = ViewPlugin.fromClass(
  EmojiListPlugin,
  pluginSpec
);
```

`buildDecorations()` 是一个辅助方法，它基于编辑器视图构建一整套装饰。

注意传入 `ViewPlugin.fromClass()` 的第二个参数。`PluginSpec` 中的 `decorations` 属性指定视图插件如何向编辑器提供装饰。

由于视图插件知道什么对用户可见，因此您可以使用 `view.visibleRanges` 来限制要访问的语法树的哪些部分。
