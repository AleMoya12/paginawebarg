import type { Metadata } from "next"
import { CONTACT } from "@/constants/contact"
import { WA } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/ui/Button"
import ActiveBadge from "@/components/ui/ActiveBadge"
import { HERO_BACKGROUNDS } from "@/lib/hero-backgrounds"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Contacto | Consultanos sin Compromiso | Página Web Arg",
  description: "Escribinos por WhatsApp y respondemos en el día. Primera consulta gratuita y sin compromiso para tu página web profesional.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/contacto" },
}

const steps = [
  ["Nos contás tu proyecto", "Describinos brevemente qué necesitás: qué tipo de web, para queé rubro, si ya tenés algo o empezás de cero."],
  ["Te enviamos una propuesta", "En el día te mandamos una propuesta con qué incluye, precio y tiempos de entrega. Sin compromiso."],
  ["Arrancamos cuando vos querés", "Si la propuesta te convence, coordinamos los pasos siguientes. Si no, no pasa nada, no hay presión."],
]

const faqs = [
  [
    "¿Con qué información necesitan que los contacte?",
    "Con lo básico: qué tipo de negocio tenés, qué necesitás y si ya tenés dominio o hosting. Con eso alcanza para darte una propuesta inicial.",
  ],
  ["¿Hacen presupuestos sin compromiso?", "Sí. El presupuesto es completamente gratuito y sin ningún tipo de compromiso."],
  ["¿En cuánto tiempo responden?", "Respondemos en el día o como máximo al día siguiente hábil. Atendemos de lunes a viernes de 9 a 19 hs."],
  ["¿Trabajan con clientes de todo el país?", "Sí. Trabajamos de forma 100% remota y tenemos clientes en distintas ciudades de Argentina."],
]

export default function ContactoPage() {
  return (
    <>
      <section className={`${HERO_BACKGROUNDS["/contacto"]} pt-24 pb-16 text-center md:pt-32`}>
        <div className="section-wrapper">
          <ActiveBadge text="Respondemos en el día" />
          <h1 className="mt-6 text-4xl font-bold md:text-6xl">Hablemos de tu proyecto</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
            Contanos qué necesitás y te respondemos en el día. Sin formularios complicados ni esperas eternas.
          </p>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper max-w-[600px]">
          <article className="rounded-2xl border border-brand-green bg-slate-card p-10 text-center">
            <WhatsAppIcon className="mx-auto h-12 w-12 text-brand-green" />
            <h2 className="mt-6 text-3xl font-bold">Escribinos por WhatsApp</h2>
            <p className="mt-4 leading-7 text-text-secondary">
              Es la forma más rápida de contactarnos. Respondemos en el día, de lunes a viernes de 9 a 19 hs.
            </p>
            <p className="mt-6 text-2xl font-semibold text-text-primary">{CONTACT.WhatsApp.display}</p>
            <a href={WA.general} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-brand-green px-8 py-4 font-semibold text-white hover:bg-green-600">
              Abrir WhatsApp
            </a>
          </article>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="section-wrapper">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Qué pasa después de que nos escribís</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map(([title, text]) => (
              <article key={title} className="card">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper max-w-4xl">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Antes de escribirnos, quizás te preguntás...</h2>
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

      <section className="bg-brand-blue py-20 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">Empezá ahora</h2>
        <p className="mt-5 text-white/90">La primera consulta no tiene ningún costo.</p>
        <a href={WA.general} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-[#1E3A5F]">
          Escribinos por WhatsApp
        </a>
      </section>
          <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Contacto", item: "https://www.paginawebarg.com.ar/contacto" },
      ])} />
    </>
  )
}




