export const WHATSAPP_NUMBER = "+972505812495";

export function openWhatsAppWithBooking(date: string, time: string) {
  const message = encodeURIComponent(
    `שלום! אני רוצה להזמין תור למספרה.\n\nתאריך: ${date}\nשעה: ${time}\n\nמחכה לאישור 😊`
  );
  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${message}`;
  
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
}

export function openWhatsApp() {
  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
}
