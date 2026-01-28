# Practice Project

A pnpm workspace monorepo with a React frontend and Express backend.

## Project Structure

```
.
├── packages/
│   ├── frontend/     # React app with TanStack Query & Router
│   └── backend/      # Express.js API server
├── pnpm-workspace.yaml
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (install with `npm install -g pnpm`)

### Installation

Install all dependencies:

```bash
pnpm install
```

### Development

Run both frontend and backend in development mode:

```bash
pnpm dev
```

Or run them separately:

```bash
# Frontend only (runs on http://localhost:3000)
pnpm frontend dev

# Backend only (runs on http://localhost:3001)
pnpm backend dev
```

### Build

Build both packages:

```bash
pnpm build
```

## Packages

### Frontend

- **Framework**: React 18
- **Routing**: TanStack Router
- **Data Fetching**: TanStack Query
- **Build Tool**: Vite
- **Language**: TypeScript

The frontend includes:
- A home page that fetches data from the backend API
- An about page
- API proxy configuration to forward `/api/*` requests to the backend

### Backend

- **Framework**: Express.js
- **Language**: TypeScript
- **Runtime**: Node.js

The backend includes:
- Health check endpoint at `/api/health`
- CORS enabled for frontend communication
- JSON body parsing middleware

## Available Scripts

### Root Level

- `pnpm dev` - Run both frontend and backend in development mode
- `pnpm build` - Build both packages
- `pnpm frontend <command>` - Run command in frontend package
- `pnpm backend <command>` - Run command in backend package

### Frontend

- `pnpm frontend dev` - Start Vite dev server
- `pnpm frontend build` - Build for production
- `pnpm frontend preview` - Preview production build

### Backend

- `pnpm backend dev` - Start development server with hot reload
- `pnpm backend build` - Compile TypeScript
- `pnpm backend start` - Start production server
