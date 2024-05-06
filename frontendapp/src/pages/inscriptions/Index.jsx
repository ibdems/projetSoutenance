import React, { useState } from 'react';
import ContactezNous from '../accueil/ContactezNous';
import InfoSection from '../accueil/InfoSection';
import Footer from '../accueil/Footer';
import { Link } from 'react-router-dom';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { MyLabel } from '../../components/Forms/Forms';
import InfoPersonnel from './formateur/InfoPersonnel';
import DetailProfessionnel from './formateur/detailProfessionnal';
import CreationCompte from './CreationCompte';
import InfoCabinet from './Cabinet/InfoCabinet';

export default function IndexInscription() {
    const [role, setRole] = useState('');

    // Fonction pour mettre à jour le rôle sélectionné
    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const [etape, setEtape] = useState(1);

    const handleSuivant = () => {
        // Passage à l'étape suivante
        setEtape(etape + 1);
    };

    const handlePrecedant = () => {
        setEtape(etape - 1);
    }

    return (
        <>
            {/* Contenu du navbar */}
            <nav className="navbar navbar-expand-lg fixed-top" aria-label="Offcanvas navbar large" style={{ backgroundColor: '#03031efc', padding: '15px 0 15px 0', marginTop: '-10px' }}>
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
                                <li className="nav-item">
                                    <Link className="nav-link active text-white fs-4" aria-current="page" to='/'>
                                        Accueil
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white fs-4" href='#contacteznous'>
                                        Contactez-nous
                                    </a>
                                </li>
                            </ul>
                            <ul className="ml-auto navbar-nav mt-3">
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

            {/* Formulaire d'inscription */}
            <section className="service_section layout_padding">
                <div className="container">
                    <h2 className='text-center fw-bold text-blue mt-5'><i className="bi bi-clipboard-check-fill fs-2"></i>INSCRIPTION</h2>
                    <h3 className='text-center fw-5 '>Inscrivez-vous à la plateforme MatchSavoir et gérez vos formations</h3>

                    <form action="">
                        <Row>
                            <Col xs={12} className='align-item-center'>
                                <FormGroup>
                                    <Row>
                                        <MyLabel text={'Êtes-vous un formateur ou un cabinet de formation ?'} className={'text-center'} />
                                    </Row>
                                    <Row className='align-items-center justify-content-center text-center'>
                                        <Col></Col>
                                        <Col>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" className='form-control mt-2 border-black p-2' name="role" value="formateur" checked={role === 'formateur'} onChange={handleRoleChange} />
                                                    <span className='fw-bold fs-4'>Formateur</span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="role" className='mt-2 form-control border-black p-2' value="cabinet" checked={role === 'cabinet'} onChange={handleRoleChange} />
                                                    <span className='fw-bold fs-4'>Cabinet</span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                    <div className='contenueformInscription'>

                                        {role === 'formateur' &&

                                            <div className='mt-2' id='infoPersonnel'>
                                                <h3 className='text-center text-black mb-4'>Etape {etape}/3:
                                                    {etape === 1 && " Information sur votre identité"}
                                                    {etape === 2 && " Information sur vos détail professionnel"}
                                                    {etape === 3 && " Création de votre compte"}
                                                </h3>

                                                {etape === 1 && <InfoPersonnel />}
                                                {etape === 2 && <DetailProfessionnel />}
                                                {etape === 3 && <CreationCompte />}
                                                <Row className='mt-3'>
                                                    <Col></Col>
                                                    <Col xs={5} md={4} lg={3} xl={2}>

                                                        {(etape === 2 || etape === 3) && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handlePrecedant}>Précedant</button>}
                                                    </Col>

                                                    <Col xs={5} md={4} lg={3} xl={2}>
                                                        {etape === 3 && <button type='button' className='form-control text-black bg-warning fs-4'>Valider</button>}
                                                        {(etape === 1 || etape === 2) && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handleSuivant}>Suivant</button>}
                                                    </Col>
                                                </Row>
                                            </div>
                                        }

                                        {
                                            role === 'cabinet' &&
                                            <div className='mt-2' id='infoCabinet'>
                                                <h3 className='text-center text-black mb-4'>Etape {etape}/2:
                                                    {etape === 1 && " Information sur votre cabinet"}
                                                    {etape === 2 && " Création de votre compte"}
                                                </h3>

                                                {etape === 1 && <InfoCabinet />}
                                                {etape === 2 && <CreationCompte />}
                                                <Row className='mt-3'>
                                                    <Col></Col>
                                                    <Col xs={5} md={4} lg={3} xl={2}>

                                                        {etape === 2  && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handlePrecedant}>Précedant</button>}
                                                    </Col>

                                                    <Col xs={5} md={4} lg={3} xl={2}>
                                                        {etape === 2 && <button type='button' className='form-control text-black bg-warning fs-4'>Valider</button>}
                                                        {etape === 1 && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handleSuivant}>Suivant</button>}
                                                    </Col>
                                                </Row>
                                            </div>
                                        }

                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                    </form>
                </div>
            </section>

            <div style={{marginTop: '-150px'}}>
                <ContactezNous />
            </div>

            <InfoSection></InfoSection>
            <Footer />
        </>
    );
}
