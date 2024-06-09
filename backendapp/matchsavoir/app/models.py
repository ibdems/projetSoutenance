from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.translation import gettext_lazy as _

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.translation import gettext_lazy as _

class UtilisateurManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("L'adresse email doit être renseignée")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Le superutilisateur doit avoir is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Le superutilisateur doit avoir is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class Utilisateur(AbstractBaseUser, PermissionsMixin):
    TYPE_CHOICES = [
        ('formateur', 'Formateur'),
        ('cabinet', 'Cabinet'),
        ('desirant', 'Desirant'),
    ]

    email = models.EmailField(_('adresse email'), unique=True)
    nom_complet = models.CharField(max_length=254)
    telephone = models.CharField(max_length=20)
    adresse = models.CharField(max_length=254)
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    date_inscription = models.DateTimeField(auto_now_add=True)
    photo = models.ImageField(upload_to='photos/', blank=True, null=True)  # Stocker le chemin de l'image
    statut = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    code_utilisateur = models.CharField(max_length=50, unique=True, blank=True, null=True)

    objects = UtilisateurManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nom_complet']

    def __str__(self):
        return self.nom_complet

    def save(self, *args, **kwargs):
        if not self.code_utilisateur:
            super().save(*args, **kwargs)
            type_prefix = self.type[:2].upper()
            increment_part = Utilisateur.objects.filter(type=self.type).count()
            self.code_utilisateur = f"MS{type_prefix}{increment_part + 1}{self.id}"
        super().save(*args, **kwargs)

class Formateur(models.Model):
    linkedin = models.CharField(max_length=254)
    profession = models.CharField(max_length=254)
    niveau_etude = models.CharField(max_length=254)
    duree_experience = models.IntegerField()
    utilisateur = models.OneToOneField(Utilisateur, on_delete=models.CASCADE, related_name='formateur')

    def __str__(self):
        return self.utilisateur.nom_complet

class Cabinet(models.Model):
    numero = models.IntegerField()
    description = models.CharField(max_length=254)
    logo = models.CharField(max_length=254)
    siteweb = models.URLField(max_length=254)
    utilisateur = models.OneToOneField(Utilisateur, on_delete=models.CASCADE, related_name='cabinet')
    formateur = models.ForeignKey(Formateur, on_delete=models.CASCADE, related_name='cabinets', null=True)

    def __str__(self):
        return self.utilisateur.nom_complet

class DomaineExpertise(models.Model):
    libelle = models.CharField(max_length=254)
    cabinet = models.ForeignKey(Cabinet, on_delete=models.CASCADE, null=True)
    formateur = models.ForeignKey(Formateur, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.formateur.utilisateur.nom_complet

class Competence(models.Model):
    libelle = models.CharField(max_length=254)
    formateur = models.ForeignKey(Formateur, on_delete=models.CASCADE)

    def __str__(self):
        return self.formateur.utilisateur.nom_complet

class Certifications(models.Model):
    libelle = models.CharField(max_length=254)
    fichier = models.CharField(max_length=254)
    formateur = models.ForeignKey(Formateur, on_delete=models.CASCADE)

    def __str__(self):
        return self.formateur.utilisateur.nom_complet


class FormateurDomicile(models.Model):
    statut = models.BooleanField(default=True)
    formateur = models.OneToOneField(Formateur, on_delete=models.CASCADE)

    def __str__(self):
        return self.formateur.utilisateur.nom_complet

class Domaine(models.Model):
    libelle = models.CharField(max_length=254)
    FormateurDomicile = models.ForeignKey(FormateurDomicile, on_delete=models.CASCADE)

    def __str__(self):
        return self.libelle

class Niveau(models.Model):
    libelle = models.CharField(max_length=254)
    FormateurDomicile = models.ForeignKey(FormateurDomicile, on_delete=models.CASCADE)

    def __str__(self):
        return self.libelle


class TempsDisponibilite(models.Model):
    jours = models.CharField(max_length=70)
    heure_debut = models.TimeField()
    heure_fin = models.TimeField()
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    formateurDomicile = models.ForeignKey(FormateurDomicile, on_delete=models.CASCADE)

    def __str__(self):
        return self.jours



class Formation(models.Model):
    code_formation = models.CharField(max_length=50, unique=True, blank=True, null=True)
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

    def __str__(self):
        return self.titre
    
    def save(self, *args, **kwargs):
        if not self.code_formation:
            # Générer le code formation
            user_initials = self.utilisateur.nom_complet[:2].upper()  # Les 2 premières lettres du nom complet de l'utilisateur
            increment_part = Formation.objects.filter(utilisateur=self.utilisateur).count() + 1  # Compter les formations de cet utilisateur et incrémenter de 1
            super().save(*args, **kwargs)  # Sauvegarder pour obtenir l'ID
            self.code_formation = f"MSF{user_initials}{increment_part}{self.id}"
            self.save(update_fields=['code_formation'])  # Sauvegarder à nouveau pour mettre à jour le code avec l'ID
        else:
            super().save(*args, **kwargs)

class Objectifs(models.Model):
    libelle = models.CharField(max_length=254)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)

    def __str__(self):
        return self.libelle

class Annee(models.Model):
    libelle = models.CharField(max_length=254)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)

    def __str__(self):
        return self.libelle

class Criteres(models.Model):
    libelle = models.CharField(max_length=254)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)

    def __str__(self):
        return self.libelle

class Prerequis(models.Model):
    libelle = models.CharField(max_length=254)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)

    def __str__(self):
        return self.libelle

class Session(models.Model):
    date_debut = models.DateField()
    date_fin = models.DateField()
    lieu = models.CharField(max_length=254)
    nb_place_dispo = models.IntegerField()
    tarif = models.IntegerField()
    statut = models.BooleanField()
    code_session = models.CharField(max_length=254)
    formation = models.ForeignKey(Formation, on_delete=models.CASCADE)

    def __str__(self):
        return  f"Session du {self.date_debut} au {self.fin} pour la formation en {self.formation.titre}"
    
    def save(self, *args, **kwargs):
        if not self.code_session:

            super().save(*args, **kwargs)  # Sauvegarder pour obtenir l'ID
            self.code_session = f"MSS{self.id}"
            self.save(update_fields=['code_session'])  # Sauvegarder à nouveau pour mettre à jour le code avec l'ID
        else:
            super().save(*args, **kwargs)

class Calendrier(models.Model):
    jours = models.CharField(max_length=60)
    heure_debut = models.TimeField()
    heure_fin = models.TimeField()
    session = models.ForeignKey(Session, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.jours} de {self.heure_debut} a {self.heure_fin}"


class Payement(models.Model):
    montant = models.IntegerField()
    date = models.DateTimeField()
    statut = models.BooleanField()
    numero = models.IntegerField()
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    def __str__(self):
        return  f"Payement numero {self.numero} pour la session {self.session.code}"
    
    def save(self, *args, **kwargs):
        if not self.numero:
            # Générer le code formation
            user_initials = self.utilisateur.nom_complet[:2].upper()  # Les 2 premières lettres du nom complet de l'utilisateur
            increment_part = Formation.objects.filter(utilisateur=self.utilisateur).count() + 1  # Compter les formations de cet utilisateur et incrémenter de 1
            super().save(*args, **kwargs)  # Sauvegarder pour obtenir l'ID
            self.numero = f"MSP{user_initials}{increment_part}{self.id}"
            self.save(update_fields=['numero'])  # Sauvegarder à nouveau pour mettre à jour le code avec l'ID
        else:
            super().save(*args, **kwargs)

class Inscription(models.Model):
    code_inscription = models.CharField(max_length=50, unique=True, blank=True, null=True)    
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
    motivation = models.TextField()
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)

    def __str__(self):
        return  f"Inscription de {self.nom} {self.prenom} numero {self.code}"

    def save(self, *args, **kwargs):
        if not self.code_formation:
            # Générer le code formation
            user_initials = self.utilisateur.nom_complet[:2].upper()  # Les 2 premières lettres du nom complet de l'utilisateur
            increment_part = Inscription.objects.filter(utilisateur=self.utilisateur).count() + 1  # Compter les formations de cet utilisateur et incrémenter de 1
            super().save(*args, **kwargs)  # Sauvegarder pour obtenir l'ID
            self.code_formation = f"MSI{user_initials}{increment_part}{self.id}"
            self.save(update_fields=['code'])  # Sauvegarder à nouveau pour mettre à jour le code avec l'ID
        else:
            super().save(*args, **kwargs)

class Evaluation(models.Model):
    note = models.IntegerField()
    commentaire = models.CharField(max_length=254)
    date_evaluation = models.DateTimeField()
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)

    def __str__(self):
        return  f"Evaluation"



class Message(models.Model):
    objet = models.CharField(max_length=254)
    contenu = models.CharField(max_length=254)
    date_envoie = models.DateTimeField()
    statut = models.BooleanField()
    expediteur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE, related_name='expediteur')
    destinateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE, related_name='destinateur')

    def __str__(self):
        return self.objet





