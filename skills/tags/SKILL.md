---
name: nanofile-tags
description: Native file and folder tagging system using NanoFile: read tags, assign tags, and clear tags.
---

# NanoFile 标签读写技能 (Tag Management)

为文件与文件夹管理自定义分类标签。

## 适用场景
- 用户需要查询某个文件或文件夹打上了哪些标签。
- 用户需要为文件或文件夹添加或修改标签（如 "重要"、"工作"、"归档"）。
- 用户需要移除特定标签或清空全部标签。

## 包含工具 (3 个)

### 1. `get_item_tags`
获取指定项目当前关联的标签列表。
```json
{
  "path": "C:\\Users\\Username\\Documents\\contract.pdf"
}
```

### 2. `set_item_tags`
为指定项目设置或更新标签列表。
```json
{
  "path": "C:\\Users\\Username\\Documents\\contract.pdf",
  "tags": ["重要", "法务", "已签署"]
}
```

### 3. `remove_item_tags`
从指定项目中移除部分或全部标签。
```json
{
  "path": "C:\\Users\\Username\\Documents\\contract.pdf",
  "tags": ["草稿"]            // 若省略 tags 则清空该项目的所有标签
}
```
