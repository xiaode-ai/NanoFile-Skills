---
name: nanofile-skills
description: Connect your AI assistant to NanoFile for high-performance local file search, file/folder operations, default app management, tag catalog, installed app management, and secure Privacy Vault operations.
---

# NanoFile Agent Skills (8 大核心能力全集)

Connect AI assistants (Claude Desktop, Cursor, Cline, OpenCode, VS Code, etc.) with NanoFile to gain high-performance local file system management, search, and application control.

## 1. 8 大能力子技能结构

NanoFile MCP 包含 32 个实用工具，严格对应 8 大业务能力体系：

```
NanoFile-Skills/
├── skills/
│   ├── items/       # 1. 项目读写 (3 工具) - 通用检索与基础操作
│   ├── files/       # 2. 文件读写 (6 工具) - 精准搜索、文本读写、打开方式与应用启动
│   ├── folders/     # 3. 文件夹读写 (6 工具) - 目录检索、层级遍历、递归创建、默认打开方式
│   ├── tags/        # 4. 标签读写 (6 工具) - 标签列表管理、重命名、删除、单项标签绑定
│   ├── metadata/    # 5. 元数据读取 (2 工具) - 属性、文件夹大小/项目数统计、文本度量
│   ├── apps/        # 6. 应用程序读写 (3 工具) - 系统应用枚举、安全启动、合规卸载
│   ├── favorites/   # 7. 收藏夹读写 (3 工具) - 快速访问与目录收藏管理
│   └── vault/       # 8. 保险箱管理 (3 工具) - 查询状态、输入密码解锁、锁定
```

| # | 能力域 | 专项子技能 | 核心工具清单 | 工具数 |
| :-: | :--- | :--- | :--- | :-: |
| **1** | **项目读写** | [`skills/items`](skills/items/SKILL.md) | `search_items`, `operate_item`, `batch_operate_items` | 3 |
| **2** | **文件读写** | [`skills/files`](skills/files/SKILL.md) | `search_files`, `read_file_content`, `write_file_content`, `open_file`, `get_file_default_app`, `set_file_default_app` | 6 |
| **3** | **文件夹读写** | [`skills/folders`](skills/folders/SKILL.md) | `search_folders`, `list_folder_contents`, `create_folder`, `get_folder_default_app`, `set_folder_default_app`, `open_folder` | 6 |
| **4** | **标签读写** | [`skills/tags`](skills/tags/SKILL.md) | `list_all_tags`, `delete_tag`, `rename_tag`, `get_item_tags`, `set_item_tags`, `remove_item_tags` | 6 |
| **5** | **元数据读取** | [`skills/metadata`](skills/metadata/SKILL.md) | `get_item_metadata` (含文件夹递归大小及条目统计), `get_media_metadata` | 2 |
| **6** | **应用程序读写** | [`skills/apps`](skills/apps/SKILL.md) | `search_apps`, `launch_app`, `uninstall_app` | 3 |
| **7** | **收藏夹读写** | [`skills/favorites`](skills/favorites/SKILL.md) | `get_favorites`, `add_favorite`, `remove_favorite` | 3 |
| **8** | **保险箱管理** | [`skills/vault`](skills/vault/SKILL.md) | `vault_get_status`, `vault_unlock`, `vault_lock` | 3 |

---

## 2. 准备工作与安装引导

使用本技能前，请先在 Windows 系统中安装 NanoFile：

- 🛒 **微软应用商店直达链接**：[https://apps.microsoft.com/detail/9pgwd50gwcjw](https://apps.microsoft.com/detail/9pgwd50gwcjw)
- 🚀 **一键唤起应用商店安装**：`ms-windows-store://pdp/?ProductId=9PGWD50GWCJW`

> **提示**：从微软应用商店安装 NanoFile 后，Windows 会自动注册全局执行别名 `nanofile.exe`，无需配置复杂的绝对路径，开箱即用。

---

## 3. 客户端 MCP 配置 (仅需 5 行 JSON)

在您的 AI 客户端（如 Claude Desktop 的 `claude_desktop_config.json`，或 Cursor 的 `mcpServers` 设置）中加入如下配置：

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

## 4. 全量工具速查 (32 个 Tools)

### 1. 项目读写 (`skills/items`)
- `search_items`：全局、常用或目录检索文件与文件夹。
- `operate_item`：移动、复制、重命名或移入回收站。
- `batch_operate_items`：批量移动、复制或移入回收站。

### 2. 文件读写 (`skills/files`)
- `search_files`：文件专用检索（支持扩展名集合过滤）。
- `read_file_content`：读取 UTF-8 文本内容（最大字符数保护）。
- `write_file_content`：创建或覆盖写入文本文件。
- `open_file`：使用默认程序或指定应用打开文件。
- `get_file_default_app`：读取扩展名或文件的默认打开程序。
- `set_file_default_app`：设置扩展名的默认打开程序。

### 3. 文件夹读写 (`skills/folders`)
- `search_folders`：目录专用检索。
- `list_folder_contents`：列出指定目录的直接子项目。
- `create_folder`：递归创建多级目录。
- `get_folder_default_app`：读取文件夹当前的默认打开方式。
- `set_folder_default_app`：设置文件夹默认打开方式（nanofile / explorer / terminal / 自定义应用）。
- `open_folder`：使用默认打开方式或指定工具打开目录。

### 4. 标签读写 (`skills/tags`)
- `list_all_tags`：获取当前系统中所有标签列表及其关联的项目总数。
- `delete_tag`：从标签列表中彻底删除标签并自动解绑。
- `rename_tag`：重命名标签并自动同步所有关联项目。
- `get_item_tags`：获取指定项目的关联标签。
- `set_item_tags`：为指定项目设置或追加标签。
- `remove_item_tags`：移除指定项目的标签。

### 5. 元数据读取 (`skills/metadata`)
- `get_item_metadata`：获取常规属性，文件夹自动递归统计总大小与条目数量。
- `get_media_metadata`：提取文本代码行数与字符数分析。

### 6. 应用程序读写 (`skills/apps`)
- `search_apps`：检索系统已安装的桌面应用程序。
- `launch_app`：启动指定应用（支持附带参数）。
- `uninstall_app`：合规唤起系统应用卸载页。

### 7. 收藏夹读写 (`skills/favorites`)
- `get_favorites`：获取快速访问与收藏夹列表。
- `add_favorite`：添加目录到收藏夹（支持设置别名）。
- `remove_favorite`：从收藏夹中移除目录。

### 8. 保险箱管理 (`skills/vault`)
- `vault_get_status`：查询保险箱锁定状态与会话剩余时间。
- `vault_unlock`：输入密码解锁保险箱。
- `vault_lock`：锁定保险箱。

---

## 5. 安全与保密准则
1. **系统路径保护**：拦截对 `C:\Windows`、`C:\Recovery` 等系统保留目录的写操作。
2. **防意外损毁**：删除统一移入 Windows 回收站（可还原），绝不物理直删。
3. **安全规范**：严禁越权访问受保护资源，遵循统一的安全隔离规范。
