import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-900" contentContainerStyle={{ paddingBottom: 40 }}>
      <View className="px-4 pt-6 pb-6">
        <View className="rounded-2xl overflow-hidden border-2 border-barber-gold/50 aspect-[3/4] max-h-[420px]">
          <Image source={{ uri: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80" }} className="w-full h-full" resizeMode="cover" />
        </View>
        <Text className="text-barber-gold font-bold text-xl mt-5 text-center">Barber Dori</Text>
        <Text className="text-slate-400 text-sm mt-1 text-center">הזמנת תור • אימות ב-WhatsApp</Text>
      </View>
      <View className="px-6 gap-4">
        <Link href="/booking" asChild>
          <Pressable className="bg-barber-card border border-barber-border rounded-2xl p-5 flex-row items-center active:opacity-80">
            <View className="w-12 h-12 rounded-full bg-barber-gold/20 items-center justify-center mr-4"><Text className="text-2xl">📅</Text></View>
            <View className="flex-1"><Text className="text-white font-semibold text-lg">הזמנת תור</Text><Text className="text-slate-400 text-sm">בחירת תאריך ושעה, אישור ב-WhatsApp</Text></View>
            <Text className="text-barber-gold text-lg">→</Text>
          </Pressable>
        </Link>
        <Link href="/media" asChild>
          <Pressable className="bg-barber-card border border-barber-border rounded-2xl p-5 flex-row items-center active:opacity-80">
            <View className="w-12 h-12 rounded-full bg-barber-gold/20 items-center justify-center mr-4"><Text className="text-2xl">🎬</Text></View>
            <View className="flex-1"><Text className="text-white font-semibold text-lg">גלריה</Text><Text className="text-slate-400 text-sm">תספורות וסגנונות</Text></View>
            <Text className="text-barber-gold text-lg">→</Text>
          </Pressable>
        </Link>
        <Link href="/prices" asChild>
          <Pressable className="bg-barber-card border border-barber-border rounded-2xl p-5 flex-row items-center active:opacity-80">
            <View className="w-12 h-12 rounded-full bg-barber-gold/20 items-center justify-center mr-4"><Text className="text-2xl">💰</Text></View>
            <View className="flex-1"><Text className="text-white font-semibold text-lg">מחירון</Text><Text className="text-slate-400 text-sm">תספורת, זקן, פדיים ועוד</Text></View>
            <Text className="text-barber-gold text-lg">→</Text>
          </Pressable>
        </Link>
      </View>
      <View className="px-6 mt-8"><Text className="text-slate-500 text-center text-sm">התור מאושר רק אחרי אישור הברבר ב-WhatsApp.</Text></View>
    </ScrollView>
  );
}
