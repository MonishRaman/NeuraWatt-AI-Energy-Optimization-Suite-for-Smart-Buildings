// src/services/streamlitService.ts

/**
 * Service for interacting with the Streamlit API
 */

// The base URL of your backend API
const API_BASE_URL = 'http://localhost:5000/api/streamlit';

export interface StreamlitStatus {
  running: boolean;
  url?: string;
  pid?: number;
}

export interface StreamlitStartResponse {
  success: boolean;
  message: string;
  url?: string;
  pid?: number;
}

export interface StreamlitStopResponse {
  success: boolean;
  message: string;
}

/**
 * Check if the Streamlit dashboard is currently running
 */
export const checkStreamlitStatus = async (id: string = 'hvac_dashboard'): Promise<StreamlitStatus> => {
  try {
    console.log(`Checking Streamlit status for ID: ${id}`);
    const response = await fetch(`${API_BASE_URL}/status?id=${id}`);
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Streamlit status response:', data);
    return data;
  } catch (error) {
    console.error('Error checking Streamlit status:', error);
    return { running: false };
  }
};

/**
 * Start the Streamlit dashboard
 */
export const startStreamlit = async (
  id: string = 'hvac_dashboard',
  mode: 'dashboard' | 'headless' = 'dashboard'
): Promise<StreamlitStartResponse> => {
  try {
    console.log(`Starting Streamlit dashboard with ID: ${id}, mode: ${mode}`);
    
    const response = await fetch(`${API_BASE_URL}/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, mode }),
    });

    const responseData = await response.json();
    console.log('Streamlit start response:', responseData);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${responseData.message || 'Unknown error'}`);
    }

    // Verify URL is provided in the response
    if (responseData.success && !responseData.url) {
      console.warn('Streamlit API responded with success but no URL was provided');
      responseData.url = 'http://localhost:8501'; // Fallback to default
    }

    return responseData;
  } catch (error) {
    console.error('Error starting Streamlit:', error);
    return {
      success: false,
      message: `Failed to start Streamlit dashboard: ${error}`,
    };
  }
};

/**
 * Stop the running Streamlit dashboard
 */
export const stopStreamlit = async (id: string = 'hvac_dashboard'): Promise<StreamlitStopResponse> => {
  try {
    console.log(`Stopping Streamlit dashboard with ID: ${id}`);
    
    const response = await fetch(`${API_BASE_URL}/stop`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const responseData = await response.json();
    console.log('Streamlit stop response:', responseData);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${responseData.message || 'Unknown error'}`);
    }

    return responseData;
  } catch (error) {
    console.error('Error stopping Streamlit:', error);
    return {
      success: false,
      message: `Failed to stop Streamlit dashboard: ${error}`,
    };
  }
};

/**
 * Attempt to directly open the Streamlit dashboard in a new tab
 * This function provides a fallback for when the API isn't working correctly
 */
export const openStreamlitDirectly = (port: number = 8501): void => {
  // Try different location variants in case one works
  const url = `http://localhost:${port}`;
  console.log(`Attempting to open Streamlit directly at: ${url}`);
  window.open(url, '_blank');
};