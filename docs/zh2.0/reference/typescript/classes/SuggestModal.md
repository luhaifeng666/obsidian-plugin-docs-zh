<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-11-16 22:55:34
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

Called when the user makes a selection.

### getSuggestions

```ts
abstract getSuggestions(query: string): T[] | Promise<T[]>;
```

### renderSuggestion

```ts
abstract renderSuggestion(value: T, el: HTMLElement): any;
```

Render the suggestion item into DOM.

### onChooseSuggestion

```ts
abstract onChooseSuggestion(item: T, evt: MouseEvent | KeyboardEvent): any;
```
