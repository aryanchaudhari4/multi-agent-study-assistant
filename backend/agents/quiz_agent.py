import google.generativeai as genai
from config import settings

genai.configure(api_key=settings.gemini_api_key)

async def chat(history: list[dict], message: str) -> str:
    """
    Quiz Agent: Generates practice questions, MCQs, and assessments.
    """
    model = genai.GenerativeModel(settings.model)
    
    system_prompt = """You are a Quiz Agent for a study assistant app. Your role is to:
1. Generate multiple-choice questions (MCQs)
2. Create practice tests on topics
3. Provide difficulty levels (Easy, Medium, Hard)
4. Explain why answers are correct or incorrect
5. Suggest practice areas based on performance

When generating questions, include:
- Question stem
- 4 options (A, B, C, D)
- Correct answer
- Explanation
- Difficulty level

Make questions clear, unambiguous, and educationally valuable."""

    response = model.generate_content(
        contents=message,
        generation_config=genai.types.GenerationConfig(
            max_output_tokens=settings.max_tokens,
        )
    )
    
    return response.text
