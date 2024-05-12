import React, { useState, useEffect } from 'react'
import hero from '../accueil/images/hero-bg.png'
import '../accueil/css/style.css'
import { Col, Row, FormGroup, Label } from 'reactstrap'
import { MyLabel, MyInput, MySelect } from '../../components/Forms/Forms'
import Select from 'react-select';
import { Link } from 'react-router-dom'
import '../rechercheFormation/recherche.scss'
import ContactezNous from '../accueil/ContactezNous'
import Footer from '../accueil/Footer'
import InfoSection from '../accueil/InfoSection'
import { domaine } from '../../data/domaine'



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
                                            <MyInput type={'text'} placeholder={'Saisissez un nom, un domaine, une profession .....'} className={'inputNav'} name={'textRecherche'} value={elements.textRecherche} onChange={(value) => handleInputChange('textRecherche', value)}></MyInput>

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
                                    <div className='text-warning fs-3 fw-bold'>Trouvez le formateur pour vos cours paticulier</div>
                                    <Col md={7}>
                                        <FormGroup>
                                            <MyLabel></MyLabel>
                                            <MyInput type={'text'} placeholder={'Saisissez un nom, un domaine, une profession .....'} name={'textRecherche'} value={elements.textRecherche} onChange={(value) => handleInputChange('textRecherche', value)}></MyInput>
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
                                            <Select
                                                options={domaine.map(item => ({ value: item.id, label: item.nom }))} // Assurez-vous d'avoir les propriétés id et nom dans vos données
                                                onChange={(selectedOption) => handleInputChange('domaine', selectedOption.value)}
                                            />
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
