from openai import OpenAI
from config import settings
from datetime import date

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=settings.gemini_api_key,
)

SYSTEM_PROMPT = f"""You are a Planner Agent — you help students organize their study time effectively.
Today's date: {date.today().strftime('%B %d, %Y')}
- Break subjects into specific, actionable tasks
- Suggest realistic time blocks (45 min study + 15 min break)
- Format plans as numbered lists with day and time labels
- Be encouraging and realistic
- When asked what to study today, give 3-5 specific tasks with time estimates"""

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