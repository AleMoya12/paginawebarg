import type { Metadata } from "next"
import { WA } from "@/lib/whatsapp"
import ActiveBadge from "@/components/ui/ActiveBadge"
import { HERO_BACKGROUNDS } from "@/lib/hero-backgrounds"
import TechMarque from "@/components/ui/TechMarquee"
import { ProgressBar } from "@/components/ui/ProgressBar"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Quiénes Somos | Equipo de Desarrollo Web | Página Web Arg",
  description: "Más de 7 años desarrollando webs para pymes y emprendedores. Certificaciones Google y SEMrush. Equipo especializado en web, SEO y Google Ads.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/nosotros" },
}

const specialties = [
  ["Desarrollo Web", "Construimos sitios web en código desde cero y también en WordPress para proyectos que requieren gestión de contenido sencilla.", "#3B82F6"],
  ["SEO y Posicionamiento", "Optimizamos tu sitio para aparecer en los primeros resultados de Google con auditorías técnicas, keywords y contenido.", "#22C55E"],
  ["Google Ads", "Gestionamos campañas de publicidad paga para que tu negocio aparezca cuando alguien busca lo que ofrecés.", "#F97316"],
]

const steps = [
  ["01", "Escuchamos tu proyecto", "Te contactamos por WhatsApp o una llamada corta para entender tu negocio, tus objetivos y a quién le querés hablar."],
  ["02", "Proponemos una solución", "Te enviamos una propuesta clara: qué incluye, cuánto cuesta y en cuánto tiempo lo entregamos."],
  ["03", "Desarrollamos y revisamos", "Ponemos manos a la obra y te mostramos avances para que puedas pedir ajustes antes del lanzamiento."],
  ["04", "Lanzamos y acompañamos", "Publicamos tu web y te explicamos cómo usarla. Seguimos disponibles para soporte y mejoras."],
]

const certifications = [
  ["Google", "Google Developer (activo)", "Certificación activa de Google en desarrollo web, herramientas y ecosistema de Google.", "#3B82F6"],
  ["Google", "Google Ads - Búsqueda", "Certificación en campañas de búsqueda, estrategia de puja y optimización de anuncios.", "#F97316"],
  ["SEMrush Academy", "SEO Fundamentals", "Fundamentos de posicionamiento orgánico, keywords y optimización on-page y off-page.", "#22C55E"],
  ["SEMrush Academy", "AI Visibility Essentials / GEO", "Optimización de contenido para visibilidad en respuestas de inteligencia artificial.", "#22C55E"],
  ["Schema App", "Schema Markup", "Implementación de datos estructurados JSON-LD para rich snippets y mejora de CTR.", "#3B82F6"],
  ["Simplilearn", "Introduction to SEO", "Estrategia SEO integral, arquitectura de sitios y optimización técnica.", "#94A3B8"],
]

const clients = [
  "Pymes y comercios locales",
  "Profesionales independientes",
  "Emprendedores con producto o servicio propio",
  "Restaurantes y gastronomía",
  "Hoteles y alojamientos",
  "Clínicas y centros de salud",
]

export default function NosotrosPage() {
  return (
    <>
      <section className={`${HERO_BACKGROUNDS["/nosotros"]} pt-24 pb-16 md:pt-32`}>
        <div className="section-wrapper max-w-4xl">
          <ActiveBadge text="Equipo especializado en web, SEO y Ads" />
          <h1 className="mt-6 text-4xl font-bold md:text-6xl">Somos el equipo detrás de tu presencia digital</h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Página Web Arg es un equipo de profesionales con más de 7 años de experiencia en desarrollo web, SEO y publicidad digital.
          </p>
          <p className="mt-4 text-lg leading-8 text-text-secondary">
            No somos una agencia enorme con procesos burocráticos. Somos un equipo ágil que entiende el negocio del cliente y entrega resultados reales.
          </p>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="section-wrapper">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Lo que sabemos hacer bien</h2>
            <p className="mt-5 text-text-secondary">Nos especializamos en tres áreas que trabajan juntas para darte más visibilidad y más clientes.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {specialties.map(([title, text, color]) => (
              <article key={title} className="card">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0" style={{ backgroundColor: `${color}1A` }}>
                  {title === "Desarrollo Web" && (
                    <svg className="w-6 h-6" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {title === "SEO y Posicionamiento" && (
                    <svg className="w-6 h-6" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
                    </svg>
                  )}
                  {title === "Google Ads" && (
                    <svg className="w-6 h-6" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  )}
                </div>
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-text-secondary">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Cómo trabajamos</h2>
            <p className="mt-5 text-text-secondary">Un proceso simple y claro, sin vueltas.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <article key={number} className="card">
                <p className="text-4xl font-extrabold text-brand-blue">{number}</p>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="section-wrapper">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Formación y certificaciones</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map(([org, name, text, color]) => (
              <article key={name} className="rounded-lg border-l-4 bg-slate-card p-6" style={{ borderLeftColor: color }}>
                <p className="text-sm font-semibold text-brand-blue">{org}</p>
                <h3 className="mt-2 text-xl font-bold">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TechMarque />

      <section className="bg-[#111827] px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#F8FAFC]">Nivel de expertise</h2>
          <p className="mb-12 text-center text-[#94A3B8]">Las áreas en las que más nos especializamos.</p>
          <div className="space-y-6">
            <ProgressBar label="Desarrollo Web (Next.js / React)" percent={95} color="#3B82F6" />
            <ProgressBar label="WordPress & WooCommerce" percent={90} color="#3B82F6" />
            <ProgressBar label="SEO Técnico & On-Page" percent={88} color="#22C55E" />
            <ProgressBar label="Google Ads (Search & Display)" percent={82} color="#F97316" />
            <ProgressBar label="Integración CRM & WhatsApp" percent={78} color="#F97316" />
            <ProgressBar label="UX/UI & Diseño Visual" percent={85} color="#22C55E" />
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="section-wrapper">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Con quién trabajamos</h2>
            <p className="mt-5 text-text-secondary">Nos especializamos en pymes y emprendedores argentinos que necesitan presencia digital real.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => <div key={client} className="card text-center">{client}</div>)}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-20 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">Trabajemos juntos</h2>
        <p className="mt-5 text-white/90">Contanos tu proyecto y te respondemos en el día.</p>
        <a href={WA.general} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-[#1E3A5F]">
          Escribinos por WhatsApp
        </a>
      </section>
          <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Nosotros", item: "https://www.paginawebarg.com.ar/nosotros" },
      ])} />
    </>
  )
}





