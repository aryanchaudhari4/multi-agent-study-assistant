from google import genai
from config import settings

client = genai.Client(api_key=settings.gemini_api_key)

SYSTEM_PROMPT = """You are a Quiz Agent — you generate educational quiz questions for students.
- For MCQs always use this exact format:
  Q: [question]
  A) [option]
  B) [option]
  C) [option]
  D) [option]
  Answer: [letter]
  Explanation: [brief explanation]
- Generate 1-3 questions per response unless asked for more
- After the student answers, give feedback and explain the correct answer"""

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