# 🚀 NanoFile Skills & MCP for AI Agents

[English](#-english-overview) | [中文说明](#-中文说明)

---

## 🇨🇳 中文说明

**NanoFile Skills** 是一套标准化的 AI 扩展协议与技能说明包。只需在 Windows 上安装 **NanoFile**，即可为 **Claude Desktop、Cursor、Cline、VS Code** 等各类 AI 助手无缝接入强大的本地文件系统控制、秒级文件检索、标签管理以及隐私保险箱调度能力！

### 🛠️ 8 大核心能力分类速查

NanoFile 将 25 个 MCP 工具严格对齐为 **8 大业务能力分类**，每个分类均配备独立的专项子技能：

| # | 能力分类 | 专项子技能 | 核心职能 | 工具数 |
| :-: | :--- | :--- | :--- | :-: |
| **1** | **项目读写** | [`skills/items`](skills/items/SKILL.md) | 通用项目检索（常用/全局/目录范围，极速/实时模式）；移动、复制、重命名、移入回收站 | 3 |
| **2** | **文件读写** | [`skills/files`](skills/files/SKILL.md) | 扩展名过滤文件检索；UTF-8 文本内容安全读写；默认关联程序打开 | 4 |
| **3** | **文件夹读写** | [`skills/folders`](skills/folders/SKILL.md) | 目录专用检索；层级内容遍历；递归创建文件夹；在资源管理器/终端中打开 | 4 |
| **4** | **标签读写** | [`skills/tags`](skills/tags/SKILL.md) | 读取文件/文件夹标签；追加/设置自定义标签；清除标签 | 3 |
| **5** | **元数据读取** | [`skills/metadata`](skills/metadata/SKILL.md) | 读取文件大小、时间戳、只读状态；文本行数与字符数分析 | 2 |
| **6** | **应用程序读写** | [`skills/apps`](skills/apps/SKILL.md) | 注册表桌面应用枚举；带参启动程序；合规唤起系统应用卸载页 | 3 |
| **7** | **收藏夹读写** | [`skills/favorites`](skills/favorites/SKILL.md) | 查看快速访问与收藏夹列表；添加目录收藏（支持别名）；移除收藏 | 3 |
| **8** | **保险箱管理** | [`skills/vault`](skills/vault/SKILL.md) | 状态查询；主密码校验解锁安全内存会话；立即锁死（与 GUI 一致校验 Plus/Pro 会员） | 3 |

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

### 🛠️ 8 Core Capabilities
1. **Item Management**: [`skills/items/SKILL.md`](skills/items/SKILL.md) (Universal search, move, copy, rename, recycle)
2. **File Management**: [`skills/files/SKILL.md`](skills/files/SKILL.md) (File search with extension filters, UTF-8 read/write, open file)
3. **Folder Management**: [`skills/folders/SKILL.md`](skills/folders/SKILL.md) (Folder search, contents listing, create folder, open in Explorer/Terminal)
4. **Tag Management**: [`skills/tags/SKILL.md`](skills/tags/SKILL.md) (Read, assign, and clear custom item tags)
5. **Metadata Inspection**: [`skills/metadata/SKILL.md`](skills/metadata/SKILL.md) (Attributes, timestamps, line/character metrics)
6. **Application Management**: [`skills/apps/SKILL.md`](skills/apps/SKILL.md) (Installed app search, launch with arguments, uninstall prompt)
7. **Favorites Management**: [`skills/favorites/SKILL.md`](skills/favorites/SKILL.md) (List, add, and remove Quick Access bookmarks)
8. **Privacy Vault**: [`skills/vault/SKILL.md`](skills/vault/SKILL.md) (Password-protected vault sessions, VIP Plus/Pro required)

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
