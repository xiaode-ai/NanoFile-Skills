---
name: nanofile-skills
description: Connect your AI assistant to NanoFile for high-performance local file search, file/folder operations, tag management, installed app management, and secure Privacy Vault operations.
---

# NanoFile Agent Skills (Full Suite)

Connect AI assistants (Claude Desktop, Cursor, Cline, OpenCode, VS Code, etc.) with NanoFile to gain high-performance local file system management and search capabilities.

## 1. Skill Categories Overview

NanoFile MCP provides 25 specialized tools organized across **5 functional domains**:

```
NanoFile-Skills/
├── skills/
│   ├── search/          # 🔍 High-speed file & folder search (common, global, directory)
│   ├── filesystem/      # 📂 Content read/write, directory navigation, safe recycling
│   ├── tagging/         # 🏷️ Custom tag assignment and queries
│   ├── app-launcher/    # 🚀 Desktop application discovery, launch, and favorites
│   └── privacy-vault/   # 🔒 Password-protected Privacy Vault sessions (VIP feature)
```

| Domain | Specialized Sub-Skill | Core Capabilities | Tools Count |
| :--- | :--- | :--- | :---: |
| 🔍 **Search & Discovery** | [`skills/search`](skills/search/SKILL.md) | Millisecond file & directory search across common folders or all drives; extension filtering | 3 |
| 📂 **Filesystem & Operations** | [`skills/filesystem`](skills/filesystem/SKILL.md) | UTF-8 read/write, directory tree listing, safe recycling, batch move/copy | 10 |
| 🏷️ **Tagging System** | [`skills/tagging`](skills/tagging/SKILL.md) | Assign, inspect, and remove custom file tags | 3 |
| 🚀 **Apps & Favorites** | [`skills/app-launcher`](skills/app-launcher/SKILL.md) | Windows app discovery & launch; quick access bookmarks | 6 |
| 🔒 **Privacy Vault** | [`skills/privacy-vault`](skills/privacy-vault/SKILL.md) | Password unlocking session, auto-lock timeouts, VIP license verification | 3 |

---

## 2. Prerequisites & Installation

To use this skill suite, NanoFile must be installed on your Windows system:

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

## 4. Full Tools Quick Reference (25 Tools)

### 4.1 Search & Discovery ([Details](skills/search/SKILL.md))
- `search_items(query, scope?, directory_path?, mode?, max_results?)`: Universal search for files and folders.
- `search_files(query, extensions?, scope?, directory_path?, mode?, max_results?)`: File-specific search with extension filters.
- `search_folders(query, scope?, directory_path?, mode?, max_results?)`: Folder-specific search.

### 4.2 Filesystem & Operations ([Details](skills/filesystem/SKILL.md))
- `read_file_content(path, max_characters?)`: Read UTF-8 text with truncation guard.
- `write_file_content(path, content)`: Create or update text files.
- `open_file(path, with_app?)`: Launch file with default or custom app.
- `list_folder_contents(path, include_hidden?)`: Directory content inspection.
- `create_folder(path)`: Recursive directory creation.
- `open_folder(path, target?)`: Open folder in Explorer or Terminal.
- `operate_item(operation, source_path, target_path?)`: Move, copy, rename, or safely recycle.
- `batch_operate_items(operation, source_paths, destination_directory?)`: Batch move, copy, recycle.
- `get_item_metadata(path)`: Standard file size and timestamp metadata.
- `get_media_metadata(path)`: Line counts, character counts, and extension info.

### 4.3 Tagging System ([Details](skills/tagging/SKILL.md))
- `get_item_tags(path)`: Get assigned tags for a file or folder.
- `set_item_tags(path, tags)`: Assign custom tags.
- `remove_item_tags(path, tags?)`: Remove specific or all tags.

### 4.4 Apps & Favorites ([Details](skills/app-launcher/SKILL.md))
- `search_apps(query)`: Search installed desktop applications.
- `launch_app(app_path_or_command, arguments?)`: Safely launch application.
- `uninstall_app(app_name)`: Guide to Windows Settings apps page.
- `get_favorites()`: List Quick Access bookmarks.
- `add_favorite(path, alias?)`: Add folder to Quick Access.
- `remove_favorite(path)`: Remove folder from Quick Access.

### 4.5 Privacy Vault ([Details](skills/privacy-vault/SKILL.md))
- `vault_get_status()`: Inspect lock status and VIP subscription state.
- `vault_unlock_with_password(password)`: Unlock vault with master password (requires Plus/Pro VIP).
- `vault_lock()`: Immediately purge memory keys and lock vault.

---

## 5. Security Principles
1. **Critical Path Isolation**: Modifying `C:\Windows`, `C:\Recovery`, and other system directories is strictly prohibited.
2. **Safe Recycling**: Deletions go to the Windows Recycle Bin to prevent permanent data loss.
3. **Zero Cryptographic Leakage**: In-memory vault session tokens expire automatically; raw keys are never passed to the LLM.
