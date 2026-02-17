import { Image, ScrollView, Text, View, Pressable, Linking, Platform } from "react-native";
import { ReactNode } from "react";

export default function HomeScreen() {
  const openTikTok = () => {
    Linking.openURL("https://www.tiktok.com/@dor1033?_r=1&_t=ZS-93y38VGz5oi");
  };

  const openWhatsApp = () => {
    Linking.openURL("https://wa.me/972505812495");
  };

  // Web navigation component
  const NavButton = ({ href, children }: { href: string; children: ReactNode }) => {
    if (Platform.OS === 'web') {
      return (
        <a href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flex: 1 }}>
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  return (
    <ScrollView className="flex-1 bg-slate-900" contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View className="px-4 pt-6 pb-4">
        <Text className="text-white font-bold text-3xl text-center">דור באש</Text>
        <Text className="text-barber-gold font-semibold text-xl mt-1 text-center">Barber Dori</Text>
        <Text className="text-slate-400 text-sm mt-2 text-center">הזמנת תור • אימות ב-WhatsApp</Text>
      </View>

      {/* Main Content - Image with Buttons */}
      <View className="px-4">
        <View className="flex-row gap-3">
          {/* Right Column Buttons */}
          <View className="flex-1 gap-3 justify-center">
            <NavButton href="/booking">
              <View className="bg-barber-card border border-barber-border rounded-xl p-4 items-center active:opacity-80" style={{ width: '100%' }}>
                <Text className="text-3xl mb-2">📅</Text>
                <Text className="text-white font-semibold text-center text-sm">קביעת{'\n'}תור</Text>
              </View>
            </NavButton>
            
            <Pressable 
              onPress={openWhatsApp}
              className="bg-barber-card border border-barber-border rounded-xl p-4 items-center active:opacity-80"
            >
              <Text className="text-3xl mb-2">💬</Text>
              <Text className="text-white font-semibold text-center text-sm">WhatsApp</Text>
            </Pressable>
          </View>

          {/* Center Image */}
          <View className="rounded-2xl overflow-hidden border-2 border-barber-gold/50" style={{ width: 200, height: 300 }}>
            <Image 
              source={{ uri: "/barber-hero.png" }} 
              className="w-full h-full" 
              resizeMode="cover"
              style={{ width: '100%', height: '100%' }}
            />
          </View>

          {/* Left Column Buttons */}
          <View className="flex-1 gap-3 justify-center">
            <Pressable 
              onPress={openTikTok}
              className="bg-barber-card border border-barber-border rounded-xl p-4 items-center active:opacity-80"
            >
              <Text className="text-3xl mb-2">🎵</Text>
              <Text className="text-white font-semibold text-center text-sm">TikTok</Text>
            </Pressable>
            
            <NavButton href="/prices">
              <View className="bg-barber-card border border-barber-border rounded-xl p-4 items-center active:opacity-80" style={{ width: '100%' }}>
                <Text className="text-3xl mb-2">💰</Text>
                <Text className="text-white font-semibold text-center text-sm">מחירון</Text>
              </View>
            </NavButton>
          </View>
        </View>
      </View>

      {/* Bottom Buttons */}
      <View className="px-6 mt-6 gap-3">
        <NavButton href="/media">
          <View className="bg-barber-card border border-barber-border rounded-2xl p-4 flex-row items-center active:opacity-80">
            <View className="w-12 h-12 rounded-full bg-barber-gold/20 items-center justify-center mr-4">
              <Text className="text-2xl">🎬</Text>
            </View>
            <View className="flex-1">
              <Text className="text-white font-semibold text-lg">גלריה</Text>
              <Text className="text-slate-400 text-sm">תספורות וסגנונות</Text>
            </View>
            <Text className="text-barber-gold text-lg">→</Text>
          </View>
        </NavButton>
        
        <NavButton href="/about">
          <View className="bg-barber-card border border-barber-border rounded-2xl p-4 flex-row items-center active:opacity-80">
            <View className="w-12 h-12 rounded-full bg-barber-gold/20 items-center justify-center mr-4">
              <Text className="text-2xl">ℹ️</Text>
            </View>
            <View className="flex-1">
              <Text className="text-white font-semibold text-lg">אודות</Text>
              <Text className="text-slate-400 text-sm">הברבר, ביוגרפיה וקישורים</Text>
            </View>
            <Text className="text-barber-gold text-lg">→</Text>
          </View>
        </NavButton>
      </View>

      <View className="px-6 mt-6">
        <Text className="text-slate-500 text-center text-sm">
          התור מאושר רק אחרי אישור הברבר ב-WhatsApp
        </Text>
      </View>
    </ScrollView>
  );
}
