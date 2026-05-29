const baseUrl = "https://www.paginawebarg.com.ar"

type BreadcrumbItem = {
  name: string
  item: string
}

export function websiteOrganizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Página Web Arg",
        description: "Diseño web profesional para pymes y emprendedores",
        inLanguage: "es-AR",
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Página Web Arg",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/logo6.png`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+5491164990312",
          contactType: "customer service",
          availableLanguage: "Spanish",
        },
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: "Página Web Arg",
        url: baseUrl,
        telephone: "+5491164990312",
        description: "Diseño y desarrollo de páginas web profesionales para pymes y emprendedores. Más de 7 años de experiencia.",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressCountry: "AR",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de diseño web",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño Web Profesional" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Premium en Next.js" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web en WordPress" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tienda Online" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Posicionamiento SEO" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads" } },
          ],
        },
      },
    ],
  }
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Página Web Arg",
      url: baseUrl,
    },
    url: `${baseUrl}${path}`,
    serviceType: "Diseño y Desarrollo Web",
    areaServed: { "@type": "Country", name: "Argentina" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "ARS",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Precio a consultar según el alcance del proyecto",
      },
    },
  }
}

export function faqSchema(items: string[][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }
}

