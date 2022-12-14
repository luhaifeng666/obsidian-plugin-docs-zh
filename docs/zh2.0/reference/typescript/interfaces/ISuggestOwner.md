<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-14 09:38:57
 * @Description: 
-->
# ISuggestOwner

## Methods

### renderSuggestion

```ts
renderSuggestion: (value: T, el: HTMLElement) => void
```

将建议项渲染到 DOM 中。

### selectSuggestion

```ts
selectSuggestion: (value: T, evt: MouseEvent | KeyboardEvent) => void
```

当用户执行选择操作时被调用。
