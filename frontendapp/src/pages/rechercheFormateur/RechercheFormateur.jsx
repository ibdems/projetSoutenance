import React, { useState, useEffect } from 'react'
import hero from '../accueil/images/hero-bg.png'
import '../accueil/css/style.css'
import { Col, Row, FormGroup, Label } from 'reactstrap'
import { MyLabel, MyInput, MySelect } from '../../components/Forms/Forms'
import image from '../../image/team-1.jpg'
import { Link } from 'react-router-dom'
import '../rechercheFormation/recherche.scss'
import ContactezNous from '../accueil/ContactezNous'
import Footer from '../accueil/Footer'
import InfoSection from '../accueil/InfoSection'
import { domaine } from '../../data/domaine'
import { formateurDomicile } from '../../data/formateurDomicile'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';




export default function Recherche() {
    const [showTextRecherche, setShowTextRecherche] = useState(false);
    const [showTextLieu, setShowTextLieu] = useState(false);
    const [modal, setModal] = useState(false);
    const [selectedFormateur, setSelectedFormateur] = useState(null);

    const toggle = () => setModal(!modal);

    const openModal = (formateur) => {
        setSelectedFormateur(formateur);
        toggle();
    }

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
        domaine: '',
        niveau: '',

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
                                    className="btn-close btn-close-white fs-3"
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
                                        <li className="nav-item">
                                            <MyInput type={'text'} placeholder={'Saisissez un nom, un domaine, une profession .....'} className={'inputNav'} name={'textRecherche'} value={elements.textRecherche} onChange={(value) => handleInputChange('textRecherche', value)}></MyInput>

                                        </li>
                                    )}
                                    {showTextLieu && (
                                        <li className="nav-item">
                                            <MyInput type={'text'} placeholder={'lieu'} name={'textLieu'} value={elements.textLieu} onChange={(value) => handleInputChange('textlieu', value)}></MyInput>

                                        </li>
                                    )}
                                    {showTextLieu && (
                                        <li className="nav-item ms-2 mt-2">
                                            <i className="bi bi-search iconeButton " onClick={rechercher}></i>
                                        </li>
                                    )
                                    }
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
                                    <div className='text-warning fs-3 fw-bold'>Trouvez le formateur pour vos cours paticuliers</div>
                                    <Col md={7}>
                                        <FormGroup>
                                            <MyLabel></MyLabel>
                                            <MyInput type={'text'} placeholder={'Saisissez un nom, un domaine, une profession .....'} name={'textRecherche'} value={elements.textRecherche} onChange={(value) => handleInputChange('textRecherche', value)}></MyInput>
                                        </FormGroup>
                                    </Col>
                                    <Col md={3} xs={10}>
                                        <FormGroup>
                                            <MyLabel></MyLabel>
                                            <MyInput type={'text'} placeholder={'lieu'} name={'textLieu'} value={elements.textLieu} onChange={(value) => handleInputChange('textlieu', value)}></MyInput>
                                        </FormGroup>
                                    </Col>
                                    <Col md={2} xs={2} className='mt-2'>
                                        <i className="bi bi-search iconeButton " onClick={rechercher}></i>
                                    </Col>
                                </Row>
                                <Row className='m-3'>
                                    <Col xs={12} md={5}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel forMyLabel='format' text={'Trier par domaine'} className='text-white'></MyLabel>
                                            </Row>
                                            <MySelect
                                                options={domaine.map(item => ({ value: item.id, label: item.libelle }))}
                                                value={elements.domaine}
                                                onChange={(selectedOption) => handleInputChange('domaine', selectedOption)}
                                                placeholder={'Saisissez ou/et clicker pour selectionner le domaine'}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} md={5}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel forMyLabel='niveau' text={'Trier par niveau'} className='text-white'></MyLabel>
                                            </Row>
                                            <MySelect id={'niveau'} name={'niveau'} value={elements.niveau} onChange={(value) => handleInputChange('niveau', value)} options={[
                                                { label: 'Primaire', value: 'primaire' },
                                                { label: 'Collège', value: 'college' },
                                                { label: 'Lycée', value: 'lycee' },
                                                { label: 'Universitaire', value: 'universitaire' },
                                                { label: 'Professionnel', value: 'professionnel' },
                                            ]} />
                                        </FormGroup>
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
                <div className="ms-md-5 me-md-5">
                    <Row className='gx-3 gy-4 justify-content-center'>
                        {formateurDomicile.map(formateur => (
                            <Col key={formateur.id} xs={12} sm={6} xl={3} lg={6} md={6} className='d-flex  flex-column justify-content-between colForm'>
                                <Col className='p-5 d-flex flex-column justify-content-between'>
                                    <Row>
                                        <Col>
                                            <img src={image} alt="photo" style={{ borderRadius: '10px' }} />
                                        </Col>
                                    </Row>
                                    <Col>
                                        <div className='text-justify fs-4 fw-bold'>{formateur.nomComplet}</div>
                                        <div className='fs-5'> <i className="bi bi-geo-alt fs-5"></i><span>{formateur.adresse}</span></div>
                                        <div className='fs-5'> <i className="bi bi-person-badge"></i>{formateur.profession}</div>
                                        <div className='fw-3'><span className='fs-5'>Domaines dispensés :</span>{formateur.domaineExpertise.map(domaine => (<li key={domaine.id} className='ms-4'>{domaine.libelle}</li>))}</div>
                                        <div className='fw-3'><span className='fs-5'>Niveau concernés :</span>{formateur.niveau.map(niveau => (<li key={niveau.id} className='ms-4'>{niveau.libelle}</li>))}</div>
                                    </Col>
                                    <Row className='mt-1'>
                                        <Col><h5 className='mt-2'>Notes</h5></Col>
                                        <Col></Col>
                                        <Col>
                                            <div className='bg-warning text-center px-4 py-2 fw-bold' style={{ borderRadius: '100px' }}>5</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col></Col>
                                        <Col xs={8}>
                                            <button type='button' onClick={() => openModal(formateur)} className='btn mt-3 form-control btnVoirplus'> <span className='fs-5 fw-bold text-end' style={{ color: 'whitesmoke' }}>+Détail</span>   </button>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </Col>
                            </Col>
                        ))}
                        <Modal isOpen={modal} toggle={toggle}  scrollable={true} className='fs-5'  style={{ maxHeight: '80vh', width: '200vw' , marginTop: '10vh'}}>

                            <ModalBody>
                                {selectedFormateur && (
                                    <div>
                                        <Row>
                                            <Col></Col>
                                            <Col><img src={image} alt="photo" height={200} style={{ borderRadius: '50%' }} /></Col>
                                            <Col></Col>

                                        </Row>
                                        <h2 className='text-center fs-1 fw-bold mt-2'>{selectedFormateur && selectedFormateur.nomComplet}</h2>
                                        <Row>
                                            <Col>
                                                <Row className=' p-1 styleCol'>
                                                    <Col><div className='fs-5 text-center fw-bold'><i className="bi bi-geo-alt fs-5 fw-bold"></i> Adresse: </div></Col>
                                                    <Col>{selectedFormateur.adresse}</Col>
                                                </Row>
                                                <Row className='p-1'>
                                                    <Col><div className='fs-5 text-center fw-bold'><i className="bi bi-person-badge"></i> Profession: </div></Col>
                                                    <Col>{selectedFormateur.profession}</Col>
                                                </Row>
                                                <Row className=' p-1 styleCol'>
                                                    <Col><div className='fs-5 text-center fw-bold'> Niveau d'étude: </div></Col>
                                                    <Col>{selectedFormateur.niveauEtude}</Col>
                                                </Row>
                                                <Row className=' p-1 '>
                                                    <Col><div className='fs-5 text-center fw-bold'> Linkdein :</div></Col>
                                                    <Col>{selectedFormateur.linkedin}</Col>
                                                </Row>
                                                <Row className=' p-1 styleCol'>
                                                    <Col><div className='fs-5 text-center fw-bold'> Domaines dispensés : </div></Col>
                                                    <Col>{selectedFormateur.domaineExpertise.map(domaine => (<li key={domaine.id} className='ms-4'>{domaine.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 '>
                                                    <Col><div className='fs-5 text-center fw-bold'> Niveau concernés : </div></Col>
                                                    <Col>{selectedFormateur.niveau.map(niveau => (<li key={niveau.id} className='ms-4'>{niveau.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 styleCol'>
                                                    <Col><div className='fs-5 text-center fw-bold'> Competances </div></Col>
                                                    <Col>{selectedFormateur.competances.map(competances => (<li key={competances.id} className='ms-4'>{competances.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 '>
                                                    <Col><div className='fs-5 text-center fw-bold'> Domaine d'expertises </div></Col>
                                                    <Col>{selectedFormateur.domaineExpertise.map(domaineExpertise => (<li key={domaineExpertise.id} className='ms-4'>{domaineExpertise.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 styleCol'>
                                                    <Col><div className='fs-5 text-center fw-bold'>Temps de disponibilité </div></Col>
                                                    <Col>
                                                        <ul>
                                                            <li>Jeudi de 8h20 a 18h00</li>
                                                            <li>Samedi de 17h a 20h00</li>
                                                        </ul>
                                                    </Col>
                                                </Row>

                                            </Col>
                                        </Row>
                                    </div>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <button type='button' onClick={() => { }} className='btn  form-control btnVoirplus'> <span className='fs-5 fw-bold text-end' style={{ color: 'whitesmoke' }}>Contacter</span>   </button>
                                    </Col>
                                    <Col>
                                        <Button type='button' onClick={toggle} className='p-2 fw-bold form-control bg-warning text-black'>
                                            Fermer
                                        </Button>
                                    </Col>
                                </Row>



                            </ModalFooter>
                        </Modal>

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
