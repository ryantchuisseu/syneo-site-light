# SYNEO — site vitrine, version légère

Version allégée du site SYNEO (dépôt d'origine : `ryantchuisseu/syneo-site-web`, inchangé).

## Différences avec la version d'origine

| | Version d'origine | Version légère |
|---|---|---|
| Animations | 9 (prisme 3D, film qui s'agrandit, roue, texte qui s'allume…) | **Aucune** |
| Canvas / boucles `requestAnimationFrame` | 3 | **0** |
| Film (3,2 Mo) | Lecture auto au chargement | **Chargé seulement au clic** (`preload="none"`) |
| `index.html` | ~117 Ko | ~55 Ko |
| Contenu, pages, charte | — | **Identiques** (7 pages, mêmes textes, mêmes couleurs) |

Conservé : navigation par pages (`#actualites`, `#programme`…), onglets des conférences,
formulaires qui préparent un message WhatsApp, boutons « Copier », compte à rebours, bouton WhatsApp fixe.

## Fichiers

- `index.html` : le site complet (7 pages)
- `logo.jpg`, `favicon.svg`, `film.mp4`, `film-poster.jpg`

## Voir / mettre en ligne

- Ouvrir `index.html` dans un navigateur (connexion Internet nécessaire pour les polices).
- Netlify Drop, hébergeur classique ou GitHub Pages : déposer les 5 fichiers tels quels.
