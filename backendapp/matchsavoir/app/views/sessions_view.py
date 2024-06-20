from rest_framework import generics, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from ..models import Calendrier, Inscription, Session
from ..serializers import CalendrierSerializer, InscriptionSerializer, ReponseDemandeSerializer, SessionSerializer, SessionSerializerAjout

class SessionListView(generics.ListAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class SessionAjout(generics.CreateAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializerAjout
    

class SessionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class CalendrierListView(generics.ListCreateAPIView):
    queryset = Calendrier.objects.all()
    serializer_class = CalendrierSerializer

class CalendrierDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Calendrier.objects.all()
    serializer_class = CalendrierSerializer

class DemandeInscription(generics.ListCreateAPIView):
    queryset = Inscription.objects.all()
    serializer_class = InscriptionSerializer

class DemandeInscriptionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Inscription.objects.all()
    serializer_class = InscriptionSerializer


class AcceptDemande(generics.UpdateAPIView):
    queryset = Inscription.objects.all()
    serializer_class = ReponseDemandeSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.statut = True
        instance.save()
        return Response({'status': 'demande acceptée'}, status=status.HTTP_200_OK)

class RefuserDemande(generics.UpdateAPIView):
    queryset = Inscription.objects.all()
    serializer_class = ReponseDemandeSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.statut = False
        instance.save()
        return Response({'status': 'demande refusée'}, status=status.HTTP_200_OK)