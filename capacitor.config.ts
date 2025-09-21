import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.ebefb91f1a10495a89e7cafdc2a5425f',
  appName: 'CampusConnect',
  webDir: 'dist',
  server: {
    url: 'https://ebefb91f-1a10-495a-89e7-cafdc2a5425f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#2563eb',
      showSpinner: false
    },
    StatusBar: {
      style: 'light',
      backgroundColor: '#2563eb'
    }
  }
};

export default config;