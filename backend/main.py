import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db.database import Base, engine
from models.user import User
from models.note import Note
from models.quiz import QuizSession
from models.plan import Plan
from routes.auth import router as auth_router
from routes.chat import router as chat_router
from routes.notes import router as notes_router
from routes.planner import router as planner_router
from config import settings

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Study Assistant API",
    description="Multi-Agent AI Study Assistant",
    version="1.0.0"
)

# Configure CORS with proper settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    max_age=600,
)

app.include_router(auth_router)
app.include_router(chat_router)
app.include_router(notes_router)
app.include_router(planner_router)

@app.get("/")
def root():
    return {"message": "Study Assistant API is running!"}

@app.get("/health")
def health():
    return {"status": "ok"}