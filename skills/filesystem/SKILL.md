---
name: nanofile-filesystem
description: Safe local file and directory management using NanoFile: read/write text content, list directories, move, copy, rename, and recycle.
---

# NanoFile Filesystem Skill

Comprehensive, safe file and folder management with guardrails to protect system files and prevent data loss.

## When to Use
Use this skill when the user asks to:
- Read or write text/code files locally.
- Inspect folder directory contents with metadata.
- Move, copy, or rename files/folders individually or in batch.
- Safely delete items (automatically routed to the Windows Recycle Bin).
- Open files with default/custom apps or reveal folders in Explorer/Terminal.

## Available Tools

### 1. File Reading & Writing
- **`read_file_content(path, max_characters)`**: Reads UTF-8 content with safe truncation limits.
- **`write_file_content(path, content)`**: Creates or overwrites a text file (auto-creates parent directories).
- **`open_file(path, with_app)`**: Launches the file with default system association or specified executable.

### 2. Directory Navigation
- **`list_folder_contents(path, include_hidden)`**: Lists items in a directory with file size and type info.
- **`create_folder(path)`**: Creates folders recursively.
- **`open_folder(path, target)`**: Opens the folder in File Explorer (`target: "explorer"`) or Windows Terminal (`target: "terminal"`).

### 3. Safe Lifecycle Operations
- **`operate_item(operation, source_path, target_path)`**:
  - `operation`: `"move"`, `"copy"`, `"rename"`, or `"recycle"`.
  - *Safety Guarantee*: `"recycle"` moves items to the Windows Recycle Bin so they can be restored.
- **`batch_operate_items(operation, source_paths, destination_directory)`**:
  - Batch operations across multiple items in a single call.

### 4. Metadata Inspection
- **`get_item_metadata(path)`**: Read size, read-only status, created time, and modified time.
- **`get_media_metadata(path)`**: Read document line/character counts and extension details.
