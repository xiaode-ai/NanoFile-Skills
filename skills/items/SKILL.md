---
name: nanofile-items
description: Universal item search and lifecycle operations (move, copy, rename, recycle) across files and folders using NanoFile.
---

# NanoFile 项目读写技能 (Item Management)

统一处理文件和文件夹的通用检索与基础生命周期操作。

## 适用场景
- 用户需要通用检索项目（不限文件或目录）。
- 用户需要移动、复制、重命名项目，或将项目安全移入 Windows 回收站。
- 用户需要对多个项目执行批量移动、复制或删除。

## 包含工具 (3 个)

### 1. `search_items`
通用项目检索，支持多种搜索方式（常用、全局、目录）和搜索模式（极速、实时）。
```json
{
  "query": "invoice_2026",
  "scope": "common",          // "common" (常用，默认) | "global" (全局) | "directory" (目录)
  "directory_path": "D:\\Work", // 当 scope 为 "directory" 时提供
  "mode": "auto",             // "auto" (自适应) | "turbo" (极速) | "realtime" (实时)
  "max_results": 50
}
```

### 2. `operate_item`
对单个文件或文件夹执行安全的移动、复制、重命名或移入回收站。
```json
{
  "operation": "recycle",     // "move" | "copy" | "rename" | "recycle"
  "source_path": "C:\\Users\\Username\\Documents\\draft.docx",
  "target_path": "C:\\Users\\Username\\Documents\\archived.docx" // move/copy/rename 时需要
}
```
> **安全策略**：
> - `recycle` 操作将项目移入 Windows 回收站，绝不物理直删，可随时还原，无需二次确认。
> - 系统关键目录（如 `C:\Windows`、启动项等）受底层保护，禁止任何修改操作。
> - 操作涉及需管理员或特殊权限的受保护目录时，遵循与 GUI 相同机制，需获得用户显式二次确认。

### 3. `batch_operate_items`
批量移动、复制或删除多个项目。
```json
{
  "operation": "move",        // "move" | "copy" | "recycle"
  "source_paths": [
    "D:\\Data\\file1.txt",
    "D:\\Data\\file2.txt"
  ],
  "destination_directory": "D:\\Backup"
}
```
