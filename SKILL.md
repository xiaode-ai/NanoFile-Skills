---
name: nanofile-skills
description: Connect your AI assistant to NanoFile for high-performance local file search, file/folder operations, tag management, installed app management, and secure Privacy Vault operations.
---

# NanoFile Agent Skills (8 大能力全集)

Connect AI assistants (Claude Desktop, Cursor, Cline, OpenCode, VS Code, etc.) with NanoFile to gain high-performance local file system management, search, and application control.

## 1. 8 大能力专项子技能一览

NanoFile 将全部 25 个 MCP 工具严格划分为 **8 大业务能力体系**，每个子技能均提供独立的详细指引：

```
NanoFile-Skills/
├── skills/
│   ├── items/       # 1. 项目读写 (Item Management)
│   ├── files/       # 2. 文件读写 (File Management)
│   ├── folders/     # 3. 文件夹读写 (Folder Management)
│   ├── tags/        # 4. 标签读写 (Tag Management)
│   ├── metadata/    # 5. 元数据读取 (Metadata Inspection)
│   ├── apps/        # 6. 应用程序读写 (Application Management)
│   ├── favorites/   # 7. 收藏夹读写 (Favorites Management)
│   └── vault/       # 8. 保险箱管理 (Privacy Vault, VIP 专享)
```

| # | 能力域 | 专项子技能 | 核心职能 | 工具数量 |
| :-: | :--- | :--- | :--- | :-: |
| **1** | **项目读写** | [`skills/items`](skills/items/SKILL.md) | 通用项目检索（常用/全局/目录范围，极速/实时模式）；移动、复制、重命名、移入回收站 | 3 |
| **2** | **文件读写** | [`skills/files`](skills/files/SKILL.md) | 扩展名过滤文件检索；UTF-8 文本内容安全读写；默认关联程序打开 | 4 |
| **3** | **文件夹读写** | [`skills/folders`](skills/folders/SKILL.md) | 目录专用检索；层级内容遍历；递归创建文件夹；在资源管理器/终端中打开 | 4 |
| **4** | **标签读写** | [`skills/tags`](skills/tags/SKILL.md) | 读取文件/文件夹标签；追加/设置自定义标签；清除标签 | 3 |
| **5** | **元数据读取** | [`skills/metadata`](skills/metadata/SKILL.md) | 读取文件大小、时间戳、只读状态；文本行数与字符数分析 | 2 |
| **6** | **应用程序读写** | [`skills/apps`](skills/apps/SKILL.md) | 注册表桌面应用枚举；带参启动程序；合规唤起系统应用卸载页 | 3 |
| **7** | **收藏夹读写** | [`skills/favorites`](skills/favorites/SKILL.md) | 查看快速访问与收藏夹列表；添加目录收藏（支持别名）；移除收藏 | 3 |
| **8** | **保险箱管理** | [`skills/vault`](skills/vault/SKILL.md) | 状态查询；主密码校验解锁安全内存会话；立即锁死（严格对齐 GUI VIP 会员门禁） | 3 |

---

## 2. 准备工作与安装引导

使用本技能前，请先在 Windows 系统中安装 NanoFile：

- 🛒 **微软应用商店直达链接**：[https://apps.microsoft.com/detail/9pgwd50gwcjw](https://apps.microsoft.com/detail/9pgwd50gwcjw)
- 🚀 **一键唤起应用商店安装**：`ms-windows-store://pdp/?ProductId=9PGWD50GWCJW`

> **提示**：从微软应用商店安装 NanoFile 后，系统会自动注册命令 `nanofile.exe`，无需配置复杂的路径，开箱即用。

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

## 4. 全量工具速查 (25 个 Tools)

### 1. 项目读写 (`skills/items`)
- `search_items`：全局、常用或目录检索文件与文件夹。
- `operate_item`：移动、复制、重命名或移入回收站。
- `batch_operate_items`：批量移动、复制或移入回收站。

### 2. 文件读写 (`skills/files`)
- `search_files`：文件专用检索（支持扩展名集合过滤）。
- `read_file_content`：读取 UTF-8 文本内容（最大字符数保护）。
- `write_file_content`：创建或覆盖写入文本文件。
- `open_file`：使用默认程序或指定应用打开文件。

### 3. 文件夹读写 (`skills/folders`)
- `search_folders`：目录专用检索。
- `list_folder_contents`：列出指定目录的直接子项目。
- `create_folder`：递归创建多级目录。
- `open_folder`：在资源管理器或终端中打开目录。

### 4. 标签读写 (`skills/tags`)
- `get_item_tags`：获取文件或目录的关联标签。
- `set_item_tags`：设置或追加标签。
- `remove_item_tags`：移除指定或全部标签。

### 5. 元数据读取 (`skills/metadata`)
- `get_item_metadata`：获取常规属性（大小、时间戳、只读状态）。
- `get_media_metadata`：获取扩展属性（文本行数与字符数统计）。

### 6. 应用程序读写 (`skills/apps`)
- `search_apps`：检索系统已安装的桌面应用程序。
- `launch_app`：启动指定应用（支持附带参数）。
- `uninstall_app`：合规唤起系统应用卸载页。

### 7. 收藏夹读写 (`skills/favorites`)
- `get_favorites`：获取快速访问与收藏夹列表。
- `add_favorite`：添加目录到收藏夹（支持设置别名）。
- `remove_favorite`：从收藏夹中移除目录。

### 8. 保险箱管理 (`skills/vault`)
- `vault_get_status`：查询保险箱锁定状态及 VIP 会员有效性。
- `vault_unlock_with_password`：输入主密码解锁并建立临时会话（校验 VIP 会员）。
- `vault_lock`：立即清空内存密钥并锁死保险箱。

---

## 5. 安全与保密准则
1. **系统路径保护**：拦截对 `C:\Windows`、`C:\Recovery` 等系统保留目录的写操作。
2. **防意外损毁**：删除统一移入 Windows 回收站，绝不物理直删。
3. **完全黑盒保密**：不泄露底层 NTFS USN 日志解析、内存名字池、OFV2 保险箱流式加解密等专有技术细节。
