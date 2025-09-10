This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


# Project Overview

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.  
Edit the page by modifying `app/page.tsx`; changes auto-update on save.  
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load the [Geist](https://vercel.com/font) font family from Vercel.

## Login Information

> **Note:** On the `/login` page, only **Continue with Google** authentication works at present. Other sign-in methods (email/password) are planned but not yet implemented.

## Features

### 1. Authentication System

- Google OAuth login fully implemented.
- Email/password sign-up and login UI prepared (backend integration in progress).
- Session management with protected routes redirecting unauthenticated users to `/login`.
- Logout available in user profile.
- Responsive, clean authentication UI built with Next.js and Tailwind CSS.
- Robust error handling and input validation on auth forms.

### 2. Application Layout & Navigation

- Main app shell with collapsible sidebar and active state navigation.
- Sidebar includes user profile and logout.
- Navigation links: Dashboard, Leads, Campaigns, Settings.
- Consistent header with breadcrumbs and typography across pages.

### 3. Leads Section

- Infinite-scroll leads table showing:
  - Lead Name/Contact, Email, Company, Campaign Name, Status, Last Contact Date.
- Search, filter, loading states, and skeleton UI feedback.
- Lead detail side sheet with rich info, interaction history, and actions.
- Smooth slide-in animation and easy close.

### 4. Campaigns Section

- Campaign overview and management dashboard.
- Sortable campaigns table including:
  - Campaign Name, Status, Total Leads, Successful Leads, Response Rate, Progress Bar, Created Date, Actions.
- Visual campaign statistics with color-coded statuses and summary cards.

## Data Notice

All displayed data (leads, campaigns, user info) is currently **static sample data** for demo purposes.  
Live backend and dynamic data fetching are planned but not yet integrated.
