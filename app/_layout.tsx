import { Stack } from 'expo-router';
import { ScrollView } from 'react-native';

export default function RootLayout() {
  return (
      <Stack
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}