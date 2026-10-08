---
name: nanofile-skills
description: Connect your AI assistant to NanoFile for high-performance local file search, file/folder operations, default app management, tag catalog, installed app management, and secure Privacy Vault operations.
---

# NanoFile Agent Skills (7 大核心能力全集)

> ⚠️ **【Agent 极速直通执行守则（最高执行优先级）】**：
> 1. **一步直出，严禁连环试探 (Single-Step Execution)**：
>    - 无论是搜索还是读取，**只需调用 1 次工具**！
>    - **严禁**：在一次用户指令中连续尝试 `search_files`、`search_items`、又跑去遍历个人目录、又去搜某个特定文件夹！
> 2. **零结果即事实，严禁疑病式排查 (Ground Truth / Zero-Fallback)**：
>    - NanoFile 采用底层的 NTFS 极速索引，**返回结果即最终权威事实**。
>    - 若返回结果为 `[]`（空数组），说明电脑中**确实不存在该文件**！**必须立即停止**，直接向用户如实汇报“未找到包含 ## 的文件”。
>    - ❌ **严禁**因为返回空就怀疑工具失效、❌ **严禁**自行调用 PowerShell/cmd/dir 磁盘遍历兜底、❌ **严禁**反复更换参数试探！
> 3. **极速调用路径**：
>    - 若环境有 Native MCP 工具（如 `search_items`）：**直接发起 1 次 Tool Call**，随后立即结束！
>    - 若环境无 Native MCP 工具：运行 `node scripts/nanofile_cli.mjs <tool_name> '<json_arguments>'`，拿到输出后立即结束！
> 4. **绝对红线与禁忌**：
>    - ❌ **严禁**运行 `nanofile --help`、`nanofile -h`。
>    - ❌ **严禁**查阅源码或寻找 `nanofile-mcp.exe`。
>    - ❌ **严禁任何形式的重试循环与背景任务轮询**！

## 1. 7 大能力子技能结构

NanoFile MCP 包含 27 个标准工具，检索能力全盘收拢于 `search_items`：

```
nanofile-skills/
├── skills/
│   ├── items/       # 1. 项目读写 (3 工具) - 全能检索 (支持文件/文件夹/扩展名) 与基础操作
│   ├── files/       # 2. 文件读写 (5 工具) - 文本读写、打开方式与应用启动
│   ├── folders/     # 3. 文件夹读写 (5 工具) - 层级遍历、递归创建、默认打开方式
│   ├── tags/        # 4. 标签读写 (6 工具) - 标签列表管理、重命名、删除、单项标签绑定
│   ├── metadata/    # 5. 元数据读取 (2 工具) - 属性、文件夹大小/项目数统计、文本度量
│   ├── apps/        # 6. 应用程序读写 (3 工具) - 系统应用枚举、安全启动、合规卸载
│   └── favorites/   # 7. 收藏夹读写 (3 工具) - 快速访问与目录收藏管理
```

| # | 能力域 | 专项子技能 | 核心工具清单 | 工具数 |
| :-: | :--- | :--- | :--- | :-: |
| **1** | **项目读写** | [`skills/items`](skills/items/SKILL.md) | `search_items`, `operate_item`, `batch_operate_items` | 3 |
| **2** | **文件读写** | [`skills/files`](skills/files/SKILL.md) | `read_file_content`, `write_file_content`, `open_file`, `get_file_default_app`, `set_file_default_app` | 5 |
| **3** | **文件夹读写** | [`skills/folders`](skills/folders/SKILL.md) | `list_folder_contents`, `create_folder`, `get_folder_default_app`, `set_folder_default_app`, `open_folder` | 5 |
| **4** | **标签读写** | [`skills/tags`](skills/tags/SKILL.md) | `list_all_tags`, `delete_tag`, `rename_tag`, `get_item_tags`, `set_item_tags`, `remove_item_tags` | 6 |
| **5** | **元数据读取** | [`skills/metadata`](skills/metadata/SKILL.md) | `get_item_metadata` (含文件夹递归大小及条目统计), `get_media_metadata` | 2 |
| **6** | **应用程序读写** | [`skills/apps`](skills/apps/SKILL.md) | `search_apps`, `launch_app`, `uninstall_app` | 3 |
| **7** | **收藏夹读写** | [`skills/favorites`](skills/favorites/SKILL.md) | `get_favorites`, `add_favorite`, `remove_favorite` | 3 |


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

## 4. 全量工具速查 (27 个 Tools)

### 1. 项目读写 (`skills/items`)
- `search_items`：**全能检索**。全局、常用或目录检索文件/文件夹；支持 `item_type`（all/file/folder）及 `extensions` 扩展名后缀过滤。
- `operate_item`：移动、复制、重命名或移入回收站。
- `batch_operate_items`：批量移动、复制或移入回收站。

### 2. 文件读写 (`skills/files`)
- `read_file_content`：读取 UTF-8 文本内容（最大字符数保护）。
- `write_file_content`：创建或覆盖写入文本文件。
- `open_file`：使用默认程序或指定应用打开文件。
- `get_file_default_app`：读取扩展名或文件的默认打开程序。
- `set_file_default_app`：设置扩展名的默认打开程序。

### 3. 文件夹读写 (`skills/folders`)
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

---

## 5. 安全与保密准则
1. **系统目录绝对保护**：系统核心关键目录（如 `C:\Windows`、`C:\Boot`、`C:\Recovery`、用户自启动目录等）实施底层硬拦截，禁止任何写操作，杜绝系统崩溃与持久化风险。
2. **敏感权限目录二次确认**：对于需要管理员或特殊权限的受保护目录（如涉及敏感系统资产、受限共享或 UAC 提升区），在执行写操作或权限变更前，遵循与 GUI 相同的人机交互原则，必须由用户显式二次确认后方可继续。
3. **防意外损毁**：普通业务删除统一移入 Windows 回收站（可撤销还原），绝不直接物理覆写或硬删除。

