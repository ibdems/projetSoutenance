import datetime
from rest_framework import serializers
from .models import Utilisateur, Formateur, Cabinet, DomaineExpertise, Competence, Certifications, FormateurDomicile, Domaine, Niveau, TempsDisponibilite, Formation, Objectifs, Annee, Criteres, Prerequis, Session, Calendrier, Payement, Inscription, Evaluation, Message

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    
class CompetenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competence
        fields = '__all__'

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certifications
        fields = '__all__'

class DomaineExpertiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomaineExpertise
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


class FormateurDomicileSerializer(serializers.ModelSerializer):
    niveau = NiveauSerializer(many=True, read_only = True)
    temps = TempsDisponibiliteSerializer(many=True, read_only = True)
    domaine = DomaineSerializer(many=True, read_only = True)
    class Meta:
        model = FormateurDomicile
        fields = '__all__'

class FormateurSerializer(serializers.ModelSerializer):
    competances = CompetenceSerializer(many=True, read_only=True)
    certifications = CertificationSerializer(many=True, read_only=True)
    domaineExpertises = DomaineExpertiseSerializer(many=True, read_only = True)
    formateurDomicile = FormateurDomicileSerializer(read_only = True)
    class Meta:
        model = Formateur
        fields = ['linkedin', 'competances', 'certifications', 'domaineExpertises', 'formateurDomicile', 'profession', 'niveau_etude', 'duree_experience', 'utilisateur']

class CabinetSerializer(serializers.ModelSerializer):
    domaineExpertises = DomaineExpertiseSerializer(many=True, read_only = True)
    class Meta:
        model = Cabinet
        fields = '__all__'

class FormateurDomicileListSerializer(serializers.ModelSerializer):
    formateur = FormateurSerializer(read_only=True)

    class Meta:
        model = Utilisateur
        fields = ['id','email', 'cabinet', 'formateur', 'nom_complet', 'telephone', 'adresse',  'photo']
        read_only_fields = ['id']


class UtilisateurSerializer(serializers.ModelSerializer):
    formateur = FormateurSerializer(read_only=True)
    cabinet = CabinetSerializer(read_only=True)

    class Meta:
        model = Utilisateur
        fields = ['id','email', 'cabinet', 'formateur', 'nom_complet', 'telephone', 'adresse', 'type', 'password', 'photo']
        extra_kwargs = {'password': {'write_only': True}}
        read_only_fields = ['id']

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
        fields = ['utilisateur', 'numero', 'description','siteweb']

    def create(self, validated_data):
        utilisateur_data = validated_data.pop('utilisateur')
        utilisateur_data['type'] = 'cabinet'
        utilisateur = UtilisateurSerializer.create(UtilisateurSerializer(), validated_data=utilisateur_data)
        cabinet = Cabinet.objects.create(utilisateur=utilisateur, **validated_data)
        return cabinet




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

class FormationAjoutSerializer(serializers.ModelSerializer) :
    class Meta:
        model = Formation
        fields = '__all__'
        read_only_fields = ['id', 'code_formation']

class FormationSerializer(serializers.ModelSerializer):
    prerequis = PrerequisSerializer(many=True, read_only=True)
    criteres = CriteresSerializer(many=True, read_only=True)
    objectifs = ObjectifsSerializer(many=True, read_only=True)
    annee = AnneeSerializer(many=True, read_only=True)
    utilisateur = UtilisateurSerializer()
    class Meta:
        model = Formation
        fields = '__all__'
        read_only_fields = ['id', 'code_formation', 'utilisateur']

    
class CalendrierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendrier
        fields = '__all__'

class SessionSerializerAjout(serializers.ModelSerializer):

    class Meta:
        model = Session
        fields = '__all__'
        read_only_fields = ['code_session']


class SessionSerializer(serializers.ModelSerializer):
    calendriers = CalendrierSerializer(many=True, read_only=True)
    formation = FormationSerializer()

    class Meta:
        model = Session
        fields = '__all__'
        read_only_fields = ['code_session', 'calendriers']
        extra_kwargs = {
            'formation': {'write_only': True},  # Permet de ne pas afficher les détails de la formation lors de l'ajout de la session
        }

class PayementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payement
        fields = '__all__'

class InscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscription
        fields = '__all__'
        read_only_fields = ['code_inscription', 'statut']

class ReponseDemandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscription
        fields = ['statut']
        
     

class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'
        read_only_fields = ['statut']
