import os
from PIL import Image
import glob

def convert_tif_to_png(source_dir, dest_dir):
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
        
    tif_files = glob.glob(os.path.join(source_dir, "*.tif"))
    if not tif_files:
        print(f"No .tif files found in {source_dir}")
        return

    print(f"Found {len(tif_files)} .tif files. Converting to .png...")
    for tif_file in tif_files:
        try:
            filename = os.path.basename(tif_file)
            png_filename = os.path.splitext(filename)[0] + ".png"
            dest_path = os.path.join(dest_dir, png_filename)
            
            with Image.open(tif_file) as img:
                img.save(dest_path, "PNG")
            print(f"Converted {filename} -> {png_filename}")
        except Exception as e:
            print(f"Error converting {filename}: {e}")

if __name__ == "__main__":
    src = "sampleimages"
    dest = "sampleimages/web"
    print("Starting conversion process...")
    convert_tif_to_png(src, dest)
    print("Done.")
