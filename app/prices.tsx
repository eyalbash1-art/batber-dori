import { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { supabase } from "../lib/supabase";
import { FALLBACK_SERVICES } from "../constants/services";
import type { ServiceRow } from "../lib/supabase";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 24, paddingBottom: 40 },
  description: { color: '#94a3b8', fontSize: 14, marginBottom: 24 },
  loader: { paddingVertical: 32 },
  list: { gap: 12 },
  serviceCard: { backgroundColor: '#1e293b', borderWidth: 1, borderColor: '#334155', borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  serviceContent: { flex: 1 },
  serviceName: { color: '#ffffff', fontWeight: '600', fontSize: 18 },
  serviceDescription: { color: '#94a3b8', fontSize: 14, marginTop: 2 },
  servicePrice: { color: '#d4af37', fontWeight: 'bold', fontSize: 18 }
});

function toService(row: ServiceRow): { id: string; name: string; price: string; description?: string } {
  return { id: row.id, name: row.name, price: row.price, description: row.description ?? undefined };
}

export default function PricesScreen() {
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    (async () => {
      const { data, error } = await supabase.from("services").select("id, name, price, description, sort_order").order("sort_order", { ascending: true });
      if (cancelled) return;
      setLoading(false);
      if (!error && data?.length) setServices(data.map(toService));
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.description}>שירותים ומחירים. להצעות חבילות שאל ב-WhatsApp.</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#d4af37" style={styles.loader} />
      ) : (
        <View>
          {services.map((service) => (
            <View key={service.id} style={styles.serviceCard}>
              <View style={styles.serviceContent}>
                <Text style={styles.serviceName}>{service.name}</Text>
                {service.description && <Text style={styles.serviceDescription}>{service.description}</Text>}
              </View>
              <Text style={styles.servicePrice}>{service.price}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}
