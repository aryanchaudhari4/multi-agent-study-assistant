from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from db.database import get_db
from models.plan import Plan
from routes.auth import get_current_user
from models.user import User

router = APIRouter(prefix="/plans", tags=["planner"])

class PlanCreate(BaseModel):
    title: str
    description: Optional[str] = None
    due_date: Optional[datetime] = None
    priority: str = "medium"
    subject: str = "General"

@router.get("/")
def get_plans(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    return db.query(Plan).filter(Plan.user_id == user.id).order_by(Plan.due_date).all()

@router.post("/", status_code=201)
def create_plan(req: PlanCreate, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    plan = Plan(user_id=user.id, **req.dict())
    db.add(plan)
    db.commit()
    db.refresh(plan)
    return plan

@router.patch("/{plan_id}/toggle")
def toggle_plan(plan_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    plan = db.query(Plan).filter(Plan.id == plan_id, Plan.user_id == user.id).first()
    if not plan:
        raise HTTPException(404, "Plan not found")
    plan.is_done = not plan.is_done
    db.commit()
    return plan

@router.delete("/{plan_id}")
def delete_plan(plan_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    plan = db.query(Plan).filter(Plan.id == plan_id, Plan.user_id == user.id).first()
    if not plan:
        raise HTTPException(404, "Plan not found")
    db.delete(plan)
    db.commit()
    return {"message": "Deleted"}