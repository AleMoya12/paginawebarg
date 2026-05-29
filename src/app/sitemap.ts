import { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.paginawebarg.com.ar"
  const now = new Date()

  const staticUrls: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/publicidad`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/web-premium`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/web-para-profesionales`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/web-autoadministrable`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tienda-online`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/web-para-prepagas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/web-para-pymes`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/web-para-hoteles`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/web-para-escuelas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/web-para-barrios-cerrados`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terminos-y-condiciones`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/aviso-legal`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ]

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }))

  return [...staticUrls, ...blogUrls]
}

