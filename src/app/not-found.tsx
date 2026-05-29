import Link from "next/link"
import { WA } from "@/lib/whatsapp"

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="section-wrapper py-20 text-center">
        <h1 className="mb-4 text-8xl font-bold text-brand-blue">404</h1>
        <h2 className="mb-4 text-2xl font-bold">Página no encontrada</h2>
        <p className="mb-8 text-text-secondary">La página que buscas no existe o fue movida.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>
          <a href={WA.general} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
