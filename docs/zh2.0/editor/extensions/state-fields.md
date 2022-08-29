---
title: 状态字段
---

# 状态字段

状态字段是一个可以让您管理自定义编辑器状态的 [编辑器扩展](index.md)。此页面将引导您通过实现计算器扩展来构建状态字段。

该计算器需要支持从当前状态中加减数字，并在您想要重新开始时重置状态。

在本页最后，您将会理解构建状态字段的基本概念。

:::tip
本页旨在为 Obsidian 插件开发者们精炼 CodeMirror 6 的官方文档。要想获取更多关于状态字段的详细信息，可以参考 [State Fields](https://codemirror.net/docs/guide/#state-fields) 这篇文档。 
:::

## 前置准备

- Basic understanding of [State management](state-management.md).
- 对于 [状态管理](state-management.md) 有基本了解。

## 定义 state effect

State effect 描述了您想要做出的状态变化。您可以将它们想象成 class 中的 方法。

在计算器的例子中，您需要为每个计算操作定义一个 state effect:

```ts
const addEffect = StateEffect.define<number>();
const subtractEffect = StateEffect.define<number>();
const resetEffect = StateEffect.define();
```

`<>` 之间的类型定义了 effect 的输入类型。比如您想要加或减的数字。Reset effect 不需要任何输入，因此您可以不用管它。

## 定义一个状态字段

与预料相反的是，状态字段实际上并不 __存储__ 状态。而是 __管理__ 状态。状态字段获取当前状态，应用任何 state effects, 并返回新的状态。

状态字段包含根据 transaction 中的效果应用数学操作的计算器逻辑。一个 transaction 可以包含多个 effects, 比如两次相加，状态字段需要一个接一个的应用它们。

```ts
export const calculatorField = StateField.define<number>({
  create(state: EditorState): number {
    return 0;
  },
  update(oldState: number, transaction: Transaction): number {
    let newState = oldState;

    for (let effect of transaction.effects) {
      if (effect.is(addEffect)) {
        newState += effect.value;
      } else if (effect.is(subtractEffect)) {
        newState -= effect.value;
      } else if (effect.is(resetEffect)) {
        newState = 0;
      }
    }

    return newState;
  },
});
```

- `create` 方法返回计算器的初始值。
- `update` 包含应用 effects 的逻辑。
- `effect.is()` 使您可以在使用 effect 之前检查它的类型。

## 派发 state effects

要想将 state effect 应用到一个状态字段中，您需要将它作为 transaction 的一部分派发到编辑器窗口。

```ts
view.dispatch({
  effects: [addEffect.of(num)],
});
```

您甚至可以定义一组提供更熟悉的 API 的辅助函数:

```ts
export function add(view: EditorView, num: number) {
  view.dispatch({
    effects: [addEffect.of(num)],
  });
}

export function subtract(view: EditorView, num: number) {
  view.dispatch({
    effects: [subtractEffect.of(num)],
  });
}

export function reset(view: EditorView) {
  view.dispatch({
    effects: [resetEffect.of(null)],
  });
}
```

## 下一步

从您的状态字段中提供 [Decorations](decorations.md) 以更改文档的显示方式。
