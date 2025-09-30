#!/usr/bin/env bash

# Arrêter le script en cas d'erreur
set -e

# Construire le projet
npm run build

# Aller dans le dossier dist
cd dist

# Init git et créer la branche gh-pages
git init
git checkout -b gh-pages
git add -A
git commit -m "Déploiement vers GitHub Pages"

# Pousser sur gh-pages (⚠️ change l'URL)
git push -f https://github.com/ton-utilisateur/ton-repo.git gh-pages

# Revenir au dossier d'origine
cd -
