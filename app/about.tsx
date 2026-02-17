import { View, Text, ScrollView, Pressable, Linking } from "react-native";

export default function AboutScreen() {
  const openTikTok = () => {
    Linking.openURL("https://www.tiktok.com/@dor1033?_r=1&_t=ZS-93y38VGz5oi");
  };

  const openWhatsApp = () => {
    Linking.openURL("https://wa.me/972505812495");
  };

  return (
    <ScrollView className="flex-1 bg-slate-900" contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
      <View className="bg-barber-card border border-barber-border rounded-2xl p-6 mb-6">
        <View className="items-center mb-4">
          <View className="w-20 h-20 rounded-full bg-barber-gold/20 items-center justify-center mb-3">
            <Text className="text-4xl">✂️</Text>
          </View>
          <Text className="text-barber-gold font-bold text-2xl">Barber Dori</Text>
          <Text className="text-slate-400 text-sm mt-1">ספר מקצועי</Text>
        </View>
        
        <View className="border-t border-barber-border pt-4">
          <Text className="text-white font-semibold text-lg mb-3">ביוגרפיה</Text>
          <Text className="text-slate-300 leading-6">
            12.5 שנים של יצירתיות ללא הפסקה. המנכ"ל הרשמי של עולם המילים והמספרים. 
            הוא לא מחכה לעתיד – הוא בונה אותו באפליקציה הזו. 
            {"\n\n"}
            אזהרה: הקריאה עלולה לגרום לעודף חוכמה ורצון עז לשחק.
          </Text>
        </View>
      </View>

      <View className="gap-3">
        <Text className="text-white font-semibold text-lg mb-2">קישורים וצור קשר</Text>
        
        <Pressable 
          onPress={openTikTok} 
          className="bg-barber-card border border-barber-border rounded-2xl p-5 flex-row items-center active:opacity-80"
        >
          <View className="w-12 h-12 rounded-full bg-barber-gold/20 items-center justify-center mr-4">
            <Text className="text-2xl">🎵</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white font-semibold text-lg">TikTok</Text>
            <Text className="text-slate-400 text-sm">@dor1033</Text>
          </View>
          <Text className="text-barber-gold text-lg">→</Text>
        </Pressable>

        <Pressable 
          onPress={openWhatsApp} 
          className="bg-barber-card border border-barber-border rounded-2xl p-5 flex-row items-center active:opacity-80"
        >
          <View className="w-12 h-12 rounded-full bg-barber-gold/20 items-center justify-center mr-4">
            <Text className="text-2xl">💬</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white font-semibold text-lg">WhatsApp</Text>
            <Text className="text-slate-400 text-sm">+972-50-581-2495</Text>
          </View>
          <Text className="text-barber-gold text-lg">→</Text>
        </Pressable>

        <View className="bg-barber-card border border-barber-border rounded-2xl p-5 flex-row items-center">
          <View className="w-12 h-12 rounded-full bg-barber-gold/20 items-center justify-center mr-4">
            <Text className="text-2xl">📍</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white font-semibold text-lg">מיקום</Text>
            <Text className="text-slate-400 text-sm">ליצור קשר לפרטים</Text>
          </View>
        </View>
      </View>

      <View className="mt-8 p-4 bg-slate-800/50 rounded-xl">
        <Text className="text-slate-400 text-center text-sm">
          שעות פעילות: לתיאום מראש בלבד דרך WhatsApp
        </Text>
      </View>
    </ScrollView>
  );
}
