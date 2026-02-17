export interface Service { id: string; name: string; price: string; description?: string }
export const FALLBACK_SERVICES: Service[] = [
  { id: "1", name: "Haircut", price: "€15", description: "Classic cut & style" },
  { id: "2", name: "Beard Trim", price: "€8", description: "Shape & tidy" },
  { id: "3", name: "Haircut + Beard", price: "€20", description: "Full grooming" },
  { id: "4", name: "Kids Cut (under 12)", price: "€10", description: "Quick & fun" },
  { id: "5", name: "Skin Fade", price: "€18", description: "Sharp fade" },
  { id: "6", name: "Line Up", price: "€5", description: "Crisp edges" },
];
