"use client"

import { useState } from "react"

export default function TopBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      className="relative w-full py-2.5 text-center text-sm font-medium text-white"
      style={{ background: "linear-gradient(to right, #1d4ed8, #3B82F6, #F97316)" }}
    >
      <p className="px-8">Primera consulta gratuita y sin compromiso - respondemos en el día</p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Cerrar banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  )
}
