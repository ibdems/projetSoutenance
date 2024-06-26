import React, { useState, useEffect, useRef } from 'react'
import hero from '../../image/hero-bg.png'
import '../accueil/css/style.css'
import { Col, Row, FormGroup, Input, InputGroup, InputGroupText } from 'reactstrap'
import { MyLabel } from '../../components/Forms/Forms'
import image from '../../image/team-1.jpg'
import { Link } from 'react-router-dom'
import '../rechercheFormation/recherche.scss'
import ContactezNous from '../accueil/ContactezNous'
import Footer from '../accueil/Footer'
import InfoSection from '../accueil/InfoSection'
import { formateurDomicile } from '../../data/formateurDomicile'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';
import logoF from "../../image/logo.jpg";
import Titre from '../../components/titre/Titre'
import Axios from '../../components/Axios'
import profil from '../../image/profil.svg'



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



    const [lieu, setLieu] = useState('')
    const [domaine, setDomaine] = useState([])
    const [niveau, setNiveau] = useState([])
    const [domaineValue, setDomaineValue] = useState('')
    const [niveauValue, setNiveauValue] = useState('')
    const [formateur, setFormateur] = useState([])
    const [loading, setLoading] = useState(true)
    const toast = useRef(null);

    const handleInputChange = (e) => {
        setLieu(e.target.value);
    }

    const handleDomaineChange = (selectedOption) => {
        setDomaineValue(selectedOption);  // Met à jour l'état 'domaine'
    }

    const handleNiveauChange = (selectedOption) => {
        setNiveauValue(selectedOption);  // Met à jour l'état 'niveau'
    }
    const rechercher = () => {
        console.log('rechercher')
    }
    useEffect(() => {
        // Effect to fetch sessions only once
        Axios.get('formateurs/niveau/')
            .then(response => {
                const options = response.data.map(item => ({
                    value: item.id,
                    label: item.libelle
                }));
                setNiveau(options);
                setLoading(false);
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the sessions!", error);
                if (toast.current) {
                    toast.current.show({
                        severity: "error",
                        summary: "Erreur",
                        detail: "Echec de chargement des niveau! Verifier votre connexion et reactialisez la page",
                        life: 7000
                    });
                }
            });

        Axios.get('formateurs/domaine/')
            .then(response => {
                const options = response.data.map(item => ({
                    value: item.id,
                    label: item.libelle
                }));
                setDomaine(options);
                setLoading(false);
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the sessions!", error);
                if (toast.current) {
                    toast.current.show({
                        severity: "error",
                        summary: "Erreur",
                        detail: "Echec de chargement des domaines! Verifier votre connexion et reactialisez la page",
                        life: 7000
                    });
                }
            });
        Axios.get('formateurs/domicile/')
            .then(response => {

                setFormateur(response.data);
                setLoading(false);
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the sessions!", error);
                if (toast.current) {
                    toast.current.show({
                        severity: "error",
                        summary: "Erreur",
                        detail: "Echec de chargement des domaines! Verifier votre connexion et reactialisez la page",
                        life: 7000
                    });
                }
            });
    }, []);
    return (
        <>
            <div  >


                {/* Contenue du navbar */}
                <nav className="navbar navbar-expand-lg fixed-top" aria-label="Offcanvas navbar large" style={{ backgroundColor: '#03031efc' }} >
                    <div className="container-fluid">
                        <Link className="navbar-brand text-white">
                            <img src={logoF} alt="" height={40} className="d-lg-none" />
                            <span className="d-none d-lg-block"><Titre /></span>
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
                                <ul className="navbar-nav justify-content-center flex-grow-1 mx-auto">
                                    <li className="nav-item ">
                                        <Link className="nav-link active text-white fs-5" aria-current="page" to='/' >
                                            Accueil
                                        </Link>
                                    </li>


                                    {showTextLieu === false && (
                                        <li className="nav-item">
                                            <a className="nav-link text-white fs-5" href='#contacteznous'>
                                                Contactez-nous
                                            </a>
                                        </li>
                                    )}

                                    {showTextLieu && (
                                        <li className="nav-item">
                                            <FormGroup className="mx-2 mx-md-0">
                                                <InputGroup>
                                                    <InputGroupText className="border-black"><i className="bi bi-geo-alt fw-bold fs-5"></i></InputGroupText>
                                                    <Input type="text" placeholder="Lieu" name="lieu" value={lieu} className="form-control p-1 fs-5 border-black text-black" onChange={handleInputChange} style={{ backgroundColor: "white", height: "55px" }} />
                                                </InputGroup>
                                            </FormGroup>

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


                <section className="service_section layout_padding" style={{ backgroundColor: "#03031efc", height: "200px", position: "" }}>
                    <div className="text-warning fs-3 fw-bold mb-4 text-center" style={{ marginTop: "-10px" }}>
                        Trouvez le formateur qu'il vous faut ou pour vos enfants
                    </div>
                    <Row className='mb-5' style={{ position: "", top: "-40px" }}>
                        <Col></Col>

                        <Col xs={10} md={5}>
                            <FormGroup className="mx-2">
                                <InputGroup>
                                    <InputGroupText className="border-black"><i className="bi bi-geo-alt fw-bold fs-5"></i></InputGroupText>
                                    <Input type="text" placeholder="Lieu" name="lieu" value={lieu} className="form-control p-2 fs-5 border-black text-black" onChange={handleInputChange} style={{ backgroundColor: "white", height: "55px" }} />
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col></Col>
                    </Row>

                </section>


            </div>
            <div className='container mt-5 mt-md-3'>
                <Row style={{ position: '' }}>
                    <Col></Col>
                    <Col xs={12} md={5} lg={4}>
                        <FormGroup>
                            <Row>
                                <MyLabel forMyLabel='format' text={'Trier par domaine'} className='text-black'></MyLabel>
                            </Row>
                            <Select
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        height: 'auto',
                                        minHeight: '40px',
                                        border: '1px solid black',
                                        color: 'black'
                                    }),
                                }}
                                options={domaine}
                                onChange={handleDomaineChange}
                                value={domaineValue}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={5} lg={4}>
                        <FormGroup>
                            <Row>
                                <MyLabel forMyLabel='niveau' text={'Trier par niveau'} className='text-black'></MyLabel>
                            </Row>
                            <Select id={'niveau'} name={'niveau'}
                                options={niveau}
                                onChange={handleNiveauChange}
                                value={niveauValue}
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        height: 'auto',
                                        minHeight: '40px',
                                        border: '1px solid black',
                                        color: 'black'
                                    }),
                                }} />
                        </FormGroup>
                    </Col>
                    <Col></Col>

                </Row>
            </div>
            {/* Section des sessions */}
            <section className="">
                <div className="ms-md-5 me-md-5">
                    <Row className='gx-3 gy-4 align-items-stretch'>
                        {formateur.map(formateur => (
                            <Col key={formateur.id} xs={12} sm={6} xl={3} lg={6} md={6} className='d-flex flex-column justify-content-between'>
                                <Col className='p-2 d-flex flex-column justify-content-between colFormFormateur border-black m-1'>
                                    <Row>
                                        <Col>
                                            {formateur.photo === null ?
                                            
                                                <i className='bi bi-person-square' style={{fontSize: '100px', top: '0px'}}></i> :
                                                <img src={formateur.photo} alt="photo" height={200} width={200} style={{ borderRadius: '10px' }} />}

                                        </Col>
                                    </Row>
                                    <Col>
                                        <div className='text-justify fs-4 fw-bold'>{formateur.nom_complet}</div>
                                        <div className=''> <i className="bi bi-geo-alt"></i><span>{" " + formateur.adresse}</span></div>
                                        <div className='fw-bold'>{formateur.formateur.formateurDomicile.domaine.map(domaine => (<span key={domaine.id}>{domaine.libelle + " "}</span>))}</div>
                                        <div className='fw-bold'>{formateur.formateur.formateurDomicile.niveau.map(niveau => (<span key={niveau.id}>{'-' + niveau.libelle + " "}</span>))}</div>

                                    </Col>

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
                        <Modal isOpen={modal} toggle={toggle} centered={true} scrollable={true} className='fs-5' style={{ maxHeight: '80vh' }}>

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
                                                    <Col xs={12} md={5}><div className='fs-5 fw-bold text-start text-md-end'><i className="bi bi-geo-alt fs-5 fw-bold"></i> Adresse: </div></Col>
                                                    <Col>{selectedFormateur.adresse}</Col>
                                                </Row>
                                                <Row className='p-1'>
                                                    <Col xs={12} md={5}><div className='fs-5 fw-bold text-start text-md-end'><i className="bi bi-person-badge"></i> Profession: </div></Col>
                                                    <Col>{selectedFormateur.profession}</Col>
                                                </Row>
                                                <Row className=' p-1 styleCol'>
                                                    <Col xs={12} md={5}><div className='fs-5 fw-bold text-start text-md-end'> Niveau d'étude: </div></Col>
                                                    <Col>{selectedFormateur.niveauEtude}</Col>
                                                </Row>
                                                <Row className=' p-1 '>
                                                    <Col xs={12} md={5}><div className='fs-5 fw-bold text-start text-md-end'> Linkdein :</div></Col>
                                                    <Col>{selectedFormateur.linkedin}</Col>
                                                </Row>
                                                <Row className=' p-1 styleCol'>
                                                    <Col xs={12} md={5}><div className='fs-5 fw-bold text-start text-md-end'> Domaines dispensés : </div></Col>
                                                    <Col>{selectedFormateur.domaineExpertise.map(domaine => (<li key={domaine.id} className='ms-4'>{domaine.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 '>
                                                    <Col xs={12} md={5}><div className='fs-5 fw-bold text-start text-md-end'> Niveau concernés : </div></Col>
                                                    <Col>{selectedFormateur.niveau.map(niveau => (<li key={niveau.id} className='ms-4'>{niveau.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 styleCol'>
                                                    <Col xs={12} md={5}><div className='fs-5 fw-bold text-start text-md-end'> Competances </div></Col>
                                                    <Col>{selectedFormateur.competances.map(competances => (<li key={competances.id} className='ms-4'>{competances.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 '>
                                                    <Col xs={12} md={5}><div className='fs-5 fw-bold text-start text-md-end'> Domaine d'expertises </div></Col>
                                                    <Col>{selectedFormateur.domaineExpertise.map(domaineExpertise => (<li key={domaineExpertise.id} className='ms-4'>{domaineExpertise.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 styleCol'>
                                                    <Col xs={12} md={5}><div className='fs-5 fw-bold text-start text-md-end'>Temps de disponibilité </div></Col>
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
