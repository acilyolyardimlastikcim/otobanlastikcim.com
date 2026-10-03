import sys
from PIL import Image

def crop_transparent(image_path, output_path):
    img = Image.open(image_path)
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    bbox = img.getbbox()
    if bbox:
        img_cropped = img.crop(bbox)
        img_cropped.save(output_path, 'WEBP')
        print(f"Successfully cropped and saved to {output_path}")
    else:
        print("Image is entirely transparent or empty.")

if __name__ == '__main__':
    crop_transparent('public/logo.png', 'public/logo_cropped.webp')
