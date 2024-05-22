import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { formateurDomicile } from '../../../data/formateurDomicile'
import '../profil.scss'
import image from '../../../image/team-1.jpg'

export default function ProfilFormateur() {
    const id = 1;
    const formateur = formateurDomicile.find(formateur => formateur.id = id)
    console.log(formateur)
    return (
        <div>

            <Row>
                {/* Colonne pour les informations de l'utilisateurs */}

                <Col lg={5}>
                    <Card>
                        <div className='fw-bold fs-4 ms-3'>Détail Personnel</div>
                        <div>
                                        <Row>
                                            <Col></Col>
                                            <Col><img src={image} alt="photo" height={200} style={{ borderRadius: '50%' }} /></Col>
                                            <Col></Col>

                                        </Row>
                                        <h2 className='text-center fs-1 fw-bold mt-2'>{formateur.nomComplet}</h2>
                                        <Row>
                                            <Col>
                                                <Row className=' p-1 m-1 styleCol'>
                                                    <Col><div className='fs-5 text-center fw-bold'><i className="bi bi-geo-alt fs-5 fw-bold"></i> Adresse: </div></Col>
                                                    <Col>{formateur.adresse}</Col>
                                                </Row>
                                                <Row className='p-1 m-1'>
                                                    <Col><div className='fs-5 text-center fw-bold'><i className="bi bi-person-badge"></i> Profession: </div></Col>
                                                    <Col>{formateur.profession}</Col>
                                                </Row>
                                                <Row className=' p-1 m-1 styleCol'>
                                                    <Col><div className='fs-5 text-center fw-bold'> Niveau d'étude: </div></Col>
                                                    <Col>{formateur.niveauEtude}</Col>
                                                </Row>
                                                <Row className=' p-1 m-1 '>
                                                    <Col><div className='fs-5 text-center fw-bold'> Linkdein :</div></Col>
                                                    <Col>{formateur.linkedin}</Col>
                                                </Row>
                                                <Row className=' p-1 m-1 styleCol'>
                                                    <Col><div className='fs-5 text-center fw-bold'> Domaines dispensés : </div></Col>
                                                    <Col>{formateur.domaineExpertise.map(domaine => (<li key={domaine.id} className='ms-4'>{domaine.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 m-1 '>
                                                    <Col><div className='fs-5 text-center fw-bold'> Niveau concernés : </div></Col>
                                                    <Col>{formateur.niveau.map(niveau => (<li key={niveau.id} className='ms-4'>{niveau.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 m-1 styleCol'>
                                                    <Col><div className='fs-5 text-center fw-bold'> Competances </div></Col>
                                                    <Col>{formateur.competances.map(competances => (<li key={competances.id} className='ms-4'>{competances.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 m-1 '>
                                                    <Col><div className='fs-5 text-center fw-bold'> Domaine d'expertises </div></Col>
                                                    <Col>{formateur.domaineExpertise.map(domaineExpertise => (<li key={domaineExpertise.id} className='ms-4'>{domaineExpertise.libelle}</li>))}</Col>
                                                </Row>
                                                <Row className=' p-1 m-1 styleCol'>
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
                    </Card>
                </Col>
                <Col></Col>
            </Row>

        </div>
    )
}
