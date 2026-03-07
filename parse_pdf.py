import sys
try:
    import fitz  # PyMuPDF
except ImportError:
    print("PyMuPDF not installed")
    sys.exit(1)

doc = fitz.open('/cv.pdf')
text = ""
for page in doc:
    text += page.get_text()

with open('/app/cv_text.txt', 'w', encoding='utf-8') as f:
    f.write(text)

print("PDF parsed successfully")
