interface CheckItemProps {
  text: string
  checked?: boolean
}

export function CheckItem({ text, checked = true }: CheckItemProps) {
  return (
    <div className="flex items-start gap-3 rounded-[4px] border border-line bg-white p-4 transition-all duration-300 hover:border-orange/40 hover:shadow-[0_12px_30px_-22px_rgba(16,24,40,0.5)]">
      {checked ? (
        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-orange/40 bg-orange/10">
          <svg
            className="h-3 w-3 text-orange"
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
        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-graphite/20 bg-graphite/5">
          <svg
            className="h-3 w-3 text-graphite/50"
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
      <span className="text-sm leading-relaxed text-text-secondary">{text}</span>
    </div>
  )
}
