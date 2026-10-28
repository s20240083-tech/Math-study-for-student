#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
PORT="${PORT:-4174}"

if [ ! -d dist ]; then
  echo "还没有构建产物。请先运行：pnpm install && pnpm build"
  exit 1
fi

echo "Summa 数学 → http://127.0.0.1:${PORT}"
if command -v open >/dev/null 2>&1; then
  (sleep 1; open "http://127.0.0.1:${PORT}") &
fi
python3 -m http.server "${PORT}" --bind 127.0.0.1 --directory dist
