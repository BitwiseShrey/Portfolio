import os
import shutil
from pathlib import Path

DEST_DIR = Path(r"c:\Users\shrey\OneDrive\Desktop\New folder\public\assets")

# Target folders
folders = [
    DEST_DIR / "images" / "profile",
    DEST_DIR / "images" / "events",
    DEST_DIR / "images" / "logos",
    DEST_DIR / "images" / "projects",
    DEST_DIR / "audio",
    DEST_DIR / "videos"
]

for f in folders:
    f.mkdir(parents=True, exist_ok=True)

# Assets mapping
copies = [
    # Profile
    (r"c:\Users\shrey\OneDrive\Desktop\PERSONAL\Proffesional Picture.PNG", DEST_DIR / "images" / "profile" / "shreyansh-portrait.png"),
    (r"c:\Users\shrey\OneDrive\Desktop\PERSONAL\MY_PHOTO.jpeg", DEST_DIR / "images" / "profile" / "shreyansh-casual.jpeg"),
    (r"c:\Users\shrey\OneDrive\Desktop\PERSONAL\PF NEW.png", DEST_DIR / "images" / "profile" / "shreyansh-profile-alt.png"),
    
    # Logos
    (r"c:\Users\shrey\OneDrive\Desktop\AWS\SBG LOGO WHITE.png", DEST_DIR / "images" / "logos" / "aws-sbg-logo-white.png"),
    (r"c:\Users\shrey\OneDrive\Desktop\AWS\SBG profile logo.png", DEST_DIR / "images" / "logos" / "aws-sbg-logo-square.png"),
    (r"c:\Users\shrey\OneDrive\Desktop\SVIAS\SVIAS logo.png", DEST_DIR / "images" / "logos" / "svias-logo.png"),
    (r"c:\Users\shrey\OneDrive\Desktop\SVIAS\Final Logo.PNG", DEST_DIR / "images" / "logos" / "svias-logo-final.png"),
    
    # Events Photos
    (r"c:\Users\shrey\OneDrive\Desktop\AWS\20250324_111210.jpg", DEST_DIR / "images" / "events" / "aws-workshop-hall.jpg"),
    (r"c:\Users\shrey\OneDrive\Desktop\AWS\20250324_124919.jpg", DEST_DIR / "images" / "events" / "aws-event-stage.jpg"),
    (r"c:\Users\shrey\OneDrive\Desktop\AWS\IMG_0854.JPG", DEST_DIR / "images" / "events" / "aws-leadership-team.jpg"),
    (r"c:\Users\shrey\OneDrive\Desktop\AWS\IMG_0897.JPG", DEST_DIR / "images" / "events" / "aws-community-talk.jpg"),
    (r"c:\Users\shrey\OneDrive\Desktop\AWS\IMG_0944.JPG", DEST_DIR / "images" / "events" / "aws-speaker-session.jpg"),
    (r"c:\Users\shrey\OneDrive\Desktop\HEALTH HACK 2026\certificate final.jpg", DEST_DIR / "images" / "events" / "health-hackathon-cert.jpg"),
    
    # SVIAS Audio
    (r"c:\Users\shrey\OneDrive\Desktop\SVIAS\direction_test_1.wav", DEST_DIR / "audio" / "svias_raw_noisy.wav"),
    (r"c:\Users\shrey\OneDrive\Desktop\SVIAS\svias_beamformed.wav", DEST_DIR / "audio" / "svias_beamformed.wav"),
    (r"c:\Users\shrey\OneDrive\Desktop\SVIAS\svias_clean_voice.wav", DEST_DIR / "audio" / "svias_clean_isolated.wav"),
    (r"c:\Users\shrey\OneDrive\Desktop\SVIAS\svias_final_output.wav", DEST_DIR / "audio" / "svias_final_output.wav"),
]

for src, dst in copies:
    if os.path.exists(src):
        try:
            shutil.copy2(src, dst)
            print(f"Copied: {os.path.basename(src)} -> {dst.relative_to(DEST_DIR)}")
        except Exception as e:
            print(f"Error copying {src}: {e}")
    else:
        print(f"Not found: {src}")

print("Asset setup script completed.")
