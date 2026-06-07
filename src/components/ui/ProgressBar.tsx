interface ProgressBarProps {
  label: string
  percent: number
  color: string
}

export function ProgressBar({ label, percent, color = "#E8732A" }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-display text-sm font-semibold text-graphite">{label}</span>
        <span className="text-xs text-text-secondary">{percent}%</span>
      </div>
      <div className="relative flex h-2.5 w-full items-center overflow-hidden rounded-full bg-cream-dark">
        <div className="h-2.5 rounded-full transition-all duration-700" style={{ width: `${percent}%`, backgroundColor: color }} />
      </div>
    </div>
  )
}
