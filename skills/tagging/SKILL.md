---
name: nanofile-tagging
description: Native file and directory tagging system using NanoFile: read tags, assign tags, remove tags, and organize files semantically.
---

# NanoFile Tagging Skill

Read, assign, and manage custom color/text tags on files and directories.

## When to Use
Use this skill when the user asks to:
- Tag files or folders with categories (e.g. "Work", "Urgent", "Archive", "Invoice").
- Check which tags are currently associated with a specific file.
- Clean up or remove tags from an item.

## Available Tools

### 1. `get_item_tags`
Get all custom tags assigned to an item.
```json
{
  "path": "C:\\Users\\Username\\Documents\\report.docx"
}
```

### 2. `set_item_tags`
Assign or replace tags on an item.
```json
{
  "path": "C:\\Users\\Username\\Documents\\report.docx",
  "tags": ["Work", "Q4", "Final"]
}
```

### 3. `remove_item_tags`
Remove specific tags or clear all tags from an item.
```json
{
  "path": "C:\\Users\\Username\\Documents\\report.docx",
  "tags": ["Q4"] // Omit 'tags' to clear all tags
}
```
