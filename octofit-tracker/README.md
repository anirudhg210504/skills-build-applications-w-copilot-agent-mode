# OctoFit Tracker

A modern multi-tier application for tracking activities, managing teams, and competing on leaderboards.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite presentation tier
│   ├── src/
│   ├── public/
│   └── package.json
└── backend/           # Node.js + Express API tier
    ├── src/
    ├── dist/
    └── package.json
```

## Stack

### Frontend (Port 5173)
- React 19
- Vite
- TypeScript
- React Router DOM
- Bootstrap 5

### Backend (Port 8000)
- Node.js (LTS)
- Express
- TypeScript
- Mongoose (MongoDB ODM)

### Database (Port 27017)
- MongoDB

## Getting Started

### Prerequisites
- Node.js (LTS)
- MongoDB

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

The backend API will be available at `http://localhost:8000/api`

### MongoDB Connection

Ensure MongoDB is running on `mongodb://localhost:27017`

## Features

- User authentication and profiles
- Activity logging and tracking
- Team creation and management
- Competitive leaderboard
- Personalized workout suggestions
