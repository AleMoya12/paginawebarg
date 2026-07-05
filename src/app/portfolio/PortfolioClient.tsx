"use client"

import { useMemo, useState } from "react"
import { HERO_BACKGROUNDS } from "@/lib/hero-backgrounds"
import { WA } from "@/lib/whatsapp"
import { CATEGORIES, projects, type ProjectCategory, type Stack } from "./projects"

type Filter = "Todos" | ProjectCategory

// Tinte suave por categoría para diferenciar visualmente cada card
const categoryStyles: Record<ProjectCategory, { card: string; chip: string }> = {
  "Profesionales y estudios": {
    card: "bg-[#EDF1F6] border-[#D5DEEA] hover:border-[#B4C4DA]",
    chip: "bg-white/70 text-[#3D5A80]",
  },
  "Portales de contenido": {
    card: "bg-[#EDF3ED] border-[#D2E0D2] hover:border-[#B6CEB6]",
    chip: "bg-white/70 text-[#4F7355]",
  },
  "Tecnología e IA": {
    card: "bg-[#F9F1E9] border-[#EFD9C6] hover:border-[#E7C2A3]",
    chip: "bg-white/70 text-orange",
  },
  "Diseño y arte": {
    card: "bg-[#F1EEF6] border-[#DDD5EB] hover:border-[#C9BCDE]",
    chip: "bg-white/70 text-[#6B5B95]",
  },
}

// Badge de stack tecnológico (uno por proyecto)
const stackStyles: Record<Stack, string> = {
  "Next.js": "bg-graphite/10 text-graphite",
  WordPress: "bg-[#21759B]/12 text-[#21759B]",
  HTML: "bg-orange/12 text-orange",
}

export default function PortfolioClient() {
  const [filter, setFilter] = useState<Filter>("Todos")

  const filters: Filter[] = ["Todos", ...CATEGORIES]

  const counts = useMemo(() => {
    const map = new Map<Filter, number>()
    map.set("Todos", projects.length)
    for (const category of CATEGORIES) {
      map.set(category, projects.filter((p) => p.category === category).length)
    }
    return map
  }, [])

  const visible = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <>
      {/* ── Hero ── */}
      <section className={`${HERO_BACKGROUNDS["/portfolio"]} site-hero`}>
        <div className="section-wrapper">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-orange">
              Algunos de los sitios web que desarrollamos
            </span>
            <div className="rule-gold mb-6 mt-4" />
            <h1 className="text-4xl font-bold md:text-6xl">Sitios web que diseñamos y desarrollamos</h1>
            <p className="mt-5 max-w-2xl text-lg text-text-secondary">
              Estudios profesionales, portales de contenido, plataformas de tecnología e IA y proyectos de diseño.
              Cada web fue pensada, diseñada y desarrollada por nuestro equipo. Entrá y recorré cada una.
            </p>
            <div className="mt-8">
              <a href={WA.general} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Quiero mi web
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filtros + grilla ── */}
      <section className="bg-cream px-4 pb-24 pt-10 md:pt-12 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap gap-2.5" role="group" aria-label="Filtrar proyectos por categoría">
            {filters.map((f) => {
              const active = filter === f
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={`inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "border-graphite bg-graphite text-white"
                      : "border-line bg-white text-graphite hover:border-graphite/40"
                  }`}
                >
                  {f}
                  <span className={active ? "text-white/60" : "text-graphite/40"}>{counts.get(f)}</span>
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => {
              const tint = categoryStyles[project.category]
              return (
                <a
                  key={project.url}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver el sitio de ${project.name} (se abre en una pestaña nueva)`}
                  className={`group flex h-full cursor-pointer flex-col rounded-[4px] border p-6 no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-26px_rgba(16,24,40,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${tint.card}`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${tint.chip}`}>
                      {project.category}
                    </span>
                    <span className={`rounded-[4px] px-2 py-1 text-[11px] font-semibold ${stackStyles[project.stack]}`}>
                      {project.stack}
                    </span>
                  </div>

                  <h2 className="mb-2 text-xl font-bold">{project.name}</h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">{project.description}</p>

                  <span className="mt-auto inline-flex items-center gap-1.5 self-start text-sm font-semibold text-orange transition-all duration-200 group-hover:gap-2.5 group-hover:text-orange-hover">
                    Ver sitio
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="bg-graphite px-4 py-20 text-center">
        <div className="section-wrapper">
          <div className="rule-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-cream md:text-4xl">¿Querés una web como estas?</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Contanos tu proyecto y armamos una propuesta a medida. Diseño, desarrollo, SEO y WhatsApp incluidos.
          </p>
          <a href={WA.general} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
            Quiero mi web
          </a>
        </div>
      </section>
    </>
  )
}
