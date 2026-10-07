---
name: nanofile-skills
description: Connect your AI assistant to NanoFile for high-performance local file search, file/folder operations, tag management, installed app management, and secure Privacy Vault operations.
---

# NanoFile Agent Skill

Connect AI assistants (Claude Desktop, Cursor, Cline, OpenCode, VS Code, etc.) with NanoFile to gain high-performance local file system management and search capabilities.

## 1. Introduction & Overview

**NanoFile** is a modern, high-performance local file manager for Windows. Through its Model Context Protocol (MCP) server, AI agents can directly perform fast file searching, content reading/writing, folder management, file tagging, application discovery/launching, and secure vault unlocking — all without complex dependencies.

### Key Highlights
- **Ultra-Fast Search**: Search files across frequently used folders, entire drives, or specific directories in milliseconds.
- **Full File & Directory Control**: Read, write, move, copy, rename, and recycle files/folders safely.
- **Native File Tags**: Read, add, or query custom tags for files and directories.
- **Privacy Vault Session**: Password-protected vault status checking, unlocking, and locking.
- **Zero Third-party Dependencies**: Native execution on Windows without Python or Node.js.

---

## 2. Prerequisites & Installation

To use this skill, NanoFile must be installed on your Windows system:

- 🛒 **Microsoft Store Direct Link**: [Get NanoFile on Microsoft Store](https://apps.microsoft.com/detail/9pgwd50gwcjw)
- 🚀 **One-Click Store Protocol**: `ms-windows-store://pdp/?ProductId=9PGWD50GWCJW`

> **Note**: After installing NanoFile from the Microsoft Store, Windows automatically registers the execution command `nanofile.exe`. You do not need to configure complex file paths.

---

## 3. Client MCP Configuration

Add this configuration to your AI client's MCP configuration file (e.g. `claude_desktop_config.json` or Cursor's `mcpServers` setting):

```json
{
  "mcpServers": {
    "nanofile": {
      "command": "nanofile.exe",
      "args": ["--mcp"]
    }
  }
}
```

---

## 4. Available Tools Reference (25 Tools)

### 4.1 Items (Universal Search & Operations)

#### `search_items`
Search for files and directories by keyword.
- `query` *(string, required)*: Keyword or fragment to search for.
- `scope` *(string)*: `'common'` (Desktop, Documents, Downloads, etc., default), `'global'` (all logical drives), or `'directory'` (specific folder).
- `directory_path` *(string)*: Path to the target folder when `scope` is `'directory'`.
- `mode` *(string)*: `'auto'` (default), `'turbo'` (fast index), or `'realtime'` (live scan).
- `max_results` *(integer)*: Maximum items to return (default: 50).

#### `operate_item`
Perform safe lifecycle operations on a file or folder.
- `operation` *(string, required)*: `'move'`, `'copy'`, `'rename'`, or `'recycle'` (moves safely to Windows Recycle Bin).
- `source_path` *(string, required)*: Absolute path to the source file or folder.
- `target_path` *(string)*: Destination path or new name (required for move, copy, rename).

#### `batch_operate_items`
Perform batch lifecycle operations on multiple files or folders.
- `operation` *(string, required)*: `'move'`, `'copy'`, or `'recycle'`.
- `source_paths` *(array of strings, required)*: List of absolute paths.
- `destination_directory` *(string)*: Destination directory for move or copy.

---

### 4.2 Files (File Content & Associations)

#### `search_files`
Search specifically for files matching extensions and name filters.
- `query` *(string, required)*: Filename search keyword.
- `extensions` *(array of strings)*: Allowed extensions (e.g. `["pdf", "docx"]`).
- `scope` *(string)*: `'common'`, `'global'`, or `'directory'`.
- `directory_path` *(string)*: Directory path when `scope` is `'directory'`.
- `mode` *(string)*: `'auto'`, `'turbo'`, or `'realtime'`.
- `max_results` *(integer)*: Maximum files to return (default: 50).

#### `read_file_content`
Read UTF-8 text content of a specified file.
- `path` *(string, required)*: Absolute path to the file.
- `max_characters` *(integer)*: Maximum characters to read (default: 50,000).

#### `write_file_content`
Create or overwrite a file with UTF-8 text content.
- `path` *(string, required)*: Absolute path to the file.
- `content` *(string, required)*: Content to write.

#### `open_file`
Open a file using the system default program or a specified application.
- `path` *(string, required)*: Absolute path to the file.
- `with_app` *(string)*: Optional path or executable name of the application.

---

### 4.3 Folders (Directory Navigation)

#### `search_folders`
Search specifically for directories matching a keyword.
- `query` *(string, required)*: Directory name search keyword.
- `scope` *(string)*: `'common'`, `'global'`, or `'directory'`.
- `directory_path` *(string)*: Target folder path when `scope` is `'directory'`.
- `mode` *(string)*: `'auto'`, `'turbo'`, or `'realtime'`.
- `max_results` *(integer)*: Maximum directories to return (default: 50).

#### `list_folder_contents`
List the direct contents of a folder with size and type info.
- `path` *(string, required)*: Absolute directory path.
- `include_hidden` *(boolean)*: Whether to include hidden items (default: false).

#### `create_folder`
Create a directory recursively at the specified path.
- `path` *(string, required)*: Absolute directory path to create.

#### `open_folder`
Open a folder in Windows File Explorer or Terminal.
- `path` *(string, required)*: Absolute directory path.
- `target` *(string)*: `'explorer'` (default) or `'terminal'`.

---

### 4.4 Tags (Custom Tagging)

#### `get_item_tags`
Get assigned custom tags for a file or folder.
- `path` *(string, required)*: Absolute path to the item.

#### `set_item_tags`
Assign or update custom tags for a file or folder.
- `path` *(string, required)*: Absolute path to the item.
- `tags` *(array of strings, required)*: List of tags (e.g. `["Work", "Important"]`).

#### `remove_item_tags`
Remove specific tags or all tags from a file or folder.
- `path` *(string, required)*: Absolute path to the item.
- `tags` *(array of strings)*: Specific tags to remove. If omitted, removes all tags.

---

### 4.5 Metadata (Attributes & Inspection)

#### `get_item_metadata`
Get standard attributes including size, permissions, and timestamps.
- `path` *(string, required)*: Absolute path to the item.

#### `get_media_metadata`
Inspect document or media information (extension, character count, line count).
- `path` *(string, required)*: Absolute path to the file.

---

### 4.6 Applications (Installed Apps)

#### `search_apps`
Search registered desktop applications by name keyword.
- `query` *(string, required)*: Application name keyword.

#### `launch_app`
Launch an installed application with optional arguments.
- `app_path_or_command` *(string, required)*: Executable path or registered command.
- `arguments` *(array of strings)*: Optional command line arguments.

#### `uninstall_app`
Open the Windows Settings installed apps page to allow the user to manage/uninstall an application.
- `app_name` *(string, required)*: Name of the application.

---

### 4.7 Favorites (Quick Access)

#### `get_favorites`
List all bookmarked favorite directories and quick access locations.

#### `add_favorite`
Add a folder path to favorites/quick access.
- `path` *(string, required)*: Absolute directory path.
- `alias` *(string)*: Optional display alias name.

#### `remove_favorite`
Remove a folder path from favorites.
- `path` *(string, required)*: Absolute directory path to remove.

---

### 4.8 Privacy Vault (Master Password Session & VIP Required)

> **Note**: Privacy Vault operations require an active NanoFile Plus / Pro subscription (identical to GUI mode). If the user does not have a subscription, the tool will return a friendly error with the Microsoft Store subscription link.

#### `vault_get_status`
Check the lock status, session TTL, and VIP subscription state of the Privacy Vault.

#### `vault_unlock_with_password`
Unlock the Privacy Vault using the user-provided master password. Requires an active NanoFile VIP subscription.
- `password` *(string, required)*: Master password.

#### `vault_lock`
Immediately lock the Privacy Vault and clear all active in-memory credentials.

---

## 5. Security & Safety Principles

1. **System Path Protection**: Write, move, and recycle operations to critical Windows operating system directories (`C:\Windows`, `C:\Recovery`, etc.) are automatically blocked.
2. **Safe Deletion**: Deleting files or folders via `operate_item` moves them to the Windows Recycle Bin to prevent irreversible accidental data loss.
3. **Vault Isolation**: Password verification is strictly handled locally in memory. Cryptographic keys and raw vault structures are never returned or exposed to the AI client.
