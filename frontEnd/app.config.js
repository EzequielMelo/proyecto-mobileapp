import 'dotenv/config';
export default ({ config }) => ({
  ...config,
  expo: {
    ...config.expo,
    name: 'Anime Project',
    slug: 'Anime-Project',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'dark',
    newArchEnabled: true,
    splash: {
      backgroundColor: '#151F2E',
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'com.yourcompany.yourappname',
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './assets/icon.png',
        backgroundColor: '#151F2E',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    },
  },
});
