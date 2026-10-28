# Summa

**一条完整的学校数学路径——从数数到微积分。**

**在线使用：** https://s20240083-tech.github.io/Math-study-for-student/

Summa 是一个面向约 6–18 岁学习者的独立数学学习应用。它把循序渐进的课程、低压力的练习、完整解析和保存在本机的学习进度放在一起。没有账号，没有广告，也没有排行榜。

![Summa 首页](./docs/preview.png)

更多界面：[课程页](./docs/lesson.png) · [练习室](./docs/practice.png) · [20 题练习](./docs/session.png) · [进度页](./docs/progress.png) · [移动端](./docs/mobile.png)

## 里面有什么

- **6 个阶段、54 节引导课程**，从数数与数位一路走到极限、导数和积分。
- **120 道检查点题目**：每阶段 20 道，配有提示、完整解析和即时反馈。
- **练习室**：5、10 或 20 道题，可选简单、普通、困难或混合；同一轮不重复，20 道混合练习会覆盖本阶段完整题库。
- **掌握度地图**：覆盖数与运算、代数、图形与几何、测量、数据与概率、比与比例、函数、微积分和进阶专题。
- **本机进度**保存在 `localStorage`：完成课程、XP、题目正确率、每日活动、连续学习天数和里程碑。
- **搜索**（`⌘K` / `Ctrl+K`）、响应式移动端导航，以及首次访问后可离线使用的 PWA。

## 运行

生产构建已经放在 `dist/` 中。

```bash
cd summa
./start.sh
```

或者手动启动静态服务器：

```bash
python3 -m http.server 4174 --bind 127.0.0.1 --directory dist
# 打开 http://127.0.0.1:4174
```

修改源码时：

```bash
pnpm install
pnpm dev        # 本地开发服务器
pnpm build      # 重新生成 dist/
pnpm preview    # 预览生产构建
```

建议使用 Node 20+ 与 pnpm。应用没有运行时后端。

## 自动部署

每次推送到 `main` 分支，GitHub Actions 会自动安装依赖、构建并部署到 GitHub Pages。工作流文件位于 [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)。也可以在仓库的 **Actions → Deploy to GitHub Pages → Run workflow** 手动触发。

## 难度与题库

- **简单**：1–2 阶段，40 道基础题。
- **普通**：3–4 阶段，40 道核心题。
- **困难**：5–6 阶段，40 道挑战题。
- 每阶段各有 20 道题；20 道模式会从当前阶段完整抽取一次，题目在本次练习中不重复。

## 课程地图

| 阶段 | 年级 | 重点 |
| --- | --- | --- |
| 01 · 第一步 | 1–2 | 数数、数位、早期运算、图形、简单分数 |
| 02 · 搭积木 | 3–4 | 乘除法、分数、面积、角、统计图 |
| 03 · 信心渐长 | 5–6 | 小数、分数运算、比、百分数、体积、平均数 |
| 04 · 桥梁 | 7–8 | 整数、方程、比例、勾股定理、概率、统计 |
| 05 · 代数与联系 | 9–10 | 函数、方程组、二次方程、三角、圆、数据模型 |
| 06 · 进阶数学 | 11–12 | 指数、数列、复数、微积分、概率分布、向量与矩阵 |

每节课都遵循同一学习闭环：简短讲解、核心概念、例题、两道检查点，以及进入专项练习的链接。顺序是建议，不是锁——学习者可以随时跳到感兴趣的概念。

## 项目结构

```text
src/
  data/zh/           简体中文课程内容与题库，每个阶段一个文件
  data/levels/       英文原版课程内容（保留作参考）
  data/curriculum.js 展平课程、主题、搜索与辅助函数
  lib/progress.js   本机进度模型与掌握度计算
  components/       图标、应用外壳、导航、搜索弹窗
  pages/            今日、学习、课时、练习、进度
  styles.css        完整设计系统
public/             PWA 图标、manifest、离线 Service Worker
```

进度完全保存在本机，可以直接查看。重置入口在「进度」页面底部。

## 测试

`scripts/` 文件夹包含开发时使用的 Playwright 冒烟测试。安装开发依赖，并在 4174 端口提供构建产物后运行：

```bash
pnpm install
pnpm serve
# 在另一个终端
node scripts/validate-content.mjs   # 课程结构校验，无需浏览器
node scripts/audit.mjs              # 桌面与移动端布局检查
node scripts/flow.mjs               # 课程、练习、搜索与导航流程
node scripts/test-all-lessons.mjs   # 54 节课全部可以正常渲染
node scripts/pwa.mjs                # manifest、缓存与离线外壳
```

浏览器测试默认使用 macOS 上标准路径的 Google Chrome。截图写入 `shots/`。

## 字体

西文显示字体为 **Fraunces**（Undercase Type），正文为 **DM Sans**（Colophon Foundry），均在 SIL Open Font License 下使用（见 [`licenses/`](./licenses)），并随应用本地打包。中文使用系统的宋体／苹方字体回退，因此在离线时也能保持清晰、稳定的排版。
