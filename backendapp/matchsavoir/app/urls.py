from django.urls import path
from .views import *

urlpatterns = [
    # URLs pour l'inscription des utilisateurs
    path('inscription/formateur/', FormateurInscriptionView.as_view(), name='inscription_formateur'),
    path('inscription/cabinet/', CabinetInscriptionView.as_view(), name='inscription_cabinet'),
    path('inscription/desirant/', DesirantInscriptionView.as_view(), name='inscription_desirant'),

    # Urls pour la connexion et la deconnexion
    path('login/', Login.as_view(), name='connexion'),
    path('logout/', Logout.as_view(), name='deconnexion'),
    
    # URLs pour la gestion CRUD des utilisateurs
    path('utilisateurs/', UtilisateurListView.as_view(), name='utilisateur_list'),
    path('utilisateurs/<int:pk>/', UtilisateurDetailView.as_view(), name='utilisateur_detail'),

    # URLs pour la gestion CRUD des formateurs
    path('formateurs/', FormateurListView.as_view(), name='formateur_list'),
    path('formateurs/<int:pk>/', FormateurDetailView.as_view(), name='formateur_detail'),

    # URLs pour la gestion CRUD des cabinets
    path('cabinets/', CabinetListView.as_view(), name='cabinet_list'),
    path('cabinets/<int:pk>/', CabinetDetailView.as_view(), name='cabinet_detail'),

    # URLs pour la gestion CRUD des domaines d'expertise
    path('domaine-expertise/', DomaineExpertiseListView.as_view(), name='domaine_expertise_list'),
    path('domaine-expertise/<int:pk>/', DomaineExpertiseDetailView.as_view(), name='domaine_expertise_detail'),
    
    # URLs pour la gestion CRUD des compétences
    path('competences/', CompetenceListView.as_view(), name='competence_list'),
    path('competences/<int:pk>/', CompetenceDetailView.as_view(), name='competence_detail'),

    # URLs pour la gestion CRUD des certifications
    path('certifications/', CertificationsListView.as_view(), name='certifications_list'),
    path('certifications/<int:pk>/', CertificationsDetailView.as_view(), name='certifications_detail'),
]
