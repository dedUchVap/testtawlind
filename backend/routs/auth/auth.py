from fastapi import APIRouter
from fastapi.security import OAuth2PasswordBearer
from jwt.exceptions import InvalidTokenError


router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/login')

@router.get('/login')
async def login():
    ...

@router.get('/register')
async def register(name: str, email: str):
    ...