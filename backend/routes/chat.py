from fastapi import APIRouter, Depends
from pydantic import BaseModel
from routes.auth import get_current_user
from models.user import User
from agents.orchestrator import classify_agent
from agents import notes_agent, quiz_agent, doubt_agent, planner_agent

router = APIRouter(prefix="/chat", tags=["chat"])

AGENTS = {
    "notes": notes_agent,
    "quiz": quiz_agent,
    "doubt": doubt_agent,
    "planner": planner_agent,
}

class ChatRequest(BaseModel):
    message: str
    agent: str | None = None
    history: list[dict] = []

class ChatResponse(BaseModel):
    reply: str
    agent_used: str

@router.post("/", response_model=ChatResponse)
async def chat(req: ChatRequest, current_user: User = Depends(get_current_user)):
    agent_name = req.agent or await classify_agent(req.message)
    if agent_name not in AGENTS:
        agent_name = "doubt"
    agent = AGENTS[agent_name]
    reply = await agent.chat(req.history, req.message)
    return ChatResponse(reply=reply, agent_used=agent_name)