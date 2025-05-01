import "dotenv/config";
export default ({ config }) => ({
  ...config,
  expo: {
    ...config.expo,
    name: "Anime Project",
    slug: "Anime-Project",
    version: "1.0.1",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "dark",
    newArchEnabled: true,
    splash: {
      backgroundColor: "#151F2E",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      package: "com.ezequiel.animeproject",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#151F2E",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      backendUrl: process.env.EXPO_PUBLIC_API_URL,
      eas: {
        projectId: "2e9dccbf-1b1b-4c7e-80f4-2f4ab850908a",
      },
    },
  },
});
