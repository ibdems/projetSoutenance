from ..models import Certifications, Competence, Formateur
from ..serializers import CertificationSerializer, CompetenceSerializer, FormateurSerializer
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


