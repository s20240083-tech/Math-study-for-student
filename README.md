# Summa

**由數數到微積分的完整數學學習路徑。**

**線上使用：** https://s20240083-tech.github.io/Math-study-for-student/<br />
**作者：** 3D 廖嘉兒

![Summa 產品網站](./docs/site-zh.png)

Summa 是一個面向約 6–18 歲學習者的獨立數學學習專題。它把六年的小學數學、六年的中學數學，整理成一條安靜而清楚的學習路徑：54 節引導課程、120 道練習題、九個數學主題，以及保存在本機的學習進度。

產品網站提供**繁體中文 / English** 兩個語言版本；互動課程本身以**繁體中文**呈現。沒有帳號、廣告、排行榜或訂閱。

更多介面：[課程頁](./docs/lesson.png) · [練習室](./docs/practice.png) · [20 題練習](./docs/session.png) · [進度頁](./docs/progress.png) · [手機版](./docs/mobile.png) · [English site](./docs/site-en.png)

## 網站包含什麼

- **完整的產品介紹**：學習理念、產品導覽、練習系統、課程地圖、設計原則與作者介紹。
- **繁體中文 / English 切換**：語言選擇會保存在瀏覽器中，並同步更新頁面語言與標題。
- **互動課程入口**：網站上的所有「開始學習」按鈕都會進入原本可用的數學應用程式。
- **作者資訊**：3D 廖嘉兒，包括專題背景、課程與技術資料。
- **社會分享與搜尋資料**：Open Graph、Twitter Card、JSON-LD、robots.txt、sitemap 與分享圖片。
- **保留原有功能**：今日、學習、課時、練習、進度、搜尋、20 題難度練習、PWA 離線使用全部保留。

## 數學應用

- **6 個階段、54 節引導課程**，從數數與數位一路走到極限、導數和積分。
- **120 道檢查點題目**：每階段 20 道，配有提示、完整解析與即時回饋。
- **練習室**：5、10 或 20 道題，可選簡單、普通、困難或混合；同一輪不重複，20 道混合練習會覆蓋本階段完整題庫。
- **掌握度地圖**：覆蓋數與運算、代數、圖形與幾何、測量、數據與概率、比與比例、函數、微積分和進階專題。
- **本機進度**保存在 `localStorage`：完成課程、XP、題目正確率、每日活動、連續學習天數與里程碑。
- **搜尋**（`⌘K` / `Ctrl+K`）、響應式手機導航，以及首次載入後可離線使用的 PWA。

## 難度與題庫

- **簡單**：1–2 階段，40 道基礎題。
- **普通**：3–4 階段，40 道核心題。
- **困難**：5–6 階段，40 道挑戰題。
- 每階段各有 20 道題；20 道模式會從當前階段完整抽取一次，題目在本次練習中不重複。

## 課程地圖

| 階段 | 年級 | 重點 |
| --- | --- | --- |
| 01 · 第一步 | 1–2 | 數數、數位、早期運算、圖形、簡單分數 |
| 02 · 搭積木 | 3–4 | 乘除法、分數、面積、角、統計圖 |
| 03 · 信心漸長 | 5–6 | 小數、分數運算、比、百分數、體積、平均數 |
| 04 · 橋樑 | 7–8 | 整數、方程、比例、勾股定理、概率、統計 |
| 05 · 代數與聯繫 | 9–10 | 函數、方程組、二次方程、三角、圓、數據模型 |
| 06 · 進階數學 | 11–12 | 指數、數列、複數、微積分、概率分佈、向量與矩陣 |

每節課都遵循同一學習閉環：簡短講解、核心概念、例題、2–3 道檢查點，以及進入專項練習的連結。順序是建議，不是鎖——學習者可以隨時跳到感興趣的概念。

## 執行

生產建置已放在 `dist/` 中。

```bash
cd Math-study-for-student
./start.sh
```

或手動啟動靜態伺服器：

```bash
python3 -m http.server 4174 --bind 127.0.0.1 --directory dist
# 開啟 http://127.0.0.1:4174
```

修改原始碼時：

```bash
pnpm install
pnpm dev        # 本地開發伺服器
pnpm build      # 重新生成 dist/
pnpm preview    # 預覽生產建置
```

建議使用 Node 20+ 與 pnpm。應用沒有執行時後端。

## 自動部署

每次合併或推送到 `main`，GitHub Actions 會自動安裝依賴、建置並部署到 GitHub Pages。工作流程位於 [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)。也可以在 **Actions → Deploy to GitHub Pages → Run workflow** 手動觸發。

## 專案結構

```text
src/
  data/zh/           繁體中文課程內容與題庫，每個階段一個檔案
  data/levels/       英文原版課程內容（保留作參考）
  data/siteCopy.js   產品網站的中英文文案
  data/curriculum.js 展平課程、主題、難度、搜尋與輔助函式
  lib/progress.js    本機進度模型與掌握度計算
  components/        圖示、應用外殼、導航、搜尋彈窗
  pages/             今日、學習、課時、練習、進度、產品網站
  pages/Marketing.jsx 繁體中文 / English 商業網站
  styles.css         應用設計系統
  styles/marketing.css 產品網站設計系統
public/
  marketing/         網站產品截圖
  og-image.png       社群分享圖片
  robots.txt, sitemap.xml
```

進度完全保存在本機，可以直接查看。重置入口在「進度」頁面底部。

## 測試

`scripts/` 資料夾包含開發時使用的 Playwright 冒煙測試。安裝開發依賴，並在 4174 埠提供建置產物後執行：

```bash
pnpm install
pnpm serve
# 在另一個終端
node scripts/validate-content.mjs   # 課程結構校驗，無需瀏覽器
node scripts/audit.mjs              # 桌面與手機版佈局檢查
node scripts/flow.mjs               # 課程、練習、搜尋與導航流程
node scripts/site.mjs               # 中英文網站、切換與應用入口
node scripts/test-all-lessons.mjs   # 54 節課全部可以正常呈現
node scripts/pwa.mjs                # manifest、快取與離線外殼
```

瀏覽器測試預設使用 macOS 上標準路徑的 Google Chrome。截圖寫入 `shots/`。

## 字體

西文顯示字體為 **Fraunces**（Undercase Type），正文為 **DM Sans**（Colophon Foundry），均在 SIL Open Font License 下使用（見 [`licenses/`](./licenses)），並隨應用本地打包。中文使用系統的宋體／蘋方字體回退，因此在離線時也能保持清晰、穩定的排版。
