import type { Metadata } from "next"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema } from "@/lib/structured-data"
import PortfolioClient from "./PortfolioClient"
import { projects } from "./projects"

const siteUrl = "https://www.paginawebarg.com.ar"
const pageUrl = `${siteUrl}/portfolio`

export const metadata: Metadata = {
  title: "Portfolio de Diseño Web | Página Web Arg",
  description:
    "Conocé los sitios web que diseñamos y desarrollamos para pymes, profesionales y proyectos digitales en Argentina.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Portfolio de Diseño Web | Página Web Arg",
    description:
      "Conocé los sitios web que diseñamos y desarrollamos para pymes, profesionales y proyectos digitales en Argentina.",
    url: pageUrl,
    siteName: "Página Web Arg",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio de Diseño Web | Página Web Arg",
    description:
      "Conocé los sitios web que diseñamos y desarrollamos para pymes, profesionales y proyectos digitales en Argentina.",
  },
}

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio de Diseño Web — Página Web Arg",
  description:
    "Sitios web diseñados y desarrollados por Página Web Arg para pymes, profesionales y proyectos digitales.",
  url: pageUrl,
  publisher: {
    "@type": "Organization",
    name: "Página Web Arg",
    url: siteUrl,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebSite",
        name: project.name,
        url: project.url,
        description: project.description,
      },
    })),
  },
}

const breadcrumb = breadcrumbSchema([
  { name: "Inicio", item: siteUrl },
  { name: "Portfolio", item: pageUrl },
])

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumb} />
      <PortfolioClient />
    </>
  )
}
