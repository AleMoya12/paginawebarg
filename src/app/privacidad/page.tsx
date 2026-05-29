import Link from "next/link"
import { CONTACT } from "@/constants/contact"
import { seo } from "@/lib/seo"

export const metadata = seo({
  title: "Política de Privacidad",
  description: "Política de privacidad de Página Web Arg para usuarios, clientes y visitantes que consultan servicios de diseño web.",
  path: "/privacidad",
  index: false,
})

const sections = [
  {
    title: "Responsable del tratamiento de datos",
    text: "Página Web Arg es responsable del tratamiento de los datos personales que los usuarios comparten al consultar por nuestros servicios.",
  },
  {
    title: "Qué datos recopilamos",
    text: "Podemos recopilar nombre, teléfono o mensaje cuando el usuario nos contacta, además de datos de navegación técnicos necesarios para operar y mejorar el sitio.",
  },
  {
    title: "Finalidad del tratamiento",
    text: "Usamos los datos para responder consultas, preparar presupuestos, prestar servicios contratados, mejorar la experiencia del sitio y mantener comunicaciones comerciales vinculadas al pedido del usuario.",
  },
  {
    title: "Base legal",
    text: "La base legal del tratamiento es el consentimiento del usuario al contactarnos voluntariamente o navegar el sitio.",
  },
  {
    title: "Conservación de datos",
    text: "Conservamos los datos solo durante el tiempo necesario para atender la consulta, cumplir obligaciones contractuales o legales y mantener registros administrativos razonables.",
  },
  {
    title: "Derechos del usuario",
    text: "El usuario puede solicitar acceso, rectificación, actualización o supresión de sus datos personales a través de nuestros canales de contacto.",
  },
]

export default function PrivacidadPage() {
  return (
    <section className="section-wrapper py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Política de Privacidad</h1>
        <div className="space-y-8">
          {sections.map((section) => (
            <LegalSection key={section.title} title={section.title}>
              {section.text}
            </LegalSection>
          ))}
          <LegalSection title="Cookies">
            Este sitio puede utilizar cookies técnicas y analíticas. Para más información, consulta la{" "}
            <Link href="/cookies" className="text-brand-blue hover:text-brand-blue-hover">
              Política de Cookies
            </Link>
            .
          </LegalSection>
          <LegalSection title="Contacto">Para ejercer tus derechos o hacer consultas, escribinos por WhatsApp a {CONTACT.WhatsApp.display}.</LegalSection>
        </div>
      </div>
    </section>
  )
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
      <p className="leading-7 text-text-secondary">{children}</p>
    </section>
  )
}
