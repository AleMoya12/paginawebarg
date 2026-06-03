import type { Metadata } from "next"
import { WhatsAppLink } from "@/lib/whatsapp"
import ActiveBadge from "@/components/ui/ActiveBadge"
import { HERO_BACKGROUNDS } from "@/lib/hero-backgrounds"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data"
import { CheckItem } from "@/components/ui/CheckItem"

const wa = WhatsAppLink("Hola, quiero una web para mi barrio o country")

export const metadata: Metadata = {
  title: "Web para Barrios Cerrados y Countries | CRM Residentes | Página Web Arg",
  description: "Páginas web para barrios privados, countries y complejos residenciales. Gestión de residentes, comunicación WhatsApp y novedades centralizadas.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/web-para-barrios-cerrados" },
}

const pills = ["Barrios cerrados", "Countries", "Clubes de campo", "Complejos residenciales", "Barrios privados", "Torres de departamentos", "Urbanizaciones", "Chacras", "Complejos de lotes"]
const includes = ["Página institucional del barrio con reglamento y servicios", "Sección de novedades y comunicados de la administración", "Información de amenidades (pileta, SUM, canchas, seguridad)", "Formulario de consultas para residentes y potenciales compradores", "Sección de contacto con administración y consejo directivo", "Botón de WhatsApp para comunicación directa", "Galería de instalaciones e imágenes del barrio", "Diseño responsive (celular, tablet y PC)", "SEO para aparecer en búsquedas de la zona", "6 meses de hosting incluido", "Certificado SSL (https)"]
const crm = [["Reclamos y solicitudes organizadas", "Un residente pide que arreglen un portón. El reclamo entra al CRM, se asigna a mantenimiento y se hace seguimiento hasta que se resuelve. El residente puede preguntar el estado sin volver a llamar."], ["Comunicación por área", "Administración, seguridad y mantenimiento operan en sus propias conversaciones sin mezclar mensajes."], ["Registro de consultas de acceso", "Pedidos de alta de vehículos, visitas autorizadas y consultas de seguridad quedan registrados y son rastreables."], ["Notificaciones masivas a residentes", "Comunicados de corte de agua, reuniones de consorcio o novedades importantes enviados a todos los contactos desde una sola acción."], ["Historial completo de cada residente", "Antes de responder, el agente ve todo el historial: consultas anteriores, reclamos, pagos. Atención más rápida y personalizada."], ["Tablero de pendientes en tiempo real", "Visualizás rápidamente que consultas siguen abiertas, cuáles están demoradas y qué área necesita refuerzo para evitar cuellos de botella."]]
const features = [["Portal de novedades del barrio", "La administración publica comunicados, obras y eventos. Los residentes acceden desde cualquier dispositivo."], ["Formulario de contacto para residentes", "Reclamos, consultas y solicitudes con formulario categorizado para que lleguen al área correcta."], ["Sección para potenciales compradores", "Información del barrio, amenidades y formulario de contacto para quienes están evaluando comprar o alquilar."], ["Información de amenidades", "Galería y descripción de pileta, SUM, canchas, seguridad y todos los servicios del barrio."]]
const faqs = [["¿El portal de residentes es un sistema complejo?", "No. Desarrollamos según el nivel de funcionalidad que necesitás. Puede ser tan simple como un formulario de contacto o tan completo como un sistema con categorías de reclamos y seguimiento."], ["¿El CRM tiene costo adicional?", "Sí. La integración del CRM se cotiza aparte según las funcionalidades y el volumen de consultas del barrio."], ["¿El hosting y el dominio están incluidos?", "El hosting está incluido los primeros 6 meses. El dominio es un costo aparte que te ayudamos a contratar."], ["¿La administración puede actualizar el contenido?", "Sí. Con capacitación básica, el equipo de administración puede publicar novedades y actualizar información sin depender de un técnico."]]

export default function WebParaBarriosCerradosPage() {
  return (
    <>
      <section className={`${HERO_BACKGROUNDS["/web-para-barrios-cerrados"]} site-hero text-center`}><div className="section-wrapper"><ActiveBadge text="Barrios, countries y complejos" /><h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">La plataforma digital que necesita tu barrio para comunicarse mejor</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">Para barrios privados, countries, clubes de campo y complejos residenciales. Web institucional, comunicación con residentes por WhatsApp y gestión centralizada de consultas.</p><a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Consultar por WhatsApp</a></div></section>
      <section className="bg-navy-light py-20"><div className="section-wrapper"><div className="mx-auto mt-2 flex max-w-5xl flex-wrap justify-center gap-3">{pills.map((item) => <span key={item} className="rounded-full bg-slate-card px-4 py-2 text-sm text-text-secondary">{item}</span>)}</div></div></section>
      <Checks title="Qué incluye la web de tu barrio" items={includes} />
      <section className="bg-navy-light py-20"><div className="section-wrapper"><span className="rounded-full border border-brand-blue bg-brand-blue/15 px-4 py-2 text-xs font-bold text-brand-blue">CRM + WHATSAPP</span><h2 className="mt-6 text-center text-3xl font-bold md:text-5xl">Gestioná las consultas de residentes sin perder ninguna</h2><p className="mx-auto mt-6 max-w-4xl text-center leading-7 text-text-secondary">Las administraciones de barrios y countries reciben decenas de mensajes por día: consultas de expensas, pedidos de acceso, reclamos de mantenimiento, consultas de seguridad. Sin un sistema centralizado, esa comunicación es un caos.</p><p className="mx-auto mt-4 max-w-4xl text-center leading-7 text-text-secondary">Integramos un CRM conectado a WhatsApp para que la administración tenga todo bajo control: cada consulta registrada, asignada al área correspondiente y con seguimiento hasta su resolución.</p><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{crm.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div><aside className="mt-8 rounded-lg border-l-4 border-brand-blue bg-slate-card p-5 text-text-secondary">La integración del CRM es un servicio adicional que cotizamos aparte. Trabajamos con HubSpot, Kommo y Pipedrive. Te asesoramos en la mejor opción.</aside></div></section>
      <Cards title="Funcionalidades específicas" items={features} />
      <FAQ items={faqs} />
      <CTA title="Tu barrio con comunicación digital organizada" link={wa} />
          
            <JsonLd data={serviceSchema("Web para Barrios Cerrados y Countries", "Páginas web para barrios privados y countries con CRM de residentes y comunicación por WhatsApp.", "/web-para-barrios-cerrados")} />
      <JsonLd data={faqSchema(faqs)} />
                  <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Web para Barrios Cerrados", item: "https://www.paginawebarg.com.ar/web-para-barrios-cerrados" },
      ])} />
    </>
  )
}

function Cards({ title, items }: { title: string; items: string[][] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{items.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div></div></section>
}
function Checks({ title, items }: { title: string; items: string[] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">{items.map((item) => <CheckItem key={item} text={item} />)}<CheckItem text="Dominio (se contrata aparte - te asesoramos)" checked={false} /></div></div></section>
}
function FAQ({ items }: { items: string[][] }) {
  return <section className="bg-navy-light py-20"><div className="section-wrapper max-w-4xl"><h2 className="text-center text-3xl font-bold md:text-5xl">Preguntas frecuentes</h2><div className="mt-10 divide-y divide-slate-card">{items.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 leading-7 text-text-secondary">{a}</p></details>)}</div></div></section>
}
function CTA({ title, link }: { title: string; link: string }) {
  return <section className="bg-brand-blue py-20 text-center"><h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2><a href={link} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-[#1E3A5F]">Consultar por WhatsApp</a></section>
}








