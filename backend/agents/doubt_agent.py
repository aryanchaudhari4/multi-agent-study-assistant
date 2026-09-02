import google.generativeai as genai
from config import settings

genai.configure(api_key=settings.gemini_api_key)

async def chat(history: list[dict], message: str) -> str:
    """
    Doubt Agent: Provides step-by-step explanations and concept clarification.
    """
    model = genai.GenerativeModel(settings.model)
    
    system_prompt = """You are a Doubt Solver Agent for a study assistant app. Your role is to:
1. Explain complex concepts in simple language
2. Provide step-by-step problem solutions
3. Use real-world examples and analogies
4. Break down difficult topics into manageable parts
5. Clarify misconceptions

When explaining, follow this structure:
- Simple definition
- Break down into parts
- Step-by-step explanation
- Real-world example
- Common mistakes to avoid
- Summary

Be patient, thorough, and use analogies when helpful."""

    response = model.generate_content(
        contents=message,
        generation_config=genai.types.GenerationConfig(
            max_output_tokens=settings.max_tokens,
        )
    )
    
    return response.text
