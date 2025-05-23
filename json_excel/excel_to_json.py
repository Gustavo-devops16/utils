import pandas as pd
import json

def read_excel_file(file_path):
    try:
        df = pd.read_excel(file_path)
        return df
    except FileNotFoundError:
        print(f"File {file_path} not found")
        return None
    except Exception as e:
        print(f"Error reading Excel file: {e}")
        return None

def dataframe_to_dict(df):
    return df.to_dict(orient='records')

def save_to_json(data, output_file):
    try:
        with open(output_file, 'w') as file:
            json.dump(data, file, indent=4)
        print(f"JSON file saved successfully as {output_file}")
    except Exception as e:
        print(f"Error saving JSON file: {e}")

def excel_to_json(input_file="shopee_brands.xlsx", output_file="brands_2.json"):
    df = read_excel_file(input_file)
    
    data = dataframe_to_dict(df)
    
    
    save_to_json(data, output_file)

if __name__ == "__main__":
    excel_to_json()