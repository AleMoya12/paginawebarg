interface ProgressBarProps {
  label: string
  percent: number
  color: string
}

export function ProgressBar({ label, percent, color = "#3B82F6" }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-[#F8FAFC]">{label}</span>
        <span className="text-xs text-[#94A3B8]">{percent}%</span>
      </div>
      <div className="relative flex h-5 w-full items-center overflow-hidden rounded-full bg-[#1E293B]">
        <div className="h-5 rounded-full transition-all duration-700" style={{ width: `${percent}%`, backgroundColor: color }} />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">{percent}%</span>
      </div>
    </div>
  )
}
