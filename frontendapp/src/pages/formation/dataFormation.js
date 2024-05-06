export let formations = [
    {
        id: 1,
        titre: 'Micro Economie',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: 1,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: 2,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: 3,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: 2,
        titre: 'Developpement frontend avec Angular',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: 1,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: 2,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: 3,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: 3,
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
            id: 1,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: 2,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: 3,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: 4,
        titre: 'Developpement frontend avec Angular',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: 1,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: 1,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: 1,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: 5,
        titre: 'Developpement frontend avec Angular',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: 1,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: 1,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: 1,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: 6,
        titre: 'Developpement frontend avec Angular',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: 1,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: 1,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: 1,
            libelle: 'Valider les tests de prérequis'
        }]
    },
    {
        id: 7,
        titre: 'Developpement frontend avec Angular',
        description: "Une formation qui consiste à permettre aux passionnés de l'informatique de maîtriser le framework Angular",
        duree: '10 jours',
        prix: '500 000 Fg',
        domaine: 'Développement web',
        format: 'présentiel',
        niveau: 'Débutant',
        langue: 'Francais',
        tags: 'Developpement web, angular, frontend, site web',
        prerequis: [{
            id: 1,
            libelle: 'Connaître le langage JavaScript'
        }],
        objectifs: [{
            id: 1,
            libelle: 'Pouvoir dynamiser une page web avec Angular'
        }],
        criteres: [{
            id: 1,
            libelle: 'Valider les tests de prérequis'
        }]
    }
];

// Fonction pour ajouter une formation
export function ajouterFormation(formation) {
    formation.id = 1;
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
