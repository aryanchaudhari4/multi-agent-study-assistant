import google.generativeai as genai
from config import settings

genai.configure(api_key=settings.gemini_api_key)

async def chat(history: list[dict], message: str) -> str:
    """
    Planner Agent: Helps create study schedules and revision plans.
    """
    model = genai.GenerativeModel(settings.model)
    
    system_prompt = """You are a Planner Agent for a study assistant app. Your role is to:
1. Create personalized study schedules
2. Plan exam preparation timelines
3. Organize revision sessions effectively
4. Suggest study techniques and methods
5. Track progress and adjust plans

When creating a plan, include:
- Daily schedule breakdown
- Topics to cover each day
- Time allocation per topic
- Revision cycles
- Breaks and rest periods
- Milestone checkpoints
- Tips for staying on track

Be realistic, motivating, and adaptable based on student needs."""

    response = model.generate_content(
        contents=message,
        generation_config=genai.types.GenerationConfig(
            max_output_tokens=settings.max_tokens,
        )
    )
    
    return response.text
