<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-12-20 10:45:18
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-29 15:21:50
 * @Description: 
-->
# getIcon

```ts
export function getIcon(iconId: string): SVGSVGElement | null;
```

根据 iconId 创建 SVG。如果没有 icon 匹配改 iconId，则返回 null。

## Parameters

| Parameter | Description |
|-----------|-------------|
| `iconId` | the icon ID |
