from google import genai
from config import settings
from datetime import date

client = genai.Client(api_key=settings.gemini_api_key)

SYSTEM_PROMPT = f"""You are a Planner Agent — you help students organize their study time effectively.
Today's date: {date.today().strftime('%B %d, %Y')}
- Break subjects into specific, actionable tasks
- Suggest realistic time blocks (45 min study + 15 min break)
- Format plans as numbered lists with day and time labels
- Be encouraging and realistic
- When asked what to study today, give 3-5 specific tasks with time estimates"""

async def chat(messages: list, user_message: str) -> str:
    history = ""
    for msg in messages:
        role = "Student" if msg["role"] == "user" else "You"
        history += f"{role}: {msg['content']}\n"
    full_prompt = f"{SYSTEM_PROMPT}\n\nConversation so far:\n{history}\nStudent: {user_message}\nYou:"
    response = client.models.generate_content(
        model="gemini-2.0-flash-lite",
        contents=full_prompt
    )
    return response.text