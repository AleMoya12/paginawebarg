import type { Metadata } from "next"
import { WhatsAppLink } from "@/lib/whatsapp"
import ActiveBadge from "@/components/ui/ActiveBadge"
import { HERO_BACKGROUNDS } from "@/lib/hero-backgrounds"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data"
import { CheckItem } from "@/components/ui/CheckItem"

const wa = WhatsAppLink("Hola, quiero una web autoadministrable en WordPress")

export const metadata: Metadata = {
  title: "Web Autoadministrable en WordPress para Pymes | Página Web Arg",
  description: "Web en WordPress que podés actualizar vos mismo sin saber programar. Panel de gestión simple, capacitación incluida y 6 meses de hosting.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/web-autoadministrable" },
}

const includes = ["Desarrollada en WordPress (el CMS más usado del mundo)", "Tema premium personalizado con tu identidad de marca", "Panel de administración para editar contenido sin código", "Capacitación incluida: te explicamos cómo usarla", "Hasta 6 secciones personalizadas", "Diseño responsive (celular, tablet y PC)", "SEO básico incluido con plugin Yoast SEO", "Formulario de contacto", "Botón de WhatsApp integrado", "6 meses de hosting incluido", "Certificado SSL (https)", "Backups automáticos configurados"]
const ideal = [
  ["Pymes con contenido que cambia seguido", "Si publicás novedades, actualizás servicios o precios con frecuencia, necesitás una web que puedas editar sin llamar a un programador."],
  ["Negocios que quieren independencia", "No depender de un desarrollador para cada cambio pequeño te ahorra tiempo y dinero."],
  ["Emprendedores sin conocimientos técnicos", "WordPress tiene uno de los paneles de gestión más intuitivos del mercado. Con 30 minutos de capacitación ya sabés usarlo."],
]
const wp = [
  ["Panel de gestión visual e intuitivo", "Editás textos, subís imágenes y publicás páginas nuevas desde una interfaz que no requiere conocimientos técnicos."],
  ["Ecosistema enorme de plugins", "Formularios, SEO, reservas, tiendas y seguridad: prácticamente cualquier funcionalidad tiene una solución en WordPress."],
  ["Comunidad y soporte worldwide", "Millones de recursos, tutoriales y profesionales disponibles. No dependés solo de nosotros para resolver cualquier duda."],
  ["Crecés con tu negocio", "Si mañana necesitás agregar una tienda online, un blog o un sistema de reservas, WordPress lo permite sin cambiar de plataforma."],
]
const canDo = ["Editar textos de cualquier sección", "Cambiar o agregar imágenes", "Publicar entradas de blog o novedades", "Agregar o eliminar páginas", "Actualizar tus servicios o precios", "Responder mensajes del formulario de contacto"]
const steps = ["Definimos que necesitás y que vas a querer editar", "Diseñamos y desarrollamos tu web en WordPress", "Te la mostramos completa para que pidas ajustes", "Lanzamos y hacemos la capacitación - te enseñamos todo"]
const faqs = [
  ["¿Necesito saber programar para usarla?", "No. WordPress tiene un editor visual que funciona como un procesador de texto. Te hacemos una capacitación y en minutos sabés manejarlo."],
  ["¿Qué pasa si rompo algo sin querer?", "Configuramos backups automáticos. Si algo sale mal, restauramos una versión anterior en minutos."],
  ["¿El hosting y el dominio están incluidos?", "El hosting está incluido los primeros 6 meses. El dominio es un costo aparte que te ayudamos a contratar."],
  ["¿Puedo agregar productos y vender online después?", "Sí. WordPress permite agregar WooCommerce para convertirla en tienda online en cualquier momento."],
  ["¿Cuánto tarda en estar lista?", "Entre 2 y 4 semanas según el tamaño del proyecto."],
]

export default function WebAutoadministrablePage() {
  return (
    <>
      <Hero />
      <Cards title="Para quién es ideal" items={ideal} alt centerThree />
      <CheckSection title="Qué incluye tu web autoadministrable" items={includes} />
      <Cards title="Por qué WordPress es la tecnología correcta para esto" intro="WordPress potencia más del 40% de los sitios web del mundo. Es la opción más madura y confiable para proyectos que necesitan autoadministración real." items={wp} alt />
      <CheckSection title="Lo que vas a poder hacer desde el primer día" items={canDo} noDomain />
      <section className="bg-navy-light py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">Proceso</h2><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{steps.map((s, i) => <article key={s} className="card"><p className="text-4xl font-bold text-brand-blue">{String(i + 1).padStart(2, "0")}</p><h3 className="mt-4 text-xl font-bold">{s}</h3></article>)}</div></div></section>
      <FAQ items={faqs} />
      <CTA />
          
            <JsonLd data={serviceSchema("Web Autoadministrable en WordPress", "Web en WordPress para pymes que podés actualizar sin saber programar, con panel simple y capacitación incluida.", "/web-autoadministrable")} />
      <JsonLd data={faqSchema(faqs)} />
                  <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Web Autoadministrable", item: "https://www.paginawebarg.com.ar/web-autoadministrable" },
      ])} />
    </>
  )
}

function Hero() {
  return <section className={`${HERO_BACKGROUNDS["/web-autoadministrable"]} site-hero text-center`}><div className="section-wrapper"><ActiveBadge text="Desarrollada en WordPress" /><h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">Actualizá tu web vos mismo, sin depender de nadie</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">Desarrollamos tu sitio en WordPress para que puedas modificar textos, agregar imágenes, publicar novedades y gestionar el contenido desde un panel simple. Sin saber programación.</p><a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Consultar por WhatsApp</a></div></section>
}
function Cards({ title, intro, items, alt = false, centerThree = false }: { title: string; intro?: string; items: string[][]; alt?: boolean; centerThree?: boolean }) {
  return <section className={`${alt ? "bg-navy-light" : "bg-navy"} py-20`}><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2>{intro && <p className="mx-auto mt-5 max-w-3xl text-center leading-7 text-text-secondary">{intro}</p>}<div className={`mt-12 grid gap-6 md:grid-cols-2 ${centerThree ? "mx-auto max-w-5xl lg:grid-cols-3" : "lg:grid-cols-4"}`}>{items.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div></div></section>
}
function CheckSection({ title, items, noDomain = false }: { title: string; items: string[]; noDomain?: boolean }) {
  return <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">{items.map((item) => <CheckItem key={item} text={item} />)}{!noDomain && <CheckItem text="Dominio (se contrata aparte - te asesoramos)" checked={false} />}</div></div></section>
}
function FAQ({ items }: { items: string[][] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper max-w-4xl"><h2 className="text-center text-3xl font-bold md:text-5xl">Preguntas frecuentes</h2><div className="mt-10 divide-y divide-slate-card">{items.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 leading-7 text-text-secondary">{a}</p></details>)}</div></div></section>
}
function CTA() {
  return <section className="bg-brand-blue py-20 text-center"><h2 className="text-3xl font-bold text-white md:text-5xl">Tu web en WordPress, lista para autoadministrar</h2><p className="mt-5 text-white/90">Primera consulta sin compromiso.</p><a href={wa} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-[#1E3A5F]">Consultar por WhatsApp</a></section>
}








