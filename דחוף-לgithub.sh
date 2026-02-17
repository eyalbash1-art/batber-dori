#!/bin/bash
# הרץ פעם אחת – ידחוף את כל הפרויקט ל-GitHub
# אם יבקש Username: eyalbash1-art
# אם יבקש Password: הדבק Personal Access Token (לא סיסמה)

cd "$(dirname "$0")"

if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "Barber Dori website"
  git branch -M main
  git remote add origin https://github.com/eyalbash1-art/batber-dori.git
fi

git push -u origin main

echo ""
echo "אם הצליח – היכנס ל-Vercel, Add Project, בחר batber-dori, Deploy."
