// Backend API configuration and utility functions

// Backend URL - change this to your actual backend URL when deployed
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:5000';

/**
 * Wakes up the backend server by making a request to the root endpoint
 * This is useful for free hosting services that go to sleep
 */
export const wakeUpBackend = async (): Promise<void> => {
  try {
    console.log('🔄 Waking up backend server...');
    const response = await fetch(`${BACKEND_URL}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Backend server is awake:', data.message);
    } else {
      console.warn('⚠️ Backend server responded with status:', response.status);
    }
  } catch (error) {
    console.warn('⚠️ Could not wake up backend server:', error);
    // Don't throw error - this is just a wake-up call
  }
};

/**
 * Generic function to make API calls to the backend
 */
export const apiCall = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const url = `${BACKEND_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API call failed for ${endpoint}:`, error);
    throw error;
  }
};

export { BACKEND_URL };
