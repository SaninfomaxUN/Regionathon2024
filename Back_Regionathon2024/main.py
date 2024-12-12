from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Definir un modelo de datos con Pydantic
class LoginParams(BaseModel):
    email: str
    password: str
    destination_port: int

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}



@app.post("/login")
def login(params: LoginParams):
    print(params)
    return {"message": "Login successful"}
