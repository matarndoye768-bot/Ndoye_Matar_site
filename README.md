Les 4 pages sont reliées entre elles par un menu de navigation commun, présent dans
un `<header>` sur chaque page.

## Choix de design

- **Balises sémantiques** : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`,
  `<aside>`, `<footer>` sont utilisées sur toutes les pages, sans aucune balise `<table>`
  pour la mise en page.
- **Mise en page** : CSS Grid pour les pages `index`, `cv` (disposition en deux colonnes :
  aside / contenu principal) et `projet` (grille de cartes), Flexbox pour le menu de
  navigation.
- **Palette de couleurs** : 5 couleurs maximum, déclarées en variables CSS dans `:root` :
  - `--couleur-1` : vert foncé `#00634a` (texte, accents)
  - `--couleur-2` : vert clair `#07916e` (boutons, titres de section)
  - `--couleur-3` : blanc cassé `whitesmoke` (fonds clairs)
  - `--couleur-4` : gris clair `lightgray` (fonds secondaires)
  - `--couleur-5` : blanc `#ffffff` (texte sur fond foncé)
- **Effets interactifs** : effets `:hover` avec `transition` sur les liens du menu et
  sur les images de la galerie (léger zoom).
- **Responsive** : le site s'adapte à trois tailles d'écran (mobile, tablette, desktop)
  via des media queries (`max-width: 900px` et `max-width: 600px`), avec les grilles qui
  passent de plusieurs colonnes à une seule colonne sur petit écran.
- **Bonus ajoutés** :
  - Mode sombre automatique via `@media (prefers-color-scheme: dark)`
  - Animation d'apparition du contenu via `@keyframes`
  - JavaScript simple : mise en surbrillance du lien de navigation actif, et message
    de confirmation (`alert()`) après l'envoi du formulaire de contact

## Déploiement

Le site est déployé en ligne via GitHub Pages :
👉 https://ton-pseudo.github.io/nom_prenom_site/

## Auteur

Matar Ndoye — Étudiant en Licence 2 Informatique, UFR SET, Université Iba Der Thiam de Thiès.