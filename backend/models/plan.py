from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Text
from sqlalchemy.orm import relationship
from datetime import datetime
from db.database import Base

class Plan(Base):
    __tablename__ = "plans"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String, nullable=False)
    description = Column(Text)
    due_date = Column(DateTime, nullable=True)
    is_done = Column(Boolean, default=False)
    priority = Column(String, default="medium")
    subject = Column(String, default="General")
    created_at = Column(DateTime, default=datetime.utcnow)
    user = relationship("User", back_populates="plans")