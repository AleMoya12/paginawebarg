import type { Metadata } from "next"
import { WhatsAppLink } from "@/lib/whatsapp"
import ActiveBadge from "@/components/ui/ActiveBadge"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data"
import { CheckItem } from "@/components/ui/CheckItem"

const wa = WhatsAppLink("Hola, quiero una web para mi institución educativa")

export const metadata: Metadata = {
  title: "Web para Escuelas e Instituciones Educativas | Página Web Arg",
  description: "Páginas web para escuelas, jardines, institutos y academias. Comunicación con padres, inscripciones online y gestión por WhatsApp con CRM.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/web-para-escuelas" },
}

const pills = ["Jardines de infantes", "Escuelas primarias", "Escuelas secundarias", "Institutos terciarios", "Academias de idiomas", "Centros de formación", "Escuelas de arte", "Institutos de capacitación", "Universidades privadas", "Academias de deporte", "Escuelas de música", "Jardines maternales"]
const includes = ["Página institucional con misión, visión y valores", "Sección de propuesta educativa y niveles", "Listado de docentes y cuerpo directivo", "Formulario de inscripción o solicitud de información", "Sección de novedades o noticias de la institución", "Calendario de actividades o eventos", "Galería de instalaciones y actividades", "Botón de WhatsApp para consultas de padres", "Diseño responsive (celular, tablet y PC)", "SEO para aparecer en búsquedas locales del rubro", "6 meses de hosting incluido", "Certificado SSL (https)"]
const crm = [["Consultas de inscripción organizadas", "Cada padre que consulta por inscripción queda registrado. Podés hacer seguimiento hasta la matriculación."], ["Comunicación por área", "Secretaría, tesorería y dirección pueden gestionar sus propias conversaciones desde la misma plataforma."], ["Mensajes masivos a padres", "Enviás notificaciones de eventos, cierre de cuotas o cambios de horario a todos los contactos desde una sola acción."], ["Sin confusión entre conversaciones", "Cuando varias personas de la institución responden por WhatsApp, el CRM evita que dos agentes respondan lo mismo o que algo quede sin respuesta."]]
const features = [["Formulario de inscripción", "El interesado completa sus datos desde la web y la solicitud llega al equipo automáticamente."], ["Sección de novedades", "Publicás eventos, fechas importantes y comunicados desde un panel simple, sin tocar código."], ["Calendario de actividades", "Fechas de reuniones de padres, actos escolares, inscripciones y exámenes, visibles desde la web."], ["Galería de la institución", "Fotos de aulas, actividades y espacios que generan confianza en los padres que están evaluando la institución."]]
const faqs = [["¿Cuánto tarda en estar lista?", "Entre 3 y 5 semanas según el alcance."], ["¿El CRM tiene costo adicional?", "Sí. Se cotiza aparte según el volumen de comunicaciones y el tamaño del equipo."], ["¿El hosting y el dominio están incluidos?", "El hosting está incluido los primeros 6 meses. El dominio es un costo aparte que te ayudamos a contratar."], ["¿Puede la secretaría actualizar el contenido ella misma?", "Sí. Si el proyecto es en WordPress, entregamos acceso y capacitación para que el equipo de la institución actualice novedades, fotos y contenido sin depender de un técnico."]]

export default function WebParaEscuelasPage() {
  return (
    <>
      <section className="bg-navy py-24 text-center"><div className="section-wrapper"><ActiveBadge text="Instituciones educativas" /><h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">La web que tu institución educativa necesita para comunicarse mejor</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">Para escuelas, jardines de infantes, institutos terciarios, academias y centros de formación. Diseño profesional, comunicación clara con padres y alumnos, e inscripciones online.</p><a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Consultar por WhatsApp</a></div></section>
      <section className="bg-navy-light py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">Para qué tipo de institución</h2><div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">{pills.map((item) => <span key={item} className="rounded-full bg-slate-card px-4 py-2 text-sm text-text-secondary">{item}</span>)}</div></div></section>
      <Checks title="Qué incluye la web de tu institución" items={includes} />
      <section className="bg-navy-light py-20"><div className="section-wrapper"><span className="rounded-full border border-brand-blue bg-brand-blue/15 px-4 py-2 text-xs font-bold text-brand-blue">CRM + WHATSAPP</span><h2 className="mt-6 text-center text-3xl font-bold md:text-5xl">Centralizá la comunicación con padres y alumnos</h2><p className="mx-auto mt-6 max-w-4xl text-center leading-7 text-text-secondary">Las instituciones educativas reciben consultas de padres por WhatsApp todo el día: inscripciones, cuotas, actividades, reuniones. Sin un sistema, esa comunicación se vuelve caótica y muchas consultas quedan sin respuesta.</p><p className="mx-auto mt-4 max-w-4xl text-center leading-7 text-text-secondary">Integramos un CRM conectado a WhatsApp para que la secretaría y el equipo directivo gestionen todas las comunicaciones desde una sola plataforma.</p><div className="mt-10 grid gap-6 md:grid-cols-2">{crm.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div><aside className="mt-8 rounded-lg border-l-4 border-brand-blue bg-slate-card p-5 text-text-secondary">La integración del CRM es un servicio adicional que cotizamos aparte. Trabajamos con HubSpot, Kommo y Pipedrive. Te asesoramos según el tamaño de la institución.</aside></div></section>
      <Cards title="Funcionalidades específicas" items={features} />
      <FAQ items={faqs} />
      <CTA title="Tu institución educativa con presencia digital profesional" link={wa} />
          
            <JsonLd data={serviceSchema("Web para Escuelas e Instituciones Educativas", "Páginas web para escuelas e institutos con comunicación a familias, inscripciones online y CRM por WhatsApp.", "/web-para-escuelas")} />
      <JsonLd data={faqSchema(faqs)} />
                  <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Web para Escuelas", item: "https://www.paginawebarg.com.ar/web-para-escuelas" },
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







