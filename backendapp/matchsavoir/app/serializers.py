from rest_framework import serializers
from .models import Utilisateur, Formateur, Cabinet, DomaineExpertise, Competence, Certifications, FormateurDomicile, Domaine, Niveau, TempsDisponibilite, Formation, Objectifs, Annee, Criteres, Prerequis, Session, Calendrier, Payement, Inscription, Evaluation, Message

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    
class CompetenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competence
        fields = ['libelle']

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certifications
        fields = ['libelle', 'fichier']

class DomaineExpertiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomaineExpertise
        fields = ['libelle']

class FormateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Formateur
        fields = ['linkedin', 'profession', 'niveau_etude', 'duree_experience', 'utilisateur']

class CabinetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cabinet
        fields = ['numero', 'description', 'logo', 'siteweb', 'utilisateur']

class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = ['email', 'nom_complet', 'telephone', 'adresse', 'type', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        utilisateur = Utilisateur(**validated_data)
        utilisateur.set_password(password)
        utilisateur.save()
        return utilisateur

class FormateurInscriptionSerializer(serializers.ModelSerializer):
    utilisateur = UtilisateurSerializer()

    class Meta:
        model = Formateur
        fields = ['utilisateur', 'linkedin', 'profession', 'niveau_etude', 'duree_experience']

    def create(self, validated_data):
        utilisateur_data = validated_data.pop('utilisateur')
        utilisateur_data['type'] = 'formateur'
        utilisateur = UtilisateurSerializer.create(UtilisateurSerializer(), validated_data=utilisateur_data)
        formateur = Formateur.objects.create(utilisateur=utilisateur, **validated_data)
        return formateur

class CabinetInscriptionSerializer(serializers.ModelSerializer):
    utilisateur = UtilisateurSerializer()

    class Meta:
        model = Cabinet
        fields = ['utilisateur', 'numero', 'description', 'logo', 'siteweb']

    def create(self, validated_data):
        utilisateur_data = validated_data.pop('utilisateur')
        utilisateur_data['type'] = 'cabinet'
        utilisateur = UtilisateurSerializer.create(UtilisateurSerializer(), validated_data=utilisateur_data)
        cabinet = Cabinet.objects.create(utilisateur=utilisateur, **validated_data)
        return cabinet

class FormateurDomicileSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormateurDomicile
        fields = '__all__'

class DomaineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Domaine
        fields = '__all__'

class NiveauSerializer(serializers.ModelSerializer):
    class Meta:
        model = Niveau
        fields = '__all__'

class TempsDisponibiliteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TempsDisponibilite
        fields = '__all__'

class FormationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Formation
        fields = '__all__'

class ObjectifsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Objectifs
        fields = '__all__'

class AnneeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annee
        fields = '__all__'

class CriteresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Criteres
        fields = '__all__'

class PrerequisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prerequis
        fields = '__all__'

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = '__all__'

class CalendrierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendrier
        fields = '__all__'

class PayementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payement
        fields = '__all__'

class InscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscription
        fields = '__all__'

class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'
