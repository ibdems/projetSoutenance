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
            <Navbar contacteznous={'contacteznous'} />

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
                                        
                                        <Col xs={4}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" className='form-control mt-2 border-black p-2' name="role" value="formateur" checked={role === 'formateur'} onChange={handleRoleChange} />
                                                    <span className='fw-bold fs-4'>Formateur</span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4}>
                                            <FormGroup check >
                                                <Label check>
                                                    <Input type="radio" name="role" className='mt-2 form-control border-black p-2' value="cabinet" checked={role === 'cabinet'} onChange={handleRoleChange} />
                                                    <span className='fw-bold fs-4'>Cabinet</span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col  xs={4}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="role" className='mt-2 form-control border-black p-2' value="desirant" checked={role === 'desirant'} onChange={handleRoleChange} />
                                                    <span className='fw-bold fs-4'>Désirant</span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        
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

                                                        {etape === 2  && <Link><button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={handlePrecedant}>Précedant</button></Link> }
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
