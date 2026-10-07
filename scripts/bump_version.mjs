import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const pluginJsonPath = resolve(rootDir, 'plugin.json');

/**
 * 0-999 进位升级版本号:
 * 规则：major.minor.patch
 * patch 从 0 累加到 999；满 1000 时向 minor 进位，patch 归 0；
 * minor 从 0 累加到 999；满 1000 时向 major 进位，minor 归 0。
 */
export function bumpVersion(currentVersion) {
  const parts = String(currentVersion).trim().split('.').map(Number);
  let major = parts[0] || 1;
  let minor = parts[1] || 0;
  let patch = parts[2] || 0;

  patch += 1;
  if (patch > 999) {
    patch = 0;
    minor += 1;
    if (minor > 999) {
      minor = 0;
      major += 1;
    }
  }

  return `${major}.${minor}.${patch}`;
}

export function autoBumpPluginVersion() {
  try {
    const raw = readFileSync(pluginJsonPath, 'utf8');
    const json = JSON.parse(raw);
    const oldVersion = json.version || '1.0.0';
    const newVersion = bumpVersion(oldVersion);

    json.version = newVersion;
    writeFileSync(pluginJsonPath, JSON.stringify(json, null, 2) + '\n', 'utf8');
    console.log(`🚀 [NanoFile-Skills] 版本号已自动升级: ${oldVersion} -> ${newVersion} (0-999 进位制)`);
    return newVersion;
  } catch (err) {
    console.error('❌ 自动更新版本号失败:', err);
    process.exit(1);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  autoBumpPluginVersion();
}
