import { Image, ScrollView, Text, View, StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { paddingHorizontal: 16, paddingTop: 24, paddingBottom: 16 },
  title: { color: '#ffffff', fontWeight: 'bold', fontSize: 28, textAlign: 'center' },
  subtitle: { color: '#d4af37', fontWeight: '600', fontSize: 20, marginTop: 4, textAlign: 'center' },
  description: { color: '#94a3b8', fontSize: 14, marginTop: 8, textAlign: 'center' },
  mainContent: { paddingHorizontal: 16, marginTop: 20 },
  mainRow: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    gap: 16,
    flexWrap: 'nowrap'
  },
  sideColumn: { 
    width: 100,
    gap: 16,
    justifyContent: 'center'
  },
  imageContainer: { 
    width: 220, 
    height: 330, 
    borderRadius: 16, 
    overflow: 'hidden', 
    borderWidth: 2, 
    borderColor: '#d4af37',
    marginHorizontal: 16
  },
  image: { width: '100%', height: '100%' },
  smallButton: { 
    backgroundColor: '#1e293b', 
    borderWidth: 1, 
    borderColor: '#334155', 
    borderRadius: 12, 
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 90,
    width: '100%'
  },
  emoji: { fontSize: 32, marginBottom: 6 },
  smallButtonText: { color: '#ffffff', fontWeight: '600', textAlign: 'center', fontSize: 12 },
  bottomSection: { paddingHorizontal: 24, marginTop: 32, gap: 12 },
  largeButton: { 
    backgroundColor: '#1e293b', 
    borderWidth: 1, 
    borderColor: '#334155', 
    borderRadius: 16, 
    padding: 16, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  iconCircle: { 
    width: 48, 
    height: 48, 
    borderRadius: 24, 
    backgroundColor: 'rgba(212, 175, 55, 0.2)', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 16 
  },
  largeEmoji: { fontSize: 24 },
  buttonContent: { flex: 1 },
  largeButtonTitle: { color: '#ffffff', fontWeight: '600', fontSize: 18 },
  largeButtonSubtitle: { color: '#94a3b8', fontSize: 14 },
  arrow: { color: '#d4af37', fontSize: 18 },
  footer: { paddingHorizontal: 24, marginTop: 24, marginBottom: 40 },
  footerText: { color: '#64748b', textAlign: 'center', fontSize: 14 }
});

export default function HomeScreen() {
  const LinkButton = ({ href, external = false, children }: any) => {
    if (Platform.OS === 'web') {
      return (
        <a 
          href={href}
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener noreferrer' : undefined}
          style={{ 
            textDecoration: 'none', 
            color: 'inherit',
            width: '100%',
            display: 'block'
          }}
        >
          {children}
        </a>
      );
    }
    return children;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>דור באש</Text>
        <Text style={styles.subtitle}>Barber Dori</Text>
        <Text style={styles.description}>הזמנת תור • אימות ב-WhatsApp</Text>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.mainRow}>
          {/* Right Side Buttons */}
          <View style={styles.sideColumn}>
            <LinkButton href="/booking">
              <View style={styles.smallButton}>
                <Text style={styles.emoji}>📅</Text>
                <Text style={styles.smallButtonText}>קביעת{'\n'}תור</Text>
              </View>
            </LinkButton>
            
            <LinkButton href="https://wa.me/972505812495" external>
              <View style={styles.smallButton}>
                <Text style={styles.emoji}>💬</Text>
                <Text style={styles.smallButtonText}>WhatsApp</Text>
              </View>
            </LinkButton>
          </View>

          {/* Center Image */}
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: "/barber-hero.png" }} 
              style={styles.image} 
              resizeMode="cover"
            />
          </View>

          {/* Left Side Buttons */}
          <View style={styles.sideColumn}>
            <LinkButton href="https://www.tiktok.com/@dor1033?_r=1&_t=ZS-93y38VGz5oi" external>
              <View style={styles.smallButton}>
                <Text style={styles.emoji}>🎵</Text>
                <Text style={styles.smallButtonText}>TikTok</Text>
              </View>
            </LinkButton>
            
            <LinkButton href="/prices">
              <View style={styles.smallButton}>
                <Text style={styles.emoji}>💰</Text>
                <Text style={styles.smallButtonText}>מחירון</Text>
              </View>
            </LinkButton>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <LinkButton href="/media">
          <View style={styles.largeButton}>
            <View style={styles.iconCircle}>
              <Text style={styles.largeEmoji}>🎬</Text>
            </View>
            <View style={styles.buttonContent}>
              <Text style={styles.largeButtonTitle}>גלריה</Text>
              <Text style={styles.largeButtonSubtitle}>תספורות וסגנונות</Text>
            </View>
            <Text style={styles.arrow}>→</Text>
          </View>
        </LinkButton>
        
        <LinkButton href="/about">
          <View style={styles.largeButton}>
            <View style={styles.iconCircle}>
              <Text style={styles.largeEmoji}>ℹ️</Text>
            </View>
            <View style={styles.buttonContent}>
              <Text style={styles.largeButtonTitle}>אודות</Text>
              <Text style={styles.largeButtonSubtitle}>הברבר, ביוגרפיה וקישורים</Text>
            </View>
            <Text style={styles.arrow}>→</Text>
          </View>
        </LinkButton>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>התור מאושר רק אחרי אישור הברבר ב-WhatsApp</Text>
      </View>
    </ScrollView>
  );
}
