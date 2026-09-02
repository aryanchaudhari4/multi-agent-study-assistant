import google.generativeai as genai
from config import settings

genai.configure(api_key=settings.gemini_api_key)

AGENT_DESCRIPTIONS = """
- notes: User wants to create, organize, summarize, or retrieve study notes
- quiz: User wants to be tested, generate questions, practice MCQs, or take a quiz
- doubt: User has a concept they don't understand and needs explanation or step-by-step help
- planner: User wants to plan study sessions, set tasks, manage schedule, or track progress
"""

async def classify_agent(message: str) -> str:
    model = genai.GenerativeModel(settings.model)
    prompt = f"""You are a router. Reply with ONLY one word from: notes, quiz, doubt, planner.

Agent descriptions:
{AGENT_DESCRIPTIONS}

User message: {message}

Reply with only ONE word: notes, quiz, doubt, or planner"""
    
    response = model.generate_content(prompt)
    agent = response.text.strip().lower()
    return agent if agent in ["notes", "quiz", "doubt", "planner"] else "doubt"
