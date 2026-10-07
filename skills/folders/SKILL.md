---
name: nanofile-folders
description: Dedicated directory search, folder contents traversal, recursive folder creation, and Explorer/terminal opening using NanoFile.
---

# NanoFile 文件夹读写技能 (Folder Management)

针对文件夹的专用能力：目录检索、层级内容遍历、递归新建目录与打开方式。

## 适用场景
- 用户按目录名快速定位或检索文件夹。
- 用户需要列出指定文件夹内的直接子项清单（附带文件大小与类型）。
- 用户需要递归新建多级文件夹。
- 用户需要在 Windows 资源管理器或终端（Windows Terminal / CMD）中打开定位文件夹。

## 包含工具 (4 个)

### 1. `search_folders`
目录专用检索（支持常用、全局、指定路径及极速/实时模式）。
```json
{
  "query": "NanoFile",
  "scope": "global",
  "mode": "auto"
}
```

### 2. `list_folder_contents`
列出目录的直接子项目，返回名称、绝对路径、是否为文件夹及文件大小。
```json
{
  "path": "D:\\Projects",
  "include_hidden": false
}
```

### 3. `create_folder`
递归新建文件夹（若父级不存在将自动级联创建）。
```json
{
  "path": "D:\\Projects\\2026\\Q4\\Reports"
}
```

### 4. `open_folder`
在系统资源管理器或终端中打开并定位目录。
```json
{
  "path": "D:\\Projects\\NanoFile",
  "target": "explorer"        // "explorer" (资源管理器) | "terminal" (Windows终端)
}
```
