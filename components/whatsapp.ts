const BARBER_WHATSAPP_NUMBER = "972505812495";
export function buildWhatsAppMessage(date: string, time: string): string {
  return `Hi! I'd like to book a haircut on ${date} at ${time}. Please confirm if this works for you!`;
}
export function openWhatsAppWithBooking(date: string, time: string): void {
  if (typeof window !== "undefined") {
    window.open(`https://wa.me/${BARBER_WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(date, time))}`, "_blank");
  }
}
export { BARBER_WHATSAPP_NUMBER };
