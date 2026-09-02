import google.generativeai as genai
from config import settings

genai.configure(api_key=settings.gemini_api_key)

async def chat(history: list[dict], message: str) -> str:
    """
    Notes Agent: Helps create structured notes, definitions, and summaries.
    """
    model = genai.GenerativeModel(settings.model)
    
    system_prompt = """You are a Notes Agent for a study assistant app. Your role is to:
1. Help students create well-structured study notes
2. Provide clear definitions and concepts
3. Organize information hierarchically
4. Create summary notes from long text
5. Suggest note-taking techniques

When creating notes, structure them with:
- Title
- Key Concepts
- Definitions
- Examples
- Summary

Be concise but comprehensive."""

    response = model.generate_content(
        contents=message,
        generation_config=genai.types.GenerationConfig(
            max_output_tokens=settings.max_tokens,
        )
    )
    
    return response.text
