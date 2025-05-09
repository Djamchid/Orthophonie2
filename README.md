# Mission PhoniX – Starter Kit (MVP)

Bienvenue, Agent&nbsp;! Ceci est le dépôt de départ pour **Mission PhoniX**, une application web ludique d’orthophonie.
Version : 0.1.0  
Date : 2025-05-09

## Fonctionnalités incluses (MVP)

- **Quartier des Fricatives** : exercices pour les paires /f‑v/, /s‑z/, /ʃ‑ʒ/.
- Persistance **localStorage** (profil et progression).
- Interface française, boutons et polices adaptées aux seniors.
- Architecture modulaire Vanilla JS (ES Modules).
- Design responsive (desktop/tablette/mobile).
- Prêt pour déploiement statique (GitHub Pages).  

## Structure des dossiers

```
mission-phonix/
├─ index.html
├─ styles/
│  └─ style.css
├─ scripts/
│  ├─ data.js
│  ├─ storage.js
│  ├─ ui.js
│  ├─ audio.js
│  └─ main.js
├─ assets/
│  ├─ audio/        # à compléter
│  └─ images/       # à compléter
└─ README.md
```

## Lancer en local

1. Cloner le dépôt puis ouvrir un terminal dans `mission-phonix/`.
2. Démarrer un serveur statique, p. ex. :
   ```bash
   python3 -m http.server 8000
   ```
3. Ouvrir `http://localhost:8000` dans votre navigateur.

## Déployer sur GitHub Pages

1. Pousser le dépôt sur GitHub.
2. Dans **Settings → Pages**, sélectionner la branche `main` et le dossier `/` comme source.
3. Valider : GitHub Pages construit automatiquement le site.

## TODO

- Ajouter le *Centre d’Entraînement* complet (autres quartiers & exercices).
- Ajouter l’analyse audio temps‑réel dans `audio.js`.
- Étendre la base de données phonétiques dans `data.js`.
- Optimiser l’accessibilité (navigation clavier, ARIA).
