<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-02-16 10:08:31
 * @Description: 
-->
# renderMath

```ts
export function renderMath(source: string, display: boolean): HTMLElement;
```

使用 MathJax 引擎渲染一些 LaTeX 数学公式。返回一个 HTMLElement。
当渲染都完成后需要调用 `finishRenderMath` 方法以刷新 MathJax 的样式。

## Parameters

| Parameter | Description |
|-----------|-------------|
| `source` | |
| `display` | |
