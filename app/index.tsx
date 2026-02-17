import { Image, ScrollView, Text, View, Pressable, Linking, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { paddingHorizontal: 16, paddingTop: 24, paddingBottom: 16 },
  title: { color: '#ffffff', fontWeight: 'bold', fontSize: 28, textAlign: 'center' },
  subtitle: { color: '#d4af37', fontWeight: '600', fontSize: 20, marginTop: 4, textAlign: 'center' },
  description: { color: '#94a3b8', fontSize: 14, marginTop: 8, textAlign: 'center' },
  mainContent: { paddingHorizontal: 16 },
  row: { flexDirection: 'row', gap: 12 },
  column: { flex: 1, gap: 12, justifyContent: 'center' },
  imageContainer: { width: 200, height: 300, borderRadius: 16, overflow: 'hidden', borderWidth: 2, borderColor: '#d4af37' },
  image: { width: '100%', height: '100%' },
  button: { backgroundColor: '#1e293b', borderWidth: 1, borderColor: '#334155', borderRadius: 12, padding: 16, alignItems: 'center' },
  emoji: { fontSize: 30, marginBottom: 8 },
  buttonText: { color: '#ffffff', fontWeight: '600', textAlign: 'center', fontSize: 13 },
  bottomSection: { paddingHorizontal: 24, marginTop: 24, gap: 12 },
  largeButton: { backgroundColor: '#1e293b', borderWidth: 1, borderColor: '#334155', borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center' },
  iconCircle: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(212, 175, 55, 0.2)', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  largeEmoji: { fontSize: 24 },
  buttonContent: { flex: 1 },
  largeButtonTitle: { color: '#ffffff', fontWeight: '600', fontSize: 18 },
  largeButtonSubtitle: { color: '#94a3b8', fontSize: 14 },
  arrow: { color: '#d4af37', fontSize: 18 },
  footer: { paddingHorizontal: 24, marginTop: 24 },
  footerText: { color: '#64748b', textAlign: 'center', fontSize: 14 }
});

export default function HomeScreen() {
  const openTikTok = () => {
    Linking.openURL("https://www.tiktok.com/@dor1033?_r=1&_t=ZS-93y38VGz5oi");
  };

  const openWhatsApp = () => {
    Linking.openURL("https://wa.me/972505812495");
  };

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      (window as any).location.href = path;
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.header}>
        <Text style={styles.title}>דור באש</Text>
        <Text style={styles.subtitle}>Barber Dori</Text>
        <Text style={styles.description}>הזמנת תור • אימות ב-WhatsApp</Text>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Pressable onPress={() => navigateTo('/booking')} style={styles.button}>
              <Text style={styles.emoji}>📅</Text>
              <Text style={styles.buttonText}>קביעת{'\n'}תור</Text>
            </Pressable>
            
            <Pressable onPress={openWhatsApp} style={styles.button}>
              <Text style={styles.emoji}>💬</Text>
              <Text style={styles.buttonText}>WhatsApp</Text>
            </Pressable>
          </View>

          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: "/barber-hero.png" }} 
              style={styles.image} 
              resizeMode="cover"
            />
          </View>

          <View style={styles.column}>
            <Pressable onPress={openTikTok} style={styles.button}>
              <Text style={styles.emoji}>🎵</Text>
              <Text style={styles.buttonText}>TikTok</Text>
            </Pressable>
            
            <Pressable onPress={() => navigateTo('/prices')} style={styles.button}>
              <Text style={styles.emoji}>💰</Text>
              <Text style={styles.buttonText}>מחירון</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Pressable onPress={() => navigateTo('/media')} style={styles.largeButton}>
          <View style={styles.iconCircle}>
            <Text style={styles.largeEmoji}>🎬</Text>
          </View>
          <View style={styles.buttonContent}>
            <Text style={styles.largeButtonTitle}>גלריה</Text>
            <Text style={styles.largeButtonSubtitle}>תספורות וסגנונות</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </Pressable>
        
        <Pressable onPress={() => navigateTo('/about')} style={styles.largeButton}>
          <View style={styles.iconCircle}>
            <Text style={styles.largeEmoji}>ℹ️</Text>
          </View>
          <View style={styles.buttonContent}>
            <Text style={styles.largeButtonTitle}>אודות</Text>
            <Text style={styles.largeButtonSubtitle}>הברבר, ביוגרפיה וקישורים</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>התור מאושר רק אחרי אישור הברבר ב-WhatsApp</Text>
      </View>
    </ScrollView>
  );
}
