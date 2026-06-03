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
  "Desarrollo Web": "bg-[#3B82F6]/15 text-[#3B82F6] border border-[#3B82F6]/30",
  "IA & Tecnología": "bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30",
  "Industria Tech": "bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30",
  "Tecnología": "bg-[#94A3B8]/20 text-[#94A3B8] border border-[#94A3B8]/30",
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className="bg-[#0A0F1E] px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm text-[#94A3B8] hover:text-[#F8FAFC]">← Volver al blog</Link>

        <div className="mt-6 flex items-center gap-2 text-xs text-[#94A3B8]">
          <Link href="/blog" className="hover:text-[#F8FAFC]">Blog</Link>
          <span>›</span>
          <span>{post.category}</span>
        </div>

        <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[post.category]}`}>{post.category}</span>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-[#F8FAFC] md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-sm text-[#94A3B8]">{post.readTime} · {post.date}</p>
        <div className="mt-6 h-px w-full bg-[#1E293B]" />

        <div className="mt-10 space-y-8">
          {post.content.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 text-2xl font-bold text-[#F8FAFC]">{section.heading}</h2>
              <div className="space-y-4">
                {section.text.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-[#94A3B8]">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-2xl border border-[#1E293B] bg-[#111827] p-8 text-center">
          <h3 className="text-2xl font-bold text-[#F8FAFC]">¿Necesitás una web profesional</h3>
          <p className="mt-3 text-[#94A3B8]">Te ayudamos a convertir presencia digital en resultados reales.</p>
          <a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-lg bg-[#F97316] px-6 py-3 font-semibold text-white hover:bg-[#EA580C]"
          >
            Consultar por WhatsApp
          </a>
        </section>
      </div>
    </article>
  )
}
