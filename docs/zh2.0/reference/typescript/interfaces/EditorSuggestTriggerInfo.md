<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-01-08 09:51:58
 * @Description: 
-->
# EditorSuggestTriggerInfo

## Properties

### start

```ts
start: EditorPosition
```

触发文本的起始位置。用来定位弹窗。

### end

```ts
end: EditorPosition
```

触发文本的终止位置。 也用来定位弹窗。

### query

```ts
query: string
```

查询将用于生成建议内容的字符串（通常是开始和结束之间的文本）。
