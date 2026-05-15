from openai import OpenAI
from config import settings

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=settings.gemini_api_key,
)

AGENT_DESCRIPTIONS = """
- notes: User wants to create, organize, summarize, or retrieve study notes
- quiz: User wants to be tested, generate questions, practice MCQs, or take a quiz
- doubt: User has a concept they don't understand and needs explanation or step-by-step help
- planner: User wants to plan study sessions, set tasks, manage schedule, or track progress
"""

async def classify_agent(message: str) -> str:
    response = client.chat.completions.create(
        model="openrouter/auto",
        messages=[
            {"role": "system", "content": f"You are a router. Reply with ONLY one word from: notes, quiz, doubt, planner.\n\nAgent descriptions:\n{AGENT_DESCRIPTIONS}"},
            {"role": "user", "content": message}
        ],
        max_tokens=10
    )
    agent = response.choices[0].message.content.strip().lower()
    return agent if agent in ["notes", "quiz", "doubt", "planner"] else "doubt"