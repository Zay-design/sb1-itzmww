import { Badge } from "@/components/ui/badge"

export default function BadgeShowcase() {
  return (
    <div className="flex space-x-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}