---
name: nanofile-files
description: Dedicated file search, UTF-8 text content reading/writing, and file opening using NanoFile.
---

# NanoFile 文件读写技能 (File Management)

针对文件的专用能力：精准文件搜索、内容读写与关联打开方式。

## 适用场景
- 用户按扩展名（如 `.pdf`、`.docx`、`.ts`）精准查找文件。
- 用户需要读取指定文本或代码文件的内容。
- 用户需要新建或覆写文本文件内容。
- 用户需要调用系统默认程序或指定应用程序打开文件。

## 包含工具 (4 个)

### 1. `search_files`
文件专用检索（支持扩展名集合过滤、搜索方式与搜索模式）。
```json
{
  "query": "financial_report",
  "extensions": ["xlsx", "pdf"],
  "scope": "common",          // "common" | "global" | "directory"
  "mode": "turbo"             // "auto" | "turbo" | "realtime"
}
```

### 2. `read_file_content`
读取 UTF-8 文本文件内容（带最大字符保护）。
```json
{
  "path": "C:\\Users\\Username\\Documents\\notes.txt",
  "max_characters": 50000
}
```

### 3. `write_file_content`
创建或覆盖写入 UTF-8 文本文件（自动创建父级目录）。
```json
{
  "path": "C:\\Users\\Username\\Documents\\config.json",
  "content": "{\"theme\": \"dark\"}"
}
```

### 4. `open_file`
通过系统默认关联程序或指定程序打开文件。
```json
{
  "path": "C:\\Users\\Username\\Documents\\report.docx",
  "with_app": "WINWORD.EXE"   // 可选，省略则调用系统默认程序
}
```
