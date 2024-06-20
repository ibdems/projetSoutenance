from .utilisateurs_view import FormateurInscriptionView, CabinetInscriptionView, DesirantInscriptionView, UtilisateurListView, UtilisateurDetailView, Login, Logout, DomaineExpertisesListView, DomaineExpertisesDetailView, MessageListView, MessageDetailView, UpdateMessageStatusView
from .formateurs_view import FormateurDetailView, FormateurListView, CertificationsDetailView, CertificationsListView, CompetenceDetailView, CompetenceListView, ActivateFormateurDomicile, ruFormateurDomicile, DomaineDetailView, DomaineListView, NiveauListView, NiveauDetailView, TempsListView, TempsDetailView
from .cabinets_view import CabinetDetailView, CabinetListView, DomaineExpertiseListView, DomaineExpertiseDetailView
from .formations_view import PrerequisDetailView, PrerequisListView, CriteresDetailView, CriteresListView, ObjectifsDetailView, ObjectifsListView, AnneeDetailView, FormationView, AnneeListView,FormationDetailView, FormationAjout
from .sessions_view import SessionDetailView, SessionListView, CalendrierListView, CalendrierDetailView, DemandeInscription, AcceptDemande,RefuserDemande, DemandeInscriptionDetail, SessionAjout
from .accueil_views import CountDesirantsView, CountFormateursCabinetsView, CountFormationView

