from fastapi import FastAPI
from routs.auth.auth import router
app = FastAPI()

app.include_router(router, prefix="/auth")