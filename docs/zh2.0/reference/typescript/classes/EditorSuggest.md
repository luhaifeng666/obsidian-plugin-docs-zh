<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-10-21 10:19:32
 * @Description: 
-->
# EditorSuggest

继承自 `PopoverSuggest<T>`

## Constructor

```ts
constructor(app: App);
```

## Properties

### context

```ts
context: EditorSuggestContext
```

当前建议上下文，包含 `onTrigger` 的结果。
在 EditorSuggest 不该被运行时，它的值将为 null。

### limit

```ts
limit: number
```

覆盖它以对建议项使用不同的限制

## Methods

### setInstructions

```ts
setInstructions(instructions: Instruction[]): void;
```

### onTrigger

```ts
abstract onTrigger(cursor: EditorPosition, editor: Editor, file: TFile): EditorSuggestTriggerInfo | null;
```

基于编辑器的行以及光标位置，决定 EditorSuggest 是否应该在此时被触发。
通常而言，您将在光标前的当前行文本上执行正则表达式。
返回 null 以表明该 EditorSuggest 不应该被触发。

在调用此方法的时候请留意性能问题，因为它将会被触发得非常频繁（在每次按键的时候都会触发）。
保持简单，并且如果您发现尚未到合适触发时机时尽可能早的返回 null。

### getSuggestions

```ts
abstract getSuggestions(context: EditorSuggestContext): T[] | Promise<T[]>;
```

基于此上下文生成建议项。可以是异步的，但最好是同步的。
当生成一步建议项时，您应该传递上下文（context）。
