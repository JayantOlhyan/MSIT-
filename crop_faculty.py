import os
from PIL import Image

def crop_image(input_path, output_path, box):
    try:
        if not os.path.exists(input_path):
            print(f"Error: {input_path} not found.")
            return
        img = Image.open(input_path)
        cropped = img.crop(box)
        cropped.save(output_path)
        print(f"Saved: {output_path}")
    except Exception as e:
        print(f"Error cropping {input_path}: {e}")

# Directories
src_dir = "/Users/jayantolhyan/.gemini/antigravity/brain/a9ec1a91-6f2c-4ac5-8bae-44727b12c4bc"
dest_dir = "/Users/jayantolhyan/Desktop/my projects/deployed/msit website/public/faculty"

# Faculty coordinates (Estimated from 1710x986 screenshots)
# (left, top, right, bottom)
faculty_data = [
    {
        "src": "dr_geetika_dhand_photo_1774172409753.png",
        "dest": "geetika-dhand.png",
        "box": (1180, 135, 1360, 315)
    },
    {
        "src": "dr_naveen_dahiya_photo_1774172553922.png",
        "dest": "naveen-dahiya.png",
        "box": (1010, 240, 1160, 450) # Adjusted for Dr. Naveen from his screenshot
    },
    {
        "src": "dr_koyel_datta_gupta_photo_1774172690242.png",
        "dest": "koyel-datta.png",
        "box": (1305, 140, 1490, 325) # Adjusted for Dr. Koyel
    }
]

for faculty in faculty_data:
    input_path = os.path.join(src_dir, faculty["src"])
    output_path = os.path.join(dest_dir, faculty["dest"])
    crop_image(input_path, output_path, faculty["box"])
