# ⚡ NanoFile MCP Server, Agent Skills & Plugins

[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue.svg)](https://modelcontextprotocol.io/)
[![Agent Plugins](https://img.shields.io/badge/Plugins-Cursor%20%7C%20Dify%20%7C%20LangChain-orange.svg)](plugins/)
[![Microsoft Store](https://img.shields.io/badge/Microsoft_Store-NanoFile-0078D7.svg?logo=windows)](https://apps.microsoft.com/detail/9pgwd50gwcjw)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Windows_10%2F11-blue.svg)](https://apps.microsoft.com/detail/9pgwd50gwcjw)

> 🚀 **Official Open Source Repository**: Standard Model Context Protocol (MCP) Server, Modular Agent Skills & Ecosystem Plugins for [NanoFile Desktop](https://apps.microsoft.com/detail/9pgwd50gwcjw).

[中文说明](#-中文说明) | [English Documentation](#-english-documentation)

---

## 🇨🇳 中文说明

本项目是 **NanoFile** 官方开源的 **三位一体 AI Agent 扩展仓库**：
1. **MCP 服务协议 (Model Context Protocol)**：面向标准 AI 客户端的机器通讯协议规范；
2. **AI 技能指南 (Agent Skills)**：面向大模型自然语言决策、高情商执行的操作策略指南；
3. **Agent 插件生态 (Plugins & Extensions)**：面向各类低代码编排平台、IDE 规则、框架 Toolkit 的开箱即用插件。

通过将 **开放协议** 与 **微软商店官方桌面端** 结合，外部 AI 宿主无需配置复杂运行环境，只需 5 行 JSON 配置即可直接安全调度本地文件管理器能力。

### 📁 仓库三层架构体系 (Three-Tier Architecture)

```text
NanoFile-Skills/
├── plugins/                  # 🧩 1. 插件生态层 (Agent Plugins & Toolkits)
│   ├── manifest.json         # 统一插件清单定义 (Plugin Manifest)
│   ├── cursor/.cursorrules   # Cursor / Windsurf / Copilot 专用 Agent 规则插件
│   ├── dify/provider.yaml    # Dify / Coze / FastGPT 低代码平台自定义工具提供商声明
│   └── langchain/toolkit.json # LangChain / LlamaIndex / CrewAI 工具包集成声明
├── mcp/                      # 🤖 2. 机器协议层 (MCP Server Protocol Specification)
│   ├── schema.json           # 32 个工具的标准 JSON Schema（供各大 MCP Registry / 插件市场自动索引）
│   └── config.example.json   # Claude Desktop / Cursor / Cline / Windsurf 接入范例
├── skills/                   # 🧠 3. 智能认知层 (Modular Agent Skills Instructions)
│   ├── items/SKILL.md        # 1. 项目读写 (通用搜索、复制、移动、重命名、删除)
│   ├── files/SKILL.md        # 2. 文件读写 (文件专用检索、文本读写、打开方式读取与设定)
│   ├── folders/SKILL.md      # 3. 文件夹读写 (目录专用检索、遍历、新建、打开方式读取与设定)
│   ├── tags/SKILL.md         # 4. 标签读写 (标签库维护、多标签读写与关联管理)
│   ├── metadata/SKILL.md     # 5. 元数据读取 (属性读取、文件夹递归总大小与数量统计)
│   ├── apps/SKILL.md         # 6. 应用程序读写 (已安装应用检索、安全带参启动、卸载唤起)
│   ├── favorites/SKILL.md    # 7. 收藏夹读写 (快速访问书签获取、添加、移除)
│   └── vault/SKILL.md        # 8. 保险箱管理 (状态查询、密码解锁、内存凭据秒级锁定)
├── SKILL.md                  # 全局 Master 技能总览 (可供外部 AI 宿主一键整体挂载)
├── README.md                 # 官方导航与接入说明
└── LICENSE                   # MIT 开源许可证
```

---

### 🧩 插件生态使用指引 (Plugins)

为不同生态的 Agent 提供了开箱即用的支持：

| 平台 / 框架 | 插件形式 | 使用方法 |
| :--- | :--- | :--- |
| **Cursor / Windsurf** | [`.cursorrules`](plugins/cursor/.cursorrules) | 直接将文件拷贝到您的项目根目录，Agent 将自动感知并优先调度 NanoFile |
| **Dify / Coze / FastGPT** | [`provider.yaml`](plugins/dify/provider.yaml) | 在平台后台“自定义工具”中导入该 YAML，即可在工作流节点中使用 NanoFile 工具 |
| **LangChain / LlamaIndex** | [`toolkit.json`](plugins/langchain/toolkit.json) | 通过标准 Stdio 连接声明在 Python/TS 框架中实例化 `NanoFileToolkit` |
| **通用 Agent 宿主** | [`manifest.json`](plugins/manifest.json) | 读取插件清单，动态获取支持的 32 个工具与技能元数据 |

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

**NanoFile MCP & Skills** provides the official open-source [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server declarations, modular agent skills, and ecosystem plugins for the [NanoFile Desktop](https://apps.microsoft.com/detail/9pgwd50gwcjw) app.

### 🌟 Three-Tier Architecture
1. **Plugin Ecosystem (`plugins/`)**: Ready-to-use plugins for Cursor rules, Dify toolsets, and LangChain toolkits.
2. **Machine Protocol (`mcp/`)**: Full JSON Schema (`schema.json`) for automatic indexing by MCP Registries.
3. **Cognitive Skills (`skills/`)**: Natural language guidelines to help LLMs select optimal search modes and safe filesystem actions.

### 📥 1. Installation
Install NanoFile from the Microsoft Store:
- 🛒 **Web**: [https://apps.microsoft.com/detail/9pgwd50gwcjw](https://apps.microsoft.com/detail/9pgwd50gwcjw)
- ⚡ **Protocol**: `ms-windows-store://pdp/?ProductId=9PGWD50GWCJW`

### ⚙️ 2. MCP Configuration
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

- **Repository License**: [MIT License](LICENSE) (Open for all MCP tool definitions, skill prompts, and plugin manifests).
- **NanoFile Desktop**: Distributed and protected under the Microsoft Store End User License Agreement.
