const tools = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "WordPress", "WooCommerce", "PrestaShop",
  "Google Ads", "Google Analytics 4", "Search Console",
  "SEMrush", "Screaming Frog", "Ahrefs",
  "HubSpot", "Kommo", "WhatsApp API",
  "Vercel", "GitHub", "Figma",
  "JSON-LD", "Schema Markup", "Core Web Vitals",
]

const doubled = [...tools, ...tools]

export default function TechMarque() {
  return (
    <section className="overflow-hidden bg-[#0A0F1E] py-16">
      <div className="mx-auto mb-10 max-w-6xl px-4 text-center">
        <h2 className="mb-3 text-2xl font-bold text-[#F8FAFC] md:text-3xl">Herramientas que dominamos</h2>
        <p className="text-sm text-[#94A3B8]">El stack con el que construimos y optimizamos cada proyecto.</p>
      </div>

      <div className="relative w-full select-none">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0A0F1E] to-transparent" />
        <div className="marque-track flex">
          {doubled.map((tool, i) => (
            <div key={`${tool}-${i}`} className="mx-4 flex-shrink-0 cursor-default whitespace-nowrap rounded-full border border-[#1E293B] bg-[#1E293B] px-5 py-2.5 text-sm font-medium text-[#94A3B8] transition-colors duration-200 hover:border-[#3B82F6] hover:text-[#F8FAFC]">
              {tool}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0A0F1E] to-transparent" />
      </div>
    </section>
  )
}
