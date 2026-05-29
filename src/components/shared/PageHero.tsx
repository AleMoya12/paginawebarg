import Button from "@/components/ui/Button"

interface PageHeroProps {
  title: string
  description: string
  WhatsAppHref: string
}

export default function PageHero({ title, description = "Contenido en construcción - Fase 2", WhatsAppHref }: PageHeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="section-wrapper py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold">{title}</h1>
        <p className="mb-8 text-text-secondary">{description}</p>
        {WhatsAppHref && (
          <Button href={WhatsAppHref} variant="WhatsApp">
            Consultar por WhatsApp
          </Button>
        )}
      </div>
    </section>
  )
}
