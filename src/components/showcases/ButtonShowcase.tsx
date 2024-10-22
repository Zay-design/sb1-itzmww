import { Button } from "@/components/ui/button"

export default function ButtonShowcase() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <span className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">States</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button>
            <span className="mr-2 h-4 w-4 animate-spin" />
            Loading
          </Button>
        </div>
      </div>
    </div>
  )
}