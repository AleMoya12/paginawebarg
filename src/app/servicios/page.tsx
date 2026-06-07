import type { Metadata } from "next"
import Link from "next/link"
import { WA } from "@/lib/whatsapp"
import ActiveBadge from "@/components/ui/ActiveBadge"
import { HERO_BACKGROUNDS } from "@/lib/hero-backgrounds"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data"
import TechMarque from "@/components/ui/TechMarquee"
import PricingSection from "@/components/ui/PricingSection"
import { CheckItem } from "@/components/ui/CheckItem"

export const metadata: Metadata = {
  title: "Servicios de Diseño Web, SEO y Google Ads | Página Web Arg",
  description: "Diseño web, posicionamiento SEO y gestión de Google Ads para pymes. Más de 7 años de experiencia. Presupuesto sin compromiso.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/servicios" },
}

const services = [
  {
    title: "Diseño Web Profesional",
    description: "Creamos tu página web desde cero. Diseño moderno, adaptado a celulares y optimizado para que Google te encuentre. Trabajamos en código y en WordPress según tus necesidades.",
    href: "/web-premium",
    color: "#E8732A",
    icon: "screen",
  },
  {
    title: "Posicionamiento SEO",
    description: "Optimizamos tu sitio para que aparezca primero en Google cuando un cliente busca lo que ofrecés. SEO técnico, contenido y estrategia de keywords.",
    href: "/publicidad",
    color: "#22C55E",
    icon: "rocket",
  },
  {
    title: "Google Ads",
    description: "Gestionamos tus campañas de publicidad en Google para llegar a clientes que ya están buscando tu servicio. Resultados medibles desde el primer día.",
    href: "/publicidad",
    color: "#E8732A",
    icon: "megaphone",
  },
  {
    title: "Tienda Online",
    description: "Creamos tu tienda virtual para vender las 24 horas. Catálogo de productos, carrito de compras, pasarela de pago y gestión de pedidos.",
    href: "/tienda-online",
    color: "#E8732A",
    icon: "cart",
  },
  {
    title: "Mantenimiento Web",
    description: "Tu web siempre actualizada y segura. Actualizaciones, backups, corrección de errores y soporte técnico para que no tengas que preocuparte por la parte técnica.",
    href: WA.mantenimiento,
    color: "#94A3B8",
    icon: "gear",
  },
  {
    title: "Landing Pages",
    description: "Páginas de aterrizaje diseñadas para convertir visitas en clientes. Una sola página, un solo objetivo. Ideal para campañas publicitarias o lanzamientos.",
    href: WA.general,
    color: "#22C55E",
    icon: "phone",
  },
]

const stats = [
  ["100%", "presupuesto sin compromiso"],
  ["100+", "sitios web lanzados"],
  ["En el día", "tiempo de respuesta"],
  ["100%", "proyectos entregados"],
]

const includes = [
  "Diseño 100% personalizado para tu negocio",
  "Adaptación a celulares, tablets y computadoras (responsive)",
  "Botón de WhatsApp integrado",
  "Optimización SEO básica incluida",
  "6 meses de hosting incluido",
  "Certificado SSL (conexión segura https)",
  "Velocidad de carga optimizada",
  "Capacitación para gestionar tu contenido",
  "Código fuente entregado al cliente",
]

const faqs = [
  ["¿Cuánto tarda en estar lista mi página web?", "Una landing page o web básica la entregamos en 7 a 14 días hábiles. Un sitio corporativo completo puede llevar entre 3 y 5 semanas."],
  ["¿Puedo actualizar el contenido yo mismo después?", "Sí. Si tu web está en WordPress, te entregamos acceso al panel y una capacitación básica. Si el proyecto está en Next.js, coordinamos el mantenimiento con vos."],
  ["¿El hosting y el dominio están incluidos?", "El hosting está incluido sin costo por los primeros 6 meses. Después podés renovarlo a un precio accesible. El dominio es un costo aparte y te asesoramos para contratarlo."],
  ["¿Hacen rediseños de páginas existentes?", "Sí. Auditamos lo que tenés, te mostramos qué se puede mejorar y rediseñamos para modernizar la web o mejorar su rendimiento."],
  ["¿Trabajan con empresas de cualquier rubro?", "Sí. Trabajamos con pymes, profesionales independientes, comercios, emprendedores y empresas de cualquier industria."],
  ["¿Cómo es el proceso para empezar?", "Nos escribís por WhatsApp, nos contás qué necesitás y te mandamos un presupuesto sin compromiso."],
]

export default function ServiciosPage() {
  return (
    <>
      <section className={`${HERO_BACKGROUNDS["/servicios"]} site-hero text-center`}>
        <div className="section-wrapper">
          <ActiveBadge text="Presupuesto sin compromiso" />
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">Servicios digitales para hacer crecer tu negocio</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">Diseñamos tu página web, la posicionamos en Google y gestionamos tu publicidad online. Todo en un solo lugar.</p>
          <a href={WA.general} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Consultar por WhatsApp</a>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card reveal">
              <ServiceIcon name={service.icon} color={service.color} />
              <h2 className="mt-6 text-2xl font-bold">{service.title}</h2>
              <p className="mt-4 leading-7 text-text-secondary">{service.description}</p>
              {service.href.startsWith("https://") ? (
                <a href={service.href} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-orange">Consultar <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></a>
              ) : (
                <Link href={service.href} className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-orange">Ver más <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="hidden bg-graphite py-24 md:block">
        <div className="section-wrapper grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([number, text], i) => (
            <div key={text} className="reveal">
              <p className={`font-display text-5xl font-bold lg:text-6xl ${i % 2 === 1 ? "text-gold" : "text-orange"}`}>{number}</p>
              <p className="mt-3 text-sm text-cream/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Todo lo que incluye tu página web</h2>
            <p className="mt-4 text-text-secondary">Sin costos ocultos ni sorpresas.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {includes.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
            <CheckItem text="Dominio no incluido (se contrata aparte)" checked={false} />
          </div>
          <p className="mt-6 text-center text-sm text-text-secondary">* El dominio (ej: tunegocio.com.ar) es un costo anual aparte. Te asesoramos en la contratación.</p>
        </div>
      </section>

      <TechMarque />
      <PricingSection />

      <section className="bg-navy-light py-20">
        <div className="section-wrapper max-w-4xl">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Preguntas frecuentes sobre nuestros servicios</h2>
          <div className="mt-10 divide-y divide-slate-card">
            {faqs.map(([question, answer]) => (
              <details key={question} className="py-5">
                <summary className="cursor-pointer font-semibold text-text-primary">{question}</summary>
                <p className="mt-3 leading-7 text-text-secondary">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite py-24 text-center">
        <div className="section-wrapper">
          <h2 className="text-3xl font-bold text-white md:text-5xl">Empezá hoy con tu página web</h2>
          <p className="mt-5 text-cream/70">Contanos tu proyecto y te respondemos en el día.</p>
          <a href={WA.general} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-[4px] bg-orange px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-hover hover:scale-[1.02]">Escribinos por WhatsApp</a>
        </div>
      </section>
          
            <JsonLd data={serviceSchema("Servicios de Diseño Web, SEO y Google Ads", "Diseño web, posicionamiento SEO y gestión de Google Ads para pymes y emprendedores en Argentina.", "/servicios")} />
      <JsonLd data={faqSchema(faqs)} />
                  <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Servicios", item: "https://www.paginawebarg.com.ar/servicios" },
      ])} />
    </>
  )
}

function ServiceIcon({ name, color }: { name: string; color: string }) {
  const props = { className: "h-7 w-7", fill: "none", stroke: color, strokeWidth: 2.25, viewBox: "0 0 24 24", "aria-hidden": true }
  let svg = <svg {...props}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>

  if (name === "rocket") svg = <svg {...props}><path d="M5 19c2-1 4-1 6 1 1-4 3-8 8-13l-2-2c-5 5-9 7-13 8 2 2 2 4 1 6z" /><path d="M15 9h.01" /></svg>
  if (name === "megaphone") svg = <svg {...props}><path d="M4 13h3l10 4V7L7 11H4z" /><path d="M7 13l1 6h3" /></svg>
  if (name === "cart") svg = <svg {...props}><path d="M6 6h15l-2 8H8L6 3H3" /><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
  if (name === "gear") svg = <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a8 8 0 000-6M4.6 9a8 8 0 000 6M15 19.4a8 8 0 01-6 0M9 4.6a8 8 0 016 0" /></svg>
  if (name === "phone") svg = <svg {...props}><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" /></svg>

  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-[4px] border border-line bg-cream">
      {svg}
    </span>
  )
}




