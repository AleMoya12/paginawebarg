import { CONTACT } from "@/constants/contact"
import { seo } from "@/lib/seo"

export const metadata = seo({
  title: "Términos y Condiciones",
  description: "Términos y condiciones de los servicios de diseño web, mantenimiento, tiendas online y publicidad de Página Web Arg.",
  path: "/terminos-y-condiciones",
  index: false,
})

const sections = [
  ["Identificación del prestador del servicio", "Página Web Arg ofrece servicios de diseño, desarrollo, mantenimiento y asesoramiento web para clientes en Argentina."],
  ["Objeto del servicio", "El servicio consiste en la creación o mejora de sitios web, tiendas online, piezas digitales y servicios complementarios según el alcance acordado con cada cliente."],
  ["Condiciones de contratación", "La contratación queda sujeta a la aceptación del presupuesto, definición del alcance, entrega de materiales por parte del cliente y cumplimiento de las condiciones de pago pactadas."],
  ["Precios y forms de pago", "Los precios se informan en cada presupuesto. Las forms de pago, moneda, señas, cuotas o saldos se acuerdan antes de iniciar el trabajo."],
  ["Plazos de entrega", "Los plazos son estimativos y dependen de la complejidad del proyecto, la disponibilidad de contenidos y la rapidez de aprobación por parte del cliente."],
  ["Propiedad intelectual", "El cliente declara contar con derechos sobre textos, marcas, imágenes y materiales entregados. Los desarrollos se transfieren según las condiciones comerciales acordadas."],
  ["Limitación de responsabilidad", "Página Web Arg no responde por interrupciones de terceros, cambios de plataforms externas, uso indebido del sitio o contenidos provistos por el cliente."],
  ["Modificaciones del servicio", "Cualquier cambio fuera del alcance original puede requerir un nuevo presupuesto o ajuste de plazos."],
  ["Ley aplicable", "Estos términos se rigen por las leyes de la República Argentina."],
  ["Contacto", `Para consultas sobre estos términos, escribinos por WhatsApp a ${CONTACT.WhatsApp.display}.`],
]

export default function TerminosPage() {
  return (
    <section className="section-wrapper py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Términos y Condiciones</h1>
        <div className="space-y-8">
          {sections.map(([title, text]) => (
            <section key={title}>
              <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
              <p className="leading-7 text-text-secondary">{text}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
