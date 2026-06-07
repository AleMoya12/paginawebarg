import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogMetadata, blogPosts, getPostBySlug } from "@/lib/blog-posts"
import { WA } from "@/lib/whatsapp"

type Params = { slug: string }

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: "Artículo no encontrado | Blog Página Web Arg" }
  return blogMetadata(post)
}

const categoryColors: Record<string, string> = {
  "Desarrollo Web": "bg-orange/10 text-orange border border-orange/30",
  "IA & Tecnología": "bg-graphite text-cream",
  "Industria Tech": "bg-green-600/10 text-green-700 border border-green-600/30",
  "Tecnología": "bg-graphite/5 text-graphite/70 border border-graphite/15",
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className="bg-cream px-4 pb-20 pt-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm text-text-secondary transition-colors hover:text-orange">← Volver al blog</Link>

        <div className="mt-6 flex items-center gap-2 text-xs text-text-secondary">
          <Link href="/blog" className="transition-colors hover:text-orange">Blog</Link>
          <span className="text-graphite/30">›</span>
          <span>{post.category}</span>
        </div>

        <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[post.category]}`}>{post.category}</span>
        <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-sm text-text-secondary">{post.readTime} · {post.date}</p>
        <div className="mt-6 rule-gold" />

        <div className="mt-10 space-y-8">
          {post.content.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 text-2xl font-bold">{section.heading}</h2>
              <div className="space-y-4">
                {section.text.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-text-secondary">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-[4px] bg-graphite p-8 text-center">
          <h3 className="text-2xl font-bold text-white">¿Necesitás una web profesional</h3>
          <p className="mt-3 text-cream/70">Te ayudamos a convertir presencia digital en resultados reales.</p>
          <a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-[4px] bg-orange px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-hover hover:scale-[1.02]"
          >
            Consultar por WhatsApp
          </a>
        </section>
      </div>
    </article>
  )
}
