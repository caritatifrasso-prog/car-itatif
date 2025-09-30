# Car'itatif

Site web de l'événement **Car'itatif** en React + Tailwind.

## 🚀 Lancer en local
```bash
npm install
npm run dev
🔧 Build
npm run build
🌍 Déploiement GitHub Pages
1.	Modifie vite.config.js → base: '/nom-du-repo/'
2.	Active GitHub Pages sur la branche gh-pages.
Avec GitHub Actions (voir .github/workflows/deploy.yml), le site sera publié automatiquement après chaque push sur main.
📁 Structure
•	src/App.jsx → contenu principal (fourni)
•	public/images → tes images
•	index.html → page d’entrée

---

### 8. GitHub Actions `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
________________________________________
👉 Étapes finales :
1.	Crée un dépôt GitHub (nom ex. caritatif).
2.	Copie-colle tous ces fichiers + le src (où tu mets App.jsx que j’ai déjà fait).
3.	Commit & push sur main.
4.	GitHub Action va builder & publier ton site automatiquement sur https://ton-utilisateur.github.io/caritatif/.

