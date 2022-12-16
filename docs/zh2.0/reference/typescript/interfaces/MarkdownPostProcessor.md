<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-12-16 10:16:39
 * @Description: 
-->
# MarkdownPostProcessor

后处理器接收一个 element，它是预览的一部分。

后处理器可以改变 DOM 以呈现各种事物，例如 mermaid 图、乳胶方程式或自定义控件。

如果您的后处理器需要生命周期的管理，比如在当前 element 从应用中被移除时清除一个，杀死子进程等等, 查看 {@link MarkdownPostProcessorContext#addChild}。

## Properties

### sortOrder

```ts
sortOrder: number
```

可选的排序顺序数值。默认值为0。数值越小，优先级越高。
