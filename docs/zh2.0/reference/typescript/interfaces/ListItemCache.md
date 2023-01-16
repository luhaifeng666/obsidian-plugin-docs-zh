<!--
 * @Author: haifeng.lu haifeng.lu@ly.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2023-01-16 16:05:10
 * @Description: 
-->
# ListItemCache

## Properties

### id

```ts
id: string
```

列表项的块 ID。

### task

```ts
task: string
```

表示任务已检查状态的单个字符。
空格符 `' '` 被看做是未完成的任务。
另一个字符则被看做已完成的任务。
如果该项不是一个任务，则值为 `undefined`

### parent

```ts
parent: number
```

父级列表项的行号 (position.start.line)。
如果该项没有父级 （比如这是一个根级列表），则该值为列表首项（列表的开始项）行号的负数 。

可以用于推断哪些列表项属于同一组 (item1.parent === item2.parent)。
也可以用于重构层次结构信息 (parentItem.position.start.line === childItem.parent)。
