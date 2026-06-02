# 📈 Formation Trading — Smart Money Concepts

Formation complète au trading, **de débutant à trader structuré**, sous forme de
site web statique consultable directement dans le navigateur.

> 16 modules · contenu pédagogique en français · suivi de progression intégré ·
> recherche · thème clair/sombre · 100 % responsive.

---

## 🌐 Accéder à la formation (GitHub Pages)

Le site est conçu pour être publié via **GitHub Pages**. Une fois activé, il sera
accessible à l'adresse :

```
https://<votre-utilisateur>.github.io/trading/
```

Le dépôt est actuellement **privé** ; la formation sera visible publiquement dès
que le dépôt (ou Pages) sera rendu public.

### Activer GitHub Pages

Deux méthodes possibles :

**A. Via GitHub Actions (recommandé, inclus dans ce dépôt)**
1. Allez dans **Settings → Pages**.
2. Section **Build and deployment → Source** : choisissez **GitHub Actions**.
3. Le workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
   déploie automatiquement à chaque push sur `main` (ou la branche de dev).

**B. Via une branche (plus simple)**
1. **Settings → Pages → Source : Deploy from a branch**.
2. Branche : `main` (ou celle de votre choix), dossier : `/ (root)`.
3. Enregistrez : le lien apparaît en haut de la page après ~1 minute.

> ℹ️ **Dépôt privé :** la publication Pages depuis un dépôt privé nécessite un plan
> GitHub Pro/Team/Enterprise. Pour un accès public gratuit, rendez le dépôt public
> (le contenu restera identique).

---

## 🧭 Contenu de la formation

| # | Module | Thème |
|---|--------|-------|
| 1 | Introduction au Trading | Marchés, actifs, mécanique d'un trade |
| 2 | Installation de l'environnement | Compte démo, MT5, TradingView |
| 3 | Lecture des graphiques | Chandeliers, UT, supports/résistances |
| 4 | Structure de marché | HH/HL/LH/LL, BOS, CHoCH |
| 5 | Comprendre la liquidité | Stop hunt, equal highs/lows, pools |
| 6 | Zones institutionnelles | Order Blocks, FVG, premium/discount |
| 7 | Analyse multi-timeframe | Top-down du Weekly au M5 |
| 8 | Sessions de marché | Asie, Londres, New York, kill zones |
| 9 | Analyse fondamentale | CPI, NFP, FOMC, taux |
| 10 | Gestion du risque | Sizing, R:R, espérance, drawdown |
| 11 | Psychologie du trading | Discipline, FOMO, revenge trading |
| 12 | Construire sa stratégie | Règles, checklist, plan de trading |
| 13 | Backtesting | Journal, statistiques, validation |
| 14 | Trading en réel | Démo → réel, gestion des émotions |
| 15 | Prop Firms | Challenges, drawdown, compte financé |
| 16 | Atelier pratique complet | Cas réels, exécution, débrief |

---

## 🛠️ Développement local

Aucune dépendance, aucun build. Ouvrez simplement `index.html`, ou servez le
dossier localement :

```bash
# Python
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

### Structure du projet

```
.
├── index.html              # Page unique (SPA légère, routage par hash)
├── assets/
│   ├── css/style.css       # Styles (thèmes clair/sombre)
│   └── js/
│       ├── content.js      # Tout le contenu pédagogique (données)
│       └── app.js          # Navigation, progression, recherche, thème
├── .github/workflows/
│   └── deploy-pages.yml     # Déploiement GitHub Pages
└── .nojekyll                # Désactive le traitement Jekyll
```

### Modifier ou ajouter du contenu

Tout le contenu vit dans [`assets/js/content.js`](assets/js/content.js).
Pour ajouter une leçon, ajoutez un objet `{ title, minutes, html }` dans le tableau
`lessons` du module concerné. La navigation, la recherche et la progression se
mettent à jour automatiquement.

---

## ✨ Fonctionnalités

- **Suivi de progression** sauvegardé localement (localStorage), barre de progression.
- **Recherche** instantanée dans toutes les leçons.
- **Thème clair / sombre**.
- **Navigation** par modules repliables + boutons précédent/suivant.
- **Responsive** : confortable sur mobile et desktop.

---

*Formation à but pédagogique. Le trading comporte un risque de perte en capital.
Aucun élément de ce contenu ne constitue un conseil en investissement.*
