import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lillianbarreto.inglestogo',
  appName: 'Ingles to Go',
  webDir: 'dist',
  
  ios: {
    contentInset: 'always',
    allowsLinkPreview: false,
    backgroundColor: '#ffffff',
    preferredContentMode: 'mobile',
    limitsNavigationsToAppBoundDomains: false,
    scheme: 'inglestogo'
  },
  
  android: {
    backgroundColor: '#ffffff',
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true,
    appendUserAgent: 'Ingles to Go App',
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
      releaseType: 'APK'
    }
  },
  
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#10b981',
      splashFullScreen: true,
      splashImmersive: true
    },
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true
    },
    StatusBar: {
      style: 'light',
      backgroundColor: '#1e40af'
    }
  }
};

export default config;
