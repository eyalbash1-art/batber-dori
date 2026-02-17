import "../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack 
        screenOptions={{ 
          headerStyle: { backgroundColor: "#0f172a" }, 
          headerTintColor: "#d4af37", 
          headerTitleStyle: { fontWeight: "600" }, 
          contentStyle: { backgroundColor: "#0f172a" }, 
          animation: "slide_from_right" 
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="booking" options={{ title: "הזמנת תור" }} />
        <Stack.Screen name="media" options={{ title: "גלריה" }} />
        <Stack.Screen name="prices" options={{ title: "מחירון" }} />
        <Stack.Screen name="about" options={{ title: "אודות" }} />
      </Stack>
    </>
  );
}
