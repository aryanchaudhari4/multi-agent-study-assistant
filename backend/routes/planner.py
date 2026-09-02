from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from db.database import get_db
from models.plan import Plan
from routes.auth import get_current_user
from models.user import User

router = APIRouter(prefix="/planner", tags=["planner"])

class PlanCreate(BaseModel):
    title: str
    description: str
    duration: str = "1 week"

@router.get("/")
def get_plans(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    plans = db.query(Plan).filter(Plan.user_id == current_user.id).all()
    return [{"id": p.id, "title": p.title, "description": p.description, "duration": p.duration, "status": p.status} for p in plans]

@router.post("/", status_code=201)
def create_plan(req: PlanCreate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    plan = Plan(
        user_id=current_user.id,
        title=req.title,
        description=req.description,
        duration=req.duration
    )
    db.add(plan)
    db.commit()
    db.refresh(plan)
    return {"id": plan.id, "message": "Plan created successfully"}

@router.get("/{plan_id}")
def get_plan(plan_id: int, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    plan = db.query(Plan).filter(Plan.id == plan_id, Plan.user_id == current_user.id).first()
    if not plan:
        raise HTTPException(404, "Plan not found")
    return {"id": plan.id, "title": plan.title, "description": plan.description, "duration": plan.duration, "status": plan.status}

@router.put("/{plan_id}")
def update_plan(plan_id: int, req: PlanCreate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    plan = db.query(Plan).filter(Plan.id == plan_id, Plan.user_id == current_user.id).first()
    if not plan:
        raise HTTPException(404, "Plan not found")
    plan.title = req.title
    plan.description = req.description
    plan.duration = req.duration
    db.commit()
    return {"message": "Plan updated successfully"}

@router.delete("/{plan_id}")
def delete_plan(plan_id: int, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    plan = db.query(Plan).filter(Plan.id == plan_id, Plan.user_id == current_user.id).first()
    if not plan:
        raise HTTPException(404, "Plan not found")
    db.delete(plan)
    db.commit()
    return {"message": "Plan deleted successfully"}
