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
    path('utilisateurs/detail/<int:pk>/', UtilisateurDetailView.as_view(), name='utilisateur_detail'),

    # URLS pour les messages
    path('messages/', MessageListView.as_view(), name='message_view'),
    path('messages/detail/<int:pk>/', MessageDetailView.as_view(), name='message_detail'),
    path('messages/statut/<int:pk>/', UpdateMessageStatusView.as_view(), name='message_statut'),

    # URLs pour la gestion CRUD des formateurs
    path('formateurs/', FormateurListView.as_view(), name='formateur_list'),
    path('formateurs/domicile/', FormateurDomicileListView.as_view(), name='formateur_domicile'),
    path('formateurs/detail/<int:pk>/', FormateurDetailView.as_view(), name='formateur_detail'),
    path('formateurs/active_formateur_domicile/', ActivateFormateurDomicile.as_view(), name='active_formateur_domicile'),
    path('formateurs/detail_formateur_domicile/<int:pk>/', ruFormateurDomicile.as_view(), name='formateur_detail_domicile'),
    path('formateurs/domaine/', DomaineListView.as_view(), name='domaine_list'),
    path('formateurs/domaine/<int:pk>/', DomaineDetailView.as_view(), name='domaine_detail'),
    path('formateurs/niveau/', NiveauListView.as_view(), name='niveau_list'),
    path('formateurs/niveau/<int:pk>/', NiveauDetailView.as_view(), name='niveau_detail'),
    path('formateurs/temps/', TempsListView.as_view(), name='temps_list'),
    path('formateurs/temps/<int:pk>/', TempsDetailView.as_view(), name='temps_detail'),


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

    # URLS pour les formations
     path('formations/', FormationView.as_view(), name='formation_list'),
     path('formations/add/', FormationAjout.as_view(), name='formation_ajout'),
     path('formations/detail/<int:pk>', FormationDetailView.as_view(), name='formation_detail'),
    path('formations/objectifs', ObjectifsListView.as_view(), name='objectifs_list'),
    path('formations/objectifs/<int:pk>/', ObjectifsDetailView.as_view(), name='objectifs_detail'),
    path('formations/criteres', CriteresListView.as_view(), name='criteres_list'),
    path('formations/criteres/<int:pk>/', CriteresDetailView.as_view(), name='criteres_detail'),
    path('formations/annee/<int:pk>/', AnneeDetailView.as_view(), name='annee_detail'),
    path('formations/annee', AnneeListView.as_view(), name='annee_list'),
    path('formations/prerequis', PrerequisListView.as_view(), name='prerequis_list'),
    path('formations/prerequis/<int:pk>/', PrerequisDetailView.as_view(), name='prerequis_detail'),

    # URLS pour les sessions
    path('sessions/add', SessionAjout.as_view(), name='session_ajout'),
    path('sessions/', SessionListView.as_view(), name='session_list'),
    path('sessions/detail/<int:pk>/', SessionDetailView.as_view(), name='session_detail'),
    path('sessions/calendrier/', CalendrierListView.as_view(), name='calendrier_ajout'),
    path('sessions/calendrier/detail/<int:pk>/', CalendrierDetailView.as_view(), name='calendrier_detail'),
    path('sessions/demande/', DemandeInscription.as_view(), name='demande_inscription'),
    path('sessions/demande/detail/<int:pk>/', DemandeInscriptionDetail.as_view(), name='demande_inscription_detail'),
    path('sessions/demande/accept/<int:pk>/', AcceptDemande.as_view(), name='accept_demande'),
    path('sessions/demande/refuse/<int:pk>/', RefuserDemande.as_view(), name='refuse_demande'),


    # URLS Pour acceuil du site
    path('utilisateurs/count-formateurs-cabinets/', CountFormateursCabinetsView.as_view(), name='count-formateurs-cabinets'),
    path('utilisateurs/count-desirants/', CountDesirantsView.as_view(), name='count-desirants'),
    path('utilisateurs/count-formations/', CountFormationView.as_view(), name='count-desirants'),
]
