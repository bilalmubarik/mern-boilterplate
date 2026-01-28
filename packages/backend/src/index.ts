import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const PORT: number = parseInt(process.env.PORT || '3001', 10)

// Middleware
app.use(cors())
app.use(express.json())

// Types
interface HealthResponse {
  status: string
  message: string
  timestamp: string
}

interface ApiResponse {
  message: string
  version: string
}

// Routes
app.get('/api/health', (_req: Request, res: Response<HealthResponse>): void => {
  res.json({
    status: 'ok',
    message: 'Backend is running!',
    timestamp: new Date().toISOString(),
  })
})

app.get('/api', (_req: Request, res: Response<ApiResponse>): void => {
  res.json({
    message: 'Welcome to the Backend API',
    version: '1.0.0',
  })
})

// Start server
app.listen(PORT, (): void => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`)
})
