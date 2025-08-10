# Environment Variables Setup

This React application uses environment variables to configure the backend API endpoint.

## Required Environment Variables

Create a `.env.local` file in the `frontend` directory with the following content:

```bash
REACT_APP_API_URL=https://dsa-rkah.onrender.com
```

## Environment File Locations

- `.env.local` - Local development (not committed to git)
- `.env.development` - Development environment
- `.env.production` - Production environment

## Important Notes

1. **React requires environment variables to start with `REACT_APP_`** to be accessible in the browser
2. After creating or modifying environment files, **restart your development server**
3. The `.env.local` file should not be committed to version control (it's already in `.gitignore`)

## Usage in Code

The environment variable is used in `src/services/dllApi.ts`:

```typescript
const BASE_URL: string = process.env.REACT_APP_API_URL || "/DLL/v1";
```

## Fallback

If the environment variable is not set, the application will fall back to using relative paths (`/DLL/v1`) which works with the development server proxy.

## Production Deployment

For production builds, make sure to set the `REACT_APP_API_URL` environment variable in your hosting platform (Vercel, Netlify, etc.) to point to your production backend.
