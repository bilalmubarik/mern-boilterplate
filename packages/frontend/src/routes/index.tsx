import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'

interface HealthResponse {
  status: string
  message: string
  timestamp: string
}

async function fetchData(): Promise<HealthResponse> {
  const response = await fetch('/api/health')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json() as Promise<HealthResponse>
}

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['health'],
    queryFn: fetchData,
  })

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-semibold tracking-tight">
        Welcome to the Frontend
      </h1>
      <p className="mt-2 text-muted-foreground">
        This is a React app with TanStack Query and TanStack Router
      </p>

      <div className="mt-6 rounded-lg border p-4">
        <h2 className="text-lg font-medium">Shadcn + Tailwind check</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          If these look styled (colors, spacing, hover/focus), your setup is
          good.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium">Backend Health Check</h2>
        {isLoading && <p className="mt-2 text-sm">Loading...</p>}
        {error && (
          <p className="mt-2 text-sm text-destructive">
            Error: {error.message}
          </p>
        )}
        {data && (
          <div className="mt-2 rounded-md border p-3 text-sm">
            <p>
              <span className="font-medium">Status:</span> {data.status}
            </p>
            <p className="mt-1">
              <span className="font-medium">Message:</span> {data.message}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
