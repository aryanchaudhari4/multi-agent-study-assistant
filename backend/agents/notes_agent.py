from google import genai
from config import settings

client = genai.Client(api_key=settings.gemini_api_key)

SYSTEM_PROMPT = """You are a Notes Agent — an expert study assistant that organizes academic content.
- Create well-structured notes with clear headings (use ## for headings)
- Highlight key definitions, formulas, and concepts
- Use bullet points for lists
- Add a Key Takeaways section at the end
- Always format in clean Markdown"""

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