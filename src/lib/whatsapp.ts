import { CONTACT } from "@/constants/contact"

export function WhatsAppLink(message?: string): string {
  void message
  return CONTACT.WhatsApp.messageUrl
}

export const WA = {
  general: CONTACT.WhatsApp.messageUrl,
  webPremium: CONTACT.WhatsApp.messageUrl,
  webProfesional: CONTACT.WhatsApp.messageUrl,
  webPymes: CONTACT.WhatsApp.messageUrl,
  tiendaOnline: CONTACT.WhatsApp.messageUrl,
  webPrepagas: CONTACT.WhatsApp.messageUrl,
  webHoteles: CONTACT.WhatsApp.messageUrl,
  webEscuelas: CONTACT.WhatsApp.messageUrl,
  webBarrios: CONTACT.WhatsApp.messageUrl,
  webAuto: CONTACT.WhatsApp.messageUrl,
  publicidad: CONTACT.WhatsApp.messageUrl,
  presupuesto: CONTACT.WhatsApp.messageUrl,
  mantenimiento: CONTACT.WhatsApp.messageUrl,
}
