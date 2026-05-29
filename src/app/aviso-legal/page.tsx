import { seo } from "@/lib/seo"

export const metadata = seo({
  title: "Aviso Legal",
  description: "Aviso legal de Página Web Arg con condiciones de uso, propiedad intelectual, responsabilidad y legislación aplicable.",
  path: "/aviso-legal",
  index: false,
})

const sections = [
  ["Datos del titular del sitio", "El sitio paginawebarg.com.ar pertenece a Página Web Arg, proveedor de servicios digitales orientados a pymes, profesionales y emprendedores."],
  ["Objeto del sitio web", "El sitio informa servicios de diseño web, desarrollo, mantenimiento, publicidad online y soluciones relacinadas con presencia digital."],
  ["Condiciones de uso", "El usuario se compromete a utilizar el sitio de forma lícita, sin afectar su funcionamiento ni vulnerar derechos de terceros."],
  ["Propiedad intelectual y derechos de autor", "Los contenidos, textos, diseños y elementos visuales del sitio están protegidos por derechos de propiedad intelectual, salvo materiales de terceros debidamente autorizados."],
  ["Exclusión de garantías y responsabilidad", "La información se ofrece con fines comerciales e informativos. Página Web Arg no garantiza ausencia absoluta de errores ni disponibilidad permanente del sitio."],
  ["Legislación aplicable", "Este aviso legal se interpreta conforme a la legislación vigente de la República Argentina."],
]

export default function AvisoLegalPage() {
  return (
    <section className="section-wrapper py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Aviso Legal</h1>
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
