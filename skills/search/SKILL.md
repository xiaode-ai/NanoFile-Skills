---
name: nanofile-search
description: High-performance file, folder, and item search using NanoFile with scopes (common, global, directory) and modes (turbo, realtime, auto).
---

# NanoFile Search Skill

Perform ultra-fast file and directory searching on Windows using NanoFile's search engine.

## When to Use
Use this skill when the user asks to:
- Find files or folders anywhere on the system or within specific directories.
- Search within frequently used locations (Desktop, Downloads, Documents, etc.).
- Filter files by extensions (e.g. find all `.pdf` or `.docx` files).
- Conduct deep full-disk searches across all drives.

## Available Tools

### 1. `search_items`
Universal search for both files and directories.
```json
{
  "query": "invoice_2026",
  "scope": "common",          // "common" | "global" | "directory"
  "mode": "auto",            // "auto" | "turbo" | "realtime"
  "max_results": 50
}
```

### 2. `search_files`
Search specifically for files with extension filters.
```json
{
  "query": "contract",
  "extensions": ["pdf", "docx"],
  "scope": "common",
  "mode": "turbo"
}
```

### 3. `search_folders`
Search specifically for directories by name.
```json
{
  "query": "NanoFile",
  "scope": "global",
  "mode": "auto"
}
```

## Parameter Guide
- **`scope`**:
  - `"common"`: Searches core user folders (Desktop, Documents, Downloads, Pictures, etc.). Fastest and most relevant.
  - `"global"`: Searches across all logical drives (`C:\`, `D:\`, etc.).
  - `"directory"`: Searches within `directory_path`.
- **`mode`**:
  - `"turbo"`: In-memory index acceleration for instant results.
  - `"realtime"`: Live disk scan without prior index.
  - `"auto"`: Automatically selects the best mode (recommended).
