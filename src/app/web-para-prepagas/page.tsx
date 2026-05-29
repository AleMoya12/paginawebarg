import type { Metadata } from "next"
import { WhatsAppLink } from "@/lib/whatsapp"
import ActiveBadge from "@/components/ui/ActiveBadge"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data"
import { CheckItem } from "@/components/ui/CheckItem"

const wa = WhatsAppLink("Hola, quiero una web para mi prepaga u obra social")

export const metadata: Metadata = {
  title: "Web para Prepagas y Obras Sociales | CRM y WhatsApp | Página Web Arg",
  description: "Páginas web para prepagas, obras sociales y clínicas. Gestión de afiliados, consultas de cobertura, turnos y atención por WhatsApp con CRM integrado.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/web-para-prepagas" },
}

const organizations = [
  ["Prepagas y obras sociales", "Web institucional para afiliados actuales y potenciales. Información de planes, coberturas, cartilla médica y canales de atención."],
  ["Clínicas y centros de salud", "Web completa con especialidades, profesionales, turnos y ubicación. Diseñada para que el paciente encuentre lo que necesita en segundos."],
  ["Consultorios médicos", "Presencia digital para médicos o grupos de especialistas. Información clara, botón de turno y contacto directo."],
  ["Centros de diagnóstico", "Web con listado de estudios, preparaciones y resultados online. Orientada a reducir llamadas y consultas repetitivas."],
]

const includes = [
  "Sección de planes y coberturas con información clara",
  "Buscador de cartilla médica o especialistas",
  "Formulario o sistema de solicitud de turnos",
  "Sección de preguntas frecuentes para afiliados",
  "Botón de WhatsApp para atención directa",
  "Diseño responsive (celular, tablet y PC)",
  "SEO técnico para aparecer en búsquedas del rubro",
  "6 meses de hosting incluido",
  "Certificado SSL (https)",
  "Accesibilidad básica (fuente legible, alto contraste)",
]

const crmBenefits = [
  ["Ninguna consulta sin respuesta", "Cada mensaje que llega por WhatsApp queda registrado en el sistema. No importa el volumen: nada se pierde ni queda sin atender."],
  ["Asignación por área", "Las consultas de afiliados van a un agente, las de cobertura a otro, los reclamos a otro. Cada área atiende lo que le corresponde."],
  ["Historial completo de cada afiliado", "Antes de responder, el agente ve todo el historial del contacto: consultas anteriores, autorizaciones pedidas, reclamos abiertos."],
  ["Reportes de atención", "Sabés cuántas consultas entran por día, cuánto tardan en resolverse y cuáles son los ítems más frecuentes."],
]

const features = [
  ["Consulta de cobertura online", "El afiliado ingresa su plan y accede a la información de cobertura sin necesitar llamar al call center."],
  ["Solicitud de turnos", "Formulario de solicitud de turno integrado o botón de WhatsApp directo a la especialidad correspondiente."],
  ["Sección de preguntas frecuentes", "Resuelve las dudas más comunes de los afiliados sin que tengan que contactarse. Reduce la carga del equipo de atención."],
  ["Formularios de adhesión", "El usuario puede iniciar el proceso de afiliación desde la web, dejando sus datos y siendo contactado por el equipo."],
]

const faqs = [
  ["¿Cuánto tarda en estar lista la web?", "Entre 3 y 6 semanas según el alcance. Si necesitás funcionalidades específicas como buscador de cartilla o portal de resultados, el tiempo puede extenderse un poco más."],
  ["¿El CRM tiene un costo adicional?", "Sí. La integración del CRM se cotiza aparte. Hay opciones gratuitas con funciones básicas (como HubSpot) y herramientas pagas según el volumen de consultas y la cantidad de agentes."],
  ["¿El hosting y el dominio están incluidos?", "El hosting está incluido los primeros 6 meses. El dominio es un costo aparte que te ayudamos a contratar."],
  ["¿Pueden integrarse con sistemas de turnos que ya usamos?", "Depende del sistema. Evaluamos cada caso puntualmente para ver qué tipo de integración es posible."],
]

export default function WebParaPrepagasPage() {
  return (
    <>
      <section className="bg-navy py-24 text-center">
        <div className="section-wrapper">
          <ActiveBadge text="Salud y prepagas" />
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">La web que necesita tu prepaga para atender mejor a sus afiliados</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">Diseñamos sitios web para prepagas, obras sociales, clínicas y centros de salud. Con información clara, consulta de cobertura, gestión de turnos y atención directa por WhatsApp.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Consultar por WhatsApp</a>
        </div>
      </section>

      <Cards title="Para qué tipo de organizaciones trabajamos" items={organizations} alt />
      <Checks title="Qué incluye tu web" items={includes} />

      <section className="bg-navy-light py-20">
        <div className="section-wrapper">
          <span className="rounded-full border border-brand-blue bg-brand-blue/15 px-4 py-2 text-xs font-bold text-brand-blue">CRM + WHATSAPP</span>
          <h2 className="mt-6 text-center text-3xl font-bold md:text-5xl">Gestioná consultas de afiliados sin perder ninguna</h2>
          <p className="mx-auto mt-6 max-w-4xl text-center leading-7 text-text-secondary">Las prepagas y obras sociales reciben decenas de consultas diarias por WhatsApp: dudas de cobertura, pedidos de autorización, reclamos, solicitudes de cartilla. Sin un sistema de gestión, esas consultas se pierden o quedan sin respuesta.</p>
          <p className="mx-auto mt-4 max-w-4xl text-center leading-7 text-text-secondary">Integramos un CRM conectado a tu número de WhatsApp para que cada mensaje quede registrado, asignado a un agente y con seguimiento hasta la resolución.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">{crmBenefits.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div>
          <aside className="mt-8 rounded-lg border-l-4 border-brand-blue bg-slate-card p-5 text-text-secondary">La integración del CRM es un servicio adicional que cotizamos aparte según la herramienta y el volumen de consultas. Trabajamos con HubSpot, Kommo y Pipedrive. Te asesoramos en la mejor opción.</aside>
        </div>
      </section>

      <Cards title="Funcionalidades pensadas para el sector salud" items={features} />
      <FAQ items={faqs} />
      <CTA title="Tu web para el sector salud, lista para atender mejor" subtitle="Primera consulta sin compromiso." link={wa} />
          
            <JsonLd data={serviceSchema("Web para Prepagas y Obras Sociales", "Páginas web para prepagas, obras sociales y clínicas con CRM y WhatsApp integrados.", "/web-para-prepagas")} />
      <JsonLd data={faqSchema(faqs)} />
                  <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Web para Prepagas", item: "https://www.paginawebarg.com.ar/web-para-prepagas" },
      ])} />
    </>
  )
}

function Cards({ title, items, alt = false }: { title: string; items: string[][]; alt?: boolean }) {
  return <section className={`${alt ? "bg-navy-light" : "bg-navy"} py-20`}><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{items.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div></div></section>
}
function Checks({ title, items }: { title: string; items: string[] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">{items.map((item) => <CheckItem key={item} text={item} />)}<CheckItem text="Dominio (se contrata aparte - te asesoramos)" checked={false} /></div></div></section>
}
function FAQ({ items }: { items: string[][] }) {
  return <section className="bg-navy-light py-20"><div className="section-wrapper max-w-4xl"><h2 className="text-center text-3xl font-bold md:text-5xl">Preguntas frecuentes</h2><div className="mt-10 divide-y divide-slate-card">{items.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 leading-7 text-text-secondary">{a}</p></details>)}</div></div></section>
}
function CTA({ title, subtitle, link }: { title: string; subtitle: string; link: string }) {
  return <section className="bg-brand-blue py-20 text-center"><h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>{subtitle && <p className="mt-5 text-white/90">{subtitle}</p>}<a href={link} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-[#1E3A5F]">Consultar por WhatsApp</a></section>
}







