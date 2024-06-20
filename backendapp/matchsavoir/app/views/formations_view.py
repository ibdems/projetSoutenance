# View pour les domaines du formateurs
from rest_framework import generics, status
from rest_framework.response import Response
from ..models import Annee, Criteres, Formation, Objectifs, Prerequis
from ..serializers import AnneeSerializer, CriteresSerializer, FormationAjoutSerializer, FormationSerializer, ObjectifsSerializer, PrerequisSerializer

class FormationAjout(generics.CreateAPIView):
    queryset = Formation.objects.all()
    serializer_class = FormationAjoutSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            formation = serializer.save()
            response_data = FormationAjoutSerializer(formation).data
            return Response(response_data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FormationView(generics.ListAPIView):
    queryset = Formation.objects.all()
    serializer_class = FormationSerializer

class FormationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Formation.objects.all()
    serializer_class = FormationAjoutSerializer

# Views pour les objectifs des formations
class ObjectifsListView(generics.ListCreateAPIView):
    queryset = Objectifs.objects.all()
    serializer_class = ObjectifsSerializer

class ObjectifsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Objectifs.objects.all()
    serializer_class = ObjectifsSerializer

# Views pour les prerequis des formations
class PrerequisListView(generics.ListCreateAPIView):
    queryset = Prerequis.objects.all()
    serializer_class = PrerequisSerializer

class PrerequisDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Prerequis.objects.all()
    serializer_class = PrerequisSerializer

# View pour les criteres
class CriteresListView(generics.ListCreateAPIView):
    queryset = Criteres.objects.all()
    serializer_class = CriteresSerializer

class CriteresDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Criteres.objects.all()
    serializer_class = CriteresSerializer

# View pour retourner les annees
class AnneeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Annee.objects.all()
    serializer_class = AnneeSerializer

class AnneeListView(generics.ListCreateAPIView):
    queryset = Annee.objects.all()
    serializer_class = AnneeSerializer
    