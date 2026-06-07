import Image from "next/image"
import Link from "next/link"
import { CONTACT } from "@/constants/contact"
import { FOOTER_LINKS } from "@/constants/navigation"
import { WA } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/ui/Button"

export default function Footer() {
  return (
    <footer className="border-t-2 border-orange bg-graphite text-cream">
      <div className="section-wrapper py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-5 flex items-center">
              <Image src="/images/logo6.png" alt="Página Web Arg" width={360} height={90} className="h-20 w-auto" />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-cream/60">
              Diseño web profesional para pymes y emprendedores en Argentina, Latinoamérica y España. Hosting, SSL y SEO básico incluidos.
            </p>
            <a href={WA.general} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-brand-green transition-opacity hover:opacity-80">
              <WhatsAppIcon />
              {CONTACT.WhatsApp.display}
            </a>
          </div>

          <FooterColumn title="Diseños" links={FOOTER_LINKS.designs} />
          <FooterColumn title="Empresa" links={FOOTER_LINKS.empresa} />

          <div>
            <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
            <div className="mt-6 rounded-[4px] border border-line-dark bg-graphite-light p-5">
              <p className="mb-3 text-xs text-cream/60">Necesitás una web. Hablemos sin costo.</p>
              <a href={WA.presupuesto} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-xs">
                Pedir presupuesto
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line-dark pt-6 sm:flex-row">
          <p className="text-xs text-cream/50">© 2026 Página Web Arg · paginawebarg.com.ar · Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-cream/50 transition-colors hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
        <span className="h-px w-5 bg-gold" />
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-cream/60 transition-colors hover:text-orange">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
