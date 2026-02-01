# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (includes standalone output setup)
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Generate PNG icons (requires sharp)
npm run generate-icons
```

## Environment Setup

Required environment variables in `.env.local`:
- `GITHUB_ID` - GitHub OAuth App client ID
- `GITHUB_SECRET` - GitHub OAuth App client secret
- `NEXTAUTH_SECRET` - Random secret for session encryption
- `NEXTAUTH_URL` - Application URL (default: `http://localhost:3000`)

GitHub OAuth App requires the `read:user`, `user:email`, and `repo` scopes.

## Architecture Overview

### Application Flow

1. **Authentication**: Users sign in via GitHub OAuth using NextAuth.js (`src/app/api/auth/[...nextauth]/route.ts`)
   - Access token is stored in the session for GitHub API calls
   - Auth configuration is in `src/lib/auth.ts`

2. **Data Fetching**: Once authenticated, `src/lib/github.ts` fetches user data via GitHub GraphQL API
   - Single GraphQL query fetches: user profile, contributions (with calendar), repositories, and languages
   - Processes raw data to calculate: streaks, badges, milestones, and language distributions
   - Returns structured `WrappedData` object

3. **Main Page**: `src/app/page.tsx` orchestrates the entire user flow
   - Shows `LandingPage` if not authenticated
   - Loads data when user clicks "Enter Wrapped"
   - Displays `WrappedSlideShow` with the fetched data
   - Supports multi-year selection (past 5 years)

4. **Slide System**: Modular slide components in `src/components/slides/`
   - Each slide is a self-contained component receiving `data` prop
   - `WrappedSlideShow` handles navigation, animations, and progress tracking
   - Keyboard navigation (Arrow Up/Down) and wheel navigation with debouncing
   - Exportable via `index.ts` for clean imports

### Key Technical Details

**Data Structure**: All types are defined in `src/types/index.ts`
- `WrappedData` - Main data structure containing all wrapped information
- `YearStats` - Statistics for a specific year
- `Badge` - Achievement badges with progress tracking
- `Milestone` - Key achievements
- `ContributionDay` - Individual contribution calendar entries

**Styling & Animation**:
- Tailwind CSS 4 for styling
- Framer Motion for slide transitions and animations
- Glassmorphism design with gradient backgrounds
- Custom scrollbar styling in `src/app/custom-scrollbar.css`

**Image Generation**:
- `html2canvas` generates downloadable share cards
- Hidden ShareCard component is rendered off-screen for capture
- **Important**: ShareCard uses dynamic height calculation to prevent content clipping
- Special handling for `lab()` color functions that cause issues with html2canvas
- Forces scrollable elements to expand during capture
- Uses scale: 2 for high-quality (2x) output

**Internationalization**:
- Context-based language system in `src/contexts/LanguageContext.tsx`
- Dictionary in `src/lib/dictionary.ts` with en/zh translations
- Language switcher component available

**Slide Components** (8 total):
1. IntroSlide - User profile and welcome
2. StatsSlide - 6 animated stat cards
3. HeatmapSlide - Monthly activity cards with contribution calendar
4. LanguagesSlide - Language distribution charts
5. ReposSlide - Top repositories grid
6. BadgesSlide - Achievement badges (unlocked/locked)
7. MilestonesSlide - Key milestones
8. SummarySlide - Thank you and summary

### Next.js Configuration

- **React Compiler**: Enabled (`reactCompiler: true`) - automatic optimizations
- **Output Mode**: `standalone` - outputs a self-contained deployment
- **App Router**: Using Next.js 16 App Router structure
- **API Routes**: Authentication and session endpoints in `src/app/api/`

### Important Patterns

**Client Components**: Most components use `"use client"` directive for:
- Session management hooks (`useSession`)
- Interactive features (navigation, state)
- Framer Motion animations

**Data Fetching Pattern**:
- GraphQL queries use `@octokit/graphql` with user's access token
- All data fetched in a single query for efficiency
- Calendar data is processed to determine contribution levels (0-4)
- Streaks calculated from sorted contribution days

**Badge System**:
- Automatic badge generation based on thresholds
- Categories: Contributions, Streaks, Stars, PRs, Special
- Each badge has `unlocked` status and `progress` percentage
- Defined in `generateBadges()` function

**Wheel Navigation Edge Case**:
- Scrollable containers marked with `data-scrollable="true"`
- Only triggers slide navigation when at scroll edges
- 500ms debounce to prevent rapid scrolling

**ShareCard Image Generation**:
- Uses `height: 'fit-content'` instead of fixed height
- Container uses `overflow: 'visible'` and `visibility: 'hidden'`
- Dynamic dimension calculation: `offsetWidth` and `offsetHeight`
- Footer uses fixed `marginTop` instead of `'auto'` to prevent being pushed out
