from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
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
def get_notes(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    notes = db.query(Note).filter(Note.user_id == current_user.id).all()
    return [{"id": n.id, "title": n.title, "content": n.content, "subject": n.subject} for n in notes]

@router.post("/", status_code=201)
def create_note(req: NoteCreate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    note = Note(
        user_id=current_user.id,
        title=req.title,
        content=req.content,
        subject=req.subject
    )
    db.add(note)
    db.commit()
    db.refresh(note)
    return {"id": note.id, "message": "Note created successfully"}

@router.get("/{note_id}")
def get_note(note_id: int, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == note_id, Note.user_id == current_user.id).first()
    if not note:
        raise HTTPException(404, "Note not found")
    return {"id": note.id, "title": note.title, "content": note.content, "subject": note.subject}

@router.put("/{note_id}")
def update_note(note_id: int, req: NoteCreate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == note_id, Note.user_id == current_user.id).first()
    if not note:
        raise HTTPException(404, "Note not found")
    note.title = req.title
    note.content = req.content
    note.subject = req.subject
    db.commit()
    return {"message": "Note updated successfully"}

@router.delete("/{note_id}")
def delete_note(note_id: int, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == note_id, Note.user_id == current_user.id).first()
    if not note:
        raise HTTPException(404, "Note not found")
    db.delete(note)
    db.commit()
    return {"message": "Note deleted successfully"}
