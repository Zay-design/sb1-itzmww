import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputShowcase() {
  return (
    <div className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="disabled">Disabled</Label>
        <Input type="text" id="disabled" placeholder="Disabled" disabled />
      </div>
    </div>
  )
}