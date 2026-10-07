---
name: nanofile-vault
description: Manage password-protected Privacy Vault sessions, check lock states, and securely lock/unlock using NanoFile (VIP Member required).
---

# NanoFile 保险箱管理技能 (Privacy Vault)

通过主密码在内存中建立安全加密访问会话，管理隐私保险箱。

> 💎 **VIP 会员专享权益**：与 NanoFile GUI 界面严格保持一致，解锁保险箱需要持有有效的 NanoFile Plus / Pro 订阅。未订阅会员调用时将收到友好提示及微软应用商店订阅直达链接。

## 适用场景
- 用户需要查询保险箱当前的锁定状态、会话有效倒计时或会员权限。
- 用户输入主密码解锁保险箱，获取受控会话。
- 用户需要立即锁死保险箱并从内存中清除所有敏感密钥。

## 包含工具 (3 个)

### 1. `vault_get_status`
查询保险箱当前锁定状态、会话剩余秒数及 VIP 会员有效性。
```json
{}
```
*返回示例*：
```json
{
  "is_unlocked": false,
  "is_vip_active": true,
  "requires_vip": true,
  "session_remaining_seconds": 0,
  "vault_ready": true
}
```

### 2. `vault_unlock_with_password`
输入主密码解锁保险箱（前置校验 VIP 会员状态）。
```json
{
  "password": "user_master_password"
}
```
> **安全防护**：成功后仅建立本地内存临时会话（默认 10 分钟闲置超时自动锁死）。原始加密密钥与容器底层结构绝不传出给外部 AI。

### 3. `vault_lock`
立即强制锁死保险箱，彻底清空内存中的密钥与会话状态。
```json
{}
```
