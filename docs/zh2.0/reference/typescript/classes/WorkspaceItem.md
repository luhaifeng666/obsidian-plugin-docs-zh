<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 11:37:51
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-10-19 09:52:26
 * @Description: 
-->
# WorkspaceItem

继承自 `Events`

## Constructor

```ts
constructor();
```

## Methods

### getRoot

```ts
getRoot(): WorkspaceItem;
```

### getContainer

```ts
getContainer(): WorkspaceContainer;
```

获取根容器父级对象，可能是以下两者之一：

- {@link WorkspaceRoot}
- {@link WorkspaceWindow}
