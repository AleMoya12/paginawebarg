interface CheckItemProps {
  text: string
  checked?: boolean
}

export function CheckItem({ text, checked = true }: CheckItemProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[#1E293B] bg-[#1E293B] p-4 transition-colors duration-200 hover:border-[#22C55E]/30">
      {checked ? (
        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#22C55E]/40 bg-[#22C55E]/15">
          <svg
            className="h-3 w-3 text-[#22C55E]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      ) : (
        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-400/40 bg-red-500/15">
          <svg
            className="h-3 w-3 text-red-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </div>
      )}
      <span className="text-sm leading-relaxed text-[#94A3B8]">{text}</span>
    </div>
  )
}
