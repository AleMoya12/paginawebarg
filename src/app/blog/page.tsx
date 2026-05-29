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
  "Desarrollo Web": "bg-[#3B82F6]/15 text-[#3B82F6] border border-[#3B82F6]/30",
  "IA & Tecnología": "bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30",
  "Industria Tech": "bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30",
  "Tecnología": "bg-[#94A3B8]/20 text-[#94A3B8] border border-[#94A3B8]/30",
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#0A0F1E] px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-[#F8FAFC] md:text-5xl">Blog</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#94A3B8]">Desarrollo web, IA y tecnología para negocios reales.</p>
      </section>

      <section className="bg-[#0A0F1E] px-4 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((article) => (
            <article key={article.slug} className="group flex flex-col rounded-2xl border border-[#1E293B] bg-[#1E293B] p-6 transition-all duration-300 hover:border-[#3B82F6] hover:shadow-xl hover:shadow-blue-500/5">
              <span className={`mb-4 self-start rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[article.category]}`}>{article.category}</span>
              <h2 className="mb-3 text-lg font-semibold leading-snug text-[#F8FAFC] transition-colors group-hover:text-[#3B82F6]">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-[#94A3B8]">{article.excerpt}</p>
              <div className="mt-auto flex items-center justify-between border-t border-[#0A0F1E] pt-4">
                <div className="flex items-center gap-2 text-xs text-[#94A3B8]"><span>{article.readTime}</span><span>·</span><span>{article.date}</span></div>
                <Link href={`/blog/${article.slug}`} className="text-sm font-medium text-[#F97316] transition-colors hover:text-[#EA580C]">Leer más </Link>
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




