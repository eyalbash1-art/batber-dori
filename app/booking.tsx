import { useState } from "react";
import { View, Text, ScrollView, Pressable, Platform, Alert, StyleSheet } from "react-native";
import { openWhatsAppWithBooking } from "../components/whatsapp";
import { supabase } from "../lib/supabase";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { paddingHorizontal: 24, paddingVertical: 16, paddingBottom: 40 },
  description: { color: '#94a3b8', fontSize: 14, marginBottom: 16 },
  label: { color: '#ffffff', fontWeight: '600', marginBottom: 8, fontSize: 16 },
  datesScroll: { marginBottom: 24 },
  datesRow: { flexDirection: 'row', gap: 12 },
  dateButton: { paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12, minWidth: 100, alignItems: 'center' },
  dateButtonInactive: { backgroundColor: '#1e293b', borderWidth: 1, borderColor: '#334155' },
  dateButtonActive: { backgroundColor: '#d4af37' },
  dateTextInactive: { color: '#cbd5e1' },
  dateTextActive: { color: '#0f172a', fontWeight: 'bold' },
  timesContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  timeButton: { width: 80, paddingVertical: 12, borderRadius: 12, alignItems: 'center' },
  timeButtonInactive: { backgroundColor: '#1e293b', borderWidth: 1, borderColor: '#334155' },
  timeButtonActive: { backgroundColor: '#d4af37' },
  timeTextInactive: { color: '#cbd5e1' },
  timeTextActive: { color: '#0f172a', fontWeight: 'bold' },
  confirmButton: { backgroundColor: '#d4af37', paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  confirmButtonDisabled: { opacity: 0.5 },
  confirmButtonText: { color: '#0f172a', fontWeight: 'bold', fontSize: 18 },
  notice: { marginTop: 24, padding: 16, backgroundColor: '#1e293b', borderWidth: 1, borderColor: 'rgba(212, 175, 55, 0.5)', borderRadius: 12 },
  noticeTitle: { color: '#d4af37', fontWeight: '600', marginBottom: 4 },
  noticeText: { color: '#cbd5e1', fontSize: 14 }
});

const DAYS = ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"];
const MONTHS = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
const SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"];

function getNextDays(count: number): { date: Date; label: string; key: string }[] {
  const out: { date: Date; label: string; key: string }[] = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    out.push({ date: d, label: `${DAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`, key: d.toISOString().slice(0, 10) });
  }
  return out;
}

function formatDateForMessage(d: Date): string {
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

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
    try {
      await supabase.from("bookings").insert({ booking_date: dateISO, booking_time: selectedTime, status: "pending" });
    } catch (_) {}
    setSaving(false);
    openWhatsAppWithBooking(dateStr, selectedTime);
    setPendingNotice(true);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.description}>בחר תאריך ושעה. נשלחת הודעה ל-WhatsApp לאישור אצל הברבר.</Text>
      
      <Text style={styles.label}>תאריך</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.datesScroll}>
        <View style={styles.datesRow}>
          {days.map(({ date, label, key }) => {
            const isSelected = selectedDate?.toISOString().slice(0, 10) === key;
            return (
              <Pressable
                key={key}
                onPress={() => setSelectedDate(date)}
                style={[styles.dateButton, isSelected ? styles.dateButtonActive : styles.dateButtonInactive]}
              >
                <Text style={isSelected ? styles.dateTextActive : styles.dateTextInactive}>{label}</Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <Text style={styles.label}>שעה</Text>
      <View style={styles.timesContainer}>
        {SLOTS.map((slot) => {
          const isSelected = selectedTime === slot;
          return (
            <Pressable
              key={slot}
              onPress={() => setSelectedTime(slot)}
              style={[styles.timeButton, isSelected ? styles.timeButtonActive : styles.timeButtonInactive]}
            >
              <Text style={isSelected ? styles.timeTextActive : styles.timeTextInactive}>{slot}</Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        onPress={handleConfirmViaWhatsApp}
        disabled={saving}
        style={[styles.confirmButton, saving && styles.confirmButtonDisabled]}
      >
        <Text style={styles.confirmButtonText}>{saving ? "שומר…" : "שליחת בקשת תור ב-WhatsApp"}</Text>
      </Pressable>

      {pendingNotice && (
        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>התור ממתין לאישור</Text>
          <Text style={styles.noticeText}>התור יאושר אחרי שהברבר יאשר ב-WhatsApp.</Text>
        </View>
      )}
    </ScrollView>
  );
}
