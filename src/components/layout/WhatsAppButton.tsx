import { WhatsAppIcon } from "@/components/ui/Button"
import { WA } from "@/lib/whatsapp"

export default function WhatsAppButton() {
  return (
    <a
      href={WA.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-lg shadow-green-900/30 transition-all duration-200 hover:scale-110 hover:bg-green-500"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
