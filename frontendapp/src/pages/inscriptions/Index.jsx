import React, { useState } from 'react';
import ContactezNous from '../accueil/ContactezNous';
import InfoSection from '../accueil/InfoSection';
import Footer from '../accueil/Footer';
import { Link } from 'react-router-dom';
import { Card, Col, FormGroup, Row } from 'reactstrap';
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

    const [etape, setEtape] = useState(1);

    const handleRoleChange = (newRole) => {
        setRole(newRole);
        setEtape(1);
    };

    const handleSuivant = () => {
        setEtape(etape + 1);
    };

    const handlePrecedant = () => {
        setEtape(etape - 1);
        if (etape === 2) {
            setReponseInfoPersonnel('non');
        }
    };

    const handleReponseInfoPersonnel = (reponse) => {
        setReponseInfoPersonnel(reponse);
    };

    return (
        <>
            <Navbar contacteznous={'contacteznous'} />

            <section className="service_section layout_padding">
                <div className="container">
                    <h2 className='text-center fw-bold text-blue mt-5'><i className="bi bi-clipboard-check-fill fs-2"></i>INSCRIPTION</h2>
                    <h3 className='text-center fw-5 '>Inscrivez-vous à la plateforme MatchSavoir et gérer vos formations</h3>

                    <Row style={{marginLeft: '0px'}}>
                        <Col xs={2} className={`fs-5 fw-bold text-center py-1 ${role === 'formateur' ? 'bg-secondary text-white' : 'bg-warning text-black'}`} 
                             onClick={() => handleRoleChange('formateur')} style={{ cursor: 'pointer', borderRight: '1px solid white'}}>
                            Formateur
                        </Col>
                        <Col xs={2} className={`fs-5 fw-bold text-center py-1 ${role === 'cabinet' ? 'bg-secondary text-white' : 'bg-warning text-black'}`}
                             onClick={() => handleRoleChange('cabinet')} style={{ cursor: 'pointer', borderRight: '1px solid white' }}>
                            Organisme
                        </Col>
                        <Col xs={2} className={`fs-5 fw-bold text-center py-1 ${role === 'desirant' ? 'bg-secondary text-white' : 'bg-warning text-black'}`}
                             onClick={() => handleRoleChange('desirant')} style={{ cursor: 'pointer' }}>
                            Désirant
                        </Col>
                    </Row>

                    <Card className='border-black p-2' style={{ borderRadius: '0px' }}>
                        <div>
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
                                            {etape !== 1 && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handlePrecedant}>Précedant</button>}
                                        </Col>
                                        <Col xs={5} md={4} lg={3} xl={2}>
                                            {etape < (reponseInfoPersonnel === 'oui' ? 4 : 3) && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handleSuivant}>Suivant</button>}
                                            {etape === (reponseInfoPersonnel === 'oui' ? 4 : 3) && <button type='button' className='form-control text-black bg-warning fs-4'>Valider</button>}
                                        </Col>
                                    </Row>
                                </div>
                            }

                            {role === 'cabinet' &&
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

                            {role === 'desirant' &&
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
                                            {etape === 2 && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handlePrecedant}>Précedant</button>}
                                        </Col>
                                        <Col xs={5} md={4} lg={3} xl={2}>
                                            {etape === 2 && <button type='button' className='form-control text-black bg-warning fs-4'>Valider</button>}
                                            {etape === 1 && <button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handleSuivant}>Suivant</button>}
                                        </Col>
                                    </Row>
                                </div>
                            }

                            {role === '' && <h2 className='text-center'>Veuillez choisir entre Formateur, Désirant ou Organisme afin de pouvoir faire une inscription</h2>}
                        </div>
                    </Card>
                </div>
            </section>

            <div style={{ marginTop: '-150px' }}>
                <ContactezNous />
            </div>

            <InfoSection />
            <Footer />
        </>
    );
}
