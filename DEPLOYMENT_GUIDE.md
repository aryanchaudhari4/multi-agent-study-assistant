# StudyMind - Multi-Agent AI Study Assistant Setup Guide

## Quick Start (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/aryanchaudhari4/multi-agent-study-assistant.git
cd multi-agent-study-assistant
```

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy .env.example to .env
cp .env.example .env  # or: copy .env.example .env (Windows)
```

**Edit `backend/.env` and add:**
```env
GEMINI_API_KEY=your_gemini_api_key_here
DATABASE_URL=sqlite:///./studyassistant.db
SECRET_KEY=your_secret_key_here
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173,http://localhost:3000
```

**Run the backend:**
```bash
uvicorn main:app --reload
```
Backend will be available at: `http://127.0.0.1:8000`

### 3. Frontend Setup

Open a new terminal:
```bash
cd frontend

# Install dependencies
npm install

# Copy .env.example to .env
cp .env.example .env

# Run development server
npm run dev
```
Frontend will be available at: `http://localhost:5173`

---

## Production Deployment on Vercel

### Step 1: Set Up PostgreSQL Database

Choose one of these options:

**Option A: Vercel Postgres (Recommended - Free tier available)**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → Storage → Create Database → Postgres
3. Copy the `POSTGRES_URL_NON_POOLING` connection string

**Option B: Render.com (Free)**
1. Go to [Render.com](https://render.com)
2. Create New → PostgreSQL
3. Copy the connection string (External Database URL)

**Option C: Railway.app (Free)**
1. Go to [Railway.app](https://railway.app)
2. Create New Project → Add Database → PostgreSQL
3. Copy the PostgreSQL connection string

### Step 2: Deploy Backend to Vercel

1. Push your repository to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project" → Select your repository
4. In Project Settings:
   - **Framework Preset:** Other
   - **Root Directory:** `backend`
   - **Build Command:** `pip install -r requirements.txt`
   - **Output Directory:** (leave empty)
   - **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`

5. Go to Settings → Environment Variables and add:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   DATABASE_URL=postgresql://user:password@host:port/dbname
   SECRET_KEY=generate_a_random_string_here
   CORS_ORIGINS=https://your-frontend.vercel.app,https://your-frontend-preview.vercel.app
   ```

6. Click Deploy

**Note:** You may need to create a `vercel.json` in the backend folder:

```json
{
  "builds": [
    {
      "src": "main.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "main.py"
    }
  ]
}
```

### Step 3: Deploy Frontend to Vercel

1. In Vercel Dashboard, create a new project (or use existing)
2. In Project Settings:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

3. Go to Settings → Environment Variables and add:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```
   (Replace with your actual backend deployment URL)

4. Click Deploy

### Step 4: Verify Deployment

1. Visit your frontend URL: `https://your-app.vercel.app`
2. Try to register and login
3. Test all features (notes, quiz, etc.)

---

## Troubleshooting

### Login/Register Not Working
- ✅ Check that `CORS_ORIGINS` in backend includes your frontend URL
- ✅ Verify `VITE_API_URL` in frontend matches your backend URL
- ✅ Check browser console for errors (F12 → Console)
- ✅ Check backend logs on Vercel dashboard

### Database Errors
- ✅ Ensure `DATABASE_URL` is set correctly in backend environment variables
- ✅ For PostgreSQL, test the connection string: `psql postgresql://...`
- ✅ Make sure database is created and accessible

### CORS Errors in Browser
- ✅ Error like "Access to XMLHttpRequest blocked by CORS policy"
- ✅ Add your frontend URL to `CORS_ORIGINS` in backend `.env`
- ✅ Redeploy backend after changing environment variables

### API Health Check
Test if your backend is running:
```
https://your-backend-url.vercel.app/health
```
Should return: `{"status":"ok"}`

---

## Environment Variables Summary

### Backend Required Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `GEMINI_API_KEY` | Gemini API key from [makersuite.google.com](https://makersuite.google.com) | `AIzaSy...` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pwd@host/db` |
| `SECRET_KEY` | JWT signing key (keep secret!) | Generate with: `python -c "import secrets; print(secrets.token_urlsafe(32))"` |
| `CORS_ORIGINS` | Comma-separated frontend URLs | `https://app.vercel.app,https://preview.vercel.app` |

### Frontend Required Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://api-backend.vercel.app` |

---

## Features

- **Notes Agent:** Create structured notes, definitions, and takeaways
- **Quiz Agent:** Generate multiple-choice questions and practice tests
- **Doubt Solver:** Get step-by-step explanations with examples
- **Planner Agent:** Build study schedules and revision plans
- **Authentication:** Secure register/login with JWT
- **Responsive UI:** Works on desktop, tablet, and mobile
- **Dark/Light Mode:** Toggle between themes

---

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review browser console (F12 → Console tab)
3. Check Vercel deployment logs
4. Ensure all environment variables are set correctly
