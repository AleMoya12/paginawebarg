"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import ActiveBadge from "@/components/ui/ActiveBadge"
import { HERO_BACKGROUNDS } from "@/lib/hero-backgrounds"
import { WA } from "@/lib/whatsapp"

type Project = {
  src: string
  alt: string
  badge: string
  title: string
  desc: string
  tech: string
}

const projects: Project[] = [
  { src: "/images/centrobelleza1.webp", alt: "Página web para centro de belleza y spa - diseño moderno con reservas online", badge: "Belleza & Estética", title: "Centro de Belleza", desc: "Diseño elegante para spa, peluquería o centro estético.", tech: "Next.js" },
  { src: "/images/centro-medico.webp", alt: "Página web para centro médico - diseño profesional para clínica y consultorio", badge: "Salud", title: "Centro Médico", desc: "Web profesional para clínica, consultorio o centro de salud.", tech: "Next.js" },
  { src: "/images/cole1.webp", alt: "Página web para colegio e institución educativa - diseño para escuelas", badge: "Educación", title: "Institución Educativa", desc: "Web institucional para escuelas, jardines e institutos.", tech: "WordPress" },
  { src: "/images/mascotas1.webp", alt: "Página web para veterinaria y tienda de mascotas - diseño amigable", badge: "Veterinaria", title: "Clínica Veterinaria", desc: "Web para veterinaria, clínica animal o pet shop.", tech: "WordPress" },
  { src: "/images/odon.webp", alt: "Página web para odontólogo y clínica dental - diseño para dentistas", badge: "Odontología", title: "Clínica Dental", desc: "Diseño limpio y profesional para consultorio odontológico.", tech: "Next.js" },
  { src: "/images/psico1.webp", alt: "Página web para psicólogo y consultorio de psicología - diseño profesional", badge: "Psicología", title: "Consultorio de Psicología", desc: "Web cálida y profesional para psicólogos y terapeutas.", tech: "Next.js" },
  { src: "/images/yoga1.webp", alt: "Página web para centro de yoga, pilates y bienestar - diseño wellness", badge: "Bienestar", title: "Centro de Yoga & Bienestar", desc: "Diseño sereno para yoga, pilates o centro de bienestar.", tech: "WordPress" },
]

export default function PortfolioClient() {
  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null)
    }

    if (selected) {
      document.addEventListener("keydown", handleKey)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [selected])

  return (
    <>
      {selected && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <button className="absolute right-4 top-4 z-[210] rounded-full bg-black/50 p-2.5 text-white/70 transition-all duration-200 hover:bg-black/80 hover:text-white" onClick={() => setSelected(null)} aria-label="Cerrar imagen">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          <div className="relative flex h-full max-h-[90vh] w-full max-w-5xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ maxHeight: "85vh" }}>
              <Image src={selected.src} alt={selected.alt} width={1200} height={800} className="h-auto max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-2xl" priority />
              <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
                <span className="mr-3 rounded-full bg-[#1E293B] px-3 py-1 text-xs text-[#94A3B8]">{selected.badge}</span>
                <span className="font-semibold text-[#F8FAFC]">{selected.title}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className={`${HERO_BACKGROUNDS["/portfolio"]} px-4 py-20 text-center`}>
        <ActiveBadge text="100+ proyectos desarrollados" />
        <h1 className="mb-4 mt-6 text-4xl font-bold text-[#F8FAFC] md:text-5xl">Trabajos que hablan por sí solos</h1>
        <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">Diseños web reales para distintos rubros. Hacé clic en cada imagen para verla completa.</p>
      </section>

      <section className="bg-[#0A0F1E] px-4 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article key={project.title} className={`group relative overflow-hidden rounded-2xl border border-[#1E293B] bg-[#1E293B] transition-all duration-300 hover:border-[#3B82F6] hover:shadow-2xl hover:shadow-blue-500/10 ${i === 6 ? "lg:col-start-2" : ""}`}>
              <div className="relative aspect-[16/10] cursor-zoom-in overflow-hidden" onClick={() => setSelected(project)}>
                <Image src={project.src} alt={project.alt} fill className="bg-[#111827] object-contain transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" onError={(e) => { e.currentTarget.style.display = "none" }} />
                <div className="absolute inset-0 bg-[#3B82F6]/0 transition-all duration-300 group-hover:bg-[#3B82F6]/10" />
                <span className="absolute left-3 top-3 rounded-full border border-[#1E293B] bg-[#0A0F1E]/80 px-3 py-1 text-xs font-semibold text-[#F8FAFC] backdrop-blur-sm">{project.badge}</span>
              </div>

              <div className="p-5">
                <h2 className="mb-1 text-lg font-semibold text-[#F8FAFC]">{project.title}</h2>
                <p className="mb-4 text-sm text-[#94A3B8]">{project.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-2 py-1 text-xs text-[#3B82F6]">{project.tech}</span>
                  <a href={WA.general} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#F97316] transition-colors hover:text-[#EA580C]">Quiero algo similar →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
