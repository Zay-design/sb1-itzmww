import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ToastShowcase() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}