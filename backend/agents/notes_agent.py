from openai import OpenAI
from config import settings

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=settings.gemini_api_key,
)

SYSTEM_PROMPT = """You are a Notes Agent — an expert study assistant that organizes academic content.
- Create well-structured notes with clear headings (use ## for headings)
- Highlight key definitions, formulas, and concepts
- Use bullet points for lists
- Add a Key Takeaways section at the end
- Always format in clean Markdown"""

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