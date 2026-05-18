# StudyMind - Multi-Agent AI Study Assistant

StudyMind is a full-stack AI study assistant built with React, FastAPI, SQLite, and Gemini. It gives students four focused agents for notes, quizzes, doubt solving, and study planning inside one polished workspace.

## Features

- Notes Agent: creates structured notes, definitions, and takeaways for any topic.
- Quiz Agent: generates MCQs and practice questions.
- Doubt Solver: explains concepts step by step with examples.
- Planner Agent: builds study schedules and revision plans.
- Authentication: register, login, and protected app routes.
- Modern UI: responsive React interface with dark/light mode.
- API backend: FastAPI routes for auth, chat, notes, and plans.

## Tech Stack

- Frontend: React, Vite, React Router, Zustand, Axios
- Backend: FastAPI, SQLAlchemy, Pydantic Settings, JWT auth
- Database: SQLite for local development
- AI: Gemini API
- Styling: Custom CSS with responsive layouts

## Project Structure

```text
.
├── backend/
│   ├── agents/
│   ├── db/
│   ├── models/
│   ├── routes/
│   ├── config.py
│   ├── main.py
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── config/
    │   ├── hooks/
    │   ├── pages/
    │   └── store/
    └── package.json
```

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/aryanchaudhari4/multi-agent-study-assistant.git
cd multi-agent-study-assistant
```

### 2. Backend setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
```

Update `backend/.env`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
DATABASE_URL=sqlite:///./studyassistant.db
SECRET_KEY=change_this_secret_key
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

Run the backend:

```bash
uvicorn main:app --reload
```

Backend URL: `http://127.0.0.1:8000`

### 3. Frontend setup

Open a new terminal:

```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Frontend URL: `http://localhost:5173`

## Environment Variables

### Backend

| Variable | Description |
| --- | --- |
| `GEMINI_API_KEY` | Gemini API key used by the AI agents |
| `DATABASE_URL` | Database connection string |
| `SECRET_KEY` | JWT signing secret |
| `CORS_ORIGINS` | Comma-separated frontend URLs allowed by the API |

### Frontend

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Public backend API URL |

## Deployment Notes

### Frontend

Deploy the `frontend` folder to Vercel or Netlify.

Recommended Vercel settings:

- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable: `VITE_API_URL=https://your-backend-url`

### Backend

Deploy the `backend` folder to Render, Railway, or another Python hosting platform.

Recommended start command:

```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

Set these backend environment variables in the hosting dashboard:

```env
GEMINI_API_KEY=your_gemini_api_key_here
DATABASE_URL=your_production_database_url
SECRET_KEY=your_secure_secret_key
CORS_ORIGINS=https://your-frontend-url
```

## Important Git Notes

The following files should stay out of GitHub:

- `backend/.env`
- `backend/venv/`
- `backend/studyassistant.db`
- `backend/**/__pycache__/`
- `frontend/node_modules/`
- `frontend/dist/`

## API Health Check

After starting the backend, visit:

```text
http://127.0.0.1:8000/health
```

Expected response:

```json
{"status":"ok"}
```
