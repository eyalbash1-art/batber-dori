import { useState } from "react";
import { View, Text, ScrollView, Pressable, Image, Dimensions, Modal } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const STORY_SIZE = (SCREEN_WIDTH - 48) / 3 - 8;
const GALLERY = ["https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=600&fit=crop", "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=600&fit=crop", "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=600&fit=crop"];
const STORIES = [{ id: "1", label: "Fade", thumb: GALLERY[0] }, { id: "2", label: "Classic", thumb: GALLERY[1] }, { id: "3", label: "Beard", thumb: GALLERY[2] }, { id: "4", label: "Line up", thumb: GALLERY[0] }, { id: "5", label: "Kids", thumb: GALLERY[1] }, { id: "6", label: "Style", thumb: GALLERY[2] }];
export default function MediaScreen() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = STORIES.find((s) => s.id === selectedId);
  return (
    <View className="flex-1 bg-slate-900">
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <Text className="text-slate-400 text-sm mb-4">תספורות וסגנונות</Text>
        <View className="flex-row flex-wrap gap-2">
          {STORIES.map((item) => (
            <Pressable key={item.id} onPress={() => setSelectedId(item.id)} className="rounded-2xl overflow-hidden border-2 border-barber-border active:opacity-80" style={{ width: STORY_SIZE, height: STORY_SIZE * 1.35 }}>
              <Image source={{ uri: item.thumb }} className="w-full h-full bg-slate-700" resizeMode="cover" />
              <View className="absolute bottom-0 left-0 right-0 bg-black/60 py-2 px-2"><Text className="text-white text-xs font-medium" numberOfLines={1}>{item.label}</Text></View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <Modal visible={!!selectedId} transparent animationType="fade" onRequestClose={() => setSelectedId(null)}>
        <Pressable className="flex-1 bg-black/90 justify-center items-center" onPress={() => setSelectedId(null)}>
          {selected && (
            <Pressable className="w-[90%] max-w-[400px] rounded-2xl overflow-hidden border-2 border-barber-gold" onPress={(e) => e.stopPropagation()}>
              <Image source={{ uri: selected.thumb }} className="w-full aspect-[9/16] bg-slate-800" resizeMode="cover" />
              <View className="bg-barber-card p-4"><Text className="text-white font-semibold">{selected.label}</Text></View>
            </Pressable>
          )}
          <Text className="text-slate-400 mt-4">לחיצה מחוץ לתמונה לסגירה</Text>
        </Pressable>
      </Modal>
    </View>
  );
}
