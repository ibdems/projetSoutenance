from ..models import Cabinet, Certifications, Competence, DomaineExpertise, Formateur
from ..serializers import CabinetSerializer,  DomaineExpertiseSerializer
from rest_framework import   generics
from rest_framework.permissions import IsAuthenticated

# Vues pour la gestion CRUD des cabinets
class CabinetListView(generics.ListCreateAPIView):
    queryset = Cabinet.objects.all()
    serializer_class = CabinetSerializer
    permission_classes = [IsAuthenticated]

class CabinetDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cabinet.objects.all()
    serializer_class = CabinetSerializer
    permission_classes = [IsAuthenticated]

# Vues pour la gestion CRUD des domaines d'expertise
class DomaineExpertiseListView(generics.ListCreateAPIView):
    queryset = DomaineExpertise.objects.all()
    serializer_class = DomaineExpertiseSerializer
    # permission_classes = [IsAuthenticated]

class DomaineExpertiseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DomaineExpertise.objects.all()
    serializer_class = DomaineExpertiseSerializer
    permission_classes = [IsAuthenticated]
