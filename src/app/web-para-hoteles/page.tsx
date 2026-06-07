import type { Metadata } from "next"
import { WhatsAppLink } from "@/lib/whatsapp"
import ActiveBadge from "@/components/ui/ActiveBadge"
import { HERO_BACKGROUNDS } from "@/lib/hero-backgrounds"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data"
import { CheckItem } from "@/components/ui/CheckItem"

const wa = WhatsAppLink("Hola, quiero una web para mi hotel o alojamiento")

export const metadata: Metadata = {
  title: "Web para Hoteles y Alojamientos | Reservas y CRM WhatsApp | Página Web Arg",
  description: "Páginas web para hoteles, hosterías, cabañas y alojamientos. Reservas online, CRM integrado con WhatsApp y gestión centralizada de huéspedes.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/web-para-hoteles" },
}

const tags = ["Hoteles", "Hosterías", "Cabañas", "Bungalows", "Bed & Breakfast", "Apart-hoteles", "Complejos de cabañas", "Casas de alojamiento", "Glamping", "Posadas"]
const includes = ["Diseño atractivo para mostrar instalaciones y habitaciones", "Galería de habitaciones y espacios comunes", "Sistema de consulta de disponibilidad", "Formulario o botón de reserva directa", "Integración con Booking o Airbnb (como complemento, no reemplaza)", "Sección de tarifas por temporada", "Botón de WhatsApp integrado para atención rápida", "Mapa de ubicación", "Reseñas y testimonios de huéspedes", "Diseño responsive (celular, tablet y PC)", "SEO local para aparecer en búsquedas de la zona", "6 meses de hosting incluido", "Certificado SSL (https)"]
const crm = [["Todas las consultas en un solo lugar", "WhatsApp, formulario web y consultas directas - todo llega a una sola bandeja centralizada. Nada se pierde entre conversaciones."], ["Varios agentes, sin pisarse", "Si tenés recepción, reservas y administración, cada uno gestiona lo suyo desde la misma plataforma sin duplicar respuestas ni confundirse."], ["Seguimiento de cada reserva", "Desde la primera consulta hasta el check-in y el checkout. Sabés en qué etapa está cada huésped: interesado, con reserva, confirmado, en casa, post-estancia."], ["Respuestas automáticas", "Configuramos respuestas automáticas para las preguntas más frecuentes: disponibilidad, precios, ubicación, check-in. El huésped recibe info al instante, incluso fuera de horario."], ["Historial de cada huésped", "Sabés si un contacto ya se hospedó antes, qué habitación eligió, si volvió a preguntar. Podés personalizar la atención y fidelizarlo."], ["Reportes de reservas y temporadas", "Cuántas consultas entran por semana, cuántas se convierten en reserva, cuáles son los períodos de más demanda. Datos para tomar mejores decisiones."]]
const steps = [["01", "El huésped consulta por WhatsApp o por la web", "Puede escribir al número de WhatsApp o completar el formulario de la web. En ambos casos, la consulta entra al CRM."], ["02", "El CRM registra y asigna la consulta", "El sistema crea un contacto automáticamente y lo asigna al agente de reservas. Se puede responder directo desde el CRM."], ["03", "Se gestiona la disponibilidad y se confirma", "El agente verifica disponibilidad, enviá la propuesta de habitación y confirma la reserva, todo dentro de la misma conversación."], ["04", "Seguimiento hasta el checkout", "El CRM permite marcar la reserva como confirmada, enviar recordatorio de check-in y registrar el resultado post-estancia."]]
const faqs = [["¿El sistema de reservas online está incluido?", "Incluimos un formulario de consulta de disponibilidad y botón de reserva por WhatsApp. Un sistema de reservas con calendar y pago automático es una funcionalidad adicional que cotizamos según el volumen del alojamiento."], ["¿El CRM tiene un costo adicional?", "Sí. La integración del CRM se cotiza aparte. Hay opciones que comienzan gratis (HubSpot) y escalan según el equipo y las funcionalidades necesarias."], ["¿Pueden integrarse con Booking o Airbnb?", "Integramos botones o links a tu perfil de Booking o Airbnb, pero no hay sincronización automática de disponibilidad sin una herramienta de channel manager (que también podemos asesorarte a contratar)."], ["¿El hosting y el dominio están incluidos?", "El hosting está incluido los primeros 6 meses. El dominio es un costo aparte que te ayudamos a contratar."], ["¿Cuánto tarda en estar lista la web?", "Entre 3 y 5 semanas. Si se suma la integración del CRM, puede extenderse una semana más para la configuración y pruebas."]]

export default function WebParaHotelesPage() {
  return (
    <>
      <section className={`${HERO_BACKGROUNDS["/web-para-hoteles"]} site-hero text-center`}><div className="section-wrapper"><ActiveBadge text="Reservas y gestión por WhatsApp" /><h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">Tu alojamiento lleno, con reservas online y atención por WhatsApp</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">Diseñamos la web de tu hotel, hostería, cabaña o complejo de alojamiento. Con sistema de reservas, galería de habitaciones y gestión de consultas conectada a WhatsApp.</p><div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">Consultar por WhatsApp</a><a href="#crm-hoteles" className="font-semibold text-brand-blue transition hover:text-brand-blue-hover">Ver cómo funciona el CRM</a></div></div></section>
      <section className="bg-navy-light py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">Para qué tipo de alojamiento trabajamos</h2><div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">{tags.map((tag) => <span key={tag} className="rounded-full bg-slate-card px-4 py-2 text-sm text-text-secondary">{tag}</span>)}</div></div></section>
      <Checks title="Qué incluye la web de tu alojamiento" items={includes} />
      <section id="crm-hoteles" className="bg-navy-light py-20"><div className="section-wrapper"><span className="rounded-full border border-brand-blue bg-brand-blue/15 px-4 py-2 text-xs font-bold text-brand-blue">CRM + WHATSAPP - DIFERENCIAL CLAVE</span><h2 className="mt-6 text-center text-3xl font-bold md:text-5xl">El 70% de las reservas de alojamientos pequeños llegan por WhatsApp: ¿las estás gestionando bien?</h2><p className="mx-auto mt-6 max-w-4xl text-center leading-7 text-text-secondary">La mayoría de los hoteles, hosterías y cabañas reciben consultas y reservas por WhatsApp. El problema: sin un sistema, las conversaciones se mezclan, se pierden, o múltiples personas del equipo no saben quién respondió qué.</p><p className="mx-auto mt-4 max-w-4xl text-center leading-7 text-text-secondary">Integramos un CRM conectado a tu número de WhatsApp para que cada consulta de reserva quede registrada, asignada y con seguimiento. Gestionás toda la comunicación con tus huéspedes desde una sola plataforma.</p><div className="mt-10 grid gap-6 md:grid-cols-2">{crm.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div><aside className="mt-8 rounded-lg border-l-4 border-brand-blue bg-slate-card p-5 text-text-secondary">Herramientas con las que trabajamos para esta integración: Kommo (ex amoCRM), HubSpot y Pipedrive. La integración del CRM es un servicio adicional que cotizamos aparte según la herramienta elegida y el tamaño del equipo. Te asesoramos en la mejor opción para tu alojamiento.</aside></div></section>
      <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">Cómo es el flujo de una reserva con CRM integrado</h2><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{steps.map(([n, h, t]) => <article key={n} className="card"><p className="text-4xl font-bold text-brand-blue">{n}</p><h3 className="mt-4 text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div></div></section>
      <section className="bg-navy-light py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">Tu web propia vs depender solo de Booking o Airbnb</h2><div className="mt-10 overflow-x-auto rounded-lg border border-slate-card"><table className="w-full min-w-[720px] text-left"><thead className="bg-slate-card"><tr><th className="px-4 py-3">Aspecto</th><th className="px-4 py-3">Solo Booking/Airbnb</th><th className="px-4 py-3">Tu web propia</th></tr></thead><tbody className="divide-y divide-slate-card text-text-secondary"><tr><td className="px-4 py-3">Comisión por reserva</td><td className="px-4 py-3">15% a 25% por reserva</td><td className="px-4 py-3">Sin comisión</td></tr><tr><td className="px-4 py-3">Datos del huésped</td><td className="px-4 py-3">Los tiene la plataforma</td><td className="px-4 py-3">Los tenés vos</td></tr><tr><td className="px-4 py-3">Comunicación directa</td><td className="px-4 py-3">Limitada y mediada</td><td className="px-4 py-3">Total, por WhatsApp</td></tr><tr><td className="px-4 py-3">Fidelización</td><td className="px-4 py-3">Difícil</td><td className="px-4 py-3">Posible con CRM</td></tr><tr><td className="px-4 py-3">Dependencia</td><td className="px-4 py-3">Alta</td><td className="px-4 py-3">Cero</td></tr></tbody></table></div><p className="mx-auto mt-6 max-w-4xl text-center text-text-secondary">Tu web no reemplaza Booking o Airbnb - los complementa. Tener tu canal directo te da reservas sin comisión y relación directa con el huésped.</p></div></section>
      <FAQ items={faqs} />
      <CTA title="Tu alojamiento con web profesional y reservas organizadas" subtitle="Primera consulta sin compromiso." link={wa} />
          
            <JsonLd data={serviceSchema("Web para Hoteles y Alojamientos", "Páginas web para hoteles y alojamientos con reservas online y CRM integrado con WhatsApp.", "/web-para-hoteles")} />
      <JsonLd data={faqSchema(faqs)} />
                  <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Web para Hoteles", item: "https://www.paginawebarg.com.ar/web-para-hoteles" },
      ])} />
    </>
  )
}

function Checks({ title, items }: { title: string; items: string[] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">{items.map((item) => <CheckItem key={item} text={item} />)}<CheckItem text="Dominio (se contrata aparte - te asesoramos)" checked={false} /></div></div></section>
}
function FAQ({ items }: { items: string[][] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper max-w-4xl"><h2 className="text-center text-3xl font-bold md:text-5xl">Preguntas frecuentes</h2><div className="mt-10 divide-y divide-slate-card">{items.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 leading-7 text-text-secondary">{a}</p></details>)}</div></div></section>
}
function CTA({ title, subtitle, link }: { title: string; subtitle: string; link: string }) {
  return <section className="bg-graphite py-24 text-center"><h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>{subtitle && <p className="mt-5 text-cream/70">{subtitle}</p>}<a href={link} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-[4px] bg-orange px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-hover hover:scale-[1.02]">Consultar por WhatsApp</a></section>
}







