import Image from "next/image"
import Link from "next/link"
import { CONTACT } from "@/constants/contact"
import { FOOTER_LINKS } from "@/constants/navigation"
import { WA } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/ui/Button"

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-card bg-navy-light">
      <div className="section-wrapper py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center">
              <Image src="/images/logo6.png" alt="Página Web Arg" width={360} height={90} className="h-20 w-auto opacity-90" />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-text-secondary">
              Diseño web profesional para pymes y emprendedores en Argentina, Latinoamérica y España. Hosting, SSL y SEO básico incluidos.
            </p>
            <a href={WA.general} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-brand-green hover:opacity-80">
              <WhatsAppIcon />
              {CONTACT.WhatsApp.display}
            </a>
          </div>

          <FooterColumn title="Diseños" links={FOOTER_LINKS.designs} />
          <FooterColumn title="Empresa" links={FOOTER_LINKS.empresa} />

          <div>
            <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
            <div className="mt-6 rounded-lg border border-slate-card bg-slate-card p-4">
              <p className="mb-3 text-xs text-text-secondary">Necesitás una web. Hablemos sin costo.</p>
              <a href={WA.presupuesto} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-xs">
                Pedir presupuesto
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-card pt-6 sm:flex-row">
          <p className="text-xs text-text-secondary">© 2026 Página Web Arg · paginawebarg.com.ar · Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-text-secondary hover:text-text-primary">
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
      <h3 className="mb-4 text-sm font-semibold uppercase text-text-primary">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-text-secondary hover:text-brand-blue">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
