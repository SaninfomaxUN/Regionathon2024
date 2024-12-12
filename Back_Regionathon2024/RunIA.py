from Back_Regionathon2024.dataTest import normal_data, DoS_slowloris, Heartbleed, PortScan, Sql, NameEvent
import joblib


# Cargar el escalador guardado
scalerBeta = joblib.load('models/scaler.pkl')
scalerAlpha = joblib.load('modelsMod/scaler_nombre_ataque.pkl')

data = normal_data
# data = DoS_slowloris
# data = Heartbleed
# data = PortScan
# data = Sql


# Escalar los datos
new_data_scaledAlpha = scalerAlpha.transform(data)
new_data_scaledBeta = scalerBeta.transform(data)


# Cargar el modelo entrenado
modelBeta = joblib.load('models/random_forest_model.pkl')
modelAlpha = joblib.load('modelsMod/random_forest_model_con_nombre_ataque.pkl')

# Realizar la predicción
predictionAlpha = modelAlpha.predict(new_data_scaledAlpha)
predictionBeta = modelBeta.predict(new_data_scaledBeta)

# Interpretar el resultado
print("\n------------------------------------------------\n")
print("Predicción:", "Ataque" if predictionBeta[0] == 1 else "Benigno")
print("Predicción: ", NameEvent[predictionAlpha[0]], predictionAlpha)