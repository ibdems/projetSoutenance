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
import Navbar from '../../layoutsPublic/navbar/Navbar';
import InfoDesirant from './Desirant/InfoDesirant';
import FormateurPrive from './formateur/FormateurPrive';

export default function IndexInscription() {
    const [role, setRole] = useState('');
    const [reponseInfoPersonnel, setReponseInfoPersonnel] = useState('non');

    // Fonction pour mettre à jour le rôle sélectionné
    const handleRoleChange = (event) => {
        setRole(event.target.value);
        setEtape(1)
    };

    const [etape, setEtape] = useState(1);

    const handleSuivant = () => {
        // Passage à l'étape suivante
        setEtape(etape + 1);
    };

    const handlePrecedant = () => {
        setEtape(etape - 1);
        if (etape === 2) {
            setReponseInfoPersonnel('non');
        }
    }

    // Fonction pour mettre à jour la réponse de InfoPersonnel
    const handleReponseInfoPersonnel = (reponse) => {
        setReponseInfoPersonnel(reponse);
    }

    return (
        <>
            {/* Contenu du navbar */}
            <Navbar contacteznous={'contacteznous'} />

            {/* Formulaire d'inscription */}
            <section className="service_section layout_padding">
                <div className="container">
                    <h2 className='text-center fw-bold text-blue mt-5'><i className="bi bi-clipboard-check-fill fs-2"></i>INSCRIPTION</h2>
                    <h3 className='text-center fw-5 '>Inscrivez-vous à la plateforme MatchSavoir et gérer vos formations</h3>

                    <form action="">
                        <Row>
                            <Col xs={12} className='align-item-center'>
                                <FormGroup>
                                    <Row>
                                        <MyLabel text={'Êtes-vous un formateur, une organisme de formation ou un désirant ?'} className={'text-center'} />
                                    </Row>
                                    <Row className='align-items-center justify-content-center text-center'>

                                        <Col xs={3} className='me-5'>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" className='form-control mt-2 border-black p-2' name="role" value="formateur" checked={role === 'formateur'} onChange={handleRoleChange} />
                                                    <span className='fw-bold fs-5'>Formateur</span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={3} className='me-5'>
                                            <FormGroup check >
                                                <Label check>
                                                    <Input type="radio" name="role" className='mt-2 form-control border-black p-2' value="cabinet" checked={role === 'cabinet'} onChange={handleRoleChange} />
                                                    <span className='fw-bold fs-5'>Organisme</span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={3} className='me-2'>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="role" className='mt-2 form-control border-black p-2' value="desirant" checked={role === 'desirant'} onChange={handleRoleChange} />
                                                    <span className='fw-bold fs-5'>Désirant</span>
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <div className='contenueformInscription'>

                                        {role === 'formateur' &&
                                            <div className='mt-2' id='infoPersonnel'>
                                                <h3 className='text-center text-black mb-4'>Etape {etape}/{reponseInfoPersonnel === 'oui' ? 4 : 3}:
                                                    {etape === 1 && " Information sur votre identité"}
                                                    {etape === 2 && reponseInfoPersonnel === 'oui' && " Informations pour les cours personnels"}
                                                    {etape === 2 && reponseInfoPersonnel === 'non' && " Information sur vos détail professionnel"}
                                                    {etape === 3 && reponseInfoPersonnel === 'oui' && "Information sur vos détail professionnel"}
                                                    {etape === 3 && reponseInfoPersonnel === 'non' && "  Création de votre compte"}
                                                    {etape === 4 && reponseInfoPersonnel === 'oui' && " Création de votre compte"}
                                                </h3>

                                                {etape === 1 && <InfoPersonnel updateReponse={handleReponseInfoPersonnel} />}
                                                {etape === 2 && reponseInfoPersonnel === 'oui' && <FormateurPrive />}
                                                {etape === 2 && reponseInfoPersonnel === 'non' && <DetailProfessionnel />}
                                                {etape === 3 && reponseInfoPersonnel === 'oui' && <DetailProfessionnel />}
                                                {etape === 3 && reponseInfoPersonnel === 'non' && <CreationCompte />}
                                                {etape === 4 && reponseInfoPersonnel === 'oui' && <CreationCompte />}
                                                <Row className='mt-3'>
                                                    <Col></Col>
                                                    <Col xs={5} md={4} lg={3} xl={2}>
                                                        {/* Bouton Précédent */}
                                                        {etape !== 1  && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handlePrecedant}>Précedant</button>}
                                                    </Col>
                                                    <Col xs={5} md={4} lg={3} xl={2}>
                                                        {/* Bouton Suivant */}
                                                        {etape < (reponseInfoPersonnel === 'oui' ? 4 : 3) && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handleSuivant}>Suivant</button>}
                                                        {/* Bouton Valider */}
                                                        {etape === (reponseInfoPersonnel === 'oui' ? 4 : 3) && <button type='button' className='form-control text-black bg-warning fs-4'>Valider</button>}
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

                                                        {etape === 2 && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handlePrecedant}>Précedant</button>}
                                                    </Col>

                                                    <Col xs={5} md={4} lg={3} xl={2}>
                                                        {etape === 2 && <button type='button' className='form-control text-black bg-warning fs-4'>Valider</button>}
                                                        {etape === 1 && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handleSuivant}>Suivant</button>}
                                                    </Col>
                                                </Row>
                                            </div>
                                        }
                                        {
                                            role === 'desirant' &&
                                            <div className="mt-2">
                                                <h3 className='text-center text-black mb-4'>Etape {etape}/2:
                                                    {etape === 1 && " Vos Informations"}
                                                    {etape === 2 && " Création de votre compte"}
                                                </h3>
                                                {etape === 1 && <InfoDesirant />}
                                                {etape === 2 && <CreationCompte />}
                                                <Row className='mt-3'>
                                                    <Col></Col>
                                                    <Col xs={5} md={4} lg={3} xl={2}>

                                                        {etape === 2 && <Link><button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handlePrecedant}>Précedant</button></Link>}
                                                    </Col>

                                                    <Col xs={5} md={4} lg={3} xl={2}>
                                                        {etape === 2 && <button type='button' className='form-control text-black bg-warning fs-4'>Valider</button>}
                                                        {etape === 1 && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handleSuivant}>Suivant</button>}
                                                    </Col>
                                                </Row>
                                            </div>

                                        }

                                        {
                                            role === '' && <h2 className='text-center'>Veuillez choisir votre entre Formateur, desirant ou oranisme afin de pouvoir faire une inscription</h2>
                                        }

                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                    </form>
                </div>
            </section>

            <div style={{ marginTop: '-150px' }}>
                <ContactezNous />
            </div>

            <InfoSection></InfoSection>
            <Footer />
        </>
    );
}
