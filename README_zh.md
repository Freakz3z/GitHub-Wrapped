# GitHub Wrapped 🎁

**你的年度代码之旅，可视化呈现。**

GitHub Wrapped 是一款专为开发者打造的年度总结工具。它分析你过去一年的 GitHub 活动，生成一份精美、可分享的编程旅程总结。

[English](README.md) | [**🚀 立即体验**](https://githubwrapped-delta.vercel.app)

---

## ✨ 功能特性

- **📊 全面统计**：一览你的总贡献数、获得的 Star 数、合并的 PR 数以及提交的 Issue 数。
- **📅 贡献热力图**：通过精美的热力图，直观感受你每一天的代码热情。
- **🏆 编程语言排行**：发现定义你这一年的核心编程语言。
- **🖼️ 分享卡片**：一键生成专业精美的年度总结图片，完美适配朋友圈、Twitter/X、LinkedIn 等社交平台。
- **🔒 隐私优先**：我们重视你的隐私。应用仅请求**只读**权限以获取公开数据，绝不会在服务器上存储你的任何个人信息。

## 🚀 如何使用

1. **连接账号**：访问 [应用主页](https://githubwrapped-delta.vercel.app) 并使用 GitHub 账号登录。
2. **探索数据**：浏览你的个性化仪表盘，查看各项统计数据和洞察。
3. **分享成就**：点击“下载图片”按钮保存你的年度总结卡片，并使用 `#GitHubWrapped` 标签分享给社区。

## 🛠️ 开发者指南：部署你自己的版本

想要托管属于你自己的版本或参与开发？

### 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFreakz3z%2FGitHub-Wrapped)

### 本地开发

1. **克隆仓库**：
   ```bash
   git clone https://github.com/Freakz3z/GitHub-Wrapped.git
   cd GitHub-Wrapped
   ```

2. **安装依赖**：
   ```bash
   npm install
   ```

3. **配置环境变量**：
   创建一个 `.env.local` 文件并填入以下内容：
   ```env
   GITHUB_ID=你的_github_client_id
   GITHUB_SECRET=你的_github_client_secret
   NEXTAUTH_SECRET=你的随机密钥
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **运行应用**：
   ```bash
   npm run dev
   ```

## 🤝 贡献

欢迎提交 Issue 或 Pull Request 来改进这个项目！

