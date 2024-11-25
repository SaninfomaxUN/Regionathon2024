from fastapi import FastAPI

from Back_Regionathon2024.objects.Params import Params

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


@app.post("/login")
def login(params):
    print(params)
    return {"message": "Login successful"}
