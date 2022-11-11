<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-11-11 09:50:51
 * @Description: 
-->
# PopoverSuggest

实现 `ISuggestOwner<T>`, `CloseableComponent`

## Constructor

```ts
constructor(app: App, scope: Scope);
```

## Methods

### open

```ts
open(): void;
```

### close

```ts
close(): void;
```

### renderSuggestion

```ts
abstract renderSuggestion(value: T, el: HTMLElement): void;
```

将建议项渲染到 DOM 中。

### selectSuggestion

```ts
abstract selectSuggestion(value: T, evt: MouseEvent | KeyboardEvent): void;
```

当用户选择时调用。
