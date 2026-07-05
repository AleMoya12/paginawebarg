export type Stack = "Next.js" | "WordPress" | "HTML"

export type ProjectCategory =
  | "Profesionales y estudios"
  | "Portales de contenido"
  | "Tecnología e IA"
  | "Diseño y arte"

export type Project = {
  name: string
  url: string
  category: ProjectCategory
  description: string
  stack: Stack
}

// Orden de los filtros (el primero, "Todos", se agrega en la UI)
export const CATEGORIES: ProjectCategory[] = [
  "Profesionales y estudios",
  "Portales de contenido",
  "Tecnología e IA",
  "Diseño y arte",
]

export const projects: Project[] = [
  {
    name: "Andrade & Asociados",
    url: "https://estudio-juridico-1.vercel.app/",
    category: "Profesionales y estudios",
    description: "Estudio jurídico corporativo con más de 25 años de trayectoria. Derecho corporativo, laboral, civil y penal en Buenos Aires.",
    stack: "Next.js",
  },
  {
    name: "García Abogados",
    url: "https://estudio-juridico-2.vercel.app/",
    category: "Profesionales y estudios",
    description: "Estudio jurídico unipersonal con atención personalizada en derecho civil, laboral y familia en CABA.",
    stack: "Next.js",
  },
  {
    name: "Estudio Lozano",
    url: "https://estudiolozano.com.ar/",
    category: "Profesionales y estudios",
    description: "Estudio contable especializado en impuestos, liquidación de sueldos, auditoría y constitución de sociedades.",
    stack: "HTML",
  },
  {
    name: "PRA Estudio de Arquitectura",
    url: "https://praestudiodearquitectura.com.ar/",
    category: "Profesionales y estudios",
    description: "Estudio de arquitectura con más de 10.000 m² construidos en proyectos residenciales y comerciales en Buenos Aires.",
    stack: "HTML",
  },
  {
    name: "Viajeros de Papel",
    url: "https://tallerliterarioviajerosdepapel.com.ar/",
    category: "Profesionales y estudios",
    description: "Taller literario infantil para niños de 6 a 11 años con lectura, escritura creativa y juego en Castelar.",
    stack: "Next.js",
  },
  {
    name: "Poglianis Hair Boutique",
    url: "https://www.poglianis.com.ar/",
    category: "Profesionales y estudios",
    description: "Hair boutique con más de 20 años de experiencia en extensiones, pelucas, cortinas y prótesis capilares.",
    stack: "HTML",
  },
  {
    name: "Biorutina",
    url: "https://www.biorutina.com.ar/",
    category: "Portales de contenido",
    description: "Portal de hábitos saludables con guías sobre alimentación, movimiento, descanso y bienestar diario.",
    stack: "Next.js",
  },
  {
    name: "Dinero Fácil",
    url: "https://dinerofacil.com.ar/",
    category: "Portales de contenido",
    description: "Educación financiera clara sobre finanzas personales, inversiones, criptomonedas y mercado.",
    stack: "Next.js",
  },
  {
    name: "Aprender Desde Cero",
    url: "https://www.aprenderdesdecero.com.ar/",
    category: "Portales de contenido",
    description: "Portal educativo con cursos online gratuitos de programación, IA, marketing, diseño, idiomas y más.",
    stack: "Next.js",
  },
  {
    name: "Recetas Fáciles Hoy",
    url: "https://www.recetasfacileshoy.com.ar/",
    category: "Portales de contenido",
    description: "Recetas fáciles, caseras y prácticas para resolver desayunos, almuerzos, meriendas y cenas sin complicarte.",
    stack: "Next.js",
  },
  {
    name: "Zona Viral",
    url: "https://www.zonaviral.com.ar/",
    category: "Portales de contenido",
    description: "Portal de tendencias, noticias virales, memes, tecnología, redes sociales y cultura digital.",
    stack: "Next.js",
  },
  {
    name: "Viajar Mejor Hoy",
    url: "https://www.viajarmejorhoy.com.ar/",
    category: "Portales de contenido",
    description: "Guías prácticas de viaje, escapadas, consejos de seguridad y tecnología para planificar mejor.",
    stack: "Next.js",
  },
  {
    name: "HerramientasIA",
    url: "https://www.herramientasia.com.ar/",
    category: "Tecnología e IA",
    description: "Directorio curado de herramientas de inteligencia artificial con comparativas y guías para elegir mejor.",
    stack: "Next.js",
  },
  {
    name: "Promptéalo",
    url: "https://www.promptealo.com.ar/",
    category: "Tecnología e IA",
    description: "Guías, biblioteca de prompts y framework P.R.O.M.P.T.E.A.L.O. para usar mejor ChatGPT, Claude y Gemini.",
    stack: "Next.js",
  },
  {
    name: "IA Fácil Hoy",
    url: "https://www.iafacilhoy.com.ar/",
    category: "Tecnología e IA",
    description: "Inteligencia artificial explicada fácil con guías, herramientas y ejemplos para estudiar, trabajar y emprender.",
    stack: "Next.js",
  },
  {
    name: "SEO Agencia Web",
    url: "https://www.seoagenciaweb.com/",
    category: "Tecnología e IA",
    description: "Agencia de posicionamiento SEO, desarrollo web y marketing digital para empresas en Argentina y España.",
    stack: "Next.js",
  },
  {
    name: "DefensaIT",
    url: "https://defensait.com/",
    category: "Tecnología e IA",
    description: "Servicios de ciberseguridad para pymes argentinas con calculadora de riesgo y auditorías de seguridad.",
    stack: "Next.js",
  },
  {
    name: "Marcela Coppari Studio",
    url: "https://marcelacoppari.com.ar/",
    category: "Diseño y arte",
    description: "Laboratorio de diseño multidisciplinar especializado en mobiliario modular de plástico reciclado (Cosmoplast).",
    stack: "WordPress",
  },
]
