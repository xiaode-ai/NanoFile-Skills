---
name: nanofile-vault
description: Query privacy vault status, unlock privacy vault with password, and lock privacy vault using NanoFile.
---

# NanoFile 保险箱管理技能 (Privacy Vault)

管理 NanoFile 隐私保险箱：查询状态、输入密码解锁、以及锁定保险箱。

## 适用场景
- 用户需要查询保险箱当前处于锁定还是解锁状态。
- 用户需要输入密码解锁保险箱。
- 用户需要手动锁定保险箱。

## 包含工具 (3 个)

### 1. `vault_get_status`
查询保险箱当前状态（是否已解锁、解锁会话剩余有效秒数）。
```json
{}
```
*返回示例*：
```json
{
  "is_unlocked": false,
  "remaining_seconds": 0
}
```

### 2. `vault_unlock`
输入密码解锁保险箱。
```json
{
  "password": "user_master_password"
}
```
*返回示例*：
```json
{
  "success": true,
  "is_unlocked": true,
  "message": "保险箱已成功解锁"
}
```

### 3. `vault_lock`
锁定保险箱。
```json
{}
```
*返回示例*：
```json
{
  "success": true,
  "is_unlocked": false,
  "message": "保险箱已锁定"
}
```
