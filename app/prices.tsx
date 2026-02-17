import { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { supabase } from "../lib/supabase";
import { FALLBACK_SERVICES } from "../constants/services";
import type { ServiceRow } from "../lib/supabase";
function toService(row: ServiceRow): { id: string; name: string; price: string; description?: string } {
  return { id: row.id, name: row.name, price: row.price, description: row.description ?? undefined };
}
export default function PricesScreen() {
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase.from("services").select("id, name, price, description, sort_order").order("sort_order", { ascending: true });
      if (cancelled) return;
      setLoading(false);
      if (!error && data?.length) setServices(data.map(toService));
    })();
    return () => { cancelled = true; };
  }, []);
  return (
    <ScrollView className="flex-1 bg-slate-900" contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
      <Text className="text-slate-400 text-sm mb-6">שירותים ומחירים. להצעות חבילות שאל ב-WhatsApp.</Text>
      {loading ? <ActivityIndicator size="large" color="#d4af37" className="py-8" /> : (
        <View className="gap-3">
          {services.map((service) => (
            <View key={service.id} className="bg-barber-card border border-barber-border rounded-2xl p-4 flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-white font-semibold text-lg">{service.name}</Text>
                {service.description && <Text className="text-slate-400 text-sm mt-0.5">{service.description}</Text>}
              </View>
              <Text className="text-barber-gold font-bold text-lg">{service.price}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}
