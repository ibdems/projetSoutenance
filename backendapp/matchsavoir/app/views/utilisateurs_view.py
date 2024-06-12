from re import U
from django.shortcuts import get_object_or_404
from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..models import  Cabinet, DomaineExpertise, Formateur, Message, Utilisateur
from ..serializers import  CabinetInscriptionSerializer, DomaineExpertiseSerializer,  FormateurInscriptionSerializer, MessageSerializer, UtilisateurSerializer
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

class MessageListView(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    # permission_classes = [IsAuthenticated]

class MessageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    # permission_classes = [IsAuthenticated]

# Vu pour montrer que le message a ete lu
class UpdateMessageStatusView(APIView):
    def post(self, request, pk):
        message = get_object_or_404(Message, pk=pk)
        if request.user == message.destinateur:
            message.statut = True
            message.save()
            return Response({"status": "Message lu"}, status=status.HTTP_200_OK)
        return Response({"error": "Non autorisé"}, status=status.HTTP_403_FORBIDDEN)