import React, { useState, useEffect, useRef } from "react";
import logoF from "../../image/logo.jpg";
import "../accueil/css/style.css";
import {
  Col,
  Row,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./recherche.scss";
import ContactezNous from "../accueil/ContactezNous";
import Footer from "../accueil/Footer";
import InfoSection from "../accueil/InfoSection";
import Titre from "../../components/titre/Titre";
import Axios from "../../components/Axios";
import { Skeleton } from 'primereact/skeleton';
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Recherche() {
  const toast = useRef(null);
  const [showTextRecherche, setShowTextRecherche] = useState(false);
  const [showTextLieu, setShowTextLieu] = useState(false);
  const [sessions, setsessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [elements, setElements] = useState({
    textRecherche: "",
    textLieu: "",
    format: "",
    niveau: "",
    public: "",
    duree: "",
    prixMin: "",
    prixMax: "",
  });

  useEffect(() => {
    // Effect to fetch sessions only once
    Axios.get('sessions/')
      .then(response => {
        setsessions(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the sessions!", error);
        if (toast.current) {
          toast.current.show({
            severity: "error",
            summary: "Erreur",
            detail: "Echec de chargement des sessions! Verifier votre connexion et reactialisez la page",
            life: 7000
          });
        }
      });
  }, []);

  useEffect(() => {
    // Effect to handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 150) {
        setShowTextRecherche(true);
        setShowTextLieu(true);
      } else {
        setShowTextRecherche(false);
        setShowTextLieu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (name, value) => {
    setElements((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filterSessions = (sessions) => {
    return sessions.filter((session) => {
      const { textRecherche, textLieu, format, niveau, public: publicAdmis, duree, prixMin, prixMax } = elements;
      const sessionTitle = session.formation.titre.toLowerCase();
      const sessionTags = session.formation.tags.toLowerCase();
      const sessionLieu = session.lieu.toLowerCase();
      const sessionFormat = session.formation.format.toLowerCase();
      const sessionNiveau = session.formation.niveau.toLowerCase();
      const sessionPublic = session.formation.public_vise.toLowerCase();
      const sessionDuree = session.duree;
      const sessionPrix = session.tarif;

      let dureeType = '';
      if (sessionDuree <= 30) {
        dureeType = 'courte';
      } else if (sessionDuree > 30 && sessionDuree <= 90) {
        dureeType = 'moyenne';
      } else {
        dureeType = 'longue';
      }

      return (
        (!textRecherche || sessionTitle.includes(textRecherche.toLowerCase()) || sessionTags.includes(textRecherche.toLowerCase())) &&
        (!textLieu || sessionLieu.includes(textLieu.toLowerCase())) &&
        (!format || sessionFormat.includes(format.toLowerCase())) &&
        (!niveau || sessionNiveau.includes(niveau.toLowerCase())) &&
        (!publicAdmis || sessionPublic.includes(publicAdmis.toLowerCase())) &&
        (!duree || dureeType === duree.toLowerCase()) &&
        (!prixMin || sessionPrix >= parseFloat(prixMin)) &&
        (!prixMax || sessionPrix <= parseFloat(prixMax))
      );
    });
  };

  const filteredSessions = filterSessions(sessions);
  return (
    <>
      <Toast ref={toast} position="top-center" style={{ maxWidth: '300px' }} />
      <div>
        {/* Contenue du navbar */}
        <nav className="navbar navbar-expand-lg fixed-top" aria-label="Offcanvas navbar large" style={{ backgroundColor: "#03031efc", padding: "10px 0", marginTop: "-10px" }}>
          <div className="container-fluid">
            <Link className="navbar-brand text-white">
              <img src={logoF} alt="" height={40} className="d-lg-none" />
              <span className="d-none d-lg-block"><Titre /></span>
            </Link>
            <button className="navbar-toggler text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
              <span className="bi bi-blockquote-left fs-1" />
            </button>
            <div className="offcanvas offcanvas-end text-white" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
              <div className="offcanvas-header" style={{ backgroundColor: "#03031efc" }}>
                <button type="button" className="btn-close btn-close-white fs-4 bg-white" data-bs-dismiss="offcanvas" aria-label="Close" style={{ border: "1px solid white" }} />
              </div>
              <div className="offcanvas-body text-center" style={{ backgroundColor: "#03031efc" }}>
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 mx-auto">
                  <li className="nav-item mt-2">
                    <Link className="nav-link active text-white fs-5" aria-current="page" to="/">Accueil</Link>
                  </li>
                  {showTextRecherche ? '' :
                    <li className="nav-item mt-2" style={{ textDecoration: "none" }}>
                      <a className="nav-link text-white fs-5" href="#contacteznous">Contactez-nous</a>
                    </li>}
                  {showTextRecherche && (
                    <li className="nav-item mt-2">
                      <InputGroup>
                        <InputGroupText className="border-black"><i className="bi bi-search fw-bold fs-5"></i></InputGroupText>
                        <Input type="text" placeholder="Saisissez un nom , un mot clé, un domaine ..." name="textRecherche" value={elements.textRecherche} className="form-control p-2 fs-5 text-black border-black navInput" onChange={(e) => handleInputChange("textRecherche", e.target.value)} style={{ backgroundColor: "white", height: "55px" }} />
                      </InputGroup>
                    </li>
                  )}
                  {showTextLieu && (
                    <li className="nav-item mt-2">
                      <InputGroup>
                        <InputGroupText className="border-black"><i className="bi bi-geo-alt fw-bold fs-5"></i></InputGroupText>
                        <Input type="text" placeholder="Lieu" name="textLieu" value={elements.textLieu} className="form-control p-2 fs-5 border-black text-black" onChange={(e) => handleInputChange("textLieu", e.target.value)} style={{ backgroundColor: "white", height: "55px" }} />
                      </InputGroup>
                    </li>
                  )}
                </ul>
                <ul className="ml-auto navbar-nav mt-2">
                  <li className="nav-item me-3 mb-2">
                    <Link to={"/inscription"} style={{ textDecoration: "none" }}>
                      <button className="form-control fw-bold bg-warning fs-5 border-none" style={{ color: "#03031efc" }}>
                        <i className="bi bi-person-fill-add fs-5 me-2" aria-hidden="true" /> S'inscrire
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item me-3">
                    <Link to={"/connexion"} style={{ textDecoration: "none" }}>
                      <button className="form-control fw-bold bg-warning fs-5 border-none" style={{ color: "#03031efc" }}>
                        <i className="bi bi-box-arrow-in-right fs-5 me-2" aria-hidden="true" /> Se Connecter
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <section className="service_section layout_padding" style={{ backgroundColor: "#03031efc", height: "200px", position: "" }}>
          <div className="text-warning fs-1 fw-bold mb-4 text-center" style={{ marginTop: "-10px" }}>
            Trouvez la formation qui vous convient le mieux
          </div>
          <Row style={{ position: "", top: "-40px" }}>
            <Col></Col>
            <Col md={5}>
              <FormGroup className="mx-2 mx-md-0">
                <InputGroup>
                  <InputGroupText className="border-black"><i className="bi bi-search fw-bold fs-5"></i></InputGroupText>
                  <Input type="text" placeholder="Saisissez un nom , un mot clé, un domaine ..." name="textRecherche" value={elements.textRecherche} className="form-control p-2 fs-5 text-black border-black" onChange={(e) => handleInputChange("textRecherche", e.target.value)} style={{ backgroundColor: "white", height: "55px" }} />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup className="mx-2 mx-md-0">
                <InputGroup>
                  <InputGroupText className="border-black"><i className="bi bi-geo-alt fw-bold fs-5"></i></InputGroupText>
                  <Input type="text" placeholder="Lieu" name="textLieu" value={elements.textLieu} className="form-control p-2 fs-5 border-black text-black" onChange={(e) => handleInputChange("textLieu", e.target.value)} style={{ backgroundColor: "white", height: "55px" }} />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col></Col>
          </Row>
        </section>
      </div>

      {/* Section des sessions */}
      <section className="service_section layout_padding">
        <div className="container mt-5 mt-lg-1 container-md-fluid">
          <Row className="">
            <Col></Col>
            <Col md={4} lg={3}>
              <div className="fw-bold fs-5 d-none d-md-block">
                Option de filtre <i className="bi bi-filter"></i>
              </div>
              <nav className="navbar navbar-expand-md bg-body-tertiary">
                <div className="container-fluid">
                  <a className="navbar-toggler" style={{ textDecoration: "none", color: "black" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fw-bold fs-5">Option de filtre <i className="bi bi-filter"></i></span>
                  </a>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <hr />
                      <Row>
                        <div className="fs-4 fw-200 mb-1">Type de Formation</div>
                        <Col xs={12} className="ms-4">
                          <FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="format" value="presentielle" checked={elements.format && elements.format.includes("presentielle")} onChange={(e) => handleInputChange("format", e.target.checked ? "presentielle" : "")} /> Présentielle</Label></FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="format" value="ligne" checked={elements.format && elements.format.includes("ligne")} onChange={(e) => handleInputChange("format", e.target.checked ? "ligne" : "")} /> En ligne</Label></FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="format" value="alternance" checked={elements.format && elements.format.includes("alternance")} onChange={(e) => handleInputChange("format", e.target.checked ? "alternance" : "")} /> En alternance</Label></FormGroup>

                          </FormGroup>
                        </Col>
                        <div className="fs-4 fw-200 mb-1">Niveau </div>
                        <Col xs={12} className="ms-4">
                          <FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="niveau" value="debutant" checked={elements.niveau.includes("debutant")} onChange={(e) => handleInputChange("niveau", e.target.checked ? "debutant" : "")} /> Débutant</Label></FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="niveau" value="intermediaire" checked={elements.niveau.includes("intermediaire")} onChange={(e) => handleInputChange("niveau", e.target.checked ? "intermediaire" : "")} /> Intermédiaire</Label></FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="niveau" value="avanc" checked={elements.niveau.includes("avanc")} onChange={(e) => handleInputChange("niveau", e.target.checked ? "avanc" : "")} /> Avancé</Label></FormGroup>
                          </FormGroup>
                        </Col>
                        <div className="fs-4 fw-200 mb-1">Public admis</div>
                        <Col xs={12} className="ms-4">
                          <FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="public" value="etudiant" checked={elements.public.includes("etudiant")} onChange={(e) => handleInputChange("public", e.target.checked ? "etudiant" : "")} /> Etudiants</Label></FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="public" value="eleve" checked={elements.public.includes("eleve")} onChange={(e) => handleInputChange("public", e.target.checked ? "eleve" : "")} /> Elèves</Label></FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="public" value="avanc" checked={elements.public.includes("professionnel")} onChange={(e) => handleInputChange("public", e.target.checked ? "professionnel" : "")} /> Diplomés</Label></FormGroup>
                          </FormGroup>
                        </Col>
                        <div className="fs-4 fw-200 mb-1">Durée </div>
                        <Col xs={12} className="ms-4">
                          <FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="duree" value="courte" checked={elements.duree.includes("courte")} onChange={(e) => handleInputChange("duree", e.target.checked ? "courte" : "")} /> Courte</Label></FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="duree" value="moyenne" checked={elements.duree.includes("moyenne")} onChange={(e) => handleInputChange("duree", e.target.checked ? "moyenne" : "")} /> Moyenne</Label></FormGroup>
                            <FormGroup check><Label check><Input className="border-black" type="checkbox" name="duree" value="longue" checked={elements.duree.includes("longue")} onChange={(e) => handleInputChange("duree", e.target.checked ? "longue" : "")} /> Longue</Label></FormGroup>
                          </FormGroup>
                        </Col>
                        <Col xs={12}>
                          <FormGroup>
                            <div className="fs-4 fw-200 mb-1">Intervale de prix</div>
                            <Row>
                              <Col xs={6} md={12} lg={6}>
                                <Row><Label>Min</Label></Row>
                                <Input type="number" placeholder="Prix min" name="prixMin" value={elements.prixMin} onChange={(e) => handleInputChange("prixMin", e.target.value)} className="border-black" />
                              </Col>
                              <Col xs={6} md={12} lg={6}>
                                <Row><Label>Max</Label></Row>
                                <Input type="number" placeholder="Prix max" name="prixMax" value={elements.prixMax} onChange={(e) => handleInputChange("prixMax", e.target.value)} className="border-black" />
                              </Col>
                            </Row>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </nav>

            </Col>
            {/* Col pour les ecrans large */}

            <Col md={7} className="d-none d-lg-block">
              {(elements.textRecherche || elements.textLieu) != '' && <div className="fs-4 fw-bold">Résultat "{elements.textRecherche} {elements.textLieu}"</div>}
              {loading ? (
                <div>
                  <Skeleton width="100%" height="30vh" className="mb-2 bg" />
                  <Skeleton width="100%" height="30vh" className="mb-2 bg" />
                  <Skeleton width="100%" height="30vh" className="mb-2 bg" />
                </div>

              ) : (
                <Row className="gx-3 gy-4 align-items-stretch d-flex">
                  {filteredSessions.map((sessions) => (
                    <Col key={sessions.id} xs={12} className="">
                      <Col className="colForm border-black m-2">
                        <Row className="px-4">
                          <Col lg={6}>
                            <Row className="">
                              <Col>
                                {sessions.formation.utilisateur.photo === null ? <i className="bi bi-person-fill fs-1"></i> : <img className="photo" src={sessions.formation.utilisateur.photo} alt="" />}
                              </Col>
                              <Col>
                                <div className="mt-2" style={{ fontSize: "17px" }}>{sessions.formation.utilisateur.nom_complet}</div>
                              </Col>
                            </Row>
                            <h5 className="fw-bold text-justify">{" " + sessions.formation.titre}</h5>
                            <div className="mb-1" style={{ fontSize: '12px', marginTop: '-10px' }}>{sessions.formation.description}</div>
                            <div className="lien-gestion">
                              <Link to={`/rechercheformation/detail/${sessions.id}`}>
                                <button type="button" className="btn mt-1 form-control btnVoirplus">
                                  <span className="fs-4 fw-bold text-end" style={{ color: "whitesmoke" }}>Voir plus</span>
                                </button>
                              </Link>
                            </div>
                          </Col>
                          <Col>
                            <div className="container infoForm p-2 me-3 mt-3">
                              <div>
                                <span>
                                  <i className="bi bi-time"></i>
                                  <span className="fw-bold"> {sessions.tarif} Fg</span>
                                </span>
                              </div>
                              <div><span>Pour {sessions.duree} jours </span></div>
                              <div>
                                <span>
                                  <i className="bi bi-calendar-range"></i>
                                  {"  Du " + sessions.date_debut + " au " + sessions.date_fin}
                                </span>
                              </div>
                              <div>
                                <span>
                                  <i className="bi bi-geo-alt"></i>
                                  {" " + sessions.formation.format}
                                </span>
                              </div>
                              {sessions.formation.format.toLowerCase() === 'en presentielle' && (
                                <div>
                                  <span>
                                    <i className="bi bi-house-door"></i>
                                    {" " + sessions.lieu}
                                  </span>
                                </div>
                              )}
                              <div className="text-center fw-bold">{" Prix: " + sessions.prix + " Fg"}</div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Col>

                  ))}
                </Row>
              )}

            </Col>



            {/* Col pour les petites ecrans */}
            <Col md={7} className="d-block d-lg-none">
              {(elements.textRecherche || elements.textLieu) != '' && <div className="fs-4 fw-bold">Résultat "{elements.textRecherche} {elements.textLieu}"</div>}
              {loading ? (
                <div>
                  <Skeleton width="100%" height="30vh" className="mb-2 bg" />
                  <Skeleton width="100%" height="30vh" className="mb-2 bg" />
                  <Skeleton width="100%" height="30vh" className="mb-2 bg" />
                </div>

              ) : (
                <Row className="gx-3 gy-4 align-items-stretch">
                  {filteredSessions.map((sessions) => (
                    <Col key={sessions.id} xs={12} className="">
                      <Col className="colForm border-black m-2">
                        <Row className="px-4">
                          <Row className="">
                            <Col>
                              {sessions.formation.utilisateur.photo === null ? <i className="bi bi-person fs-1"></i> : <img className="photo" src={sessions.formation.utilisateur.photo} alt="" />}
                            </Col>
                            <Col>
                              <div className="mt-2" style={{ fontSize: "17px" }}>{sessions.formation.utilisateur.nom_complet}</div>
                            </Col>
                          </Row>
                          <h5 className="fw-bold text-justify mt-2">{" " + sessions.formation.titre}</h5>
                          <div className="mb-1" style={{ fontSize: '12px', marginTop: '-10px' }}>{sessions.formation.description}</div>
                          <div className="container infoForm p-2 me-3 mt-3">
                            <div>
                              <span>
                                <i className="bi bi-time"></i>
                                <span className="fw-bold"> {sessions.tarif} Fg</span>
                              </span>
                            </div>
                            <div>
                              <span>Pour {sessions.duree} jours</span>
                            </div>
                            <div>
                              <span>
                                <i className="bi bi-calendar-range"></i>
                                {"  Du " + sessions.date_debut + " au " + sessions.date_fin}
                              </span>
                            </div>
                            <div>
                              <span>
                                <i className="bi bi-geo-alt"></i>
                                {" " + sessions.formation.format}
                              </span>
                            </div>
                            {sessions.formation.format.toLowerCase() === 'en presentielle' && (
                              <div>
                                <span>
                                  <i className="bi bi-house-door "></i>
                                  {" " + sessions.lieu}
                                </span>
                              </div>
                            )}
                            <div className="text-center fw-bold">{" Prix: " + sessions.prix + " Fg"}</div>
                          </div>
                          <div className="lien-gestion mt-2">
                            <Row>
                              <Col></Col>
                              <Col xs={6}>
                                <Link to={`/rechercheformation/detail/${sessions.id}`}>
                                  <button type="button" className="btn mt-1 form-control btnVoirplus">
                                    <span className="fs-4 fw-bold text-end" style={{ color: "whitesmoke" }}>Voir plus</span>
                                  </button>
                                </Link>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                      </Col>
                    </Col>

                  ))}
                </Row>
              )}

            </Col>
            <Col></Col>
          </Row>
        </div>
      </section>
      <div style={{ marginTop: "-100px" }}>
        <ContactezNous />
      </div>

      <InfoSection></InfoSection>
      <Footer />
    </>
  );
}
