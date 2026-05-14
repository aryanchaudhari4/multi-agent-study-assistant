from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float, JSON
from sqlalchemy.orm import relationship
from datetime import datetime
from db.database import Base

class QuizSession(Base):
    __tablename__ = "quiz_sessions"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    topic = Column(String, nullable=False)
    questions = Column(JSON)
    score = Column(Float, default=0.0)
    total_questions = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
    user = relationship("User", back_populates="quiz_sessions")