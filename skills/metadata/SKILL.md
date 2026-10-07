---
name: nanofile-metadata
description: Inspect item attributes, file size, timestamps, read-only permissions, and text line/character metrics using NanoFile.
---

# NanoFile 元数据读取技能 (Metadata Inspection)

深入获取文件或文件夹的基础属性与扩展元数据。

## 适用场景
- 用户需要了解文件或目录的大小、只读状态、创建时间与最后修改时间。
- 用户需要检查文本或代码文件的行数、字符数等详细度量指标。

## 包含工具 (2 个)

### 1. `get_item_metadata`
获取标准属性（大小、类型、时间戳、只读状态）。
```json
{
  "path": "C:\\Users\\Username\\Documents\\report.docx"
}
```

### 2. `get_media_metadata`
提取文档与媒体扩展元数据（对小文本文件自动计算行数与字符数）。
```json
{
  "path": "D:\\Projects\\NanoFile\\README.md"
}
```
