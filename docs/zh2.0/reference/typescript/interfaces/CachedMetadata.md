<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-01-04 10:00:16
 * @Description: 
-->
# CachedMetadata

## Properties

### links

```ts
links: LinkCache[]
```

### embeds

```ts
embeds: EmbedCache[]
```

### tags

```ts
tags: TagCache[]
```

### headings

```ts
headings: HeadingCache[]
```

### sections

```ts
sections: SectionCache[]
```

Sections 是 markdown 的顶级模块，可以用来分割文档。

### listItems

```ts
listItems: ListItemCache[]
```

### frontmatter

```ts
frontmatter: FrontMatterCache
```

### blocks

```ts
blocks: Record<string, BlockCache>
```
