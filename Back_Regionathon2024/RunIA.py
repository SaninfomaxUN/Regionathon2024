import numpy as np
from sklearn.preprocessing import StandardScaler
import joblib

# Crear el arreglo de datos basado en tus características
new_data = np.array([[
    54865, 3, 2, 0, 12, 0, 6, 6, 6, 0, 0, 0, 0, 0, 4000000, 666666.6667, 3, 0, 3,
    3, 3, 3, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 666666.6667, 0, 6, 6, 6, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 9, 6, 0, 40, 0, 0, 0, 0, 0, 0, 2, 12, 0, 0, 33, -1,
    1, 20, 0, 0, 0, 0, 0, 0, 0, 0
]])


# Cargar el escalador guardado
scaler = joblib.load('Back_Regionathon2024/scaler.pkl')

# Escalar los datos
new_data_scaled = scaler.transform(new_data)

# Cargar el modelo entrenado
model = joblib.load('Back_Regionathon2024/random_forest_model.pkl')

# Realizar la predicción
prediction = model.predict(new_data_scaled)

# Interpretar el resultado
print("Predicción:", "Ataque" if prediction[0] == 1 else "Benigno")