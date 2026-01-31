# Campus Ideas - Angular Modular Project

Application Angular pour la gestion des suggestions du campus.

## Description

Cette application permet aux utilisateurs de :
- Consulter la liste des suggestions
- Rechercher des suggestions par titre ou catégorie
- Aimer des suggestions
- Ajouter des suggestions aux favoris
- Filtrer les suggestions par statut (acceptée, refusée, en attente)

## Technologies utilisées

- Angular 17+ (Architecture modulaire)
- TypeScript
- HTML/CSS
- FormsModule pour la liaison de données

## Structure du projet
src/
├── app/
│ ├── core/
│ │ ├── header/ # Composant header
│ │ ├── footer/ # Composant footer
│ │ └── list-suggestion/ # Composant liste des suggestions
│ ├── models/
│ │ └── suggestion.ts # Modèle de données
│ ├── app.component.* # Composant racine
│ └── app.module.ts # Module principal


## Installation

1. Cloner le projet :
```bash
git clone https://github.com/Zaydrajhi/Angular.git
cd Angular