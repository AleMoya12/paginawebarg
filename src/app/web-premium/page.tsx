import type { Metadata } from "next"
import { WA } from "@/lib/whatsapp"
import ActiveBadge from "@/components/ui/ActiveBadge"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data"
import { CheckItem } from "@/components/ui/CheckItem"

export const metadata: Metadata = {
  title: "Web Premium | Diseño Web Exclusivo en Next.js | Página Web Arg",
  description: "Diseño web exclusivo desde cero, sin plantillas. Desarrollado en Next.js con animaciones, SEO técnico avanzado y Core Web Vitals optimizados.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/web-premium" },
}

const includes = [
  "Diseño 100% exclusivo, sin plantillas",
  "Desarrollada en Next.js con TypeScript (máximo rendimiento)",
  "Animaciones CSS y transiciones avanzadas",
  "Hasta 8 secciones personalizadas",
  "Diseño responsive para celular, tablet y PC",
  "SEO técnico incluido desde el código",
  "Velocidad de carga optimizada (Core Web Vitals)",
  "Botón de WhatsApp integrado",
  "6 meses de hosting incluido",
  "Certificado SSL",
  "Formulario de contacto funcional",
  "Capacitación para gestionar el contenido",
  "Código fuente entregado al cliente",
]

const nextBenefits = [
  ["Carga ultrarrápida", "Las páginas se generan de manera estática o en el servidor, lo que garantiza tiempos de carga mínimos."],
  ["SEO técnico superior", "Google indexa mejor los sitios con server-side rendering. Tu web tiene ventaja técnica desde el primer día."],
  ["Sin dependencias externas", "No depende de plugins de terceros que pueden romperse o quedar desactualizados."],
]

const process = [
  ["01", "Brief profundo", "Entendemos tu negocio, tu competencia, tu público y que querés comunicar. Con eso definimos la estrategia visual."],
  ["02", "Propuesta de diseño", "Te mostramos la estructura y el estilo visual antes de escribir código. Podés pedir todos los cambios que necesitás."],
  ["03", "Desarrollo", "Construimos la web en Next.js con TypeScript y Tailwind CSS, optimizando cada sección para velocidad y SEO."],
  ["04", "Vista previa y ajustes", "Antes del lanzamiento publicamos una versión de prueba para que revises todo en un entorno real."],
  ["05", "Lanzamiento", "Publicamos en tu dominio, entregamos el código fuente y te capacitamos para gestionar el contenido."],
]

const faqs = [
  ["¿Cuánto tarda una Web Premium?", "Entre 3 y 6 semanas según el alcance del proyecto. Te damos un plazo claro antes de empezar."],
  ["¿Puedo ver el avance antes de que esté lista?", "Sí. Publicamos una versión de prueba en un subdominio para que puedas navegar la web completa antes del lanzamiento definitivo."],
  ["¿El hosting y el dominio están incluidos?", "El hosting está incluido los primeros 6 meses. El dominio es un costo aparte que te ayudamos a contratar."],
  ["¿Me dan el código fuente?", "Sí. El código fuente es tuyo. No tenés dependencia con nosotros para nada."],
  ["¿Hacen actualizaciones después del lanzamiento?", "Sí. Podés contratarnos un plan de mantenimiento mensual o hacer cambios puntuales cuando los necesitás."],
]

export default function WebPremiumPage() {
  return (
    <>
      <Hero badgeText="Diseño exclusivo, sin plantillas" title="Una web que refleja exactamente lo que es tu empresa" text="Diseño exclusivo, desde cero, sin plantillas genéricas. Cada elemento pensado para tu negocio, con animaciones modernas y funcionalidades a medida." href={WA.webPremium} />
      <Section alt title="Para quién es la Web Premium" cards={[
        ["Empresas que quieren distinguirse", "Tu competencia tiene webs genéricas hechas con plantillas. La Web Premium te diferencia con un diseño único que comunica autoridad."],
        ["Negocios con presencia que no refleja su nivel", "Si tu empresa es profesional pero tu web no lo transmite, la Web Premium cierra esa brecha."],
        ["Proyectos que necesitan funcionalidades avanzadas", "Integraciones, animaciones, secciones personalizadas, calculadoras o funcionalidades específicas de tu rubro."],
      ]} />
      <CheckSection title="Qué incluye la Web Premium" items={includes} />
      <Section alt title="Por qué desarrollamos en Next.js" intro="Next.js es uno de los frameworks de desarrollo web más modernos del mercado. Lo elegimos porque ofrece velocidad, SEO técnico y gran experiencia de usuario." cards={nextBenefits} />
      <Process title="Cómo desarrollamos tu Web Premium" items={process} />
      <FAQ items={faqs} />
      <CTA title="Tu Web Premium empieza con una consulta" text="Sin compromiso. Contanos tu proyecto y te enviamos una propuesta." href={WA.webPremium} />
          
            <JsonLd data={serviceSchema("Web Premium", "Diseño web exclusivo desde cero, sin plantillas, desarrollado en Next.js con animaciones y SEO técnico avanzado.", "/web-premium")} />
      <JsonLd data={faqSchema(faqs)} />
                  <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Web Premium", item: "https://www.paginawebarg.com.ar/web-premium" },
      ])} />
    </>
  )
}

function Hero({ badgeText, title, text, href }: { badgeText: string; title: string; text: string; href: string }) {
  return <section className="bg-navy py-24 text-center"><div className="section-wrapper"><ActiveBadge text={badgeText} /><h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">{title}</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">{text}</p><a href={href} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Consultar por WhatsApp</a></div></section>
}
function Section({ title, intro, cards, alt = false }: { title: string; intro?: string; cards: string[][]; alt?: boolean }) {
  return <section className={`${alt ? "bg-navy-light" : "bg-navy"} py-20`}><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2>{intro && <p className="mx-auto mt-5 max-w-3xl text-center leading-7 text-text-secondary">{intro}</p>}<div className="mt-12 grid gap-6 md:grid-cols-3">{cards.map(([heading, text]) => <article key={heading} className="card"><h3 className="text-xl font-bold">{heading}</h3><p className="mt-3 leading-7 text-text-secondary">{text}</p></article>)}</div></div></section>
}
function CheckSection({ title, items }: { title: string; items: string[] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">{items.map((item) => <CheckItem key={item} text={item} />)}<CheckItem text="Dominio (se contrata aparte - te asesoramos)" checked={false} /></div></div></section>
}
function Process({ title, items }: { title: string; items: string[][] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">{items.map(([n, h, t]) => <article key={n} className="card"><p className="text-4xl font-bold text-brand-blue">{n}</p><h3 className="mt-4 font-bold">{h}</h3><p className="mt-3 text-sm leading-6 text-text-secondary">{t}</p></article>)}</div></div></section>
}
function FAQ({ items }: { items: string[][] }) {
  return <section className="bg-navy-light py-20"><div className="section-wrapper max-w-4xl"><h2 className="text-center text-3xl font-bold md:text-5xl">Preguntas frecuentes</h2><div className="mt-10 divide-y divide-slate-card">{items.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 leading-7 text-text-secondary">{a}</p></details>)}</div></div></section>
}
function CTA({ title, text, href }: { title: string; text: string; href: string }) {
  return <section className="bg-brand-blue py-20 text-center"><h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2><p className="mt-5 text-white/90">{text}</p><a href={href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-[#1E3A5F]">Consultar por WhatsApp</a></section>
}








