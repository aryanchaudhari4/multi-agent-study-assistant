from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    gemini_api_key: str
    database_url: str = "sqlite:///./studyassistant.db"
    secret_key: str = "mysecretkey123"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 10080
    model: str = "gemini-2.0-flash-lite"
    max_tokens: int = 1000
    cors_origins: str = "http://localhost:5173,http://127.0.0.1:5173,http://localhost:3000"

    @property
    def allowed_origins(self) -> list[str]:
        return [
            origin.strip()
            for origin in self.cors_origins.split(",")
            if origin.strip()
        ]

    class Config:
        env_file = ".env"

settings = Settings()
