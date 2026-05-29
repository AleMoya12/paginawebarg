import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import WhatsAppButton from "@/components/layout/WhatsAppButton"
import TopBanner from "@/components/ui/TopBanner"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.paginawebarg.com.ar"),
  title: {
    default: "Diseño Web Profesional para Pymes y Emprendedores | Página Web Arg",
    template: "%s | Página Web Arg",
  },
  description:
    "Diseñamos y desarrollamos páginas web profesionales para pymes y emprendedores. Más de 7 años de experiencia. SEO, hosting 6 meses y WhatsApp incluidos.",
  keywords: [
    "diseño web profesional",
    "páginas web para pymes",
    "desarrollo web Next.js",
    "web WordPress Argentina",
    "tienda online",
    "SEO para pymes",
    "Google Ads pymes",
    "web para emprendedores",
  ],
  authors: [{ name: "Página Web Arg", url: "https://www.paginawebarg.com.ar" }],
  creator: "Página Web Arg",
  publisher: "Página Web Arg",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.paginawebarg.com.ar",
    siteName: "Página Web Arg",
    title: "Diseño Web Profesional para Pymes | Página Web Arg",
    description: "Diseñamos y desarrollamos páginas web para pymes, emprendedores y profesionales. Más de 7 años de experiencia.",
    images: [
      {
        url: "/images/logo6.png",
        width: 1200,
        height: 630,
        alt: "Página Web Arg — Diseño Web Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño Web Profesional para Pymes | Página Web Arg",
    description: "Diseñamos y desarrollamos páginas web para pymes y emprendedores.",
    images: ["/images/logo6.png"],
  },
  alternates: {
    canonical: "https://www.paginawebarg.com.ar",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon3.png", type: "image/png", sizes: "32x32" },
      { url: "/images/favicon3.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/images/favicon3.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "GfAAmMnqqksFc8T9AAM7uLWSqwYlDZNfoGLoZPpJ9fw",
  },
}

export const viewport = {
  themeColor: "#0A0F1E",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <TopBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}




