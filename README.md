# 🚀 NanoFile Skills & MCP for AI Agents

[English](#-english-overview) | [中文说明](#-中文说明)

---

## 🇨🇳 中文说明

**NanoFile Skills** 是一套标准化的 AI 扩展协议与技能说明包。只需在 Windows 上安装 **NanoFile**，即可为 **Claude Desktop、Cursor、Cline、VS Code** 等各类 AI 助手无缝接入强大的本地文件系统控制、秒级文件检索、标签管理以及隐私保险箱调度能力！

### 📥 1. 获取 NanoFile 桌面应用

NanoFile 是一款本地优先的高性能文件管理器，所有核心功能由编译后的原生引擎驱动，零第三方环境依赖：

- 🛒 **微软应用商店直达 Web 链接**：[https://apps.microsoft.com/detail/9pgwd50gwcjw](https://apps.microsoft.com/detail/9pgwd50gwcjw)
- ⚡ **一键唤起应用商店安装**：`ms-windows-store://pdp/?ProductId=9PGWD50GWCJW`

> **提示**：安装应用后即可直接使用，无需配置任何 Node.js、Python 或环境依赖。

---

### ⚙️ 2. AI 客户端配置 (5 行极简配置)

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

#### 💡 为什么连路径都不用写？
Windows 应用商店天然支持 **`AppExecutionAlias`（应用执行别名）**。当您在微软商店安装 NanoFile 后，Windows 会自动注册命令 `nanofile.exe` 到系统执行路径中。外部 AI 客户端直接运行 `nanofile.exe --mcp` 即可自动连通，无需填写复杂的路径！

---

### 🛠️ 3. 开放能力速查 (25 个标准 MCP Tools)

完整参数说明请参阅 [SKILL.md](SKILL.md)：

| 业务域 | 开放工具 (Tools) | 功能亮点 |
| :--- | :--- | :--- |
| **项目域** | `search_items`<br/>`operate_item`<br/>`batch_operate_items` | 全局/常用/指定目录项目检索；移动、复制、重命名；删除统一进入回收站（防止物理意外损毁）。 |
| **文件域** | `search_files`<br/>`read_file_content`<br/>`write_file_content`<br/>`open_file` | 按扩展名精准找文件；UTF-8 文本内容安全读写；调用默认程序打开。 |
| **文件夹域** | `search_folders`<br/>`list_folder_contents`<br/>`create_folder`<br/>`open_folder` | 目录结构遍历；递归创建目录；在资源管理器或终端中打开定位。 |
| **标签域** | `get_item_tags`<br/>`set_item_tags`<br/>`remove_item_tags` | 读取、追加、覆盖与清除文件/文件夹标签。 |
| **元数据域** | `get_item_metadata`<br/>`get_media_metadata` | 获取大小、修改时间、只读/隐藏属性、代码行数与字符数。 |
| **应用程序域** | `search_apps`<br/>`launch_app`<br/>`uninstall_app` | 检索已安装应用；启动应用；合规唤起系统应用卸载页。 |
| **收藏夹域** | `get_favorites`<br/>`add_favorite`<br/>`remove_favorite` | 获取快速访问与收藏夹列表、添加或移除常用目录。 |
| **保险箱域** | `vault_get_status`<br/>`vault_unlock_with_password`<br/>`vault_lock` | 输入密码校验解锁保险箱会话，与 GUI 一致校验 Plus/Pro 会员权限，超时自动重锁，支持主动锁定。 |

---

## 🌐 English Overview

**NanoFile Skills** is the official AI Agent skill and Model Context Protocol (MCP) guide for [NanoFile](https://apps.microsoft.com/detail/9pgwd50gwcjw). It enables AI assistants (such as Claude Desktop, Cursor, Cline, and VS Code) to manage Windows local files with ultra-fast indexing, granular file/folder manipulation, tagging, and password-protected Privacy Vault operations.

### 📥 1. Installation

Install NanoFile directly from the Microsoft Store:
- 🛒 **Store Web Link**: [https://apps.microsoft.com/detail/9pgwd50gwcjw](https://apps.microsoft.com/detail/9pgwd50gwcjw)
- ⚡ **One-Click Store Protocol**: `ms-windows-store://pdp/?ProductId=9PGWD50GWCJW`

### ⚙️ 2. MCP Server Configuration

Add to your `claude_desktop_config.json` or Cursor `settings.json`:

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

*Thanks to Windows Store `AppExecutionAlias`, no absolute executable path is required!*

### 📖 3. Detailed Documentation
For detailed schema and argument specifications, see [SKILL.md](SKILL.md).

---

## 🛡️ License & Privacy
- Zero telemetry uploaded to external servers. All operations execute strictly on your local PC.
- License: MIT License.
