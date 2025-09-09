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


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.  
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Login Information

> **Note:** On the `/login` page, only the **Continue with Google** button is functional. Other login methods are currently not implemented.

## Project Overview & Completed Features

This project implements a comprehensive authentication and dashboard system using Better Auth integrated with Next.js.

### Features Implemented

#### 1. Authentication System
- Complete login flow with **Google OAuth** sign-in (email/password sign-up/login UI prepared, but only Google OAuth currently functional).
- User registration form implemented (sign-up with email/password functionality planned).
- Session management and protected routes with middleware redirecting unauthenticated users to `/login`.
- Logout functionality integrated in user profile.
- Clean, responsive authentication UI using Next.js and Tailwind CSS.
- Proper error handling and validation in login and registration forms.

#### 2. Application Layout & Navigation
- Main application shell with collapsible sidebar navigation.
- Sidebar includes active state indicators and user profile section with logout.
- Navigation items: Dashboard, Leads, Campaigns, Settings.
- Main layout includes header with breadcrumbs and consistent spacing/typography.

#### 3. Leads Section
- Implemented infinitely scrollable leads table listing all leads with columns:
  - Lead Name/Contact
  - Email
  - Company
  - Campaign Name
  - Status (Pending, Contacted, Responded, Converted)
  - Last Contact Date
- Search and filter capabilities with loading states and skeleton UI.
- Lead Detail Side Sheet with comprehensive info, interaction history, and action buttons.
- Smooth slide-in animation and close functionality.

#### 4. Campaigns Section
- Campaigns overview and management interface.
- Campaigns table with sortable columns:
  - Campaign Name
  - Status (Draft, Active, Paused, Completed)
  - Total Leads
  - Successful Leads
  - Response Rate (%)
  - Progress Bar
  - Created Date
  - Actions (Edit, Pause/Resume, Delete)
- Campaign statistics with visual progress bars, color-coded status indicators, and summary cards.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.  
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

