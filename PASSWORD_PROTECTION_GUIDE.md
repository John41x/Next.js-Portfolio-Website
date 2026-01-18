# Password Protection Guide for CBRE Analytics Engine

## Overview
This guide explains how password protection is implemented for the CBRE Analytics Engine project page.

## Implementation

### Current Setup (Client-Side Protection)
The page uses a `PasswordGate` component that checks the password on the client side. This is suitable for:
- Protecting portfolio project information
- Basic access control for demo content
- Preventing casual browsing of sensitive details

**Security Note**: Client-side password checks are NOT secure for truly sensitive data. The password will be visible in the client-side code. This is fine for portfolio protection but should not be used for confidential information.

## Setup Instructions

### Step 1: Create Environment Variable File
Create a `.env.local` file in the root of your project (if it doesn't exist):

```bash
# .env.local
NEXT_PUBLIC_CBRE_ANALYTICS_PASSWORD=rise8054
```

**Important**: 
- The `.env.local` file is already in `.gitignore`, so it won't be committed to git
- For production (Vercel), add this environment variable in your Vercel dashboard: Settings → Environment Variables

### Step 2: Using the Password Gate
The password gate is already integrated in `/app/analytics-platform/page.tsx`. It will:
1. Show a password prompt when users visit `/analytics-platform`
2. Store authentication status in localStorage (persists across page refreshes)
3. Allow logout via a button in the bottom-right corner

### Step 3: Change the Password
Update the password in `.env.local`:
```bash
NEXT_PUBLIC_CBRE_ANALYTICS_PASSWORD=your_new_password
```

Then restart your dev server:
```bash
npm run dev
```

## How It Works

1. **First Visit**: User sees password prompt
2. **Correct Password**: Authentication stored in localStorage, content displayed
3. **Subsequent Visits**: If authenticated, content shows immediately
4. **Logout**: Clears localStorage and redirects to projects page

## More Secure Alternatives

If you need more secure protection, consider these options:

### Option 1: Server-Side Middleware (Recommended for Better Security)
Use Next.js middleware to check authentication before the page loads.

### Option 2: API Route + Server-Side Sessions
Implement server-side password validation with HTTP-only cookies.

### Option 3: Third-Party Authentication
Use services like:
- NextAuth.js (full authentication system)
- Vercel Edge Config (for managing passwords server-side)
- Auth0 / Clerk (for professional authentication)

## Current Limitations

1. **Client-Side Only**: Password check happens in the browser
2. **Visible in Code**: Password comparison is visible in JavaScript bundle
3. **localStorage**: Session stored client-side (can be cleared)
4. **No Rate Limiting**: No protection against brute force

For portfolio use cases, these limitations are usually acceptable.

## Troubleshooting

**Password not working?**
- Check `.env.local` file exists and has the correct variable name
- Restart your dev server after changing the password
- Check browser console for errors

**Want to reset authentication?**
- Clear browser localStorage, or click the "Logout" button
- Or use browser dev tools: `localStorage.removeItem('cbre_analytics_auth')`

## Customization

You can customize the password gate by editing `/components/PasswordGate.tsx`:
- Change the redirect URL after logout
- Customize the UI/styling
- Add additional security features
- Change authentication storage method
