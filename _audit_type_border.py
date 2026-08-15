import json, os, re
lib = json.load(open('raz_library.json'))
pdf = json.load(open('_pdf_text.json'))
def norm(s):
    s=s.lower(); s=re.sub(r'[^a-z0-9 ]',' ',s); return re.sub(r'\s+',' ',s).strip()
pdfmap={}
for k,v in pdf.items():
    base=os.path.basename(k)
    base=re.sub(r'(_password_removed|_password|password_removed|password)','',base,flags=re.I)
    base=base.replace('书本','')
    base=re.sub(r'^\d+[-._]?','',base)
    pdfmap[norm(base)]=v
def find_pdf(title):
    t=norm(title)
    if t in pdfmap: return pdfmap[t]
    if len(t.split())>=3:
        for k,v in pdfmap.items():
            if t in k: return v
    return None
suspects=["Zots Goes to School","The Sometimes Friend","The Mystery of Granville Library",
    "The School Versus James Holt","Lucia's New School","The Mail Carrier's Hat",
    "Page's School Report","At the Library","My Neighborhood","My New School",
    "Community Workers","Time of Day","Laws for Kids","A President's Day",
    "My First Library Card","Guess That President","Edison's Inventions",
    "Community Government","It's About Time","Independence Day","World Holidays",
    "Can I Vote?","What's Your Money Worth?","Memorial Day","Presidents' Day",
    "First Day of School","Inventions","The U.S. Constitution","The U.S. Government At Work",
    "The History of Halloween","History to Chew On","Kid Inventors","Running for Freedom",
    "Labor Day","Veterans Day","Women of the Supreme Court","The Bill of Rights",
    "Holidays Around the World","Too Much Screen Time?","The World's Biggest Library",
    "Prehistoric Trade","The History of Anime","Lewis Howard Latimer","Historic Peacemakers",
    "The History of the Piano","Money in the USA","Money, Money, Money","Women and the Vote",
    "Real Outlaws of the Wild West","Election Day"]
FIC=["characters","setting","once upon","one day","lived","story","he said","she said"]
NF=["glossary","index","photographs by","table of contents","diagram","caption","label","map"]
for b in lib['books']:
    if b['title'] in suspects:
        t=find_pdf(b['title'])
        fic=[s for s in FIC if t and s in t.lower()]
        nf=[s for s in NF if t and s in t.lower()]
        print('%-34s cur=%s | FIC=%s NF=%s ocr=%dch' % (b['title'][:34], b['type'], fic, nf, len(t) if t else 0))
