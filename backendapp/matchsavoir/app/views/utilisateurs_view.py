from re import U
from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..models import  Cabinet, DomaineExpertise, Formateur, Utilisateur
from ..serializers import  CabinetInscriptionSerializer, DomaineExpertiseSerializer,  FormateurInscriptionSerializer, UtilisateurSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout

class Login(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key,}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class Logout(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class FormateurInscriptionView(generics.CreateAPIView):
    queryset = Formateur.objects.all()
    serializer_class = FormateurInscriptionSerializer

class CabinetInscriptionView(generics.CreateAPIView):
    queryset = Cabinet.objects.all()
    serializer_class = CabinetInscriptionSerializer

class DesirantInscriptionView(generics.CreateAPIView):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer
 
# Les generics pour les cruds des differents table impliquer a l'inscription


class UtilisateurListView(generics.ListAPIView):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer
    # permission_classes = [IsAuthenticated]
    

class UtilisateurDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer
    # permission_classes = [IsAuthenticated]

# Vues pour la gestion CRUD des domaine d'expertise des formateur et cabinet
class DomaineExpertisesListView(generics.ListCreateAPIView):
    queryset = DomaineExpertise.objects.all()
    serializer_class = DomaineExpertiseSerializer
    # permission_classes = [IsAuthenticated]

class DomaineExpertisesDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DomaineExpertise.objects.all()
    serializer_class = DomaineExpertiseSerializer
    # permission_classes = [IsAuthenticated]