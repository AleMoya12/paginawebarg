"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Fuerza el scroll al tope en cada cambio de ruta.
 * En iOS Safari (y a veces Android) el `scroll-behavior: smooth` global
 * interfiere con el scroll-to-top del router de Next y la página nueva
 * queda a mitad de scroll. Acá desactivamos el smooth momentáneamente,
 * saltamos al tope de forma instantánea y lo restauramos para los anclas.
 */
export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    const html = document.documentElement
    const prev = html.style.scrollBehavior
    html.style.scrollBehavior = "auto"
    window.scrollTo(0, 0)
    // Restaurar el smooth para navegación por anclas después del repintado
    requestAnimationFrame(() => {
      html.style.scrollBehavior = prev
    })
  }, [pathname])

  return null
}
