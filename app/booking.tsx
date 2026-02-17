import { useState } from "react";
import { View, Text, ScrollView, Pressable, Platform, Alert } from "react-native";
import { openWhatsAppWithBooking } from "../components/whatsapp";
import { supabase } from "../lib/supabase";
const DAYS = ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"];
const MONTHS = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
const SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"];
function getNextDays(count: number): { date: Date; label: string; key: string }[] {
  const out: { date: Date; label: string; key: string }[] = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today); d.setDate(today.getDate() + i);
    out.push({ date: d, label: `${DAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`, key: d.toISOString().slice(0, 10) });
  }
  return out;
}
function formatDateForMessage(d: Date): string { return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; }
export default function BookingScreen() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [pendingNotice, setPendingNotice] = useState(false);
  const [saving, setSaving] = useState(false);
  const days = getNextDays(14);
  const handleConfirmViaWhatsApp = async () => {
    if (!selectedDate || !selectedTime) {
      if (Platform.OS === "web") alert("נא לבחור תאריך ושעה.");
      else Alert.alert("בחירת תור", "נא לבחור תאריך ושעה.");
      return;
    }
    const dateStr = formatDateForMessage(selectedDate);
    const dateISO = selectedDate.toISOString().slice(0, 10);
    setSaving(true);
    try { await supabase.from("bookings").insert({ booking_date: dateISO, booking_time: selectedTime, status: "pending" }); } catch (_) {}
    setSaving(false);
    openWhatsAppWithBooking(dateStr, selectedTime);
    setPendingNotice(true);
  };
  return (
    <ScrollView className="flex-1 bg-slate-900" contentContainerStyle={{ paddingBottom: 40 }}>
      <View className="px-6 py-4">
        <Text className="text-slate-400 text-sm mb-4">בחר תאריך ושעה. נשלחת הודעה ל-WhatsApp לאישור אצל הברבר.</Text>
        <Text className="text-white font-semibold mb-2">תאריך</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
          <View className="flex-row gap-3">
            {days.map(({ date, label, key }) => {
              const isSelected = selectedDate?.toISOString().slice(0, 10) === key;
              return (
                <Pressable key={key} onPress={() => setSelectedDate(date)} className={`px-4 py-3 rounded-xl min-w-[100px] items-center ${isSelected ? "bg-barber-gold" : "bg-barber-card border border-barber-border"}`}>
                  <Text className={isSelected ? "text-slate-900 font-bold" : "text-slate-300"}>{label}</Text>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
        <Text className="text-white font-semibold mb-2">שעה</Text>
        <View className="flex-row flex-wrap gap-3 mb-6">
          {SLOTS.map((slot) => {
            const isSelected = selectedTime === slot;
            return (
              <Pressable key={slot} onPress={() => setSelectedTime(slot)} className={`w-[80px] py-3 rounded-xl items-center ${isSelected ? "bg-barber-gold" : "bg-barber-card border border-barber-border"}`}>
                <Text className={isSelected ? "text-slate-900 font-bold" : "text-slate-300"}>{slot}</Text>
              </Pressable>
            );
          })}
        </View>
        <Pressable onPress={handleConfirmViaWhatsApp} disabled={saving} className="bg-barber-gold py-4 rounded-2xl items-center active:opacity-80">
          <Text className="text-slate-900 font-bold text-lg">{saving ? "שומר…" : "שליחת בקשת תור ב-WhatsApp"}</Text>
        </Pressable>
        {pendingNotice && (
          <View className="mt-6 p-4 bg-barber-card border border-barber-gold/50 rounded-xl">
            <Text className="text-barber-gold font-semibold mb-1">התור ממתין לאישור</Text>
            <Text className="text-slate-300 text-sm">התור יאושר אחרי שהברבר יאשר ב-WhatsApp.</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
