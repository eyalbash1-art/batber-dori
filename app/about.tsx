import { View, Text, ScrollView, Pressable, Linking, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 24, paddingBottom: 40 },
  profileCard: { backgroundColor: '#1e293b', borderWidth: 1, borderColor: '#334155', borderRadius: 16, padding: 24, marginBottom: 24 },
  profileHeader: { alignItems: 'center', marginBottom: 16 },
  iconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: 'rgba(212, 175, 55, 0.2)', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  iconEmoji: { fontSize: 40 },
  profileName: { color: '#d4af37', fontWeight: 'bold', fontSize: 24 },
  profileSubtitle: { color: '#ffffff', fontWeight: '600', fontSize: 18, marginTop: 4 },
  profileRole: { color: '#94a3b8', fontSize: 14, marginTop: 4 },
  divider: { borderTopWidth: 1, borderTopColor: '#334155', paddingTop: 16 },
  sectionTitle: { color: '#ffffff', fontWeight: '600', fontSize: 18, marginBottom: 12 },
  bioText: { color: '#cbd5e1', fontSize: 16, lineHeight: 24 },
  linksSection: { gap: 12 },
  linkButton: { backgroundColor: '#1e293b', borderWidth: 1, borderColor: '#334155', borderRadius: 16, padding: 20, flexDirection: 'row', alignItems: 'center' },
  linkIcon: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(212, 175, 55, 0.2)', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  linkEmoji: { fontSize: 24 },
  linkContent: { flex: 1 },
  linkTitle: { color: '#ffffff', fontWeight: '600', fontSize: 18 },
  linkSubtitle: { color: '#94a3b8', fontSize: 14 },
  arrow: { color: '#d4af37', fontSize: 18 },
  footer: { marginTop: 32, padding: 16, backgroundColor: 'rgba(15, 23, 42, 0.5)', borderRadius: 12 },
  footerText: { color: '#94a3b8', textAlign: 'center', fontSize: 14 }
});

export default function AboutScreen() {
  const openTikTok = () => {
    Linking.openURL("https://www.tiktok.com/@dor1033?_r=1&_t=ZS-93y38VGz5oi");
  };

  const openWhatsApp = () => {
    Linking.openURL("https://wa.me/972505812495");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconEmoji}>✂️</Text>
          </View>
          <Text style={styles.profileName}>דור באש</Text>
          <Text style={styles.profileSubtitle}>Barber Dori</Text>
          <Text style={styles.profileRole}>ספר מקצועי</Text>
        </View>
        
        <View style={styles.divider}>
          <Text style={styles.sectionTitle}>אודות</Text>
          <Text style={styles.bioText}>
            חותך את הגלים בים ואת השיער במספרה. 🏄‍♂️💇‍♂️{'\n'}
            אלוף על הסקוט ומדויק עם המכונה.{'\n'}
            בן 12.5, אבל התוצאות מדברות בעד עצמן.{'\n'}
            נתראה בתור!
          </Text>
        </View>
      </View>

      <View style={styles.linksSection}>
        <Text style={styles.sectionTitle}>קישורים וצור קשר</Text>
        
        <Pressable onPress={openTikTok} style={styles.linkButton}>
          <View style={styles.linkIcon}>
            <Text style={styles.linkEmoji}>🎵</Text>
          </View>
          <View style={styles.linkContent}>
            <Text style={styles.linkTitle}>TikTok</Text>
            <Text style={styles.linkSubtitle}>@dor1033</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </Pressable>

        <Pressable onPress={openWhatsApp} style={styles.linkButton}>
          <View style={styles.linkIcon}>
            <Text style={styles.linkEmoji}>💬</Text>
          </View>
          <View style={styles.linkContent}>
            <Text style={styles.linkTitle}>WhatsApp</Text>
            <Text style={styles.linkSubtitle}>+972-50-581-2495</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </Pressable>

        <View style={styles.linkButton}>
          <View style={styles.linkIcon}>
            <Text style={styles.linkEmoji}>📍</Text>
          </View>
          <View style={styles.linkContent}>
            <Text style={styles.linkTitle}>מיקום</Text>
            <Text style={styles.linkSubtitle}>ליצור קשר לפרטים</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>שעות פעילות: לתיאום מראש בלבד דרך WhatsApp</Text>
      </View>
    </ScrollView>
  );
}
