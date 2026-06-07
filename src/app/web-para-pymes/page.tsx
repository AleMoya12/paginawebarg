import type { Metadata } from "next"
import { WhatsAppLink } from "@/lib/whatsapp"
import ActiveBadge from "@/components/ui/ActiveBadge"
import { HERO_BACKGROUNDS } from "@/lib/hero-backgrounds"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data"
import { CheckItem } from "@/components/ui/CheckItem"

const wa = WhatsAppLink("Hola, quiero una web para mi empresa")

export const metadata: Metadata = {
  title: "Diseño Web para Pymes | Empresas Pequeñas y Medianas | Página Web Arg",
  description: "Páginas web profesionales para pymes. Diseño personalizado, SEO incluido, 6 meses de hosting y gestión de clientes con CRM conectado a WhatsApp.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/web-para-pymes" },
}

const segments = [
  "Comercios", "Distribuidoras", "Estudios", "Talleres", "Consultoras", "Agencias", "Importadoras", "Fabricantes", "Empresas de servicios", "Logística", "Construcción", "Gastronomía", "Salud", "Educación", "Tecnología",
]

const includes = [
  "Diseño personalizado para tu rubro y marca",
  "Secciones: Inicio, Servicios, Nosotros, Galería, Contacto",
  "Diseño responsive (celular, tablet y PC)",
  "Botón de WhatsApp para contacto directo",
  "Formulario de consulta",
  "Optimización SEO básica",
  "6 meses de hosting incluido",
  "Certificado SSL (https)",
  "Capacitación para actualizar el contenido",
]

const crm = [
  ["Cada consulta queda registrada", "Nada se pierde en el chat. Cada mensaje entra al CRM automáticamente."],
  ["Seguimiento hasta el cierre", "Marcás el estado de cada lead: nuevo, en proceso, presupuesto enviado, cerrado. Siempre sabés en qué etapa está cada cliente."],
  ["Varios agentes, una sola bandeja", "Si tenés equipo de ventas o atención, todos operan desde la misma plataforma sin pisarse las conversaciones."],
  ["Más ventas, menos caos", "Con un proceso ordenado, las conversiones mejoran. Sabés cuántos leads entran, cuántos avanzan y cuántos se cierran."],
]

const reasons = [
  ["Tus clientes te buscan en Google antes de llamar", "Más del 80% de las personas busca online antes de contratar. Si no aparecés, perdés esos clientes sin saberlo."],
  ["Una web trabaja las 24 horas", "Mientras tu negocio está cerrado, tu web sigue recibiendo consultas, mostrando tus servicios y generando contactos."],
  ["Transmitís seriedad y confianza", "Una empresa con web profesional genera más confianza que una sin presencia digital."],
]

const faqs = [
  ["¿Cuánto tarda en estar lista?", "Entre 2 y 4 semanas según la cantidad de secciones y funcionalidades."],
  ["¿El CRM tiene costo adicional?", "Sí. Se cotiza aparte según la herramienta elegida y el tamaño del equipo. Hay opciones desde gratuitas hasta planes escalables."],
  ["¿El hosting y el dominio están incluidos?", "El hosting está incluido los primeros 6 meses. El dominio es un costo aparte que te ayudamos a contratar."],
  ["¿Puedo actualizar el contenido yo mismo?", "Sí. Si el proyecto es en WordPress, te entregamos acceso al panel y te capacitamos para hacer cambios básicos sin tocar código."],
]

export default function WebParaPymesPage() {
  return (
    <>
      <section className={`${HERO_BACKGROUNDS["/web-para-pymes"]} site-hero text-center`}><div className="section-wrapper"><ActiveBadge text="Para pequeñas y medianas empresas" /><h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">Tu empresa merece una web que trabaje para vos</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">Diseñamos y desarrollamos páginas web para pequeñas y medianas empresas. Profesionales, rápidas y optimizadas para que tus clientes te encuentren en Google.</p><a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Consultar por WhatsApp</a></div></section>

      <section className="bg-navy-light py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">Para qué tipo de empresa</h2><div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">{segments.map((segment) => <span key={segment} className="rounded-full bg-slate-card px-4 py-2 text-sm text-text-secondary">{segment}</span>)}</div></div></section>

      <Checks title="Qué incluye la web de tu pyme" items={includes} />

      <section className="bg-navy-light py-20"><div className="section-wrapper"><span className="rounded-full border border-brand-blue bg-brand-blue/15 px-4 py-2 text-xs font-bold text-brand-blue">CRM + WHATSAPP</span><h2 className="mt-6 text-center text-3xl font-bold md:text-5xl">No pierdas más clientes por no dar seguimiento</h2><p className="mx-auto mt-6 max-w-4xl text-center leading-7 text-text-secondary">El mayor problema de las pymes no es conseguir consultas - es no darles seguimiento. Un cliente que preguntó por WhatsApp y no recibió respuesta rápida se va a la competencia.</p><p className="mx-auto mt-4 max-w-4xl text-center leading-7 text-text-secondary">Integramos un CRM conectado a tu WhatsApp para que cada consulta quede registrada, asignada y con seguimiento hasta convertirse en venta.</p><div className="mt-10 grid gap-6 md:grid-cols-2">{crm.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div><aside className="mt-8 rounded-lg border-l-4 border-brand-blue bg-slate-card p-5 text-text-secondary">La integración del CRM es un servicio adicional. Trabajamos con HubSpot, Kommo y Pipedrive. Te asesoramos en la mejor opción según el tamaño de tu equipo y el volumen de consultas.</aside></div></section>

      <Cards title="Por qué tu pyme necesita una web profesional" items={reasons} />
      <FAQ items={faqs} />
      <CTA title="La web de tu empresa, lista para conseguir más clientes" subtitle="Primera consulta sin compromiso." link={wa} />
          
            <JsonLd data={serviceSchema("Diseño Web para Pymes", "Páginas web para pymes con diseño personalizado, SEO y CRM conectado a WhatsApp.", "/web-para-pymes")} />
      <JsonLd data={faqSchema(faqs)} />
                  <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Web para Pymes", item: "https://www.paginawebarg.com.ar/web-para-pymes" },
      ])} />
    </>
  )
}

function Cards({ title, items }: { title: string; items: string[][] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mt-12 grid gap-6 md:grid-cols-3">{items.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div></div></section>
}
function Checks({ title, items }: { title: string; items: string[] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">{items.map((item) => <CheckItem key={item} text={item} />)}<CheckItem text="Dominio (se contrata aparte - te asesoramos)" checked={false} /></div></div></section>
}
function FAQ({ items }: { items: string[][] }) {
  return <section className="bg-navy-light py-20"><div className="section-wrapper max-w-4xl"><h2 className="text-center text-3xl font-bold md:text-5xl">Preguntas frecuentes</h2><div className="mt-10 divide-y divide-slate-card">{items.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 leading-7 text-text-secondary">{a}</p></details>)}</div></div></section>
}
function CTA({ title, subtitle, link }: { title: string; subtitle: string; link: string }) {
  return <section className="bg-graphite py-24 text-center"><h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>{subtitle && <p className="mt-5 text-cream/70">{subtitle}</p>}<a href={link} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-[4px] bg-orange px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-hover hover:scale-[1.02]">Consultar por WhatsApp</a></section>
}







