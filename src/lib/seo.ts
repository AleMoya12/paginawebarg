import type { Metadata } from "next"

const siteUrl = "https://www.paginawebarg.com.ar"

interface SeoOptions {
  title: string
  description: string
  path: string
  index?: boolean
}

export function seo({ title, description, path, index = true }: SeoOptions): Metadata {
  const canonical = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: "es_AR",
    },
    robots: index ? { index: true, follow: true } : { index: false },
  }
}
