<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-10-25 09:58:51
 * @Description: 
-->
# FuzzySuggestModal

继承自 `SuggestModal<FuzzyMatch<T>>`

## Constructor

```ts
constructor(app: App);
```

## Methods

### getSuggestions

```ts
getSuggestions(query: string): FuzzyMatch<T>[];
```

### renderSuggestion

```ts
renderSuggestion(item: FuzzyMatch<T>, el: HTMLElement): void;
```

将建议项渲染进DOM。

### onChooseSuggestion

```ts
onChooseSuggestion(item: FuzzyMatch<T>, evt: MouseEvent | KeyboardEvent): void;
```

### getItems

```ts
abstract getItems(): T[];
```

### getItemText

```ts
abstract getItemText(item: T): string;
```

### onChooseItem

```ts
abstract onChooseItem(item: T, evt: MouseEvent | KeyboardEvent): void;
```
