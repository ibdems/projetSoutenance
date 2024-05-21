from rest_framework import serializers
from .models import Utilisateur, Formateur, FormateurDomicile

class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = '__all__'

class FormateurSerializer(serializers.ModelSerializer):
    utilisateur = UtilisateurSerializer()  # Nested serializer to include utilisateur details

    class Meta:
        model = Formateur
        fields = '__all__'

class FormateurDomicileSerializer(serializers.ModelSerializer):
    formateur = FormateurSerializer()  # Nested serializer to include formateur details

    class Meta:
        model = FormateurDomicile
        fields = '__all__'
