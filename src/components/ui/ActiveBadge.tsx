interface ActiveBadgeProps {
  text: string
}

export default function ActiveBadge({ text }: ActiveBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#111827]/80 px-4 py-2 text-sm text-[#94A3B8] backdrop-blur-sm">
      <div className="relative flex size-3 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-green-500" />
      </div>
      <span>{text}</span>
    </div>
  )
}
