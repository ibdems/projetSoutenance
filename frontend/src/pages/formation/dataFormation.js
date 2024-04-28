let i = 0;
export let formations = [
    {
        id: i++,
        titre: 'Formation en Angular',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: i++,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: i++,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: i++,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: i++,
        titre: 'Formation en Angular',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: i++,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: i++,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: i++,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: i++,
        titre: 'Developpement Frontend avec ReactJs',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: i++,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: i++,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: i++,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: i++,
        titre: 'Formation en Angular',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: i++,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: i++,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: i++,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: i++,
        titre: 'Formation en Angular',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: i++,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: i++,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: i++,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: i++,
        titre: 'Formation en Angular',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: i++,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: i++,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: i++,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: i++,
        titre: 'Formation en Angular',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: i++,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: i++,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: i++,
            libelle: 'Valider les tests de prérequis'
        }]
    }
];

// Fonction pour ajouter une formation
export function ajouterFormation(formation) {
    formation.id = i++;
    formations.push(formation);
}

// Fonction pour récupérer toutes les formations
export function getFormations() {
    return formations;
}

// Fonction pour récupérer une formation par son ID
export function getFormationById(id) {
    return formations.find(formation => formation.id === id);
}

// Fonction pour mettre à jour une formation
export function mettreAJourFormation(id, nouvelleFormation) {
    const index = formations.findIndex(formation => formation.id === id);
    if (index !== -1) {
        formations[index] = { ...formations[index], ...nouvelleFormation };
    }
}

// Fonction pour supprimer une formation par son ID
export function supprimerFormation(id) {
    formations = formations.filter(formation => formation.id !== id);
}
