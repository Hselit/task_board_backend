# Task Board Backend

A backend service for a real-time Kanban Task Board built with Node.js, Express, TypeScript, PostgreSQL, Prisma ORM, Socket.IO, and Zod.

---

# Screenshots

## Get Task
![Get Task API](images/GET_Task.png)


## Create a New Task
![Post Task API](images/POST_Task.png)


## Update an Existing Task
![Put Task API](images/PUT_Task.png)


## Delete a Task
![Delete Task API](images/DELETE_Task.png)

---

# Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Socket.IO
- Zod
- CORS

---

# Features

- Create, update, delete and fetch tasks
- Real-time synchronization using Socket.IO
- PostgreSQL with Prisma ORM
- Request validation using Zod
- Layered architecture (Controller → Service → Repository)
- Optimistic locking for concurrent updates
- Prisma transactions for data consistency
- Global error handling

---

# Project Structure

```text
src
├── config
├── controller
├── middleware
├── repository
├── routes
├── schema
├── service
├── socket
├── types
├── utils
└── app.ts

prisma
├── migrations
├── schema.prisma
└── seed.ts

server.ts
```

---

# Getting Started

## Prerequisites

- Node.js (v20 or later)
- PostgreSQL
- npm

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd backend
```

Install dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file using `.env.example`.

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/task_board"

PORT=5000
```

---

# Database Setup

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Seed default task lists

```bash
npx prisma db seed
```

(Optional)

```bash
npx prisma studio
```

---

# Running the Application

Development

```bash
npm run dev
```

Production

```bash
npm run build

npm start
```

Backend runs at

```
http://localhost:3000
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /task | Get all tasks |
| GET | /task/:id | Get task by id |
| POST | /task | Create task |
| PUT | /task/:id | Update task |
| DELETE | /task/:id | Delete task |

---

# Socket.IO Events

The server broadcasts the following events:

| Event | Description |
|--------|-------------|
| task:created | Task created |
| task:updated | Task updated |
| task:deleted | Task deleted |
| connected-users | Connected users count |

---

# Environment Variables

| Variable | Description |
|----------|-------------|
| DATABASE_URL | PostgreSQL connection string |
| PORT | Application port |

---

# Database

The project uses Prisma ORM with PostgreSQL.

Included:

- `prisma/schema.prisma`
- `prisma/migrations`
- `prisma/seed.ts`

---

# Architecture

```text
Client
   │
   ▼
Routes
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Repository
   │
   ▼
Prisma ORM
   │
   ▼
PostgreSQL
```

---

# Key Design Decisions

### Layered Architecture

Responsibilities are separated into Controller, Service, and Repository layers to improve maintainability, readability, and future testing.

### Server-controlled Task Position

Task positions are assigned by the backend instead of trusting the client. This ensures consistent ordering across all clients.

### Prisma Transactions

Transactions are used for operations involving multiple database queries to maintain consistency.

### Optimistic Locking

Each task contains a `version` field.

During updates, the backend verifies that the client's version matches the database version before applying changes. If another user has already modified the task, the update is rejected with **HTTP 409 Conflict** to prevent accidental overwrites.

### Real-time Synchronization

Socket.IO broadcasts task creation, updates, and deletions to all connected clients, ensuring every user sees the latest board state.

### Validation

All incoming requests are validated using Zod before reaching the controller.

---

# Bonus Features

## Implemented

- ✅ PostgreSQL
- ✅ Prisma ORM
- ✅ Socket.IO real-time updates
- ✅ Layered architecture
- ✅ Zod validation
- ✅ Global error handling
- ✅ Prisma transactions
- ✅ Seed script
- ✅ Optimistic locking

---
MIT
