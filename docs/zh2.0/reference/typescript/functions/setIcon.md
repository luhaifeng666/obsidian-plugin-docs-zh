<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-26 22:18:02
 * @Description: 
-->
# setIcon

```ts
export function setIcon(parent: HTMLElement, iconId: IconName): void;
```

根据 iconId 向元素中插入 SVG 图片。如果没有与 iconId 对应的图片，则不作处理。

## Parameters

| Parameter | Description |
|-----------|-------------|
| `parent` | 插入 icon 的 HTML 元素 |
| `iconId` | icon 的 ID |
