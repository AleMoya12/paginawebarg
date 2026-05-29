import type { Metadata } from "next"
import { WhatsAppLink } from "@/lib/whatsapp"
import ActiveBadge from "@/components/ui/ActiveBadge"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data"
import { CheckItem } from "@/components/ui/CheckItem"

const wa = WhatsAppLink("Hola, quiero una tienda online")

export const metadata: Metadata = {
  title: "Tienda Online Profesional | Vendé tus Productos 24/7 | Página Web Arg",
  description: "Creamos tu tienda online con catálogo, carrito de compras y pasarela de pago. Lista para vender desde el primer día. 6 meses de hosting incluido.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/tienda-online" },
}

const ideal = [
  ["Negocios físicos que quieren vender online", "Tenés un local o un negocio físico y querés llegar a más clientes sin límites geográficos ni horarios."],
  ["Emprendedores con producto propio", "Fabricás, producís o importás algo y querés venderlo directamente sin depender de marketplaces que se llevan comisiones."],
  ["Marcas que quieren canal propio", "Tener tu propia tienda te da control total: precios, márgenes, datos de clientes y experiencia de compra."],
]
const includes = ["Catálogo de productos con fotos, descripciones y precios", "Carrito de compras y proceso de checkout", "Métodos de pago integrados (tarjeta, transferencia, efectivo)", "Gestión de stock y pedidos desde el panel", "Categorías y filtros de productos", "Diseño responsive (compras desde el celular)", "SEO para aparecer en Google con tus productos", "6 meses de hosting incluido", "Certificado SSL (compras seguras con https)", "Capacitación para gestionar productos y pedidos"]
const features = [
  ["Panel de gestión de productos", "Agregás, editás y eliminás productos desde un panel simple. Precio, stock, fotos y variantes, todo en un lugar."],
  ["Métodos de pago flexibles", "Integramos los métodos de pago más usados: tarjeta, transferencia bancaria y más según tus necesidades."],
  ["Gestión de pedidos", "Recibís notificaciones de cada venta y podés gestionar el estado de los pedidos."],
  ["SEO para productos", "Cada producto tiene su URL, título y descripción optimizados para que Google los indexe."],
  ["Diseño adaptado a celulares", "Más del 70% de las compras online se hacen desde el celular. Tu tienda está optimizada para convertir en cualquier dispositivo."],
  ["Stock automático", "El stock se descuenta automáticamente con cada venta. Si un producto se agota, deja de mostrarse como disponible."],
]
const steps = ["Definimos el catálogo, métodos de pago y funcionalidades", "Diseñamos y desarrollamos tu tienda", "Cargamos los productos iniciales juntos", "Hacemos pruebas de compra completas antes del lanzamiento", "Lanzamos y te capacitamos para gestionar todo"]
const faqs = [
  ["¿Cuánto tarda en estar lista la tienda?", "Entre 3 y 6 semanas según la cantidad de productos y funcionalidades. Te damos un plazo claro antes de empezar."],
  ["¿Cuántos productos puedo cargar?", "Sin límite fijo. La capacidad depende del plan de hosting, que dimensionamos según tu catálogo."],
  ["¿El hosting y el dominio están incluidos?", "El hosting está incluido los primeros 6 meses. El dominio es un costo aparte que te ayudamos a contratar."],
  ["¿Puedo agregar la tienda a una web que ya tengo?", "Sí, si tu web actual está en WordPress con WooCommerce. Evaluamos el caso puntualmente."],
  ["¿Me enseñan a cargar los productos yo mismo?", "Sí. La capacitación está incluida. Te explicamos cómo cargar productos, gestionar pedidos y hacer seguimiento de ventas."],
]

export default function TiendaOnlinePage() {
  return (
    <>
      <section className="bg-navy py-24 text-center">
        <div className="section-wrapper">
          <ActiveBadge text="Vendé las 24 horas" />
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">Vendé tus productos las 24 horas, sin intermediarios</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">Creamos tu tienda online completa: catálogo de productos, carrito de compras, métodos de pago y gestión de pedidos. Lista para vender desde el primer día.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Consultar por WhatsApp</a>
        </div>
      </section>
      <Cards title="Para quién es la Tienda Online" items={ideal} alt />
      <CheckSection title="Qué incluye tu tienda online" items={includes} />
      <Cards title="Todo lo que necesita una tienda online real" items={features} alt />
      <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">Proceso</h2><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">{steps.map((s, i) => <article key={s} className="card"><p className="text-4xl font-bold text-brand-blue">{String(i + 1).padStart(2, "0")}</p><h3 className="mt-4 text-xl font-bold">{s}</h3></article>)}</div></div></section>
      <FAQ items={faqs} />
      <section className="bg-brand-blue py-20 text-center"><h2 className="text-3xl font-bold text-white md:text-5xl">Tu tienda online, lista para vender</h2><p className="mt-5 text-white/90">Primera consulta sin compromiso.</p><a href={wa} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-[#1E3A5F]">Consultar por WhatsApp</a></section>
          
            <JsonLd data={serviceSchema("Tienda Online Profesional", "Creamos tu tienda online con catálogo, carrito de compras y pasarela de pago para vender desde el primer día.", "/tienda-online")} />
      <JsonLd data={faqSchema(faqs)} />
                  <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Tienda Online", item: "https://www.paginawebarg.com.ar/tienda-online" },
      ])} />
    </>
  )
}

function Cards({ title, items, alt = false }: { title: string; items: string[][]; alt?: boolean }) {
  return <section className={`${alt ? "bg-navy-light" : "bg-navy"} py-20`}><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mt-12 grid gap-6 md:grid-cols-3">{items.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}</div></div></section>
}
function CheckSection({ title, items }: { title: string; items: string[] }) {
  return <section className="bg-navy py-20"><div className="section-wrapper"><h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2><div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">{items.map((item) => <CheckItem key={item} text={item} />)}<CheckItem text="Dominio (se contrata aparte - te asesoramos)" checked={false} /></div></div></section>
}
function FAQ({ items }: { items: string[][] }) {
  return <section className="bg-navy-light py-20"><div className="section-wrapper max-w-4xl"><h2 className="text-center text-3xl font-bold md:text-5xl">Preguntas frecuentes</h2><div className="mt-10 divide-y divide-slate-card">{items.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 leading-7 text-text-secondary">{a}</p></details>)}</div></div></section>
}








