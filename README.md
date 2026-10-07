# ⚡ NanoFile MCP Server & Agent Skills

[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue.svg)](https://modelcontextprotocol.io/)
[![Microsoft Store](https://img.shields.io/badge/Microsoft_Store-NanoFile-0078D7.svg?logo=windows)](https://apps.microsoft.com/detail/9pgwd50gwcjw)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Windows_10%2F11-blue.svg)](https://apps.microsoft.com/detail/9pgwd50gwcjw)

> 🚀 **Official Open Source Repository**: Standard Model Context Protocol (MCP) Server specification & AI Agent Skills for [NanoFile Desktop](https://apps.microsoft.com/detail/9pgwd50gwcjw).

[中文说明](#-中文说明) | [English Documentation](#-english-documentation)

---

## 🇨🇳 中文说明

本项目是 **NanoFile** 官方开源的 **MCP 服务规范 (Model Context Protocol)** 与 **AI 技能指南 (Agent Skills)**。

通过将 **开放协议** 与 **微软商店官方桌面端** 结合，外部 AI 宿主（如 **Claude Desktop、Cursor、Cline、Windsurf、VS Code**）无需配置复杂运行环境，只需 5 行 JSON 配置即可直接安全调度本地文件管理器能力。

### 📁 仓库双重架构 (Dual Architecture)

本仓库兼顾 **MCP 机器接口规范** 与 **AI 提示词技能规范**：

```text
NanoFile-Skills/
├── mcp/                      # 🤖 机器与协议层 (MCP Server Protocol)
│   ├── schema.json           # 官方标准 MCP 工具清单 (包含 32 个工具的输入输出 JSON Schema)
│   └── config.example.json   # Claude / Cursor / Cline / Windsurf 接入范例
├── skills/                   # 🧠 智能与认知层 (Agent Skills Instructions)
│   ├── items/SKILL.md        # 1. 项目读写子技能 (通用搜索、复制、移动、重命名、删除)
│   ├── files/SKILL.md        # 2. 文件读写子技能 (文件检索、文本读写、打开方式读取与设定)
│   ├── folders/SKILL.md      # 3. 文件夹读写子技能 (目录检索、层级遍历、新建、打开方式读取与设定)
│   ├── tags/SKILL.md         # 4. 标签读写子技能 (标签库维护、多标签关联与查询)
│   ├── metadata/SKILL.md     # 5. 元数据读取子技能 (属性读取、文件夹递归大小与条目数量统计)
│   ├── apps/SKILL.md         # 6. 应用程序读写子技能 (已安装应用检索、安全带参启动、卸载唤起)
│   ├── favorites/SKILL.md    # 7. 收藏夹读写子技能 (快速访问书签获取、添加、移除)
│   └── vault/SKILL.md        # 8. 保险箱管理子技能 (状态查询、密码解锁、内存敏感凭据秒级锁定)
├── SKILL.md                  # 全局 Master 技能总览 (可直接一键载入 AI 客户端)
├── README.md                 # 官方导航与接入说明
└── LICENSE                   # MIT 开源许可证
```

---

### 🛠️ 8 大核心能力速查 (32 个标准 MCP Tools)

| # | 能力分类 | 专项子技能 | 核心职能与代表工具 | 工具数 |
| :-: | :--- | :--- | :--- | :-: |
| **1** | **项目读写** | [`skills/items`](skills/items/SKILL.md) | `search_items` (常用/全局/目录范围，极速/实时模式); `operate_item`; `batch_operate_items` | 3 |
| **2** | **文件读写** | [`skills/files`](skills/files/SKILL.md) | `search_files`; `read_file_content`; `write_file_content`; `open_file`; `get_file_default_app`; `set_file_default_app` | 6 |
| **3** | **文件夹读写** | [`skills/folders`](skills/folders/SKILL.md) | `search_folders`; `list_folder_contents`; `create_folder`; `open_folder`; `get_folder_default_app`; `set_folder_default_app` | 6 |
| **4** | **标签读写** | [`skills/tags`](skills/tags/SKILL.md) | `list_all_tags`; `delete_tag`; `rename_tag`; `get_item_tags`; `set_item_tags`; `remove_item_tags` | 6 |
| **5** | **元数据读取** | [`skills/metadata`](skills/metadata/SKILL.md) | `get_item_metadata` (含文件夹递归总大小与条目数量统计); `get_media_metadata` | 2 |
| **6** | **应用程序读写** | [`skills/apps`](skills/apps/SKILL.md) | `search_apps`; `launch_app`; `uninstall_app` | 3 |
| **7** | **收藏夹读写** | [`skills/favorites`](skills/favorites/SKILL.md) | `get_favorites`; `add_favorite`; `remove_favorite` | 3 |
| **8** | **保险箱管理** | [`skills/vault`](skills/vault/SKILL.md) | `vault_get_status`; `vault_unlock`; `vault_lock` | 3 |

---

### 📥 1. 安装 NanoFile 桌面应用 (底层原生驱动)

所有 MCP 工具调用均由底层的 NanoFile 原生引擎驱动，零环境依赖：

- 🛒 **微软应用商店直达 Web 链接**：[https://apps.microsoft.com/detail/9pgwd50gwcjw](https://apps.microsoft.com/detail/9pgwd50gwcjw)
- ⚡ **Windows 一键唤起安装协议**：`ms-windows-store://pdp/?ProductId=9PGWD50GWCJW`

> **免配环境说明**：无需安装 Node.js、Python 或任何命令行工具。安装商店应用后，Windows 会自动注册全局执行别名 `nanofile.exe`。

---

### ⚙️ 2. AI 客户端配置 (5 行极简配置)

在您的 AI 客户端（如 Claude Desktop 的 `claude_desktop_config.json`，或 Cursor 的 `mcpServers` 设置）中加入配置：

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

详细的各类客户端模板参见 [`mcp/config.example.json`](mcp/config.example.json)。

---

## 🌐 English Documentation

**NanoFile MCP & Skills** provides the official open-source [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server declarations and modular agent skills for the [NanoFile Desktop](https://apps.microsoft.com/detail/9pgwd50gwcjw) app.

### 🌟 Highlights
- **Zero Runtime Dependencies**: Powered natively by NanoFile Desktop via Windows `AppExecutionAlias` (`nanofile.exe --mcp`).
- **32 Standard Tools**: Covering filesystem, file/folder IO, default apps, tags, recursive folder size, apps, and privacy vault.
- **MCP Registry Ready**: Complete standard JSON Schema provided in [`mcp/schema.json`](mcp/schema.json).
- **Safe & Local-First**: Path validation, protected directory blocklist, and zero external cloud telemetry.

### 📥 1. Installation
Install NanoFile from the Microsoft Store:
- 🛒 **Web**: [https://apps.microsoft.com/detail/9pgwd50gwcjw](https://apps.microsoft.com/detail/9pgwd50gwcjw)
- ⚡ **Protocol**: `ms-windows-store://pdp/?ProductId=9PGWD50GWCJW`

### ⚙️ 2. MCP Configuration
Add to your Claude Desktop / Cursor / Cline config:

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

## 🛡️ License

- **Repository License**: [MIT License](LICENSE) (Open for all MCP tool definitions and skill prompts).
- **NanoFile Desktop**: Distributed and protected under the Microsoft Store End User License Agreement.
