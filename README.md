# SYNEO — site vitrine (version simple)

Version vitrine classique du site SYNEO, demandée après la revue de la V1 :
« rendre le site light, à l'image de celui de l'IAC ».
La V1 (`ryantchuisseu/syneo-site-web`) n'est pas modifiée.

## Ce qui change par rapport à la V1

| | V1 (syneo-site-web) | Version simple |
|---|---|---|
| Style | Éditorial, portail média, scènes immersives | **Vitrine classique** : bandeau d'accueil, sections, cartes |
| Animations | 9 (prisme 3D, film plein écran, roue, texte qui s'allume…) | **Aucune** |
| Polices | 4 | **1** (Figtree) |
| Pages | 1 fichier, pages par ancres (`#programme`) | **7 vraies pages HTML** |
| Film (3,2 Mo) | Lecture automatique | **Chargé au clic** |
| Contenu | — | **Repris de la V1** (textes, chiffres, équipe, partenaires, paliers) |

Conservé : compte à rebours du 18 novembre, onglets des 6 conférences, filtre des actualités par rubrique,
formulaires qui préparent un message WhatsApp, boutons « Copier », bouton WhatsApp fixe.

## Fichiers

```
index.html          Accueil
actualites.html     Actualités (filtre par rubrique)
prisme.html         Le programme PRISME (7 étapes + conférences en onglets)
a-propos.html       Qui sommes-nous (mission, principes, valeurs, équipe)
partenaires.html    Partenaires + paliers de sponsoring
contribuer.html     Proposer un contenu (formulaire → WhatsApp)
contact.html        Contact (formulaire → WhatsApp, coordonnées)
assets/style.css    Styles communs
assets/main.js      Scripts communs (menu, compte à rebours, formulaires, onglets, filtre)
assets/             Logo, favicon, film et son image d'attente
```

## À fournir par le client

- **Photos** d'événements ou de l'équipe (le bandeau d'accueil peut en accueillir une, comme sur le site de l'IAC).
- **Logos** des partenaires (affichés pour l'instant en texte).
- **Vrais articles** pour la page Actualités (ceux en place sont des exemples).
- Confirmation des **montants de sponsoring** (5 M à 30 M FCFA).

## Voir / mettre en ligne

- Ouvrir `index.html` dans un navigateur (connexion Internet nécessaire pour la police).
- Vercel, Netlify, GitHub Pages ou hébergeur classique : déposer le dossier tel quel, aucune compilation.
