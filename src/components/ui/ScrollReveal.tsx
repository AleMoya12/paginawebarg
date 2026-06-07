"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Reveal on scroll con CSS puro + Intersection Observer.
 * Cualquier elemento con la clase `.reveal` aparece con un fade/slide
 * suave al entrar en viewport. Sin librerías de animación.
 */
export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    if (elements.length === 0) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      elements.forEach((el) => el.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
