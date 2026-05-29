import type { ReactNode } from "react"

export default function SectionWrapper({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`section-wrapper ${className}`}>{children}</div>
}
