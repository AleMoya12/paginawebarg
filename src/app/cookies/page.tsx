import { seo } from "@/lib/seo"

export const metadata = seo({
  title: "Política de Cookies",
  description: "Política de cookies de Página Web Arg: uso de cookies técnicas, analíticas, terceros y opciones para deshabilitarlas.",
  path: "/cookies",
  index: false,
})

const sections = [
  ["Qué son las cookies", "Las cookies son pequeños archivos que se almacenan en el navegador para recordar información técnica, mejorar la navegación o medir el uso del sitio."],
  ["Tipos de cookies que usamos", "Podemos usar cookies técnicas necesarias para el funcionamiento del sitio y cookies analíticas para entender visitas y rendimiento. Si se incorpora Google Analytics, se usará solo con fines estadísticos."],
  ["Cookies de terceros", "Algunos servicios externos, como herramientas de medición, mapas, videos o plataforms publicitarias, podrían instalar cookies bajo sus propias políticas."],
  ["Cómo deshabilitar cookies", "El usuario puede bloquear, eliminar o configurar cookies desde las opciones de privacidad de su navegador. Algunas funciones podrían verse afectadas si se deshabilitan cookies técnicas."],
  ["Actualizaciones de la política", "Esta política puede actualizarse para reflejar cambios técnicos, legales o de servicios. La versión vigente será la publicada en est página."],
]

export default function CookiesPage() {
  return (
    <section className="section-wrapper py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Política de Cookies</h1>
        <div className="space-y-8">
          {sections.map(([title, text]) => (
            <section key={title}>
              <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
              <p className="leading-7 text-text-secondary">{text}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
