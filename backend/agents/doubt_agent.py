from openai import OpenAI
from config import settings

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=settings.gemini_api_key,
)

SYSTEM_PROMPT = """You are a Doubt Solver Agent — a patient, friendly tutor who explains concepts clearly.
- Start with a simple one-line answer
- Then explain step by step
- Use relatable analogies and real-world examples
- Show worked examples for math/science problems
- End with: Does this make sense? Ask me to clarify anything!
- Keep responses under 200 words unless solving a multi-step problem"""

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