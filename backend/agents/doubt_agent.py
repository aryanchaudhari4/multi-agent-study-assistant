from google import genai
from config import settings

client = genai.Client(api_key=settings.gemini_api_key)

SYSTEM_PROMPT = """You are a Doubt Solver Agent — a patient, friendly tutor who explains concepts clearly.
- Start with a simple one-line answer
- Then explain step by step
- Use relatable analogies and real-world examples
- Show worked examples for math/science problems
- End with: Does this make sense? Ask me to clarify anything!
- Keep responses under 200 words unless solving a multi-step problem"""

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