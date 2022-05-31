# addIcon

```ts
export function addIcon(iconId: string, svgContent: string): void;
```

往库中添加一个icon。

## Parameters

| 参数 | 描述 |
|-----------|-------------|
| `iconId` | icon ID |
| `svgContent` | SVG 的内容，不能包含 &lt;svg&gt; 。尺寸必须满足 viewBox="0 0 100 100" |
