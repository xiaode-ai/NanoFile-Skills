# NanoFile Copilot Instructions

When assisting with local file management, lightning filesystem search, or tag organization on Windows:

1. Use the registered NanoFile MCP tools (`nanofile.exe --mcp`):
   - `search_items` / `search_files`: Fast search across drives.
   - `read_file_content`: Safe text file inspection.
   - `write_file_content`: Atomic file writing.
   - `get_item_metadata`: Comprehensive metadata and recursive directory size.
2. Delete operations are performed with `operate_item` and `operation: "recycle"`, which moves items safely to the Windows Recycle Bin (restorable). Permanent delete is not supported — never claim otherwise.
3. Safety:
   - Writes to system-critical directories (`C:\Windows`, Startup folder) are blocked at the native engine level.
   - For directories requiring administrator permissions or elevated access, obtain explicit user confirmation before writing or deleting.
   - Do not read credential/key material (`.ssh` private keys, `.env` files, token stores) unless the user explicitly asks for that specific file.

