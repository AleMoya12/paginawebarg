"use client"

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
      ctaLink: "https://wa.me/5491164990312?text=Hola%2C%20quiero%20consultar%20sobre%20la%20Web%20Esencial",
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
      ctaLink: "https://wa.me/5491164990312?text=Hola%2C%20quiero%20consultar%20sobre%20la%20Web%20Profesional",
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
      ctaLink: "https://wa.me/5491164990312?text=Hola%2C%20quiero%20consultar%20sobre%20la%20Web%20Premium",
      highlighted: false,
    },
  ],
}

export default function PricingSection() {
  return (
    <section className="bg-[#0A0F1E] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#F8FAFC] md:text-4xl">Nuestros planes</h2>
          <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">Elegí el plan que mejor se adapta a tu negocio. Todos incluyen SEO básico y 6 meses de hosting.</p>
        </div>

        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-3">
          {plans.monthly.map((plan) =>
            plan.highlighted ? (
              <div key={plan.name} className="rounded-3xl p-0.5 shadow-2xl" style={{ background: "linear-gradient(135deg, #3B82F6, #F97316)" }}>
                <p className="py-2 text-center text-sm font-semibold text-white">Más elegido</p>
                <div className="rounded-[22px] bg-[#111827] p-6">
                  <h3 className="mb-4 text-sm text-[#94A3B8]">{plan.name}</h3>
                  <p className="mb-1 text-[28px] font-bold text-[#F8FAFC]">{plan.priceLabel}</p>
                  <p className="mb-6 text-xs text-[#94A3B8]">{plan.description}</p>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block w-full rounded-full py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ background: "linear-gradient(to right, #3B82F6, #F97316)" }}>
                    {plan.cta}
                  </a>
                </div>
              </div>
            ) : (
              <div key={plan.name} className="rounded-3xl border border-[#1E293B] bg-[#111827] p-6 transition-all duration-300 hover:border-[#3B82F6] hover:shadow-lg">
                <h3 className="mb-4 text-sm text-[#94A3B8]">{plan.name}</h3>
                <p className="mb-1 text-[28px] font-bold text-[#F8FAFC]">{plan.priceLabel}</p>
                <p className="mb-6 text-xs text-[#94A3B8]">{plan.description}</p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer" className="block w-full rounded-full py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ background: "linear-gradient(to right, #3B82F6, #F97316)" }}>
                  {plan.cta}
                </a>
              </div>
            ),
          )}
        </div>

        <p className="mt-8 text-center text-sm text-[#94A3B8]">Todos los presupuestos son personalizados. El precio final depende del alcance del proyecto.</p>
      </div>
    </section>
  )
}
