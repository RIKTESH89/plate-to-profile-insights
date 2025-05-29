
import { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'app.lovable.925a0a071aa849b1b86aa6bb4d00b389',
  appName: 'NutriWise - Personalized Dietary Advisor',
  webDir: 'dist',
  server: {
    url: 'https://925a0a07-1aa8-49b1-b86a-a6bb4d00b389.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Camera: {
      permissions: ['camera', 'photos']
    }
  }
};

export default config;
