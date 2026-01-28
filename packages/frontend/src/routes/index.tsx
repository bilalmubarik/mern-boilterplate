import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

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
    <div>
      <h1>Welcome to the Frontend</h1>
      <p>This is a React app with TanStack Query and TanStack Router</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Backend Health Check</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        {data && (
          <div>
            <p>Status: {data.status}</p>
            <p>Message: {data.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}
