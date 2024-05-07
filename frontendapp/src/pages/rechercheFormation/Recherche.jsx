import React, { useState, useEffect } from 'react'
import hero from '../accueil/images/hero-bg.png'
import '../accueil/css/style.css'
import { Col, Row, FormGroup, Label } from 'reactstrap'
import imgCarousel1 from '../accueil/images/slider-img.png'
import { MyLabel, MyInput, MySelect } from '../../components/Forms/Forms'
import { formations } from '../formation/dataFormation'
import { sessions } from '../formation/dataSession'
import { Link } from 'react-router-dom'
import './recherche.scss'
import ContactezNous from '../accueil/ContactezNous'
import Footer from '../accueil/Footer'
import InfoSection from '../accueil/InfoSection'



export default function Recherche() {
  const [showTextRecherche, setShowTextRecherche] = useState(false);
  const [showTextLieu, setShowTextLieu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Vérifiez la position de défilement pour décider si les champs doivent être affichés
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 300) {
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
      <div className="hero_area" >
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src={hero} alt="" />
          </div>
        </div>

        {/* Contenue du navbar */}
        <nav className="navbar navbar-expand-lg fixed-top" aria-label="Offcanvas navbar large" style={{ backgroundColor: '#03031efc', padding: '15px 0 15px 0', marginTop: '-10px' }} >
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
                  className="btn-close btn-close-white fs-3 bg-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{ border: '1px solid white', }}
                />
              </div>
              <div className="offcanvas-body text-center" style={{ backgroundColor: '#03031efc' }}>
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 mx-auto">
                  <li className="nav-item ">
                    <Link className="nav-link active text-white fs-4" aria-current="page" to='/' >
                      Accueil
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-white fs-4" href='#contacteznous'>
                      Contactez-nous
                    </a>
                  </li>
                  {showTextRecherche && (
                    <li className="nav-item px-3">
                      <MyInput type={'text'} placeholder={'Saisissez un mot clé, un prix .....'} className={'inputNav'} name={'textRecherche'} value={elements.textRecherche} onChange={(value) => handleInputChange('textRecherche', value)}></MyInput>

                    </li>
                  )}
                  {showTextLieu && (
                    <li className="nav-item">
                      <MyInput type={'text'} placeholder={'lieu'} name={'textLieu'} value={elements.textLieu} onChange={(value) => handleInputChange('textlieu', value)}></MyInput>

                    </li>
                  )}
                </ul>
                <ul className="ml-auto navbar-nav">
                  <li className="nav-item me-2 mb-2">
                    <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                      <i className="bi bi-person-fill-add fs-5 me-2" aria-hidden="true" /> S'inscrire
                    </button>
                  </li>
                  <li className="nav-item me-2">
                    <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                      <i className="bi bi-box-arrow-in-right fs-5 me-2" aria-hidden="true" />Se Connecter
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <section className='slider_section'>
          <div className="container-fluid">
            <Row style={{ marginTop: '1em' }}>
              <Col lg={8} md={12}>
                <Row className='m-3 ms-xs-2'>
                  <div className='text-warning fs-3 fw-bold'>Trouvez la formation qui vous convient le mieux</div>
                  <Col md={7}>
                    <FormGroup>
                      <MyLabel></MyLabel>
                      <MyInput type={'text'} placeholder={'Saisissez un mot clé, un prix .....'} name={'textRecherche'} value={elements.textRecherche} onChange={(value) => handleInputChange('textRecherche', value)}></MyInput>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <MyLabel></MyLabel>
                      <MyInput type={'text'} placeholder={'lieu'} name={'textLieu'} value={elements.textLieu} onChange={(value) => handleInputChange('textlieu', value)}></MyInput>
                    </FormGroup>
                  </Col>
                  <Col md={2} xs={6} className='mt-2'>
                    <i className="bi bi-search iconeButton " onClick={rechercher}></i>
                  </Col>
                </Row>
                <Row className='m-3'>
                  <Col xs={12}>
                    <FormGroup>
                      <Row>
                        <MyLabel forMyLabel='format' text={'Trier par format'} className='text-white'></MyLabel>
                      </Row>
                      <MySelect id={'format'} name={'format'} value={elements.format} onChange={(value) => handleInputChange('format', value)} options={[
                        { label: 'Présentielle', value: 'presentielle' },
                        { label: 'En ligne', value: 'ligne' },
                        { label: 'À domicile', value: 'domicile' }
                      ]} />
                    </FormGroup>
                  </Col>
                  <Col xs={12}>
                    <FormGroup>
                      <Row>
                        <MyLabel forMyLabel='niveau' text={'Trier par niveau'} className='text-white'></MyLabel>
                      </Row>
                      <MySelect id={'niveau'} name={'niveau'} value={elements.niveau} onChange={(value) => handleInputChange('niveau', value)} options={[
                        { label: 'Débutant', value: 'debutant' },
                        { label: 'Intermédiaire', value: 'intermediaire' },
                        { label: 'Supérieur', value: 'superieur' }
                      ]} />
                    </FormGroup>
                  </Col>
                  <Col></Col>

                </Row>
                <Row className=' ms-5 me-5 mb-lg-5'>

                  <Col md={4} xs={12}>
                    <Row>
                      <MyLabel forMyLabel='prixMin' text={'Prix minimal'} className='text-white'></MyLabel>
                    </Row>
                    <MyInput type={'text'} placeholder={'Ex: 25000'} name={'prixMin'} value={elements.prixMin} onChange={(value) => handleInputChange('prixMin', value)} ></MyInput>

                  </Col>
                  <Col md={4} xs={12}>
                    <Row>
                      <MyLabel forMyLabel='prixMax' text={'Prix maximal'} className='text-white'></MyLabel>
                    </Row>
                    <MyInput type={'text'} placeholder={'Ex: 75000'} name={'prixMax'} value={elements.prixMax} onChange={(value) => handleInputChange('prixMax', value)}></MyInput>
                  </Col>
                  <Col></Col>
                </Row>
              </Col>
              <Col className="d-lg-block d-none">
                <div className="img-box p-5" style={{ marginTop: '' }}>
                  {/* <img src={imgCarousel1} alt="" height={'300px'} width={'200px'} /> */}
                </div>
              </Col>

            </Row>
          </div>
        </section>



      </div>

      {/* Section des sessions */}
      <section className="service_section layout_padding">
        <div className="ms-3 me-3">
          <Row className='gx-5 gy-4 align-items-stretch'>
            {sessions.filter((session) => session.formation.nom.toLowerCase().includes(elements.textRecherche.toLowerCase()))
              .map(sessions => (
                <Col key={sessions.id} xs={12} sm={6} xl={3} lg={4} md={6} className='d-flex flex-column justify-content-between'>
                  <Col className='p-4 d-flex flex-column justify-content-between colForm'>
                    <Row className='m-2'>
                      <Col>
                        <i className='bi bi-person-fill fs-1'></i>
                      </Col>
                      <Col>
                        <h8>Nom Cabinet/Formateur</h8>
                      </Col>
                    </Row>
                    <div>
                      <h3 className='fw-bold text-justify'>{' ' + sessions.formation.nom}</h3>
                      <div className='fw-bold fs-4'><span>{' Pour ' + sessions.formation.duree + ' jours'}</span></div>
                      <div><span className='fw-bold'> {' ' + sessions.lieu}</span></div>
                      <div><span className='fw-bold'> <span className='fs-4'>Niveau :  </span> {' ' + sessions.formation.niveau}</span></div>
                      <div><span className='fw-bold'> <i className="bi bi-geo-alt fs-3"></i> {'  ' + sessions.formation.format} </span></div>
                      <div><span className='fw-bold'><i className="bi bi-calendar-range fs-3"></i>{'  Du ' + sessions.dateDebut + ' au ' + sessions.dateFin}</span></div>
                      <div><span className='fw-bold'><i className="bi bi-alarm fs-3"></i>{'  De ' + sessions.heureDebut + ' à   ' + sessions.heureFin}</span></div>
                      <div className='text-center fw-bold fs-1'>  {' ' + sessions.formation.prix + ' Fg'}</div>
                    </div>
                    <div className='lien-gestion'>
                      <Link to={`/rechercheformation/detail/${sessions.id}`} >
                        <button type='button' className='btn mt-3 form-control btnVoirplus'> <span className='fs-3 fw-bold text-end' style={{ color: 'whitesmoke' }}>Voir plus</span>   </button>
                      </Link>
                    </div>
                  </Col>
                </Col>
              ))}
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
