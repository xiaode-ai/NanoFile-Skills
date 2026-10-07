# 🚀 NanoFile Skills & MCP for AI Agents

[English](#-english-overview) | [中文说明](#-中文说明)

---

## 🇨🇳 中文说明

**NanoFile Skills** 是一套模块化、标准化的 AI 扩展协议与技能包体系。只需在 Windows 上安装 **NanoFile**，即可为 **Claude Desktop、Cursor、Cline、VS Code** 等各类 AI 助手无缝接入强大的本地文件系统控制、秒级文件检索、标签管理以及隐私保险箱调度能力！

### 📂 能力分类一览 (5 大领域分类)

为了便于各类 AI 智能体精准定位与低消耗调用，NanoFile 将 25 个 MCP 工具划分为 **5 大垂直子技能 (Sub-Skills)**：

| 领域分类 | 专项子技能 | 核心能力 | 工具数 |
| :--- | :--- | :--- | :---: |
| 🔍 **检索与发现** | [`skills/search`](skills/search/SKILL.md) | 常用目录/全局全盘/指定路径毫秒级极速搜索，支持扩展名集合过滤 | 3 |
| 📂 **文件与目录治理** | [`skills/filesystem`](skills/filesystem/SKILL.md) | UTF-8 文本安全读写、目录结构遍历、安全移入回收站（防误删）、属性提取 | 10 |
| 🏷️ **智能标签体系** | [`skills/tagging`](skills/tagging/SKILL.md) | 为文件或文件夹读取、追加、修改与清除自定义标签 | 3 |
| 🚀 **应用管理与导航** | [`skills/app-launcher`](skills/app-launcher/SKILL.md) | Windows 已安装应用检索与启动、系统快捷访问/收藏夹管理 | 6 |
| 🔒 **隐私保险箱** | [`skills/privacy-vault`](skills/privacy-vault/SKILL.md) | 口令解锁建立临时内存会话、自动超时锁定（与 GUI 一致校验 Plus/Pro 会员） | 3 |

---

### 📥 1. 获取 NanoFile 桌面应用

NanoFile 是一款本地优先的高性能文件管理器，所有核心功能由编译后的原生引擎驱动，零第三方环境依赖：

- 🛒 **微软应用商店直达 Web 链接**：[https://apps.microsoft.com/detail/9pgwd50gwcjw](https://apps.microsoft.com/detail/9pgwd50gwcjw)
- ⚡ **一键唤起应用商店安装**：`ms-windows-store://pdp/?ProductId=9PGWD50GWCJW`

> **提示**：安装应用后即可直接使用，无需配置任何 Node.js、Python 或外部环境依赖。

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

## 🌐 English Overview

**NanoFile Skills** is the official modular AI Agent skill and Model Context Protocol (MCP) suite for [NanoFile](https://apps.microsoft.com/detail/9pgwd50gwcjw).

### 📂 Categorized Sub-Skills
- 🔍 **Search**: [`skills/search/SKILL.md`](skills/search/SKILL.md) (Ultra-fast search with scopes and modes)
- 📂 **Filesystem**: [`skills/filesystem/SKILL.md`](skills/filesystem/SKILL.md) (Safe file read/write, directory navigation, recycle bin)
- 🏷️ **Tagging**: [`skills/tagging/SKILL.md`](skills/tagging/SKILL.md) (Native custom tagging)
- 🚀 **App Launcher**: [`skills/app-launcher/SKILL.md`](skills/app-launcher/SKILL.md) (Installed app search, launch, and favorites)
- 🔒 **Privacy Vault**: [`skills/privacy-vault/SKILL.md`](skills/privacy-vault/SKILL.md) (Password-protected vault sessions, VIP license required)

### 📥 Installation
- 🛒 **Microsoft Store**: [https://apps.microsoft.com/detail/9pgwd50gwcjw](https://apps.microsoft.com/detail/9pgwd50gwcjw)
- ⚡ **Store Protocol**: `ms-windows-store://pdp/?ProductId=9PGWD50GWCJW`

### ⚙️ MCP Server Configuration
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

## 🛡️ License & Privacy
- Zero telemetry uploaded to external servers. All operations execute strictly on your local PC.
- License: MIT License.
