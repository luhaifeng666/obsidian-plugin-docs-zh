<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-19 11:05:36
 * @Description: 
-->
# MarkdownRenderer

Extends `MarkdownRenderChild`

Implements `MarkdownPreviewEvents`, `HoverParent`

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### app

```ts
app: App
```

### hoverPopover

```ts
hoverPopover: HoverPopover
```

## Methods

### renderMarkdown

```ts
static renderMarkdown(markdown: string, el: HTMLElement, sourcePath: string, component: Component): Promise<void>;
```

Renders markdown string to an HTML element.
