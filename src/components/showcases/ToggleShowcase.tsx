import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

export default function ToggleShowcase() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}