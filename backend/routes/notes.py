from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from db.database import get_db
from models.note import Note
from routes.auth import get_current_user
from models.user import User

router = APIRouter(prefix="/notes", tags=["notes"])

class NoteCreate(BaseModel):
    title: str
    content: str
    subject: str = "General"

@router.get("/")
def get_notes(subject: str = None, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    q = db.query(Note).filter(Note.user_id == user.id)
    if subject:
        q = q.filter(Note.subject == subject)
    return q.order_by(Note.created_at.desc()).all()

@router.post("/", status_code=201)
def create_note(req: NoteCreate, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    note = Note(
        user_id=user.id,
        title=req.title,
        content=req.content,
        subject=req.subject
    )
    db.add(note)
    db.commit()
    db.refresh(note)
    return note

@router.delete("/{note_id}")
def delete_note(note_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    note = db.query(Note).filter(Note.id == note_id, Note.user_id == user.id).first()
    if not note:
        raise HTTPException(404, "Note not found")
    db.delete(note)
    db.commit()
    return {"message": "Deleted"}