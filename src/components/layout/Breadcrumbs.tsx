"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const labels: Record<string, string> = {
  servicios: "Servicios",
  portfolio: "Portfolio",
  nosotros: "Nosotros",
  contacto: "Contacto",
  publicidad: "Publicidad",
  blog: "Blog",
  "web-premium": "Web Premium",
  "web-para-profesionales": "Web para Profesionales",
  "web-autoadministrable": "Web Autoadministrable",
  "tienda-online": "Tienda Online",
  "web-para-prepagas": "Web para Prepagas",
  "web-para-pymes": "Web para Pymes",
  "web-para-hoteles": "Web para Hoteles",
  "web-para-escuelas": "Web para Escuelas",
  "web-para-barrios-cerrados": "Web para Barrios Cerrados",
  privacidad: "Política de Privacidad",
  cookies: "Política de Cookies",
  "terminos-y-condiciones": "Términos y Condiciones",
  "aviso-legal": "Aviso Legal",
}

function segmentLabel(segment: string) {
  return labels[segment] ?? segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  if (!pathname || pathname === "/" || pathname === "/404") return null

  const parts = pathname.split("/").filter(Boolean)
  if (parts.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="border-b border-[#1E293B] bg-[#0A0F1E] px-4 py-3">
      <ol className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 text-sm text-[#94A3B8]">
        <li>
          <Link href="/" className="hover:text-[#F8FAFC]">Inicio</Link>
        </li>
        {parts.map((part, index) => {
          const href = `/${parts.slice(0, index + 1).join("/")}`
          const last = index === parts.length - 1
          return (
            <li key={href} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {last ? (
                <span aria-current="page" className="text-[#F8FAFC]">{segmentLabel(part)}</span>
              ) : (
                <Link href={href} className="hover:text-[#F8FAFC]">{segmentLabel(part)}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
