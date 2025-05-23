import pandas as pd
import json

def parse_json_data(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
        return data
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON: {e}")
        return []
    except FileNotFoundError:
        print(f"File {file_path} not found")
        return []

def create_dataframe(data):
    return pd.DataFrame(data)

def save_to_excel(df, output_file):
    try:
        df.to_excel(output_file, index=False)
        print(f"Excel file saved successfully as {output_file}")
    except Exception as e:
        print(f"Error saving Excel file: {e}")

def json_to_excel(input_file="internal_brands.json", output_file="internal_brands.xlsx"):
    data = parse_json_data(input_file)
    
    if not data:
        print("No valid data to process")
        return
    
    df = create_dataframe(data)
    
    save_to_excel(df, output_file)

if __name__ == "__main__":
    json_to_excel()