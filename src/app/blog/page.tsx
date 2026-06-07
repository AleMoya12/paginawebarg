import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-posts"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Blog | Desarrollo Web, IA y Tecnología para Pymes | Página Web Arg",
  description: "Artículos sobre diseño web, inteligencia artificial, SEO y tecnología para pymes y emprendedores. Contenido actualizado en 2026.",
  alternates: { canonical: "https://www.paginawebarg.com.ar/blog" },
}

const categoryColors: Record<string, string> = {
  "Desarrollo Web": "bg-orange/10 text-orange border border-orange/30",
  "IA & Tecnología": "bg-graphite text-cream",
  "Industria Tech": "bg-green-600/10 text-green-700 border border-green-600/30",
  "Tecnología": "bg-graphite/5 text-graphite/70 border border-graphite/15",
}

export default function BlogPage() {
  return (
    <>
      <section className="hero-bg hero-bg-blog site-hero">
        <div className="section-wrapper">
          <div className="max-w-3xl">
            <div className="rule-gold mb-6" />
            <h1 className="text-4xl font-bold md:text-6xl">Blog</h1>
            <p className="mt-5 max-w-2xl text-lg text-text-secondary">Desarrollo web, IA y tecnología para negocios reales.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 pb-24 pt-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((article) => (
            <article key={article.slug} className="card reveal group flex flex-col">
              <span className={`mb-4 self-start rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[article.category]}`}>{article.category}</span>
              <h2 className="mb-3 text-lg font-bold leading-snug transition-colors group-hover:text-orange">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">{article.excerpt}</p>
              <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                <div className="flex items-center gap-2 text-xs text-text-secondary"><span>{article.readTime}</span><span>·</span><span>{article.date}</span></div>
                <Link href={`/blog/${article.slug}`} className="text-sm font-medium text-orange transition-colors hover:text-orange-hover">Leer más →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
          <JsonLd data={breadcrumbSchema([
        { name: "Inicio", item: "https://www.paginawebarg.com.ar" },
        { name: "Blog", item: "https://www.paginawebarg.com.ar/blog" },
      ])} />
    </>
  )
}




