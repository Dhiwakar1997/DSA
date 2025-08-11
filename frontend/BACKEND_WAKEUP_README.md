# Backend Wake-Up Configuration

This project includes automatic backend server wake-up functionality to handle free hosting services that go to sleep.

## How It Works

When your React app loads for the first time, it automatically makes a request to your backend's root endpoint (`/`) to wake up the server. This ensures that by the time users interact with data structure features, your backend is already running.

## Configuration

### 1. Environment Variables

Copy the `env.example` file to `.env` in your frontend directory:

```bash
cp env.example .env
```

### 2. Update Backend URL

Edit the `.env` file and set your actual backend URL:

```bash
# For local development
REACT_APP_BACKEND_URL=http://localhost:5000

# For deployed backend (examples)
REACT_APP_BACKEND_URL=https://your-backend-app.herokuapp.com
REACT_APP_BACKEND_URL=https://your-backend-app.vercel.app
REACT_APP_BACKEND_URL=https://your-backend-app.render.com
```

### 3. Restart Frontend

After updating the `.env` file, restart your React development server:

```bash
npm start
```

## Implementation Details

- **Wake-up call**: Automatically triggered when `App.tsx` mounts
- **Error handling**: Non-blocking - won't crash your app if backend is unreachable
- **Logging**: Console logs show wake-up status for debugging
- **Centralized config**: All backend API calls use the same URL configuration

## Files Modified

- `src/services/backendApi.ts` - New utility functions for backend communication
- `src/App.tsx` - Added wake-up call on app load
- `src/services/dllApi.ts` - Updated to use centralized backend configuration
- `env.example` - Environment variables template

## Testing

1. Start your backend server
2. Start your frontend with `npm start`
3. Check browser console for wake-up messages
4. Verify backend is responsive when using data structure features

## Troubleshooting

- **Backend not waking up**: Check that your backend URL is correct in `.env`
- **CORS issues**: Ensure your backend has CORS enabled (already configured in `app.py`)
- **Network errors**: Verify your backend is accessible from your frontend's location
