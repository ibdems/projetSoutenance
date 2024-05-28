import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../../layoutsPublic/navbar/Navbar';
import InfoSection from '../../accueil/InfoSection';
import Footer from '../../accueil/Footer';
import ContactezNous from '../../accueil/ContactezNous';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { sessions } from '../../formation/dataSession';
import '../recherche.scss'
import DetailFormateur from './DetailFormateur';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import FormLogin from '../../connexion/FormLogin';
import image from '../../../image/fontPetite.jpg'
import DetailOrganisme from './DetailOrganisme';

export default function DetailRecherche() {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const id = parseInt(sessionId, 10);
    const sessionSelectionner = sessions.find(value => value.id === id);
    setSession(sessionSelectionner);
  }, [sessionId]);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Navbar contacteznous={'contacteznous'} />
      <section className="service_section layout_padding">
        <div className="container">
          <Row>
            {/* Detaille de la formation */}
            <Col md={12} lg={6}>

              <Card>
                <CardHeader style={{ backgroundColor: '#03031efc' }}>
                  <h3 className='text-center fw-bold text-white'><i className="bi bi-info-square-fill fs-2"></i>Detaille de la formation</h3>
                </CardHeader>
                <CardBody>
                  {session && (

                    <Col className='px-4 mt-2 d-flex flex-column justify-content-between'>

                      <div>
                        <h3 className='fw-bold text-center'>{' ' + session.formation.nom}</h3>
                        <Row className=' px-1 styleCol'>
                          <Col sm={12} md={4}>
                            <div className=' fw-bold text-start text-md-end'>Description:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.formation.description}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1 '>
                          <Col xs={6} md={4}>
                            <div className=' fw-bold text-start text-md-end'> <i class="bi bi-calendar-month fs-4"></i> Durée:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.formation.duree + ' jours'}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1 styleCol'>
                          <Col xs={6} md={4}>
                            <div className='fw-bold text-start text-md-end'><i className="bi bi-geo-alt fs-4"> </i> Adresse:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.lieu}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1'>
                          <Col xs={6} md={4}>
                            <div className='fw-bold text-start text-md-end'><i class="bi bi-book-half fs-4"></i> Format:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.formation.format}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1 styleCol'>
                          <Col xs={6} md={4}>
                            <div className='fw-bold text-start text-md-end'><i class="bi bi-water fs-4"></i> Niveau:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.formation.niveau}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1'>
                          <Col xs={6} md={4}>
                            <div className='fw-bold text-start text-md-end'><i className="bi bi-calendar-range fs-4"></i> Calendrier:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{'  Du ' + session.dateDebut + ' au ' + session.dateFin}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1 styleCol'>
                          <Col xs={6} md={4}>
                            <div className='fw-bold text-start text-md-end'><i className="bi bi-alarm fs-4"></i> Heurs:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{'  De ' + session.heureDebut + ' à   ' + session.heureFin}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1'>
                          <Col sm={12} md={4}>
                            <div className='fw-bold text-start text-md-end'> <i class="bi bi-calendar2-day-fill fs-4"></i> Jours:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.joursSemaine.map(jours => (
                              <li key={jours.id}>{jours.libelle}</li>
                            ))}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1 styleCol'>
                          <Col xs={6} md={4}>
                            <div className='fw-bold text-start text-md-end'><i className="bi bi-coin fs-4"></i> Tarif:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{' ' + session.formation.prix + ' Fg'}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1'>
                          <Col xs={6} md={4}>
                            <div className='fw-bold text-start text-md-end'><i class="bi bi-translate fs-4"></i> Langue:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.formation.langue}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1 styleCol'>
                          <Col xs={6} md={4}>
                            <div className='fw-bold text-start text-md-end'><i className="bi bi-coin fs-4"></i> Domaine:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.formation.domaine}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1'>
                          <Col xs={6} md={4}>
                            <div className='fw-bold text-start text-md-end'><i class="bi bi-9-circle-fill"></i> Places:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.nombrePlace}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1 styleCol'>
                          <Col sm={12} md={4}>
                            <div className='fw-bold text-start text-md-end'> Objectifs:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.formation.objectifs.map(objectif => (
                              <li key={objectif.id}>{objectif.nom}</li>
                            ))}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1 '>
                          <Col sm={12} md={4}>
                            <div className='fw-bold text-start text-md-end'> Prérequis:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.formation.prerequis.map(prerequis => (
                              <li key={prerequis.id}>{prerequis.nom}</li>
                            ))}</p>
                          </Col>
                        </Row>
                        <Row className=' p-1 styleCol'>
                          <Col sm={12} md={4}>
                            <div className=' fw-bold text-start text-md-end'> Critères:</div>
                          </Col>
                          <Col>
                            <p className='text-justify fw-3 fs-5 '>{session.formation.criteres.map(criteres => (
                              <li key={criteres.id}>{criteres.nom}</li>
                            ))}</p>
                          </Col>
                        </Row>
                      </div>
                      <div>

                        <button onClick={toggle} type='button' className='btn mt-3 form-control btnVoirplus'> <span className='fs-4 fw-bold text-end' style={{ color: 'whitesmoke' }}>Reserver une place</span>   </button>

                      </div>
                    </Col>

                  )}
                </CardBody>
              </Card>


            </Col>

            {/* Detaille du formateur ou du cabinet ayant proposer la formation */}
            <Col>
              <Card>
                <CardHeader  style={{ backgroundColor: '#03031efc' }}>
                  <h3 className='text-center fw-bold text-white'><i className="bi bi-info-square-fill fs-2"></i> Detaille du formateur</h3>

                </CardHeader>
                <CardBody>
                  <Col className='p-4 d-flex flex-column justify-content-between'>
                    {/* <DetailFormateur /> */}
                    <DetailOrganisme />
                  </Col>
                </CardBody>
              </Card>


            </Col>
          </Row>
        </div>
      </section>

      <div style={{ marginTop: '-150px' }}>
        <ContactezNous />
      </div>

      <InfoSection></InfoSection>
      <Footer />

      <Modal isOpen={modal} toggle={toggle} centered={true} scrollable={true} className='fs-5' style={{ padding: 0, border: 'none' }}>
        <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '200px' }}>
          <ModalBody>
            <FormLogin lienConnexion={'/reservation'} />
          </ModalBody>
          <ModalFooter>
            <Row>
              <Col></Col>
              <Col>
              </Col>
              <Col>
                <Button type='button' onClick={toggle} className='mb-3 fw-bold form-control bg-warning text-black'>
                  Fermer
                </Button>
              </Col>
            </Row>
          </ModalFooter>
        </div>
      </Modal>

    </div>
  );
}
