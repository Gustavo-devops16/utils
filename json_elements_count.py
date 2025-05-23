import json
import time

with open("internal_brands.json", "r", encoding='utf-8') as file:
    data = json.load(file)

x = 1
for item in data:
    time.sleep(0.01)
    print(f"number of itens: {x}")
    x += 1


#Marcas da shopee: 4472
#Marcas internas: 800