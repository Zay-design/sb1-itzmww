import { Label } from "@/components/ui/label"

export default function LabelShowcase() {
  return (
    <div className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <input type="email" id="email" placeholder="Email" className="w-full p-2 border rounded" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <input type="text" id="username" placeholder="Username" className="w-full p-2 border rounded" />
      </div>
      <div>
        <Label htmlFor="terms" className="flex items-center gap-2">
          <input type="checkbox" id="terms" />
          <span>Accept terms and conditions</span>
        </Label>
      </div>
    </div>
  )
}