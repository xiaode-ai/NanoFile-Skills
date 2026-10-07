import { spawn } from 'child_process';
import { existsSync } from 'fs';
import { resolve } from 'path';

// 智能探测 NanoFile 可执行文件路径
function resolveNanoFileExe() {
  const localTarget = resolve(process.cwd(), 'src-tauri/target/debug/NanoFile.exe');
  if (existsSync(localTarget)) return localTarget;
  const localRelease = resolve(process.cwd(), 'src-tauri/target/release/NanoFile.exe');
  if (existsSync(localRelease)) return localRelease;
  if (process.env.LOCALAPPDATA) {
    const storeApp = resolve(process.env.LOCALAPPDATA, 'Microsoft/WindowsApps/NanoFile.exe');
    if (existsSync(storeApp)) return storeApp;
  }
  return 'nanofile.exe';
}

export function callMcp(toolName, args) {
  return new Promise((resolve, reject) => {
    const exe = resolveNanoFileExe();
    const child = spawn(exe, ['--mcp']);
    let output = '';

    child.stdout.on('data', (d) => {
      const text = d.toString();
      try {
        const json = JSON.parse(text);
        if (json.id === 1) {
          // 初始化成功，直接派发工具调用
          const req = JSON.stringify({
            jsonrpc: '2.0',
            id: 2,
            method: 'tools/call',
            params: { name: toolName, arguments: args }
          }) + '\n';
          child.stdin.write(req);
        } else if (json.id === 2) {
          child.kill();
          if (json.result && json.result.content && json.result.content[0]) {
            try {
              const parsed = JSON.parse(json.result.content[0].text);
              resolve(parsed);
            } catch (_) {
              resolve(json.result.content[0].text);
            }
          } else {
            resolve(json.result);
          }
        }
      } catch (_) {}
    });

    child.stderr.on('data', () => {});
    child.on('error', (err) => reject(err));

    setTimeout(() => {
      child.kill();
      reject(new Error('NanoFile MCP 调用超时 (2000ms)'));
    }, 3000);

    // 握手包
    const initReq = JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: { protocolVersion: '2024-11-05', clientInfo: { name: 'NanoCLI', version: '1.0' } }
    }) + '\n';
    child.stdin.write(initReq);
  });
}

// CLI 模式支持：bun scripts/call_mcp.mjs search_items '{"query":"@@@"}'
if (process.argv[2]) {
  const tool = process.argv[2];
  let params = {};
  if (process.argv[3]) {
    try {
      params = JSON.parse(process.argv[3]);
    } catch (_) {
      params = { query: process.argv[3] };
    }
  }
  callMcp(tool, params)
    .then((res) => {
      console.log(JSON.stringify(res, null, 2));
      process.exit(0);
    })
    .catch((err) => {
      console.error('Error:', err.message);
      process.exit(1);
    });
}
