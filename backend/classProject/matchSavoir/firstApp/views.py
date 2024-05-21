from django.shortcuts import render

# Create your views here.


from rest_framework import generics
from .models import Utilisateur, Formateur, FormateurDomicile
from .serializers import UtilisateurSerializer, FormateurSerializer, FormateurDomicileSerializer

class UtilisateurList(generics.ListCreateAPIView):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer

class UtilisateurDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer

class FormateurList(generics.ListCreateAPIView):
    queryset = Formateur.objects.all()
    serializer_class = FormateurSerializer

class FormateurDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Formateur.objects.all()
    serializer_class = FormateurSerializer

class FormateurDomicileList(generics.ListCreateAPIView):
    queryset = FormateurDomicile.objects.all()
    serializer_class = FormateurDomicileSerializer

class FormateurDomicileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FormateurDomicile.objects.all()
    serializer_class = FormateurDomicileSerializer
