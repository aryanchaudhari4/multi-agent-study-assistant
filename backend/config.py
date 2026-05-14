from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    gemini_api_key: str
    database_url: str = "sqlite:///./studyassistant.db"
    secret_key: str = "mysecretkey123"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 10080
    model: str = "gemini-2.0-flash-lite"
    max_tokens: int = 1000

    class Config:
        env_file = ".env"

settings = Settings()