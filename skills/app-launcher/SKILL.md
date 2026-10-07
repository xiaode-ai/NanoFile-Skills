---
name: nanofile-app-launcher
description: Discover and launch desktop applications, manage favorites, and configure quick access using NanoFile.
---

# NanoFile App Launcher & Navigation Skill

Discover installed Windows desktop applications, launch apps with arguments, and organize quick access bookmarks.

## When to Use
Use this skill when the user asks to:
- Find which applications are installed on the PC.
- Launch a specific program or open an application with arguments.
- Open the Windows Settings uninstaller page for an app.
- Check, add, or remove bookmarks from Quick Access / Favorites.

## Available Tools

### 1. Application Management
- **`search_apps(query)`**: Search installed desktop apps from the Windows Registry (returns name, publisher, version, location).
- **`launch_app(app_path_or_command, arguments)`**: Launch an application safely with optional arguments.
- **`uninstall_app(app_name)`**: Opens the Windows Settings installed apps page for user-guided uninstallation.

### 2. Favorites & Quick Access
- **`get_favorites()`**: List all bookmarked favorite directories.
- **`add_favorite(path, alias)`**: Add a folder path to favorites with an optional display alias.
- **`remove_favorite(path)`**: Remove a folder path from favorites.
