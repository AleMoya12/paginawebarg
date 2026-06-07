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
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDesign = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDesignOpen(true)
  }

  const closeDesign = () => {
    timeoutRef.current = setTimeout(() => setDesignOpen(false), 150)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // Texto/links del navbar: oscuros sobre el hero claro, claros cuando el navbar es sólido
  const linkColor = scrolled
    ? "text-cream/70 hover:text-white"
    : "text-graphite/70 hover:text-graphite"

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line-dark bg-graphite/95 backdrop-blur-md"
          : "border-b border-transparent bg-cream/30 backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center gap-8 px-4 py-3 sm:px-6 lg:gap-12 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo6.png"
            alt="Página Web Arg"
            width={560}
            height={144}
            priority
            className={`w-auto transition-all duration-500 ${scrolled ? "h-16 md:h-20" : "h-28 md:h-32"} ${scrolled ? "" : "brightness-0"}`}
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative inline-block py-1 transition-colors ${linkColor}`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-orange transition-transform duration-300 group-hover:scale-x-100`}
              />
            </Link>
          ))}

          <div className="relative" onMouseEnter={openDesign} onMouseLeave={closeDesign}>
            <button className={`group relative flex items-center gap-1 py-1 transition-colors ${linkColor}`}>
              <span className="relative inline-block">
                Diseños
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-orange transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <svg
                className={`mt-0.5 h-3 w-3 transition-transform duration-200 ${designOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {designOpen && (
              <div className="absolute right-0 top-full z-50 pt-3">
                <div className="min-w-[230px] overflow-hidden rounded-[6px] border border-line bg-white py-2 shadow-[0_20px_50px_-20px_rgba(16,24,40,0.45)]">
                  {designLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block border-l-2 border-transparent px-4 py-2.5 text-sm text-graphite/70 transition-all duration-200 hover:border-orange hover:bg-cream hover:text-graphite"
                      onClick={() => setDesignOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary h-10 px-5 text-sm"
          >
            Consultar por WhatsApp
          </a>
        </nav>

        <button
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 transition-colors sm:right-6 md:hidden lg:right-8 ${scrolled ? "text-cream" : "text-graphite"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu con animación de apertura */}
      <div
        className={`overflow-hidden border-b border-line-dark bg-graphite transition-[max-height,opacity] duration-500 ease-in-out md:hidden ${
          mobileOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-stretch gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-l-2 border-transparent py-2.5 pl-3 text-base text-cream/80 transition-all hover:border-orange hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="my-3 h-px w-full bg-line-dark" />
          <p className="pl-3 text-xs uppercase tracking-wider text-gold">Diseños</p>
          {designLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-l-2 border-transparent py-2 pl-3 text-sm text-cream/70 transition-all hover:border-orange hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 w-full"
            onClick={() => setMobileOpen(false)}
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
