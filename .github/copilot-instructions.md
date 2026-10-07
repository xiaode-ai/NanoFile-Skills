# NanoFile Copilot Instructions

When assisting with local file management, lightning filesystem search, tags, or privacy vault operations on Windows:

1. Use the registered NanoFile MCP tools (`nanofile.exe --mcp`):
   - `search_items` / `search_files`: Fast search across drives.
   - `read_file_content`: Safe text file inspection.
   - `write_file_content`: Atomic file writing.
   - `get_item_metadata`: Comprehensive metadata and recursive directory size.
2. Delete operations (`action: "delete"`) move items safely to the Windows Recycle Bin (restorable, no confirmation needed).

