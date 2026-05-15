from openai import OpenAI
from config import settings

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=settings.gemini_api_key,
)

SYSTEM_PROMPT = """You are a Quiz Agent — you generate educational quiz questions for students.
- For MCQs always use this exact format:
  Q: [question]
  A) [option]  B) [option]  C) [option]  D) [option]
  Answer: [letter]
  Explanation: [brief explanation]
- Generate 1-3 questions per response
- After the student answers, give feedback"""

async def chat(messages: list, user_message: str) -> str:
    all_messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    for msg in messages:
        all_messages.append({"role": msg["role"], "content": msg["content"]})
    all_messages.append({"role": "user", "content": user_message})
    response = client.chat.completions.create(
        model="openrouter/auto",
        messages=all_messages,
        max_tokens=1000
    )
    return response.choices[0].message.content