"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { WA } from "@/lib/whatsapp"

const designLinks = [
  { label: "Web Premium", href: "/web-premium" },
  { label: "Web para Emprendedores", href: "/web-para-profesionales" },
  { label: "Web Autoadministrable", href: "/web-autoadministrable" },
  { label: "Tienda Online", href: "/tienda-online" },
  { label: "Web para Prepagas", href: "/web-para-prepagas" },
  { label: "Web para Pymes", href: "/web-para-pymes" },
  { label: "Web para Hoteles", href: "/web-para-hoteles" },
  { label: "Web para Escuelas", href: "/web-para-escuelas" },
  { label: "Web para Barrios Cerrados", href: "/web-para-barrios-cerrados" },
]

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [designOpen, setDesignOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDesign = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDesignOpen(true)
  }

  const closeDesign = () => {
    timeoutRef.current = setTimeout(() => setDesignOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[#1E293B] bg-[#0A0F1E]/80 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4">
        <Link href="/" className="shrink-0">
          <Image src="/images/logo6.png" alt="Página Web Arg" width={560} height={144} priority className="h-16 w-auto md:h-20" />
        </Link>
        <nav className="ml-auto flex shrink-0 items-center rounded-full border border-[#1E293B] bg-[#0A0F1E] px-3 py-3 text-sm text-white md:flex-1 md:px-6">

        <div className="ml-8 hidden flex-1 items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group relative h-5 overflow-hidden text-[#94A3B8] transition-colors hover:text-[#F8FAFC]">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
              <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
            </Link>
          ))}

          <div className="relative" onMouseEnter={openDesign} onMouseLeave={closeDesign}>
            <button className="group relative flex h-5 items-center gap-1 overflow-hidden text-[#94A3B8] transition-colors hover:text-[#F8FAFC]">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">Diseños</span>
              <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">Diseños</span>
              <svg className={`mt-0.5 h-3 w-3 transition-transform duration-200 ${designOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {designOpen && (
              <div className="absolute left-0 top-full z-50 pt-3">
                <div className="min-w-[220px] overflow-hidden rounded-2xl border border-[#1E293B] bg-[#111827] py-2 shadow-2xl shadow-black/40">
                  {designLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-[#94A3B8] transition-colors hover:bg-[#3B82F6]/10 hover:text-[#F8FAFC]" onClick={() => setDesignOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <Link href="/contacto" className="rounded-full border border-[#1E293B] px-4 py-2 text-sm font-medium text-[#94A3B8] transition-all duration-200 hover:bg-[#1E293B] hover:text-[#F8FAFC]">
            Contacto
          </Link>
          <a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0A0F1E] shadow-[0px_0px_20px_6px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-slate-100 hover:shadow-[0px_0px_30px_10px_rgba(255,255,255,0.25)]"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
            Consultar por WhatsApp
          </a>
        </div>

        <button className="ml-auto p-2 text-[#94A3B8] md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir menú">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></> : <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>}
          </svg>
        </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col items-center gap-4 border-b border-[#1E293B] bg-[#111827] px-4 py-6 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-base text-[#94A3B8] transition-colors hover:text-[#F8FAFC]" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="h-px w-full bg-[#1E293B]" />
          <p className="text-xs uppercase tracking-wider text-[#94A3B8]">Diseños</p>
          {designLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-[#94A3B8] transition-colors hover:text-[#F8FAFC]" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="h-px w-full bg-[#1E293B]" />
          <a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#0A0F1E] shadow-[0px_0px_20px_6px_rgba(255,255,255,0.15)]"
            onClick={() => setMobileOpen(false)}
          >
            Consultar por WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
