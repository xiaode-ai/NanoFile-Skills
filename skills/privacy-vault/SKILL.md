---
name: nanofile-privacy-vault
description: Manage password-protected Privacy Vault sessions, check lock states, and securely lock/unlock using NanoFile (VIP Member required).
---

# NanoFile Privacy Vault Skill

Control the local Privacy Vault through encrypted in-memory sessions with master password verification.

> 💎 **VIP Feature**: Unlocking the Privacy Vault requires an active NanoFile Plus / Pro subscription (identical to GUI requirements). Unsubscribed users will receive a friendly prompt with the Microsoft Store subscription link.

## When to Use
Use this skill when the user asks to:
- Check if their Privacy Vault is currently locked or unlocked.
- Unlock the vault by supplying the master password.
- Lock the vault immediately to clear sensitive in-memory credentials.

## Available Tools

### 1. `vault_get_status`
Check the lock status, session TTL, and VIP subscription state.
```json
{}
```
*Response*:
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
Unlock the Privacy Vault using the master password.
```json
{
  "password": "user_master_password"
}
```
*Note*: Establishes an in-memory session (default 10-minute timeout). Master keys are never transmitted to the AI.

### 3. `vault_lock`
Immediately lock the vault and purge in-memory session keys.
```json
{}
```
