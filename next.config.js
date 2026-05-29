/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    remotePatterns: [],
  },
  compress: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Vary", value: "Accept-Encoding" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ]
  },
  async redirects() {
    return [
      { source: "/webpremium", destination: "/web-premium", permanent: true },
      { source: "/webpremium.html", destination: "/web-premium", permanent: true },
      { source: "/webprofesionales", destination: "/web-para-profesionales", permanent: true },
      { source: "/webprofesionales.html", destination: "/web-para-profesionales", permanent: true },
      { source: "/webparapymes", destination: "/web-para-pymes", permanent: true },
      { source: "/webparapymes.html", destination: "/web-para-pymes", permanent: true },
      { source: "/tiendaonline", destination: "/tienda-online", permanent: true },
      { source: "/tiendaonline.html", destination: "/tienda-online", permanent: true },
      { source: "/webparaprepagas", destination: "/web-para-prepagas", permanent: true },
      { source: "/webparaprepagas.html", destination: "/web-para-prepagas", permanent: true },
      { source: "/webparahoteles", destination: "/web-para-hoteles", permanent: true },
      { source: "/webparahoteles.html", destination: "/web-para-hoteles", permanent: true },
      { source: "/webparaescuelas", destination: "/web-para-escuelas", permanent: true },
      { source: "/webparaescuelas.html", destination: "/web-para-escuelas", permanent: true },
      { source: "/webparabarrioscerrados", destination: "/web-para-barrios-cerrados", permanent: true },
      { source: "/webparabarrioscerrados.html", destination: "/web-para-barrios-cerrados", permanent: true },
      { source: "/webautoadministrable", destination: "/web-autoadministrable", permanent: true },
      { source: "/webautoadministrable.html", destination: "/web-autoadministrable", permanent: true },
      { source: "/blog.html", destination: "/blog", permanent: true },
      { source: "/publicidad.html", destination: "/publicidad", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
    ]
  },
}

module.exports = nextConfig

