import type { Metadata } from "next"
import Link from "next/link"
import ActiveBadge from "@/components/ui/ActiveBadge"
import { WA } from "@/lib/whatsapp"
import JsonLd from "@/components/seo/JsonLd"
import { faqSchema, websiteOrganizationGraph } from "@/lib/structured-data"
import { CheckItem } from "@/components/ui/CheckItem"

export const metadata: Metadata = {
  title: "Diseño Web Profesional para Pymes y Emprendedores | Página Web Arg",
  description: "Diseñamos y desarrollamos páginas web profesionales. Más de 7 años de experiencia. SEO incluido, 6 meses de hosting y WhatsApp integrado.",
  alternates: {
    canonical: "https://www.paginawebarg.com.ar",
  },
}

const valueProps = [
  ["Google te encuentra", "Una web bien construida aparece en los resultados de búsqueda. Tus clientes te encuentran cuando buscan lo que ofrecés.", "search", "#E8732A"],
  ["Funciona en cualquier dispositivo", "El 70% de las visitas vienen desde el celular. Tu web se adapta perfectamente a teléfonos, tablets y computadoras.", "phone", "#E8732A"],
  ["Genera confianza", "Una web profesional transmite seriedad. Los clientes confían más en un negocio con presencia digital sólida.", "star", "#22C55E"],
]

const webTypes = [
  ["Web Premium", "Diseño exclusivo desde cero, sin plantillas. Para empresas que quieren destacar con una web de alto impacto.", "/web-premium", "Ver detalles"],
  ["Web para Emprendedores", "Tu presencia digital profesional para médicos, abogados, contadores, psicólogos y todo tipo de profesional independiente.", "/web-para-profesionales", "Ver detalles"],
  ["Web Autoadministrable", "Actualizás el contenido vos mismo desde un panel simple, sin necesitar ayuda técnica. Desarrollada en WordPress.", "/web-autoadministrable", "Ver detalles"],
  ["Tienda Online", "Vendé tus productos las 24 horas. Catálogo, carrito de compras y métodos de pago integrados.", "/tienda-online", "Ver detalles"],
  ["Web para Pymes", "Presencia digital completa para tu empresa: inicio, servicios, sobre nosotros, galería y contacto.", "/web-para-pymes", "Ver detalles"],
  ["Landing Page", "Una página enfocada en un solo objetivo: captar leads, vender un producto o promocionar un servicio.", WA.general, "Consultar"],
]

const included = [
  "Diseño 100% personalizado para tu negocio",
  "Adaptación a celulares, tablets y computadoras",
  "Botón de WhatsApp integrado",
  "Optimización SEO básica",
  "6 meses de hosting incluido",
  "Certificado SSL (conexión segura https)",
  "Velocidad de carga optimizada",
  "Capacitación para gestionar tu contenido",
]

const process = [
  ["01", "Nos contás tu proyecto", "Por WhatsApp o una llamada corta. Sin formularios, sin esperas."],
  ["02", "Te enviamos una propuesta", "Qué incluye, cuánto cuesta y en cuánto tiempo. Sin compromiso."],
  ["03", "Desarrollamos tu web", "Te mostramos avances y hacemos los ajustes que necesitás antes del lanzamiento."],
  ["04", "Lanzamos y te acompañamos", "Publicamos tu web y te explicamos cómo usarla. Seguimos disponibles después."],
]

const extras = [
  ["Posicionamiento SEO", "Optimizamos tu web para aparecer en los primeros resultados de Google.", "/servicios#seo-tecnico", "Saber más", "search", "#22C55E"],
  ["Google Ads", "Gestionamos tu publicidad paga para conseguir clientes desde el primer día.", "/servicios#google-ads", "Saber más", "megaphone", "#E8732A"],
  ["Mantenimiento Web", "Tu web siempre actualizada, segura y funcionando.", WA.mantenimiento, "Consultar", "gear", "#94A3B8"],
]

const stats = [
  ["100%", "presupuesto sin compromiso"],
  ["100+", "sitios web desarrollados"],
  ["En el día", "tiempo máximo de respuesta"],
]

const faqs = [
  ["¿Cuánto tarda en estar lista mi web?", "Una landing page o web básica la entregamos en 7 a 14 días hábiles. Un sitio más completo puede llevar entre 3 y 5 semanas, dependiendo del alcance."],
  ["¿El hosting y el dominio están incluidos?", "El hosting está incluido los primeros 6 meses, sin costo. El dominio es un costo aparte que te asesoramos a contratar."],
  ["¿Puedo actualizar el contenido yo mismo?", "Sí. Si la web está en WordPress, tenés un panel de administración para editar textos e imágenes sin tocar código. En proyectos en Next.js, coordinamos las actualizaciones con vos."],
  ["¿Trabajan con cualquier tipo de negocio?", "Sí. Trabajamos con pymes, profesionales, comercios, emprendedores y empresas de cualquier rubro."],
]

export default function HomePage() {
  return (
    <>
      <section className="hero-bg hero-bg-home site-hero">
        <div className="section-wrapper grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <ActiveBadge text="Respondemos en el día" />
            <div className="rule-gold mb-7 mt-7" />
            <h1 className="text-4xl font-bold leading-[1.04] md:text-6xl lg:text-[4.1rem]">
              Tu página web profesional,{" "}
              <span className="text-orange">lista para conseguir clientes</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-text-secondary">
              Diseñamos y desarrollamos sitios web para pymes, emprendedores y profesionales. Rápidos, modernos y optimizados para que Google te encuentre.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={WA.general} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Consultar por WhatsApp
              </a>
              <a href="#disenos" className="btn-outline">
                Ver nuestros diseños
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-8">
              {[["100+", "sitios desarrollados"], ["En el día", "tiempo de respuesta"], ["100%", "proyectos entregados"]].map(([value, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl font-bold text-graphite">{value}</div>
                  <div className="text-xs text-text-secondary">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual editorial asimétrico (mockup en CSS puro) */}
          <div className="animate-fade-in relative hidden lg:block">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-[4px] border-2 border-gold/50" aria-hidden="true" />
            <div className="absolute -bottom-7 -left-7 h-24 w-24 rounded-[4px] bg-orange/10" aria-hidden="true" />
            <div className="relative rounded-[6px] border border-line bg-white shadow-[0_45px_90px_-45px_rgba(16,24,40,0.45)]">
              <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-orange" />
                <span className="h-3 w-3 rounded-full bg-gold" />
                <span className="h-3 w-3 rounded-full bg-graphite/20" />
              </div>
              <div className="space-y-4 p-7">
                <div className="h-3.5 w-1/3 rounded bg-graphite" />
                <div className="h-2.5 w-full rounded bg-graphite/10" />
                <div className="h-2.5 w-5/6 rounded bg-graphite/10" />
                <div className="mt-5 flex h-28 items-end gap-3 rounded-[4px] bg-gradient-to-br from-graphite to-graphite-light p-4">
                  <div className="h-1/3 w-1/4 rounded-sm bg-orange/70" />
                  <div className="h-2/3 w-1/4 rounded-sm bg-gold/70" />
                  <div className="h-full w-1/4 rounded-sm bg-orange" />
                  <div className="h-1/2 w-1/4 rounded-sm bg-cream/40" />
                </div>
                <div className="flex gap-3 pt-1">
                  <div className="h-9 w-32 rounded-[4px] bg-orange" />
                  <div className="h-9 w-24 rounded-[4px] border border-graphite/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Por qué una web profesional cambia todo</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {valueProps.map(([title, text, icon, color]) => (
              <article key={title} className="card reveal">
                <Icon name={icon} color={color} />
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-text-secondary">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="disenos" className="scroll-mt-24 bg-navy py-20">
        <div className="section-wrapper">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Encontrá la web ideal para tu negocio</h2>
            <p className="mt-5 text-text-secondary">Todos los planes incluyen diseño responsive, SEO básico, 6 meses de hosting y botón de WhatsApp.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webTypes.map(([title, text, href, cta]) => (
              <article key={title} className="card reveal flex min-h-[260px] flex-col">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 flex-1 leading-7 text-text-secondary">{text}</p>
                {href.startsWith("https://") ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-orange">{cta} <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></a>
                ) : (
                  <Link href={href} className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-orange">{cta} <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Todo lo que incluye tu web</h2>
            <p className="mt-4 text-text-secondary">Sin costos ocultos ni sorpresas.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {included.map((item) => (
              <CheckItem key={item} text={item} />
            ))}
            <CheckItem text="Dominio (se contrata aparte - te asesoramos)" checked={false} />
          </div>
          <p className="mt-6 text-center text-sm text-text-secondary">* El hosting está incluido los primeros 6 meses. El dominio es un costo aparte que te ayudamos a gestionar.</p>
        </div>
      </section>

      <section className="bg-graphite py-24">
        <div className="section-wrapper">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 h-px w-16 bg-gold" />
            <h2 className="text-3xl font-bold text-white md:text-5xl">Cómo es trabajar con nosotros</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, text]) => <Step key={number} number={number} title={title} text={text} />)}
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">También trabajamos en</h2>
            <p className="mt-5 text-text-secondary">Servicios complementarios para potenciar tu presencia digital.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {extras.map(([title, text, href, cta, icon, color]) => (
              <article key={title} className="card reveal">
                <Icon name={icon} color={color} />
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-text-secondary">{text}</p>
                {href.startsWith("https://") ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex font-semibold text-brand-orange">{cta} </a>
                ) : (
                  <Link href={href} className="mt-6 inline-flex font-semibold text-brand-orange">{cta} </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite py-24">
        <div className="section-wrapper grid gap-10 text-center md:grid-cols-3">
          {stats.map(([value, label], i) => (
            <div key={label} className="reveal">
              <p className={`font-display text-5xl font-bold md:text-6xl ${i === 1 ? "text-gold" : "text-orange"}`}>{value}</p>
              <p className="mt-3 text-sm text-cream/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper max-w-4xl">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Preguntas frecuentes</h2>
          <div className="mt-10 divide-y divide-slate-card">
            {faqs.map(([question, answer]) => <details key={question} className="py-5"><summary className="cursor-pointer font-semibold">{question}</summary><p className="mt-3 leading-7 text-text-secondary">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="bg-graphite py-24 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">Empezá con tu página web hoy</h2>
        <p className="mt-5 text-cream/70">Contanos tu proyecto y te respondemos en el día.</p>
        <a href={WA.general} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-[4px] bg-orange px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-hover hover:scale-[1.02]">Consultar por WhatsApp</a>
      </section>
      <JsonLd data={websiteOrganizationGraph()} />
      <JsonLd data={faqSchema(faqs)} />
    </>
  )
}

function Icon({ name, color }: { name: string; color: string }) {
  const props = { className: "h-7 w-7", fill: "none", stroke: color, strokeWidth: 2.25, viewBox: "0 0 24 24", "aria-hidden": true }
  let svg = <svg {...props}><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>

  if (name === "phone") svg = <svg {...props}><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" /></svg>
  if (name === "star") svg = <svg {...props}><path d="M12 3.5l2.4 5.1 5.6.8-4 4 1 5.6-5-2.7-5 2.7 1-5.6-4-4 5.6-.8L12 3.5z" /></svg>
  if (name === "megaphone") svg = <svg {...props}><path d="M4 13h3l10 4V7L7 11H4z" /><path d="M7 13l1 6h3" /></svg>
  if (name === "gear") svg = <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a8 8 0 000-6M4.6 9a8 8 0 000 6M15 19.4a8 8 0 01-6 0M9 4.6a8 8 0 016 0" /></svg>

  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-[4px] border border-line bg-cream">
      {svg}
    </span>
  )
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return <article className="card reveal"><p className="font-display text-4xl font-bold text-orange">{number}</p><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-text-secondary">{text}</p></article>
}



