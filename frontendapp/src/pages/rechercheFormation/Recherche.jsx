import React, { useState, useEffect } from 'react'
import hero from '../../image/fontPetite.jpg'
import '../accueil/css/style.css'
import { Col, Row, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap'
import { MyLabel, MyInput, MySelect } from '../../components/Forms/Forms'
import { sessions } from '../formation/dataSession'
import { Link } from 'react-router-dom'
import './recherche.scss'
import ContactezNous from '../accueil/ContactezNous'
import Footer from '../accueil/Footer'
import InfoSection from '../accueil/InfoSection'
import Select from 'react-select'



export default function Recherche() {
  const [showTextRecherche, setShowTextRecherche] = useState(false);
  const [showTextLieu, setShowTextLieu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Vérifiez la position de défilement pour décider si les champs doivent être affichés
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 150) {
        setShowTextRecherche(true);
        setShowTextLieu(true);
      } else {
        setShowTextRecherche(false);
        setShowTextLieu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [elements, setElements] = useState({
    textRecherche: '',
    textLieu: '',
    format: '',
    niveau: '',
    public: '',
    duree: '',
    prixMin: '',
    prixMax: '',
  })

  const handleInputChange = (name, value) => {
    setElements(prevState => ({
      ...prevState, [name]: value
    }));
  }
  const rechercher = () => {
    console.log('rechercher')
  }
  return (
    <>
      <div >

        {/* Contenue du navbar */}
        <nav className="navbar navbar-expand-lg fixed-top" aria-label="Offcanvas navbar large" style={{ backgroundColor: '#03031efc', padding: '10px 0', marginTop: '-10px' }} >
          <div className="container-fluid">
            <Link className="navbar-brand text-white" href="#">
              MacthSavoir
            </Link>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar2"
              aria-controls="offcanvasNavbar2"
              aria-label="Toggle navigation"
            >
              <span className="bi bi-blockquote-left fs-1" />
            </button>
            <div
              className="offcanvas offcanvas-end text-white"
              tabIndex={-1}
              id="offcanvasNavbar2"
              aria-labelledby="offcanvasNavbar2Label"
            >
              <div className="offcanvas-header" style={{ backgroundColor: '#03031efc' }}>

                <button
                  type="button"
                  className="btn-close btn-close-white fs-4 bg-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{ border: '1px solid white', }}
                />
              </div>
              <div className="offcanvas-body text-center" style={{ backgroundColor: '#03031efc' }}>
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 mx-auto">

                  <li className="nav-item mt-2">
                    <Link className="nav-link active text-white fs-5" aria-current="page" to='/' >
                      Accueil
                    </Link>
                  </li>

                  <li className="nav-item mt-2" style={{ textDecoration: 'none' }}>
                    <a className="nav-link text-white fs-5" href='#contacteznous'>
                      Contactez-nous
                    </a>
                  </li>
                  {showTextRecherche && (
                    <li className="nav-item mt-2">
                      <InputGroup >
                        <InputGroupText className='border-black'>
                          <i className="bi bi-search fw-bold fs-5"></i>
                        </InputGroupText>
                        <Input
                          type="text"
                          placeholder="Saisissez un mot clé, un domaine, une langue ....."
                          name="textRecherche"
                          value={elements.textRecherche}
                          className="form-control p-2 fs-5 text-black border-black navInput"
                          onChange={(e) => handleInputChange('textRecherche', e.target.value)}
                          style={{ backgroundColor: 'white', height: '55px' }}
                        />
                      </InputGroup>

                    </li>
                  )}
                  {showTextLieu && (
                    <li className="nav-item mt-2">
                      <InputGroup>
                        <InputGroupText className='border-black'>
                          <i className="bi bi-geo-alt fw-bold fs-5"></i>
                        </InputGroupText>
                        <Input
                          type="text"
                          placeholder="Lieu"
                          name="textLieu"
                          value={elements.textLieu}
                          className="form-control p-2 fs-5 border-black text-black"
                          onChange={(e) => handleInputChange('textlieu', e.target.value)}
                          style={{ backgroundColor: 'white', height: '55px' }}

                        />
                      </InputGroup>

                    </li>
                  )}

                </ul>
                <ul className="ml-auto navbar-nav mt-2">
                  <li className="nav-item me-3  mb-2">
                    <Link to={'/inscription'} style={{ textDecoration: 'none' }}>
                      <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                        <i className="bi bi-person-fill-add fs-5 me-2" aria-hidden="true" /> S'inscrire
                      </button>
                    </Link>

                  </li>
                  <li className="nav-item me-3">
                    <Link to={'/connexion'} style={{ textDecoration: 'none' }}>
                      <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                        <i className="bi bi-box-arrow-in-right fs-5 me-2" aria-hidden="true" />Se Connecter
                      </button>
                    </Link>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <section className="service_section layout_padding" style={{ backgroundColor: '#03031efc', height: '200px', position: '' }}>
        <div className='text-warning fs-1 fw-bold mb-4 text-center' style={{ marginTop: '-10px' }}>Trouvez la formation qui vous convient le mieux</div>
        <Row style={{ position: '', top: '-40px' }}>
          <Col></Col>
          <Col md={5}>
            <FormGroup className='mx-2 mx-md-0'>
              <InputGroup >
                <InputGroupText className='border-black'>
                  <i className="bi bi-search fw-bold fs-5"></i>
                </InputGroupText>
                <Input
                  type="text"
                  placeholder="Saisissez un mot clé, un domaine, une langue ....."
                  name="textRecherche"
                  value={elements.textRecherche}
                  className="form-control p-2 fs-5 text-black border-black"
                  onChange={(e) => handleInputChange('textRecherche', e.target.value)}
                  style={{ backgroundColor: 'white', height: '55px' }}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup className='mx-2 mx-md-0'>
              <InputGroup>
                <InputGroupText className='border-black'>
                  <i className="bi bi-geo-alt fw-bold fs-5"></i>
                </InputGroupText>
                <Input
                  type="text"
                  placeholder="Lieu"
                  name="textLieu"
                  value={elements.textLieu}
                  className="form-control p-2 fs-5 border-black text-black"
                  onChange={(e) => handleInputChange('textlieu', e.target.value)}
                  style={{ backgroundColor: 'white', height: '55px' }}

                />
              </InputGroup>
            </FormGroup>
          </Col>

          <Col></Col>
        </Row>
      </section>

      {/* Section des sessions */}
      <section className="service_section layout_padding">
        <div className="container mt-5 mt-lg-1 container-md-fluid">
          <Row className=''>
            <Col></Col>
            <Col md={4} lg={3}>
              <div className='fw-bold fs-5 d-none d-lg-block'>Option de filtre <i className='bi bi-filter'></i></div>
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  
                  <a class="navbar-toggler" style={{textDecoration: 'none', color: 'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='fw-bold fs-5'>Option de filtre <i className='bi bi-filter'></i></span>
                  </a>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                      
                      <hr />
                      <Row>
                        <div className='fs-4 fw-200 mb-1'>Type de Formation</div>
                        <Col xs={12} className='ms-4'>
                          <FormGroup>
                            <FormGroup check>
                              <Label check ><Input className='border-black' type="checkbox" name="format" value="presentielle" checked={elements.format.includes('presentielle')} onChange={(e) => handleInputChange('format', e.target.value)} /> Présentielle</Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check ><Input className='border-black' type="checkbox" name="format" value="ligne" checked={elements.format.includes('ligne')} onChange={(e) => handleInputChange('format', e.target.value)} /> En ligne</Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check ><Input className='border-black' type="checkbox" name="format" value="domicile" checked={elements.format.includes('domicile')} onChange={(e) => handleInputChange('format', e.target.value)} /> À domicile</Label>
                            </FormGroup>
                          </FormGroup>
                        </Col>
                        <div className='fs-4 fw-200 mb-1'>Niveau</div>
                        <Col xs={12} className='ms-4'>
                          <FormGroup>
                            <FormGroup check>
                              <Label check ><Input type="checkbox" className='border-black' name="niveau" value="debutant" checked={elements.niveau.includes('debutant')} onChange={(e) => handleInputChange('niveau', e.target.value)} /> Débutant</Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check ><Input type="checkbox" className='border-black' name="niveau" value="intermediaire" checked={elements.niveau.includes('intermediaire')} onChange={(e) => handleInputChange('niveau', e.target.value)} /> Intermédiaire</Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check ><Input type="checkbox" className='border-black' name="niveau" value="avance" checked={elements.niveau.includes('avance')} onChange={(e) => handleInputChange('niveau', e.target.value)} /> Avancé</Label>
                            </FormGroup>
                          </FormGroup>
                        </Col>
                        <div className='fs-4 fw-200 mb-1'>Public admis</div>
                        <Col xs={12} className='ms-4'>
                          <FormGroup>
                            <FormGroup check>
                              <Label check ><Input type="checkbox" className='border-black' name="public" value="etudiant" checked={elements.public.includes('etudiant')} onChange={(e) => handleInputChange('public', e.target.value)} /> Etudiants</Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check ><Input type="checkbox" className='border-black' name="public" value="eleve" checked={elements.public.includes('eleve')} onChange={(e) => handleInputChange('public', e.target.value)} /> Elèves</Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check ><Input type="checkbox" className='border-black' name="public" value="avance" checked={elements.public.includes('avance')} onChange={(e) => handleInputChange('public', e.target.value)} /> Diplomés</Label>
                            </FormGroup>
                          </FormGroup>
                        </Col>
                        <div className='fs-4 fw-200 mb-1'>Durée</div>
                        <Col xs={12} className='ms-4'>
                          <FormGroup>
                            <FormGroup check>
                              <Label check ><Input type="checkbox" className='border-black' name="duree" value="courte" checked={elements.duree.includes('courte')} onChange={(e) => handleInputChange('duree', e.target.value)} /> Courte</Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check ><Input type="checkbox" className='border-black' name="duree" value="intermediaire" checked={elements.duree.includes('intermediaire')} onChange={(e) => handleInputChange('duree', e.target.value)} /> Intermediaire</Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check ><Input type="checkbox" className='border-black' name="duree" value="longue" checked={elements.duree.includes('longue')} onChange={(e) => handleInputChange('duree', e.target.value)} /> Longue</Label>
                            </FormGroup>
                          </FormGroup>
                        </Col>
                        <Col xs={12}>
                          <FormGroup>
                            <div className='fs-4 fw-200 mb-1'>Intervale de prix</div>
                            <Row>
                              <Col xs={6} md={12} lg={6}>
                                  <Row><Label >Min</Label></Row>
                                <Input type="text" placeholder="Prix min" name="prixMin" value={elements.prixMin} onChange={(e) => handleInputChange('prixMin', e.target.value)} className='border-black' />
                              </Col>
                              <Col xs={6} md={12} lg={6}>
                                <Row><Label >Max</Label></Row>
                                <Input type="text" placeholder="Prix max" name="prixMax" value={elements.prixMax} onChange={(e) => handleInputChange('prixMax', e.target.value)} className='border-black' />
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
            <Col md={7} className='d-none d-lg-block'>
              <Row className='gx-3 gy-4 align-items-stretch'>
                {sessions.filter((session) => session.formation.nom.toLowerCase().includes(elements.textRecherche.toLowerCase()))
                  .map(sessions => (
                    <Col key={sessions.id} xs={12} className=''>
                      <Col className=' colForm border-black m-2'>
                        <Row className='px-4'>
                          <Col lg={6}>
                            <Row className=''>
                              <Col>
                                <i className='bi bi-person-fill fs-1'></i>
                              </Col>
                              <Col>
                                <span style={{ fontSize: '15px' }}>Nom Cabinet/Formateur</span>
                              </Col>
                            </Row>
                            <h5 className='fw-bold text-justify'>{' ' + sessions.formation.nom}</h5>
                            <div className='lien-gestion'>
                              <Link to={`/rechercheformation/detail/${sessions.id}`} >
                                <button type='button' className='btn mt-1 form-control btnVoirplus'> <span className='fs-4 fw-bold text-end' style={{ color: 'whitesmoke' }}>Voir plus</span>   </button>
                              </Link>
                            </div>
                          </Col>
                          <Col>
                            <div className='container infoForm p-2 me-3 mt-3'>
                              <div><span> <i className="bi bi-time fs-5"></i>{sessions.formation.duree}</span></div>
                              <div><span > <i className="bi bi-geo-alt fs-5"></i> {'  ' + sessions.formation.format} </span></div>
                              <div><span ><i className="bi bi-calendar-range fs-5"></i>{'  Du ' + sessions.dateDebut + ' au ' + sessions.dateFin}</span></div>
                              <div><span ><i className="bi bi-alarm fs-5"></i>{'  De ' + sessions.heureDebut + ' à   ' + sessions.heureFin}</span></div>
                              <div className='text-center fw-bold'>  {' Prix: ' + sessions.formation.prix + ' Fg'}</div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Col>
                  ))}
              </Row>
            </Col>

            {/* Col pour les petites ecrans */}
            <Col md={7} className='d-block d-lg-none'>
              <Row className='gx-3 gy-4 align-items-stretch'>
                {sessions.filter((session) => session.formation.nom.toLowerCase().includes(elements.textRecherche.toLowerCase()))
                  .map(sessions => (
                    <Col key={sessions.id} xs={12} className=''>
                      <Col className=' colForm border-black m-2'>


                        <Row className='px-4'>

                          <Row className=''>
                            <Col>
                              <i className='bi bi-person-fill fs-1'></i>
                            </Col>
                            <Col>
                              <span style={{ fontSize: '15px' }}>Nom Cabinet/Formateur</span>
                            </Col>
                          </Row>
                          <h5 className='fw-bold text-justify'>{' ' + sessions.formation.nom}</h5>



                          <div className='container infoForm p-2 me-3 mt-3'>
                            <div><span> <i className="bi bi-time fs-5"></i>{sessions.formation.duree}</span></div>
                            <div><span > <i className="bi bi-geo-alt fs-5"></i> {'  ' + sessions.formation.format} </span></div>
                            <div><span ><i className="bi bi-calendar-range fs-5"></i>{'  Du ' + sessions.dateDebut + ' au ' + sessions.dateFin}</span></div>
                            <div><span ><i className="bi bi-alarm fs-5"></i>{'  De ' + sessions.heureDebut + ' à   ' + sessions.heureFin}</span></div>
                            <div className='text-center fw-bold'>  {' Prix: ' + sessions.formation.prix + ' Fg'}</div>
                          </div>

                          <div className='lien-gestion mt-2'>
                            <Link to={`/rechercheformation/detail/${sessions.id}`} >
                              <button type='button' className='btn mt-1 form-control btnVoirplus'> <span className='fs-4 fw-bold text-end' style={{ color: 'whitesmoke' }}>Voir plus</span>   </button>
                            </Link>
                          </div>

                        </Row>

                      </Col>
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </div>

      </section>
      <div style={{ marginTop: '-100px' }}>
        <ContactezNous />
      </div>

      <InfoSection></InfoSection>
      <Footer />


    </>
  )
}