<div align="center">

  <!-- Title & Demo Video -->
  <h1 align="center">
    <!-- Project Icon -->
    <img src="public/icon.svg" alt="GitHub Wrapped Icon" width="120">
    <br>
    GitHub Wrapped
  </h1>

  <!-- Badges -->
  <p align="center">
    <a href="https://github.com/Freakz3z/GitHub-Wrapped/stargazers">
      <img src="https://img.shields.io/github/stars/Freakz3z/GitHub-Wrapped?style=flat-square&logo=github&color=yellow" alt="Stars">
    </a>
    <a href="https://github.com/Freakz3z/GitHub-Wrapped/network/members">
      <img src="https://img.shields.io/github/forks/Freakz3z/GitHub-Wrapped?style=flat-square&logo=github&color=blue" alt="Forks">
    </a>
    <a href="https://github.com/Freakz3z/GitHub-Wrapped/issues">
      <img src="https://img.shields.io/github/issues/Freakz3z/GitHub-Wrapped?style=flat-square&logo=github&color=green" alt="Issues">
    </a>
    <a href="./LICENSE">
      <img src="https://img.shields.io/github/license/Freakz3z/GitHub-Wrapped?style=flat-square&logo=github&color=orange" alt="License">
    </a>
    <a href="https://githubwrapped-roan.vercel.app">
      <img src="https://img.shields.io/badge/deployment-online-success?style=flat-square&logo=vercel&logoColor=white" alt="Deployment">
    </a>
  </p>

  <!-- Subtitle -->
  <p align="center">
    <strong>Your Year in Code, Beautifully Visualized.</strong>
  </p>

  <!-- Description -->
  <p align="center">
    <img src="GitHub-Wrapped.gif" alt="GitHub Wrapped Demo" width="800">
    GitHub Wrapped is a year-in-review tool for developers that visualizes your GitHub activity data through beautiful slides.
    <br>
    Analyze your code contributions from the past year and generate a shareable, beautiful summary.
  </p>

  <!-- Links -->
  <p align="center">
    <a href="README.md">中文文档</a> •
    <a href="https://githubwrapped-roan.vercel.app">🚀 Live Demo</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-development">Development</a>
  </p>

</div>

---

## Table of Contents

- [Features](#-features)
- [Slides Overview](#-slides-overview)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🎨 Immersive Experience
- **Interactive Slides**: Browse your yearly data with smooth animations and transitions
- **One-click Export**: Generate high-definition (2x) shareable summary cards for social platforms
- **Keyboard Support**: Navigate between slides using left and right arrow keys
- **Progress Indicator**: Track your progress through the slides
- **Responsive Design**: Perfectly adapted for desktop, tablet, and mobile devices
- **Modern UI**: Glassmorphism design style with gradient backgrounds and custom scrollbars

### 📊 Comprehensive Analytics
- **Multi-year Support**: View summaries for the past 5 years with smart default year selection
- **Total Contributions**: Combined statistics of commits, pull requests, issues, and code reviews
- **Stars Earned**: Total stars across all your repositories
- **Pull Requests**: Track your PR contributions
- **Issues Created**: See your impact through issue reports
- **Code Reviews**: Number of PRs you've reviewed
- **Longest Streak**: Your longest consecutive contribution days
- **Current Streak**: Your current consecutive contribution days
- **Best Day**: The day with your most contributions

### 🗓️ Contribution Heatmap
- Visualize your daily code activity with a beautiful heatmap
- View streaks and patterns in your contribution history
- Interactive calendar view with contribution levels

### 🏆 Achievement Badges
- **Contribution Badges**: Unlock badges based on total contributions (100, 500, 1K, 2.5K)
- **Streak Badges**: Earn badges for maintaining streaks (7, 30, 100 days)
- **Star Badges**: Collect badges for stars earned (10, 50, 100, 500)
- **PR Badges**: Recognition for pull requests (10, 50, 100)
- **Special Badges**: Polyglot (5+ languages), Code Reviewer (100+ reviews)
- **Progress Tracking**: See your progress toward locking badges

### 🌍 Top Programming Languages
- Visualized language distribution chart
- Percentage breakdown by language
- Color-coded language indicators
- Track your language diversity

### 📦 Top Repositories
- Your most popular repositories
- Repository descriptions
- Primary language for each repo
- Star counts and branch information
- Open issue tracking

### 🔒 Privacy First
- **Read-only Access**: Only requests permission to read public data
- **No Data Storage**: Your data is never stored on our servers
- **Secure Authentication**: Uses NextAuth for GitHub OAuth authentication

---

## 🎯 Slides Overview

| Slide | Description |
|-------|-------------|
| **1. Intro** | Personalized welcome showing GitHub profile and bio |
| **2. Stats** | 6 animated cards displaying key metrics |
| **3. Heatmap** | Monthly activity cards with detailed stats and streak info |
| **4. Languages** | Interactive language distribution with progress bars and charts |
| **5. Repos** | Responsive grid layout for top repositories |
| **6. Badges** | Achievement badges (unlocked and locked) |
| **7. Milestones** | Key achievements with icons and descriptions |
| **8. Summary** | Thank you message and summary statistics |

---

## 🛠️ Tech Stack

### Frontend

- **Framework** - [Next.js 16](https://nextjs.org/) (App Router + Turbopack)
- **UI Library** - [React 19](https://react.dev/)
- **Styling** - [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations** - [Framer Motion](https://www.framer.com/motion/)
- **Icons** - [Lucide React](https://lucide.dev/)

### Backend & Authentication

- **Authentication** - [NextAuth.js](https://next-auth.js.org/) (GitHub OAuth)
- **API** - [GitHub GraphQL API](https://docs.github.com/en/graphql)

### Data Visualization

- **Charts** - [Recharts](https://recharts.org/)
- **Calendar** - [react-activity-calendar](https://github.com/gr2m/react-activity-calendar)

### Development Tools

- **Language** - [TypeScript](https://www.typescriptlang.org/)
- **Package Manager** - npm / pnpm
- **Deployment** - [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFreakz3z%2FGitHub-Wrapped)

### Prerequisites

- Node.js 18+ installed
- GitHub Account
- GitHub OAuth App

---

## ⚙️ Environment Variables

Create a `.env.local` file and configure the following environment variables:

```env
# GitHub OAuth App Credentials
# Get from: https://github.com/settings/developers
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# NextAuth Configuration
# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET=your_random_secret_string

# Application URL
NEXTAUTH_URL=http://localhost:3000
```

### GitHub OAuth App Setup

1. Visit [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the following information:
   - **Application name**: GitHub Wrapped
   - **Homepage URL**: `http://localhost:3000` (Development) or your domain (Production)
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Get `Client ID` and generate `Client Secret`

---

## 💻 Development

### Installation

```bash
# Clone repository
git clone https://github.com/Freakz3z/GitHub-Wrapped.git
cd GitHub-Wrapped

# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Run Linting

```bash
npm run lint
```

---

## 🤝 Contributing

We welcome all forms of contributions!

### How to Contribute

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Areas

- [ ] Add new badge types and achievements
- [ ] Create new slide templates
- [ ] Improve UI/UX animations and transitions
- [ ] Add more social sharing platforms
- [ ] Implement image download feature
- [ ] Add support for more languages
- [ ] Optimize data visualization
- [ ] Improve performance and loading speed
- [ ] Improve mobile responsiveness

---

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).

```
Copyright 2024 GitHub Wrapped Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

---

<div align="center">

  Made with ❤️ by the developer community

  <!-- Share Badge -->
  [![](https://img.shields.io/badge/Share-%23GitHubWrapped-blue?style=for-the-badge&logo=github)](https://twitter.com/intent/tweet?text=Check%20out%20my%20GitHub%20Wrapped%20%F0%9F%8E%81&url=https%3A%2F%2Fgithub.com%2FFreakz3z%2FGitHub-Wrapped&hashtags=GitHubWrapped)

  <!-- Star History -->
  [![Star History Chart](https://api.star-history.com/svg?repos=Freakz3z/GitHub-Wrapped&type=Date)](https://star-history.com/#Freakz3z/GitHub-Wrapped&Date)

</div>
