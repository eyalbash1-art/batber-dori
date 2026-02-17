import { useState } from "react";
import { View, Text, ScrollView, Pressable, Image, Dimensions, Modal, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const STORY_SIZE = (SCREEN_WIDTH - 48) / 3 - 8;
const GALLERY = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=600&fit=crop"
];
const STORIES = [
  { id: "1", label: "Fade", thumb: GALLERY[0] },
  { id: "2", label: "Classic", thumb: GALLERY[1] },
  { id: "3", label: "Beard", thumb: GALLERY[2] },
  { id: "4", label: "Line up", thumb: GALLERY[0] },
  { id: "5", label: "Kids", thumb: GALLERY[1] },
  { id: "6", label: "Style", thumb: GALLERY[2] }
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 24, paddingBottom: 40 },
  description: { color: '#94a3b8', fontSize: 14, marginBottom: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  storyCard: { borderRadius: 16, overflow: 'hidden', borderWidth: 2, borderColor: '#334155' },
  storyImage: { width: '100%', height: '100%', backgroundColor: '#334155' },
  storyLabel: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', paddingVertical: 8, paddingHorizontal: 8 },
  storyLabelText: { color: '#ffffff', fontSize: 12, fontWeight: '500' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.9)', justifyContent: 'center', alignItems: 'center' },
  modalCard: { width: '90%', maxWidth: 400, borderRadius: 16, overflow: 'hidden', borderWidth: 2, borderColor: '#d4af37' },
  modalImage: { width: '100%', aspectRatio: 9/16, backgroundColor: '#1e293b' },
  modalContent: { backgroundColor: '#1e293b', padding: 16 },
  modalTitle: { color: '#ffffff', fontWeight: '600' },
  modalCloseText: { color: '#94a3b8', marginTop: 16, textAlign: 'center' }
});

export default function MediaScreen() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = STORIES.find((s) => s.id === selectedId);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>תספורות וסגנונות</Text>
        <View style={styles.grid}>
          {STORIES.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => setSelectedId(item.id)}
              style={[styles.storyCard, { width: STORY_SIZE, height: STORY_SIZE * 1.35 }]}
            >
              <Image source={{ uri: item.thumb }} style={styles.storyImage} resizeMode="cover" />
              <View style={styles.storyLabel}>
                <Text style={styles.storyLabelText} numberOfLines={1}>{item.label}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Modal visible={!!selectedId} transparent animationType="fade" onRequestClose={() => setSelectedId(null)}>
        <Pressable style={styles.modalOverlay} onPress={() => setSelectedId(null)}>
          {selected && (
            <Pressable style={styles.modalCard} onPress={(e) => e.stopPropagation()}>
              <Image source={{ uri: selected.thumb }} style={styles.modalImage} resizeMode="cover" />
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{selected.label}</Text>
              </View>
            </Pressable>
          )}
          <Text style={styles.modalCloseText}>לחיצה מחוץ לתמונה לסגירה</Text>
        </Pressable>
      </Modal>
    </View>
  );
}
