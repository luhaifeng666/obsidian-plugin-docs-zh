<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-01-18 09:52:50
 * @Description: 
-->
# SuggestModal

继承自 `Modal`

实现 `ISuggestOwner<T>`

## Constructor

```ts
constructor(app: App);
```

## Properties

### limit

```ts
limit: number
```

### emptyStateText

```ts
emptyStateText: string
```

### inputEl

```ts
inputEl: HTMLInputElement
```

### resultContainerEl

```ts
resultContainerEl: HTMLElement
```

## Methods

### setPlaceholder

```ts
setPlaceholder(placeholder: string): void;
```

### setInstructions

```ts
setInstructions(instructions: Instruction[]): void;
```

### onNoSuggestion

```ts
onNoSuggestion(): void;
```

### selectSuggestion

```ts
selectSuggestion(value: T, evt: MouseEvent | KeyboardEvent): void;
```

当用户选择时调用。

### getSuggestions

```ts
abstract getSuggestions(query: string): T[] | Promise<T[]>;
```

### renderSuggestion

```ts
abstract renderSuggestion(value: T, el: HTMLElement): any;
```

将建议项渲染到 DOM 中。

### onChooseSuggestion

```ts
abstract onChooseSuggestion(item: T, evt: MouseEvent | KeyboardEvent): any;
```
