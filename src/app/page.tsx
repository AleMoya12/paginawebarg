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
  ["Google te encuentra", "Una web bien construida aparece en los resultados de búsqueda. Tus clientes te encuentran cuando buscan lo que ofrecés.", "search", "#3B82F6"],
  ["Funciona en cualquier dispositivo", "El 70% de las visitas vienen desde el celular. Tu web se adapta perfectamente a teléfonos, tablets y computadoras.", "phone", "#F97316"],
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
  ["Google Ads", "Gestionamos tu publicidad paga para conseguir clientes desde el primer día.", "/servicios#google-ads", "Saber más", "megaphone", "#F97316"],
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
      <section className="relative flex flex-col items-center overflow-hidden bg-[#0A0F1E] px-4 pb-16 pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative z-10 mb-8">
          <ActiveBadge text="Respondemos en el día" />
        </div>
        <h1 className="relative z-10 mb-6 max-w-4xl text-center text-4xl font-bold leading-tight text-[#F8FAFC] md:text-6xl lg:text-[68px]">
          Tu página web profesional,{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">lista para conseguir clientes</span>
        </h1>
        <p className="relative z-10 mb-10 max-w-2xl text-center text-base leading-relaxed text-[#94A3B8] md:text-lg">
          Diseñamos y desarrollamos sitios web para pymes, emprendedores y profesionales. Rápidos, modernos y optimizados para que Google te encuentre.
        </p>
        <div className="relative z-10 mb-14 flex flex-col gap-4 sm:flex-row">
          <a href={WA.general} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Consultar por WhatsApp
          </a>
          <a href="#disenos" className="flex h-12 items-center justify-center rounded-lg border border-[#1E293B] px-6 text-sm font-medium text-[#94A3B8] transition-all duration-200 hover:border-[#3B82F6] hover:text-[#F8FAFC]">
            Ver nuestros diseños 
          </a>
        </div>
        <div className="mb-14 h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />
        <div className="hidden w-full max-w-3xl grid-cols-2 gap-8 text-center md:grid md:grid-cols-3">
          <div><div className="mb-1 text-2xl font-bold text-[#F8FAFC] md:text-3xl">100+</div><div className="text-xs text-[#94A3B8]">sitios desarrollados</div></div>
          <div><div className="mb-1 text-2xl font-bold text-[#F8FAFC] md:text-3xl">En el día</div><div className="text-xs text-[#94A3B8]">tiempo de respuesta</div></div>
          <div><div className="mb-1 text-2xl font-bold text-[#F8FAFC] md:text-3xl">100%</div><div className="text-xs text-[#94A3B8]">proyectos entregados</div></div>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Por qué una web profesional cambia todo</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {valueProps.map(([title, text, icon, color]) => (
              <article key={title} className="card">
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
              <article key={title} className="card flex min-h-[260px] flex-col">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 flex-1 leading-7 text-text-secondary">{text}</p>
                {href.startsWith("https://") ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="mt-6 font-semibold text-brand-orange">{cta} </a>
                ) : (
                  <Link href={href} className="mt-6 font-semibold text-brand-orange">{cta} </Link>
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

      <section className="bg-navy py-20">
        <div className="section-wrapper">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Cómo es trabajar con nosotros</h2>
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
              <article key={title} className="card">
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

      <section className="bg-navy py-20">
        <div className="section-wrapper grid gap-6 text-center md:grid-cols-3">
          {stats.map(([value, label]) => <div key={label}><p className="text-5xl font-extrabold text-brand-blue md:text-6xl">{value}</p><p className="mt-2 text-sm text-text-secondary">{label}</p></div>)}
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

      <section className="bg-brand-blue py-20 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">Empezá con tu página web hoy</h2>
        <p className="mt-5 text-white/90">Contanos tu proyecto y te respondemos en el día.</p>
        <a href={WA.general} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-[#1E3A5F]">Consultar por WhatsApp</a>
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
    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      {svg}
    </span>
  )
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return <article className="card"><p className="text-4xl font-extrabold text-brand-blue">{number}</p><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-text-secondary">{text}</p></article>
}



