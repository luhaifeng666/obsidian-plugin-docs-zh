<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-11-30 12:28:09
 * @Description: 
-->
# addIcon

```ts
export function addIcon(iconId: string, svgContent: string): void;
```

往库中添加一个icon

## Parameters

| Parameter | Description |
|-----------|-------------|
| `iconId` | the icon ID |
| `svgContent` | the content of the SVG, without the &lt;svg&gt;. Must fit viewBox="0 0 100 100". |
