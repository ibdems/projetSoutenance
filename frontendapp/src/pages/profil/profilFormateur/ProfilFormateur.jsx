import React, { useState } from 'react';
import { Card, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { formateurDomicile } from '../../../data/formateurDomicile';
import '../profil.scss';
import image from '../../../image/team-1.jpg';
import { MyButton } from '../../../components/Forms/Forms';
import ModifProfil from './ModifProfil';
import ModifDetail from './ModifDetail';
import Certification from './Certification';
import Disponibilite from './Disponiilite';

export default function ProfilFormateur() {
    const id = 1;
    const formateur = formateurDomicile.find(formateur => formateur.id === id); // Correction: use '===' for comparison
    const [modalDetail, setModalDetail] = useState(false);
    const [modalProfessionnel, setModalProfessionnel] = useState(false);
    const [modalCertif, setModalCertif] = useState(false);
    const [modalDisponibilite, setModalDisponibilite] = useState(false);

    const toggleDetail = () => setModalDetail(!modalDetail);
    const toggleProfessionnel = () => setModalProfessionnel(!modalProfessionnel);
    const toggleCertif = () => setModalCertif(!modalCertif);
    const toggleDisponibilite = () => setModalDisponibilite(!modalDisponibilite);

    return (
        <div>
            <Row style={{ marginTop: '-10px' }}>
                <Col md={6} lg={6} xl={5}>
                    <Card>
                        <div className='fw-bold fs-5 ms-2'>Détail Personnel</div>
                        <div>
                            <Row>
                                <Col></Col>
                                <Col><img src={image} alt="photo" height={120} style={{ borderRadius: '50%' }} /></Col>
                                <Col></Col>
                            </Row>
                            <h2 className='text-center fs-3 fw-bold mt-1'>{formateur.nomComplet}</h2>
                            <Row>
                                <Col>
                                    <Row className=' p-1 m-1 styleCol'>
                                        <Col xs={12} lg={4}><div className='text-lg-end'> Identifiant: </div></Col>
                                        <Col className='fw-bold text-justify'>{formateur.code}</Col>
                                    </Row>
                                    <Row className=' p-1 m-1 '>
                                        <Col lg={4}><div className='text-lg-end '><i className="bi bi-geo-alt fw-bold"></i> Adresse: </div></Col>
                                        <Col className='fw-bold text-justify'>{formateur.adresse}</Col>
                                    </Row>
                                    <Row className=' p-1 m-1 styleCol'>
                                        <Col lg={4}><div className='text-lg-end'><i className="bi bi-envelope fw-bold"></i> Email: </div></Col>
                                        <Col className='fw-bold text-justify'>{formateur.email}</Col>
                                    </Row>
                                    <Row className=' p-1 m-1 '>
                                        <Col lg={4}><div className='text-lg-end'><i className="bi bi-telephone fw-bold"></i> Telephone: </div></Col>
                                        <Col className='fw-bold text-justify'>{formateur.telephone}</Col>
                                    </Row>
                                    <Row className='p-1 m-1 styleCol'>
                                        <Col lg={4}><div className='text-lg-end'><i className="bi bi-person-badge"></i> Profession: </div></Col>
                                        <Col className='fw-bold text-justify'>{formateur.profession}</Col>
                                    </Row>
                                    <Row className=' p-1 m-1 '>
                                        <Col lg={4}><div className='text-lg-end'> Niveau d'étude: </div></Col>
                                        <Col className='fw-bold text-justify'>{formateur.niveauEtude}</Col>
                                    </Row>
                                    <Row className=' p-1 m-1 styleCol'>
                                        <Col lg={4}><div className='text-lg-end'>Inscris le: </div></Col>
                                        <Col className='fw-bold text-justify'>{formateur.dateInscription}</Col>
                                    </Row>
                                    <Row className=' p-1 m-1 '>
                                        <Col lg={4}><div className='text-lg-end'> Linkdein :</div></Col>
                                        <Col className='fw-bold text-justify'>{formateur.linkedin}</Col>
                                    </Row>
                                    <Row className=' p-1 m-1 styleCol'>
                                        <Col lg={4}><div className='text-lg-end'>Experience: </div></Col>
                                        <Col className='fw-bold text-justify'>{formateur.dureeExperiance} ans</Col>
                                    </Row>
                                    <Row>
                                        <Col></Col>
                                        <Col md={7}>
                                            <Button   className={'form-control fw-bold mb-1'} style={{backgroundColor: '#03031efc'}} onClick={toggleDetail} > <i className='bi bi-pen'></i> Modifier</Button>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Row>
                        <Col className='mt-4 mt-md-0' md={12} xl={6}>
                            <Card>
                                <div className='fw-bold fs-4 ms-2'>Détail Professionnel</div>
                                <Row className=' p-1 m-1 styleCol'>
                                    <Col xs={12}>
                                        <Row>
                                            <Col>Competances :</Col>
                                            <Col xs={2}><i className='bi bi-plus iconePlus' onClick={toggleProfessionnel}></i></Col>
                                        </Row>
                                    </Col>
                                    {
                                        formateur.competances.map(competance => (
                                            <Col key={competance.id} className='mt-1'>
                                                <Row>
                                                    <Col><li className=' fw-bold'><span className='liText text-justify'>{competance.libelle}</span></li></Col>
                                                    <Col xs={3} lg={3} className='text-end'>
                                                        <i className='bi bi-pen  fw-bold' title='modifier' onClick={toggleProfessionnel}></i>
                                                        <i className='bi bi-trash  fw-bold ms-2 text-danger' title='Supprimer'></i>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        ))
                                    }
                                </Row>
                                <Row className=' p-1 m-1 styleCol'>
                                    <Col xs={12}>
                                        <Row>
                                            <Col>Domaine d'expertises :</Col>
                                            <Col xs={2}><i className='bi bi-plus iconePlus' onClick={toggleProfessionnel}></i></Col>
                                        </Row>
                                    </Col>
                                    {
                                        formateur.domaineExpertise.map(domaineExpertise => (
                                            <Col key={domaineExpertise.id} className='mt-1'>
                                                <Row>
                                                    <Col><li className=' fw-bold'><span className='liText text-justify'>{domaineExpertise.libelle}</span></li></Col>
                                                    <Col xs={3} lg={3} className='text-end'>
                                                        <i className='bi bi-pen  fw-bold' title='modifier' onClick={toggleProfessionnel}></i>
                                                        <i className='bi bi-trash  fw-bold ms-2 text-danger' title='Supprimer'></i>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        ))
                                    }
                                </Row>
                                <Row className=' p-1 m-1 styleCol'>
                                    <Col xs={12}>
                                        <Row>
                                            <Col>Certifications :</Col>
                                            <Col xs={2} className='text-end'><i className='bi bi-plus iconePlus' onClick={toggleCertif}></i></Col>
                                        </Row>
                                    </Col>
                                    <Col className='mt-1'>
                                        <Row>
                                            <Col><li className=' fw-bold'><span className='liText text-justify'>Diplome de Licence</span></li></Col>
                                            <Col xs={4} className='text-end'>
                                                <i className='bi bi-file-earmark-play-fill  fw-bold ' title='ouvrir'></i>
                                                <i className='bi bi-pen  fw-bold ms-1' title='modifier' onClick={toggleCertif}></i>
                                                <i className='bi bi-trash  fw-bold ms-1 text-danger' title='Supprimer'></i>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col className='mt-4 mt-xl-0'>
                            <Card>
                                <div className='fw-bold fs-4 ms-2'>Formateur Domicile</div>
                                <Row className=' p-1 m-1 styleCol'>
                                    <Col xs={12}>
                                        <Row>
                                            <Col>Domaines dispensés :</Col>
                                            <Col xs={2}><i className='bi bi-plus iconePlus' onClick={toggleProfessionnel}></i></Col>
                                        </Row>
                                    </Col>
                                    {
                                        formateur.domaineExpertise.map(domaine => (
                                            <Col key={domaine.id} className='mt-1'>
                                                <Row>
                                                    <Col><li className=' fw-bold'><span className='liText text-justify'>{domaine.libelle}</span></li></Col>
                                                    <Col xs={3} lg={3} className='text-end'>
                                                        <i className='bi bi-pen  fw-bold' title='modifier' onClick={toggleProfessionnel}></i>
                                                        <i className='bi bi-trash  fw-bold ms-2 text-danger' title='Supprimer'></i>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        ))
                                    }
                                </Row>
                                <Row className=' p-1 m-1 styleCol'>
                                    <Col xs={12}>
                                        <Row>
                                            <Col>Niveau concernés :</Col>
                                            <Col xs={2}><i className='bi bi-plus iconePlus' onClick={toggleProfessionnel}></i></Col>
                                        </Row>
                                    </Col>
                                    {
                                        formateur.niveau.map(niveau => (
                                            <Col key={niveau.id} className='mt-1'>
                                                <Row>
                                                    <Col><li className=' fw-bold'><span className='liText text-justify'>{niveau.libelle}</span></li></Col>
                                                    <Col xs={3} lg={3} className='text-end'>
                                                        <i className='bi bi-pen  fw-bold' title='modifier' onClick={toggleProfessionnel}></i>
                                                        <i className='bi bi-trash  fw-bold ms-2 text-danger' title='Supprimer'></i>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        ))
                                    }
                                </Row>
                                <Row className=' p-1 m-1 styleCol'>
                                    <Col xs={12}>
                                        <Row>
                                            <Col>Temps de disponibilité :</Col>
                                            <Col xs={2}><i className='bi bi-plus iconePlus' onClick={toggleDisponibilite}></i></Col>
                                        </Row>
                                    </Col>
                                    <Col className='mt-1'>
                                        <Row>
                                            <Col><li className=' fw-bold' ><span className='liText text-justify'>Jeudi de 8h20 a 18h00</span></li></Col>
                                            <Col xs={3} lg={3} className='text-end'>
                                                <i className='bi bi-pen  fw-bold' title='modifier' onClick={toggleDisponibilite}></i>
                                                <i className='bi bi-trash  fw-bold ms-2 text-danger' title='Supprimer'></i>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col><li className=' fw-bold'><span className='liText text-justify'>Samedi de 17h a 20h00</span></li></Col>
                                            <Col xs={3} lg={3} className='text-end'>
                                                <i className='bi bi-pen  fw-bold' title='modifier' onClick={toggleDisponibilite}></i>
                                                <i className='bi bi-trash  fw-bold ms-2 text-danger' title='Supprimer'></i>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Modal for personal details */}
            <Modal isOpen={modalDetail} toggle={toggleDetail} centered={true} scrollable={true} className='fs-5' style={{ maxHeight: '80vh' }}>
                <ModalHeader toggle={toggleDetail} className='text-center fs-4 fw-bold text-white' style={{ backgroundColor: '#03031efc' }}>Modification du profil</ModalHeader>
                <ModalBody>
                    <ModifProfil />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleDetail} style={{ backgroundColor: '#03031efc' }}>Enregistrer</Button>{' '}
                    <Button color="secondary" onClick={toggleDetail}>Annuler</Button>
                </ModalFooter>
            </Modal>

            {/* Modal for professional details */}
            <Modal isOpen={modalProfessionnel} toggle={toggleProfessionnel} centered={true} scrollable={true} className='fs-5' style={{ maxHeight: '80vh' }}>
                <ModalHeader toggle={toggleDetail} className='text-center fs-4 fw-bold text-white' style={{ backgroundColor: '#03031efc' }}>Detail Profil</ModalHeader>
                <ModalBody>
                    <ModifDetail />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleProfessionnel} style={{ backgroundColor: '#03031efc' }}>Enregistrer</Button>{' '}
                    <Button color="secondary" onClick={toggleProfessionnel}>Annuler</Button>
                </ModalFooter>
            </Modal>

            {/* Modal for certifications */}
            <Modal isOpen={modalCertif} toggle={toggleCertif} centered={true} scrollable={true} className='fs-5' style={{ maxHeight: '80vh' }}>
            <ModalHeader toggle={toggleDetail} className='text-center fs-4 fw-bold text-white' style={{ backgroundColor: '#03031efc' }}>Certifications</ModalHeader>
                <ModalBody>
                    <Certification />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleCertif} style={{ backgroundColor: '#03031efc' }}>Enregistrer</Button>
                    <Button color="secondary" onClick={toggleCertif}>Annuler</Button>
                </ModalFooter>
            </Modal>
            
            <Modal isOpen={modalDisponibilite} toggle={toggleDisponibilite} centered={true} scrollable={true} className='fs-5' style={{ maxHeight: '80vh' }}>
            <ModalHeader toggle={toggleDisponibilite} className='text-center fs-4 fw-bold text-white' style={{ backgroundColor: '#03031efc' }}>Certifications</ModalHeader>
                <ModalBody>
                    <Disponibilite />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleDisponibilite} style={{ backgroundColor: '#03031efc' }}>Enregistrer</Button>
                    <Button color="secondary" onClick={toggleDisponibilite}>Annuler</Button>
                </ModalFooter>
            </Modal>
            
        </div>
    );
}
