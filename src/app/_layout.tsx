import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}>
        {/* Schermate dell'app autenticata (con la navbar in basso) */}
        <Stack.Screen name="(tabs)" />
        {/* Schermata di Login a tutto schermo */}
        <Stack.Screen name="login" options={{ presentation: 'fullScreenModal' }} />
      </Stack>
      <AnimatedSplashOverlay />
    </ThemeProvider>
  );
}
