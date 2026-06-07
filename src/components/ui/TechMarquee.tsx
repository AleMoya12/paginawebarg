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
    <section className="overflow-hidden bg-cream py-16">
      <div className="mx-auto mb-10 max-w-6xl px-4 text-center">
        <div className="mx-auto mb-5 h-px w-16 bg-gold" />
        <h2 className="mb-3 text-2xl font-bold text-graphite md:text-3xl">Herramientas que dominamos</h2>
        <p className="text-sm text-text-secondary">El stack con el que construimos y optimizamos cada proyecto.</p>
      </div>

      <div className="relative w-full select-none">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="marque-track flex">
          {doubled.map((tool, i) => (
            <div key={`${tool}-${i}`} className="mx-3 flex-shrink-0 cursor-default whitespace-nowrap rounded-[4px] border border-line bg-white px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors duration-200 hover:border-orange hover:text-graphite">
              {tool}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  )
}
