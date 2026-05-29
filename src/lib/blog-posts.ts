import type { Metadata } from "next"
import Link from "next/link"

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: "Desarrollo Web" | "IA & Tecnología" | "Industria Tech" | "Tecnología"
  readTime: string
  date: string
  canonical: string
  description: string
  content: Array<{ heading: string; text: string[] }>
}

export const blogPosts: BlogPost[] = [
  {
    slug: "vibecoding-y-el-colapso-de-github",
    title: "Vibecoding: cómo la IA está colapsando GitHub y qué significa para tu web",
    excerpt: "El vibecoding está llenando GitHub de ruido. Qué implica para la calidad del desarrollo web que contrata una pyme.",
    category: "Desarrollo Web",
    readTime: "5 min",
    date: "Mayo 2026",
    canonical: "https://www.paginawebarg.com.ar/blog/vibecoding-y-el-colapso-de-github",
    description: "El vibecoding con IA está inundando GitHub de código de baja calidad. Qué significa para el desarrollo web profesional.",
    content: [
      { heading: "Introducción", text: ["GitHub fue durante décadas el centro del open source. Hoy muchos equipos reportan que encontrar señal entre tanto ruido es cada vez más difícil.", "El fenómeno más repetido es el vibecoding: generar código msivo con IA sin entenderlo y publicarlo igual."] },
      { heading: "Qué es el vibecoding y por qué importa", text: ["No es usar IA, eso es normal. El problema aparece cuando se publica código sin revisión, sin pruebas y sin criterio de arquitectura.", "Para un negocio, eso suele terminar en sitios lentos, inseguros y muy caros de mantener."] },
      { heading: "Cómo trabajamos distinto", text: ["Usamos IA como acelerador, no como reemplazo de criterio. Todo entregable se revisa y se optimiza antes de publicar.", "La diferencia áreal es mantenibilidad: que el proyecto pueda crecer sin romperse."] },
    ],
  },
  {
    slug: "claude-compilo-en-semanas-lo-que-tardaba-anos",
    title: "Un compilador que tardaba 2 años: Claude lo hizo en 2 semanas",
    excerpt: "El salto de productividad en software ya no es teoría. Qué cambia para empresas y equipos de desarrollo.",
    category: "IA & Tecnología",
    readTime: "4 min",
    date: "Febrero 2026",
    canonical: "https://www.paginawebarg.com.ar/blog/claude-compilo-en-semanas-lo-que-tardaba-anos",
    description: "Claude Opus resolvió en semanas un problema que antes tomaba años. Implicancias para el futuro del desarrollo.",
    content: [
      { heading: "El punto de inflexión", text: ["Los modelos ya no solo autocompletan funciones. Pueden abordar piezas complejas de ingeniería con autonomía creciente.", "Eso comprime tiempos y costos de manera muy fuerte."] },
      { heading: "Qué cambia en el mercado", text: ["El valor se mueve desde escribir boilerplate hacia diseñar estrategia, validar decisiones y garantizar calidad.", "Para negocios, esto abre proyectos que antes eran inviables por tiempo o presupuesto."] },
    ],
  },
  {
    slug: "ia-reemplaza-programadores-o-cambia-el-juego",
    title: "La IA no está matando a los programadores: está cambiando las reglas",
    excerpt: "El trabajo técnico no desaparece: se transforma. Qué perfiles ganan valor en 2026.",
    category: "IA & Tecnología",
    readTime: "6 min",
    date: "Mayo 2026",
    canonical: "https://www.paginawebarg.com.ar/blog/ia-reemplaza-programadores-o-cambia-el-juego",
    description: "La IA no elimina a los programadores, pero sí redefine qué habilidades valen más.",
    content: [
      { heading: "Lo que hacen las empresas", text: ["No buscan menos talento, buscan talento distinto: personas que entiendan negocio y sepan dirigir a la IA.", "El diferencial no es teclear más rápido, es decidir mejor."] },
      { heading: "Impacto en proyectos web", text: ["Los tiempos bajan, la exigencia sube. Un sitio puede salir más rápido, pero también se detecta más rápido cuando está mal hecho."] },
    ],
  },
  {
    slug: "apple-wwdc26-ia-no-es-el-nico-foco",
    title: "WWDC 2026: Apple no apuest todo a la IA",
    excerpt: "Mientras toda la industria gira en torno a IA, Apple conserva foco en plataforma y experiencia.",
    category: "Tecnología",
    readTime: "3 min",
    date: "Mayo 2026",
    canonical: "https://www.paginawebarg.com.ar/blog/apple-wwdc26-ia-no-es-el-nico-foco",
    description: "Apple sugiere que la IA no será el único eje del WWDC 2026. Qué implica para desarrollo y negocio.",
    content: [
      { heading: "Por qué importa", text: ["Apple suele priorizar madurez antes que hype. Eso impacta a desarrolladores y a la web que se consume desde iPhone.", "Cambios en Safari y APIs terminan afectando conversiones y compatibilidad."] },
    ],
  },
  {
    slug: "empresas-tech-no-contratan-juniors",
    title: "Big tech frena juniors, IBM acelera: la lectura del futuro",
    excerpt: "Las empresas no están de acuerdo sobre el rol junior en la era IA. IBM apuest a formarlos.",
    category: "Industria Tech",
    readTime: "4 min",
    date: "Mayo 2026",
    canonical: "https://www.paginawebarg.com.ar/blog/empresas-tech-no-contratan-juniors",
    description: "Por qué IBM va a contramano y apuest por talento junior en plena era de automatización.",
    content: [
      { heading: "La tesis", text: ["Los juniors de hoy ya nacen trabajando con IA. Eso reduce fricción de adopción y acelera curva de aprendizaje.", "La discusión no es junior vs senior, es quién aprende más rápido el nuevo flujo."] },
    ],
  },
  {
    slug: "anthropic-ya-no-necesita-revisores-de-codigo",
    title: "Anthropic elimina al revisor humano de código",
    excerpt: "Si la IA revisa su propio código, el valor humano se desplaza a la estrategia.",
    category: "IA & Tecnología",
    readTime: "4 min",
    date: "Mayo 2026",
    canonical: "https://www.paginawebarg.com.ar/blog/anthropic-ya-no-necesita-revisores-de-codigo",
    description: "Anthropic afirma que la IA ya puede revisar código en ciclos autónomos. Qué cambia para la industria.",
    content: [
      { heading: "Qué significa", text: ["La revisión técnica automática acelera delivery, pero no define prioridades de negocio ni arquitectura de producto.", "El criterio humano pasa a ser aún más importante."] },
    ],
  },
  {
    slug: "ia-va-a-matar-el-software-o-al-reves",
    title: "¿La IA va a matar el software Probablemente pase lo contrario",
    excerpt: "Más IA está produciendo más software, no menos. Y eso aumenta la necesidad de calidad.",
    category: "IA & Tecnología",
    readTime: "5 min",
    date: "Abril 2026",
    canonical: "https://www.paginawebarg.com.ar/blog/ia-va-a-matar-el-software-o-al-reves",
    description: "Lejos de desaparecer, el software crece con la IA. Qué implica para la presencia digital de una empresa.",
    content: [
      { heading: "La paradoja", text: ["La IA facilita construir, pero también aumenta la competencia y la complejidad.", "Un negocio sin web sigue perdiendo visibilidad: eso no cambió."] },
    ],
  },
  {
    slug: "anthropic-sube-precios-para-todos",
    title: "Anthropic sube precios: del idealismo al negocio",
    excerpt: "El costo de usar modelos avanzados sube. Cómo impacta en proyectos que integran IA.",
    category: "Industria Tech",
    readTime: "4 min",
    date: "Mayo 2026",
    canonical: "https://www.paginawebarg.com.ar/blog/anthropic-sube-precios-para-todos",
    description: "Anthropic ajusta precios y expone la tenésión entre misión e ingresos en el mercado IA.",
    content: [
      { heading: "Qué mirar", text: ["Si tu proyecto depende de APIs de IA, hay que presupuestar variaciones de costo desde el inicio.", "La sostenibilidad económica pasó al frente de la conversación."] },
    ],
  },
  {
    slug: "ia-y-el-mercado-laboral-tech",
    title: "IA y empleo tech: lo esperado vs lo áreal",
    excerpt: "No hubo desaparición msiva; hubo mutación de roles y nuevas habilidades críticas.",
    category: "Industria Tech",
    readTime: "6 min",
    date: "Abril 2026",
    canonical: "https://www.paginawebarg.com.ar/blog/ia-y-el-mercado-laboral-tech",
    description: "Análisis del mercado laboral tech en 2026: menos reemplazo directo y más transformación de perfiles.",
    content: [
      { heading: "El perfil crossover", text: ["Crece el valor de quin combina negocio + técnica + IA.", "En desarrollo web, eso se traduce en proyectos que convierten mejor y escalan sin rehacerse."] },
    ],
  },
]

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function blogMetadata(post: BlogPost): Metadata {
  return {
    title: `${post.title} | Blog Página Web Arg`,
    description: post.description,
    alternates: { canonical: post.canonical },
  }
}
