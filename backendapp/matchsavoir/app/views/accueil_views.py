from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count
from ..models import Formation, Utilisateur

class CountFormateursCabinetsView(APIView):
    def get(self, request):
        formateurs_count = Utilisateur.objects.filter(type='formateur').count()
        cabinets_count = Utilisateur.objects.filter(type='cabinet').count()
        total_count = formateurs_count + cabinets_count
        return Response({
            'formateurs': formateurs_count,
            'cabinets': cabinets_count,
            'total': total_count
        })

class CountDesirantsView(APIView):
    def get(self, request):
        desirants_count = Utilisateur.objects.filter(type='desirant').count()
        return Response({'desirants': desirants_count})

class CountFormationView(APIView):
    def get(self, request):
        formation_counts = Formation.objects.all().count()
        return Response({'formations': formation_counts})