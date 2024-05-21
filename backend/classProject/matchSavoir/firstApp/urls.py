from django.urls import path
from .views import UtilisateurList, UtilisateurDetail, FormateurList, FormateurDetail, FormateurDomicileList, FormateurDomicileDetail

urlpatterns = [
    path('utilisateurs/', UtilisateurList.as_view(), name='utilisateur-list'),
    path('utilisateurs/<int:pk>/', UtilisateurDetail.as_view(), name='utilisateur-detail'),
    path('formateurs/', FormateurList.as_view(), name='formateur-list'),
    path('formateurs/<int:pk>/', FormateurDetail.as_view(), name='formateur-detail'),
    path('formateurs-domicile/', FormateurDomicileList.as_view(), name='formateurdomicile-list'),
    path('formateurs-domicile/<int:pk>/', FormateurDomicileDetail.as_view(), name='formateurdomicile-detail'),
]
