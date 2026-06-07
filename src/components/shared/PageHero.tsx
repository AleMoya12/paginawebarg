import Button from "@/components/ui/Button"

interface PageHeroProps {
  title: string
  description: string
  WhatsAppHref: string
}

export default function PageHero({ title, description = "Contenido en construcción - Fase 2", WhatsAppHref }: PageHeroProps) {
  return (
    <section className="hero-bg hero-bg-design-1 site-hero">
      <div className="section-wrapper">
        <div className="max-w-3xl">
          <div className="rule-gold mb-6" />
          <h1 className="text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">{description}</p>
          {WhatsAppHref && (
            <Button href={WhatsAppHref} variant="WhatsApp" className="mt-10">
              Consultar por WhatsApp
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
