import { CONTACT } from "@/constants/contact"

export function WhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message)
  return `${CONTACT.WhatsApp.baseUrl}text=${encoded}`
}

export const WA = {
  general: WhatsAppLink("Hola, quiero consultar sobre una página web"),
  webPremium: WhatsAppLink("Hola, quiero información sobre la Web Premium"),
  webProfesional: WhatsAppLink("Hola, quiero información sobre la Web para Profesionales"),
  webPymes: WhatsAppLink("Hola, quiero información sobre la Web para Pymes"),
  tiendaOnline: WhatsAppLink("Hola, quiero información sobre la Tienda Online"),
  webPrepagas: WhatsAppLink("Hola, quiero información sobre la Web para Prepagas"),
  webHoteles: WhatsAppLink("Hola, quiero información sobre la Web para Hoteles"),
  webEscuelas: WhatsAppLink("Hola, quiero información sobre la Web para Escuelas"),
  webBarrios: WhatsAppLink("Hola, quiero información sobre la Web para Barrios Cerrados"),
  webAuto: WhatsAppLink("Hola, quiero información sobre la Web Autoadministrable"),
  publicidad: WhatsAppLink("Hola, quiero información sobre el servicio de Publicidad"),
  presupuesto: WhatsAppLink("Hola, quiero pedir un presupuesto sin costo"),
  mantenimiento: WhatsAppLink("Hola, quiero información sobre Mantenimiento Web"),
}
