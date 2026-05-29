import type { Metadata } from "next"
import PortfolioClient from "./PortfolioClient"

export const metadata: Metadata = {
  title: "Portfolio | Ejemplos de Diseño Web Profesional | Página Web Arg",
  description: "Diseños web reales para salud, educación, bienestar, veterinaria, odontología y más. Hacé clic para ver cada proyecto completo.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/portfolio" },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}


