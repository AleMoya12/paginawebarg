import type { Metadata } from "next"
import { WhatsAppLink } from "@/lib/whatsapp"
import ActiveBadge from "@/components/ui/ActiveBadge"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data"
import { CheckItem } from "@/components/ui/CheckItem"

const wa = WhatsAppLink("Hola, quiero una web para mi actividad profesional")

export const metadata: Metadata = {
  title: "Web para Emprendedores y Profesionales | Página Web Arg",
  description: "Páginas web para médicos, abogados, contadores, psicólogos y profesionales independientes. Diseño que transmite confianza y consigue clientes.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/web-para-profesionales" },
}

const rubros = ["Médicos y clínicas", "Abogados", "Contadores", "Psicólogos", "Nutricionistas", "Arquitectos", "Dentistas", "Veterinarios", "Consultores", "Coaches", "Terapeutas", "Fotógrafos", "Diseñadores", "Traductores", "Profesores particulares"]
const pillColors = [
  "bg-[#3B82F6]/10 border-[#3B82F6]/20 text-[#60A5FA]",
  "bg-[#22C55E]/10 border-[#22C55E]/20 text-[#4ADE80]",
  "bg-[#F97316]/10 border-[#F97316]/20 text-[#FB923C]",
  "bg-[#8B5CF6]/10 border-[#8B5CF6]/20 text-[#A78BFA]",
]

const includes = ["Hasta 6 secciones personalizadas", "Sección de servicios con descripción detallada", "Sección de sobre vos / quién soy", "Testimonios de pacientes o clientes", "Botón de WhatsApp para contacto directo", "Formulario de consulta", "Mapa de ubicación o zona de atención", "Diseño responsive (celular, tablet y PC)", "SEO básico incluido", "6 meses de hosting incluido", "Certificado SSL (https)"]
const reasons = [
  ["Los clientes te buscan en Google antes de llamar", "El 80% de las personas busca online antes de contratar cualquier servicio profesional. Si no aparecés, perdés esos clientes."],
  ["Las redes sociales no son suficientes", "Instagram y Facebook cambian sus algoritmos constantemente. Tu web es tuya, siempre disponible y sin depender de una plataforma."],
  ["Transmitís confianza antes del primer contacto", "Una web profesional muestra tu trayectoria, especialidades y testimonios. El cliente llega ya convencido."],
]
const steps = ["Nos contás tu especialidad y que necesitás", "Te enviamos una propuesta con diseño y precio", "Desarrollamos tu web con revisiones incluidas", "Lanzamos y te explicamos cómo usarla"]
const faqs = [
  ["¿Cuánto tarda en estar lista?", "Entre 1 y 3 semanas según el alcance. Te damos un plazo exacto antes de empezar."],
  ["¿Puedo agregar una sección de turnos online?", "Sí. Podemos integrar un formulario de solicitud de turno o un botón directo a WhatsApp para coordinar."],
  ["¿El hosting y el dominio están incluidos?", "El hosting está incluido los primeros 6 meses. El dominio es un costo aparte que te ayudamos a contratar."],
  ["¿Puedo actualizar mis datos yo mismo?", "Sí. Dependiendo del tipo de proyecto, te entregamos un panel de gestión o te enseñamos a hacer cambios básicos."],
]

export default function WebParaProfesionalesPage() {
  return (
    <>
      <Hero />
      <section className="bg-navy-light py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">Diseñamos webs para todo tipo de profesional</h2><div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">{rubros.map((rubro, i) => (<span key={rubro} className={`text-sm font-medium px-4 py-2 rounded-full border ${pillColors[i % 4]}`}>{rubro}</span>))}</div></div></section>
      <CheckSection title="Qué incluye tu web profesional" items={includes} />
      <Cards title="Por qué necesitás una web si sos profesional" items={reasons} alt />
      <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">Cómo es el proceso</h2><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{steps.map((s, i) => <article key={s} className="card"><p className="text-4xl font-bold text-brand-blue">{String(i + 1).padStart(2, "0")}</p><h3 className="mt-4 text-xl font-bold">{s}</h3></article>)}</div></div></section>
      <FAQ items={faqs} />
      <CTA />
          
            <JsonLd data={serviceSchema("Web para Emprendedores y Profesionales", "Páginas web para profesionales independientes con diseño orientado a transmitir confianza y conseguir clientes.", "/web-para-profesionales")} />
      <JsonLd data={faqSchema(faqs)} />
                  <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Web para Profesionales", item: "https://www.paginawebarg.com.ar/web-para-profesionales" },
      ])} />
    </>
  )
}

function Hero() {
  return <section className="bg-navy py-24 text-center"><div className="section-wrapper"><ActiveBadge text="Para médicos, abogados, contadores y más" /><h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">Tu imagen profesional en internet, exactamente como debe ser</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">Para médicos, abogados, contadores, psicólogos, nutricionistas, arquitectos y cualquier profesional que necesite una web seria, rápida y que consiga clientes.</p><a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Consultar por WhatsApp</a></div></section>
}
function CheckSection({ title, items }: { title: string; items: string[] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">{items.map((item) => <CheckItem key={item} text={item} />)}<CheckItem text="Dominio (se contrata aparte - te asesoramos)" checked={false} /></div></div></section>
}
function Cards({ title, items, alt = false }: { title: string; items: string[][]; alt?: boolean }) {
  return <section className={`${alt ? "bg-navy-light" : "bg-navy"} py-20`}><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mt-12 grid gap-6 md:grid-cols-3">{items.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div></div></section>
}
function FAQ({ items }: { items: string[][] }) {
  return <section className="bg-navy-light py-20"><div className="section-wrapper max-w-4xl"><h2 className="text-center text-3xl font-bold md:text-5xl">Preguntas frecuentes</h2><div className="mt-10 divide-y divide-slate-card">{items.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 leading-7 text-text-secondary">{a}</p></details>)}</div></div></section>
}
function CTA() {
  return <section className="bg-brand-blue py-20 text-center"><h2 className="text-3xl font-bold text-white md:text-5xl">Tu web profesional, lista para conseguir clientes</h2><p className="mt-5 text-white/90">Primera consulta sin compromiso.</p><a href={wa} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-[#1E3A5F]">Consultar por WhatsApp</a></section>
}








