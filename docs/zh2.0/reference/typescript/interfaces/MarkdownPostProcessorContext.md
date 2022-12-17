<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-17 22:15:25
 * @Description: 
-->
# MarkdownPostProcessorContext

## Properties

### docId

```ts
docId: string
```

### sourcePath

```ts
sourcePath: string
```

### frontmatter

```ts
frontmatter: any
```

## Methods

### addChild

```ts
addChild: (child: MarkdownRenderChild) => void
```

添加一个子组件，其生命周期将由渲染器管理。

使用该方法在渲渲染器中添加一个子级，这样一来如果子级的 containerEl 一旦被移除， 那么组件的 unload 方法将被调用。

### getSectionInfo

```ts
getSectionInfo: (el: HTMLElement) => MarkdownSectionInformation
```

获取该元素在该时间点的 section 信息。

仅在您需要此信息之前调用此方法以获取最新的版本。

该方法在很多情况下也可能会返回 null；如果您使用了该方法，您必须对返回 null 的情况做兼容。

