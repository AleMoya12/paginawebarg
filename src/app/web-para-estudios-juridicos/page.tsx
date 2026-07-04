import type { Metadata } from "next"
import ActiveBadge from "@/components/ui/ActiveBadge"
import { HERO_BACKGROUNDS } from "@/lib/hero-backgrounds"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data"
import { CheckItem } from "@/components/ui/CheckItem"

const wa =
  "https://wa.me/5491164990312?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20dise%C3%B1o%20web%20para%20estudios%20jur%C3%ADdicos"

export const metadata: Metadata = {
  title: "Diseño Web para Estudios Jurídicos y Abogados | Página Web Arg",
  description:
    "Diseñamos páginas web profesionales para abogados y estudios jurídicos. SEO jurídico, WhatsApp integrado, diseño que transmite confianza. Mirá ejemplos reales.",
  keywords:
    "diseño web para abogados, página web estudio jurídico, web para abogados Argentina, diseño web abogados Buenos Aires, página web para abogados",
  alternates: { canonical: "https://www.paginawebarg.com.ar/web-para-estudios-juridicos" },
  openGraph: {
    title: "Diseño Web para Estudios Jurídicos y Abogados | Página Web Arg",
    description:
      "Páginas web profesionales para abogados. SEO, WhatsApp y diseño que transmite confianza y genera consultas.",
    url: "https://www.paginawebarg.com.ar/web-para-estudios-juridicos",
  },
}

const benefits = [
  ["Te encuentran en Google", "Cuando alguien busca 'abogado laboral en Buenos Aires' o 'estudio jurídico cerca mío', tu web aparece en los resultados. Sin web, esos clientes van directo a tu competencia."],
  ["Genera confianza en segundos", "Un potencial cliente tarda menos de 5 segundos en decidir si confía en un profesional. Una web con diseño profesional transmite seriedad, trayectoria y orden — exactamente lo que buscan en un abogado."],
  ["Tus clientes te contactan directo", "Botón de WhatsApp visible, formulario de consulta y datos de contacto claros. El visitante encuentra lo que necesita y te escribe sin intermediarios."],
  ["Mostrás tus especialidades con claridad", "Derecho laboral, penal, civil, familia — cada área con su sección. El cliente entiende rápido si podés ayudarlo, sin tecnicismos innecesarios."],
]

const audience = [
  ["Estudios jurídicos con equipo", "Web completa con áreas de práctica, equipo de profesionales, casos de éxito y múltiples vías de contacto. Diseño premium que refleja trayectoria."],
  ["Abogados independientes", "Presencia digital profesional sin complejidad. Una web clara con tus servicios, tu experiencia y un botón para que te contacten al instante."],
  ["Estudios en crecimiento", "Tu estudio está creciendo y necesita una imagen digital a la altura. Web escalable que se adapta a medida que sumás áreas o profesionales."],
]

const includes = [
  "Diseño profesional y sobrio que transmite confianza",
  "Sección de áreas de práctica (civil, laboral, penal, familia, etc.)",
  "Página de equipo con perfil de cada profesional",
  "Formulario de consulta confidencial",
  "Botón de WhatsApp siempre visible",
  "Diseño responsive (celular, tablet y computadora)",
  "SEO técnico para aparecer en búsquedas jurídicas",
  "Certificado SSL (conexión segura https)",
  "6 meses de hosting incluido",
  "Velocidad de carga optimizada",
]

const differentiators = [
  ["Diseño que transmite autoridad", "Tipografías serias, paleta de colores sobria, estructura limpia. Tu web tiene que verse como la oficina de un estudio exitoso: ordenada, profesional y sin distracciones."],
  ["Contenido pensado para el cliente, no para abogados", "Tus visitantes no son colegas — son personas con un problema legal. Escribimos el contenido de tu web en lenguaje claro, explicando qué hacés y cómo podés ayudarlos, sin jerga jurídica innecesaria."],
  ["SEO jurídico: que te encuentren por especialidad", "Optimizamos tu web para que aparezca en búsquedas como 'abogado de familia en [tu ciudad]' o 'estudio jurídico laboral'. No alcanza con estar en internet — hay que aparecer cuando el cliente te necesita."],
]

const steps = [
  ["01", "Nos contás sobre tu estudio", "Por WhatsApp o una llamada corta. Queremos entender tus áreas de práctica, tu público y qué querés que transmita tu web."],
  ["02", "Te enviamos la propuesta", "Diseño, funcionalidades y costo. Sin compromiso, sin sorpresas."],
  ["03", "Diseñamos y desarrollamos", "Te mostramos avances y hacemos los ajustes necesarios. Participás del proceso."],
  ["04", "Lanzamos y te acompañamos", "Publicamos tu web, te explicamos cómo funciona y quedamos disponibles."],
]

const faqs = [
  ["¿Cuánto tarda en estar lista mi web?", "Una web esencial de una página la entregamos en 7 a 14 días hábiles. Un sitio premium con múltiples páginas puede llevar entre 3 y 5 semanas, dependiendo del contenido y las funcionalidades."],
  ["¿Necesito tener un logo o contenido preparado?", "No. Te asesoramos con el contenido y podemos trabajar con tu identidad actual o ayudarte a definirla. Solo necesitamos saber sobre tu estudio, tus áreas de práctica y a quién querés llegar."],
  ["¿El hosting y el dominio están incluidos?", "El hosting está incluido los primeros 6 meses, sin costo. El dominio es un costo aparte que te ayudamos a contratar y configurar."],
  ["¿Puedo actualizar el contenido yo mismo?", "Depende del tipo de web. En proyectos con WordPress, tenés un panel para editar textos e imágenes. En webs desarrolladas en Next.js, coordinamos las actualizaciones con vos."],
  ["¿La web aparece en Google automáticamente?", "Todas nuestras webs incluyen SEO técnico de base: metadatos, estructura semántica, velocidad optimizada y sitemap. Esto permite que Google indexe tu sitio. Para un posicionamiento más agresivo, ofrecemos planes de SEO mensual como servicio adicional."],
  ["¿Puedo ver cómo quedaría antes de contratar?", "Podés explorar los dos ejemplos que diseñamos (Esencial y Premium) para tener una idea concreta del resultado. Además, durante el proceso de diseño te mostramos avances antes de publicar."],
]

export default function WebParaEstudiosJuridicosPage() {
  return (
    <>
      <section className={`${HERO_BACKGROUNDS["/web-para-estudios-juridicos"]} site-hero text-center`}>
        <div className="section-wrapper">
          <ActiveBadge text="Abogados y estudios jurídicos" />
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">La web que tu estudio jurídico necesita para conseguir más clientes</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">Diseñamos páginas web profesionales para abogados, estudios jurídicos y profesionales del derecho. Claras, rápidas y optimizadas para que tus clientes te encuentren en Google.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">Consultar por WhatsApp</a>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="section-wrapper">
          <h2 className="text-center text-3xl font-bold md:text-5xl">El 85% de las personas busca un abogado en Google antes de contactarlo</h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-text-secondary">Si tu estudio no tiene presencia digital, esos clientes eligen a otro. Una web profesional trabaja para vos las 24 horas.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Trabajamos con profesionales del derecho de toda Argentina</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audience.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="section-wrapper">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Todo lo que necesita una web jurídica profesional</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {includes.map((item) => <CheckItem key={item} text={item} />)}
            <CheckItem text="Dominio (se contrata aparte - te asesoramos)" checked={false} />
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper">
          <h2 className="text-center text-3xl font-bold md:text-5xl">No es lo mismo una web para un comercio que para un estudio jurídico</h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-text-secondary">Un sitio web para abogados necesita transmitir algo que no todas las webs necesitan: autoridad y confidencialidad.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differentiators.map(([h, t]) => <article key={h} className="card"><h3 className="text-xl font-bold">{h}</h3><p className="mt-3 leading-7 text-text-secondary">{t}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="section-wrapper">
          <h2 className="text-center text-3xl font-bold md:text-5xl">De la idea al sitio en 4 pasos</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([n, h, t]) => (
              <article key={n} className="card">
                <span className="text-3xl font-bold text-gold">{n}</span>
                <h3 className="mt-3 text-xl font-bold">{h}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="section-wrapper">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Mirá cómo queda una web para un estudio jurídico</h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-text-secondary">Estos son dos ejemplos reales que diseñamos. Explorá cada uno para ver la diferencia entre un sitio esencial y uno premium.</p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="flex flex-col rounded-[6px] border border-gold/40 bg-white p-7">
              <span className="w-fit rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold tracking-wide text-gold">ESENCIAL</span>
              <h3 className="mt-5 text-2xl font-bold">García Abogados</h3>
              <p className="mt-3 leading-7 text-text-secondary">Web de una sola página para un abogado independiente. Diseño limpio, servicios claros, formulario de contacto y WhatsApp. Ideal para profesionales que buscan presencia digital sin complejidad.</p>
              <p className="mt-4 text-sm font-medium text-text-secondary">Una sola página · Diseño minimalista · Formulario de contacto · WhatsApp integrado · Responsive</p>
              <a href="https://estudio-juridico-2.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline mt-auto w-fit">Ver ejemplo →</a>
            </article>
            <article className="relative flex flex-col rounded-[6px] border-2 border-orange bg-white p-7 shadow-[0_24px_60px_-30px_rgba(232,115,42,0.55)]">
              <span className="w-fit rounded-full bg-orange px-4 py-1.5 text-xs font-bold tracking-wide text-white">PREMIUM</span>
              <h3 className="mt-5 text-2xl font-bold">Andrade &amp; Asociados</h3>
              <p className="mt-3 leading-7 text-text-secondary">Sitio web completo para un estudio con trayectoria. Cinco páginas, áreas de práctica detalladas, equipo profesional, casos de éxito y contacto con formulario. Diseño premium que transmite autoridad.</p>
              <p className="mt-4 text-sm font-medium text-text-secondary">5 páginas · Áreas de práctica · Equipo · Casos de éxito · Formulario · WhatsApp · SEO completo</p>
              <a href="https://estudio-juridico-1.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary mt-auto w-fit">Ver ejemplo →</a>
            </article>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-text-secondary">Cada web se diseña desde cero para tu estudio. Estos ejemplos muestran el nivel de diseño y funcionalidad — el contenido, los colores y la estructura se adaptan a tu marca.</p>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="section-wrapper max-w-4xl">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Preguntas frecuentes</h2>
          <div className="mt-10 divide-y divide-slate-card">
            {faqs.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 leading-7 text-text-secondary">{a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="bg-graphite py-24 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">Tu estudio jurídico merece una web que genere consultas</h2>
        <p className="mt-5 text-cream/70">Primera consulta sin compromiso. Contanos sobre tu estudio y te decimos cómo lo haríamos.</p>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-[4px] bg-orange px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-hover hover:scale-[1.02]">Consultar por WhatsApp</a>
      </section>

      <JsonLd data={serviceSchema("Diseño Web para Estudios Jurídicos y Abogados", "Páginas web profesionales para abogados y estudios jurídicos con SEO jurídico y WhatsApp integrado.", "/web-para-estudios-juridicos")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Web para Estudios Jurídicos", item: "https://www.paginawebarg.com.ar/web-para-estudios-juridicos" },
      ])} />
    </>
  )
}
