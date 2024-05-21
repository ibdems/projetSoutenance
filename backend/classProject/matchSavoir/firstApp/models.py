from django.db import models

# Create your models here.


from django.db import models

class Payement(models.Model):
    montant = models.IntegerField()
    date = models.DateTimeField()
    statut = models.BooleanField()
    numero = models.IntegerField()

    def effectuer(self):
        pass

    def valider(self):
        pass

class Utilisateur(models.Model):
    code = models.CharField(max_length=254)
    nom_complet = models.CharField(max_length=254)
    email = models.CharField(max_length=254)
    telephone = models.IntegerField()
    password = models.CharField(max_length=254)
    adresse = models.CharField(max_length=254)
    type = models.CharField(max_length=254)
    date_inscription = models.DateTimeField()
    photo = models.CharField(max_length=254)
    statut = models.BooleanField()


    def se_connecter(self):
        pass

    def modifier_profil(self):
        pass

    def contacter_user(self):
        pass

    def signaler_contenu(self):
        pass

class Formation(models.Model):
    code = models.CharField(max_length=254)
    titre = models.CharField(max_length=254)
    description = models.CharField(max_length=254)
    duree = models.CharField(max_length=254)
    prix = models.IntegerField()
    format = models.CharField(max_length=254)
    niveau = models.CharField(max_length=254)
    photo = models.CharField(max_length=254)
    tags = models.CharField(max_length=254)
    langue = models.CharField(max_length=254)
    domaine = models.CharField(max_length=254)
    attendue = models.CharField(max_length=254)
    public_vise = models.CharField(max_length=254)
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)

    def ajouter_formation(self):
        pass

    def rechercher(self):
        pass

    def consulter(self):
        pass

    def modifier_formation(self):
        pass

    def supprimer_formation(self):
        pass

    def lister_formation(self):
        pass


class Session(models.Model):
    date_debut = models.DateTimeField()
    date_fin = models.DateTimeField()
    lieu = models.CharField(max_length=254)
    nb_place_dispo = models.IntegerField()
    tarif = models.IntegerField()
    statut = models.BooleanField()
    code = models.CharField(max_length=254)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)

    def ajouter_session(self):
        pass

    def consulter(self):
        pass

    def rechercher(self):
        pass

    def modifier_session(self):
        pass

    def supprimer_session(self):
        pass

    def afficher_session(self):
        pass


class Inscription(models.Model):
    code = models.CharField(max_length=254)
    date = models.DateTimeField()
    statut = models.BooleanField()
    prenom = models.CharField(max_length=254)
    nom = models.CharField(max_length=254)
    genre = models.CharField(max_length=254)
    telephone = models.CharField(max_length=254)
    date_naissance = models.DateTimeField()
    lieu_naissance = models.CharField(max_length=254)
    email = models.CharField(max_length=254)
    adresse = models.CharField(max_length=254)
    universite = models.CharField(max_length=254)
    specialite = models.CharField(max_length=254)
    motivation = models.CharField(max_length=254)
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    payement = models.ForeignKey(Payement, on_delete=models.CASCADE)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)

    def sinscrir(self):
        pass

    def valider(self):
        pass

    def annuler(self):
        pass

    def consulter(self):
        pass


class Evaluation(models.Model):
    note = models.CharField()
    commentaire = models.CharField(max_length=254)
    date_evaluation = models.DateTimeField()
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)

    def ajouter_evaluation(self):
        pass

    def modifier_evaluation(self):
        pass

    def supprimer_evaluation(self):
        pass

    def voir_evaluation(self):
        pass


class Jour(models.Model):
    libelle = models.CharField(max_lengt=50)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)


class Message(models.Model):
    objet = models.CharField(max_length=254)
    contenu = models.CharField(max_length=254)
    date_envoie = models.DateTimeField()
    statut = models.BooleanField()
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)


    def envoyer_message(self):
        pass

    def lire_message(self):
        pass

    def supprimer_message(self):
        pass

# Les autres classes peuvent être définies de manière similaire,
# en suivant le même schéma de définition des champs et des relations.

class Objectifs(models.Model):
    libelle = models.CharField(max_length=254)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)

class Annee(models.Model):
    libelle = models.CharField(max_length=254)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)

class Criteres(models.Model):
    libelle = models.CharField(max_length=254)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)

class Prerequis(models.Model):
    libelle = models.CharField(max_length=254)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)


class Formateur(models.Model):
    linkedin = models.CharField(max_length=254)
    profession = models.CharField(max_length=254)
    niveau_etude = models.CharField(max_length=254)
    duree_experience = models.IntegerField()
    utilisateur = models.OneToOneField(Utilisateur, on_delete=models.CASCADE)

class Cabinet(models.Model):
    numero = models.IntegerField()
    description = models.CharField(max_length=254)
    logo = models.CharField(max_length=254)
    siteweb = models.CharField(max_length=254)
    utilisateur = models.OneToOneField(Utilisateur, on_delete=models.CASCADE)
    formateur = models.ForeignKey(Formateur, on_delete=models.CASCADE)

class DomaineExpertise(models.Model):
    libelle = models.CharField(max_length=254)
    cabinet = models.ForeignKey(Cabinet, on_delete=models.CASCADE)
    formateur = models.ForeignKey(Formateur, on_delete=models.CASCADE)

class Competence(models.Model):
    libelle = models.CharField(max_length=254)
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    formateur = models.ForeignKey(Formateur, on_delete=models.CASCADE)

class Certifications(models.Model):
    libelle = models.CharField(max_length=254)
    fichier = models.IntegerField()
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    formateur = models.ForeignKey(Formateur, on_delete=models.CASCADE)

class Domain(models.Model):
    libelle = models.CharField(max_length=254)
    cabinet = models.ForeignKey(Cabinet, on_delete=models.CASCADE)
    formateur = models.ForeignKey(Formateur, on_delete=models.CASCADE)

class FormateurDomicile(models.Model):
    statut = models.BooleanField(default=True)
    formateur = models.OneToOneField(Formateur, on_delete=models.CASCADE)

class Niveau(models.Model):
    libelle = models.CharField(max_length=254)
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)

class TempsDisponibilite(models.Model):
    jours = models.IntegerField()
    heure_debut = models.IntegerField()
    heure_fin = models.IntegerField()
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    formateurDomicile = models.ForeignKey(FormateurDomicile, on_delete=models.CASCADE)
