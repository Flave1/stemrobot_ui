import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorScreenProps {
  message?: string
  onRetry?: () => void
}

export function ErrorScreen({ message = "An error occurred", onRetry }: ErrorScreenProps) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive" />
        <h1 className="mt-6 text-3xl font-bold">Oops! Something went wrong</h1>
        <p className="mt-4 text-xl">{message}</p>
        {onRetry && (
          <Button onClick={onRetry} className="mt-8">
            Try Again
          </Button>
        )}
      </div>
    </div>
  )
}

