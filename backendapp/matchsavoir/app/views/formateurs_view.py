from ..models import Certifications, Competence, Domaine, Formateur, FormateurDomicile, Niveau, TempsDisponibilite
from ..serializers import CertificationSerializer, CompetenceSerializer, DomaineSerializer, FormateurDomicileSerializer, FormateurSerializer, NiveauSerializer, TempsDisponibiliteSerializer
from rest_framework import status, generics
from rest_framework.permissions import IsAuthenticated

# Vues pour la gestion CRUD des formateurs
class FormateurListView(generics.ListCreateAPIView):
    queryset = Formateur.objects.all()
    serializer_class = FormateurSerializer
    # permission_classes = [IsAuthenticated]

class FormateurDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Formateur.objects.all()
    serializer_class = FormateurSerializer
    # permission_classes = [IsAuthenticated]

# Vues pour la gestion CRUD des compétences
class CompetenceListView(generics.ListCreateAPIView):
    queryset = Competence.objects.all()
    serializer_class = CompetenceSerializer
    # permission_classes = [IsAuthenticated]

class CompetenceDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Competence.objects.all()
    serializer_class = CompetenceSerializer
    # permission_classes = [IsAuthenticated]

# Vues pour la gestion CRUD des certifications
class CertificationsListView(generics.ListCreateAPIView):
    queryset = Certifications.objects.all()
    serializer_class = CertificationSerializer
    # permission_classes = [IsAuthenticated]

class CertificationsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Certifications.objects.all()
    serializer_class = CertificationSerializer
    # permission_classes = [IsAuthenticated]

class ActivateFormateurDomicile(generics.ListCreateAPIView):
    queryset = FormateurDomicile.objects.all()
    serializer_class = FormateurDomicileSerializer

class ruFormateurDomicile(generics.RetrieveUpdateAPIView):
    queryset = FormateurDomicile.objects.all()
    serializer_class = FormateurDomicileSerializer

# View pour les domaines du formateurs
class DomaineListView(generics.ListCreateAPIView):
    queryset = Domaine.objects.all()
    serializer_class = DomaineSerializer

class DomaineDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Domaine.objects.all()
    serializer_class = DomaineSerializer

# View pour les niveau de formations des formateurs
class NiveauListView(generics.ListCreateAPIView):
    queryset = Niveau.objects.all()
    serializer_class = NiveauSerializer

class NiveauDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Niveau.objects.all()
    serializer_class = NiveauSerializer

# View pour le temps de disponibilites des formateurs
class TempsListView(generics.ListCreateAPIView):
    queryset = TempsDisponibilite.objects.all()
    serializer_class = TempsDisponibiliteSerializer

class TempsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TempsDisponibilite.objects.all()
    serializer_class = TempsDisponibiliteSerializer