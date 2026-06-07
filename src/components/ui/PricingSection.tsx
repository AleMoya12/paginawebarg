"use client"

import { WA } from "@/lib/whatsapp"

const plans = {
  monthly: [
    {
      name: "Web Esencial",
      priceLabel: "Consultar",
      description: "Ideal para emprendedores y profesionales que necesitan presencia online rápida.",
      features: [
        "Landing page de 1 sola página",
        "Diseño responsive",
        "Botón de WhatsApp integrado",
        "SEO básico incluido",
        "6 meses de hosting incluido",
        "Certificado SSL",
        "Dominio no incluido",
      ],
      cta: "Consultar por WhatsApp",
      ctaLink: WA.general,
      highlighted: false,
    },
    {
      name: "Web Profesional",
      priceLabel: "Consultar",
      description: "Para pymes y profesionales que necesitan un sitio completo y autoadministrable.",
      features: [
        "Hasta 6 secciones personalizadas",
        "WordPress o Next.js según el proyecto",
        "Panel de administración de contenido",
        "Formulario de contacto",
        "Integración CRM/WhatsApp (opcional)",
        "SEO técnico completo",
        "6 meses de hosting incluido",
        "Certificado SSL",
        "Capacitación incluida",
        "Dominio no incluido",
      ],
      cta: "Consultar por WhatsApp",
      ctaLink: WA.general,
      highlighted: true,
    },
    {
      name: "Web Premium",
      priceLabel: "Consultar",
      description: "Diseño exclusivo desde cero, sin plantillas, con funcionalidades avanzadas.",
      features: [
        "Diseño 100% exclusivo sin plantillas",
        "Desarrollada en Next.js",
        "Animaciones y transiciones avanzadas",
        "Hasta 8 secciones personalizadas",
        "Tienda online o funcionalidades a medida",
        "Core Web Vitals optimizados",
        "SEO técnico avanzado",
        "6 meses de hosting incluido",
        "Código fuente entregado",
        "Dominio no incluido",
      ],
      cta: "Consultar por WhatsApp",
      ctaLink: WA.general,
      highlighted: false,
    },
  ],
}

export default function PricingSection() {
  return (
    <section className="bg-cream px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <div className="mx-auto mb-5 h-px w-16 bg-gold" />
          <h2 className="mb-4 text-3xl font-bold text-graphite md:text-5xl">Nuestros planes</h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">Elegí el plan que mejor se adapta a tu negocio. Todos incluyen SEO básico y 6 meses de hosting.</p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {plans.monthly.map((plan) => {
            const highlighted = plan.highlighted
            return (
              <div
                key={plan.name}
                className={`reveal flex flex-col rounded-[4px] p-8 transition-all duration-300 ${
                  highlighted
                    ? "bg-graphite text-cream shadow-[0_30px_70px_-30px_rgba(16,24,40,0.6)]"
                    : "border border-line bg-white hover:-translate-y-1 hover:shadow-[0_18px_45px_-24px_rgba(16,24,40,0.45)]"
                }`}
              >
                {highlighted && (
                  <span className="mb-5 inline-flex w-fit items-center rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
                    Más elegido
                  </span>
                )}
                <h3 className={`font-display text-sm uppercase tracking-wide ${highlighted ? "text-gold" : "text-text-secondary"}`}>{plan.name}</h3>
                <p className={`mb-1 mt-3 font-display text-4xl font-bold ${highlighted ? "text-white" : "text-graphite"}`}>{plan.priceLabel}</p>
                <p className={`mb-6 text-sm ${highlighted ? "text-cream/60" : "text-text-secondary"}`}>{plan.description}</p>
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${highlighted ? "text-cream/80" : "text-text-secondary"}`}>
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full rounded-[4px] py-3 text-center text-sm font-semibold transition-all duration-300 ${
                    highlighted
                      ? "bg-orange text-white hover:bg-orange-hover"
                      : "border border-graphite text-graphite hover:bg-graphite hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-text-secondary">Todos los presupuestos son personalizados. El precio final depende del alcance del proyecto.</p>
      </div>
    </section>
  )
}
