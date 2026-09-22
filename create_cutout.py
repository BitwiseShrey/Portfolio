import sys
from pathlib import Path
from PIL import Image
from rembg import remove

input_path = Path(r"c:\Users\shrey\OneDrive\Desktop\New folder\public\assets\images\profile\shreyansh-portrait.png")
output_path = Path(r"c:\Users\shrey\OneDrive\Desktop\New folder\public\assets\images\profile\shreyansh-cutout.png")

if input_path.exists():
    try:
        print(f"Opening input image: {input_path}")
        img = Image.open(input_path)
        print("Removing background with rembg...")
        cutout = remove(img)
        cutout.save(output_path, "PNG")
        print(f"Success! Saved cutout to {output_path}")
    except Exception as e:
        print(f"Error creating cutout: {e}")
else:
    print(f"Input image not found: {input_path}")
