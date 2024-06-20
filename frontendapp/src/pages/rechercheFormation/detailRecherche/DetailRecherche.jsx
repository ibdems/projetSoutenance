import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../../layoutsPublic/navbar/Navbar';
import InfoSection from '../../accueil/InfoSection';
import Footer from '../../accueil/Footer';
import ContactezNous from '../../accueil/ContactezNous';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import '../recherche.scss'
import DetailFormateur from './DetailFormateur';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import FormLogin from '../../connexion/FormLogin';
import image from '../../../image/fontPetite.jpg'
import DetailOrganisme from './DetailOrganisme';
import Axios from '../../../components/Axios';

export default function DetailRecherche() {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await Axios.get(`sessions/detail/${sessionId}/`);
        setSession(response.data);
        console.log(`detail ${response.data}`)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching session data:', error);
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>No session details available.</div>;
  }

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
                  <h3 className='text-center fw-bold text-white'>
                    <i className="bi bi-info-square-fill fs-2"></i>Detaille de la formation
                  </h3>
                </CardHeader>
                <CardBody>
                  <Col className='px-4 mt-2 d-flex flex-column justify-content-between'>
                    <div>
                      <h3 className='fw-bold text-center'>{session.formation.titre}</h3>
                      <Row className=' px-1 styleCol'>
                        <Col xs={12}>
                          <div className='fw-bold text-start'>Description:</div>
                        </Col>
                        <Col>
                          <p className='text-justify fw-3 fs-5'>{session.formation.description}</p>
                        </Col>
                      </Row>
                      <Row className=' p-1'>
                        <Col xs={5} md={4}>
                          <div className='fw-bold text-start text-md-end'>
                            <i className="bi bi-calendar-month fs-4"></i> Durée:
                          </div>
                        </Col>
                        <Col>
                          <p className='text-justify fw-3 fs-5'>{session.duree} jours</p>
                        </Col>
                      </Row>
                      <Row className=' p-1 styleCol'>
                        <Col xs={5} md={4}>
                          <div className='fw-bold text-start text-md-end'>
                            <i className="bi bi-geo-alt fs-4"></i> Adresse:
                          </div>
                        </Col>
                        <Col>
                          <p className='text-justify fw-3 fs-5'>{session.lieu}</p>
                        </Col>
                      </Row>
                      <Row className=' p-1'>
                        <Col xs={5} md={4}>
                          <div className='fw-bold text-start text-md-end'>
                            <i className="bi bi-book-half fs-4"></i> Format:
                          </div>
                        </Col>
                        <Col>
                          <p className='text-justify fw-3 fs-5'>{session.formation.format}</p>
                        </Col>
                      </Row>
                      <Row className=' p-1 styleCol'>
                        <Col xs={5} md={4}>
                          <div className='fw-bold text-start text-md-end'>
                            <i className="bi bi-water fs-4"></i> Niveau:
                          </div>
                        </Col>
                        <Col>
                          <p className='text-justify fw-3 fs-5'>{session.formation.niveau}</p>
                        </Col>
                      </Row>
                      <Row className=' p-1'>
                        <Col xs={12} md={4}>
                          <div className='fw-bold text-start text-md-end'>
                            <i className="bi bi-calendar-range fs-4"></i> Temps:
                          </div>
                        </Col>
                        <Col>
                          <p className='text-justify fw-3 fs-5'>
                            {'  Du ' + session.date_debut + ' au ' + session.date_fin}
                          </p>
                        </Col>
                      </Row>
                      <Row className=' p-1 styleCol'>
                        <Col xs={12}>
                          <div className='fw-bold text-start'>
                            <i className="bi bi-alarm fs-4"></i> Calendrier:
                          </div>
                        </Col>
                        <Col>
                          {
                            session.calendriers.map(calendriers => (
                              
                                <li className='fs-5 ms-md-5'>{calendriers.jours} {'  De ' + calendriers.heure_debut + ' à   ' + calendriers.heure_fin}</li>
                              
                            ))
                          }
                          <p className='text-justify fw-3 fs-5'>

                          </p>
                        </Col>
                      </Row>

                      <Row className=' p-1'>
                        <Col xs={5} md={4}>
                          <div className='fw-bold text-start text-md-end'>
                            <i className="bi bi-coin fs-4"></i> Tarif:
                          </div>
                        </Col>
                        <Col>
                          <p className='text-justify fw-3 fs-5'>{session.tarif} Fg</p>
                        </Col>
                      </Row>
                      <Row className=' p-1'>
                        <Col xs={5} md={4}>
                          <div className='fw-bold text-start text-md-end'>
                            <i className="bi bi-translate fs-4"></i> Langue:
                          </div>
                        </Col>
                        <Col>
                          <p className='text-justify fw-3 fs-5'>{session.formation.langue}</p>
                        </Col>
                      </Row>
                      <Row className=' p-1 styleCol'>
                        <Col xs={5} md={4}>
                          <div className='fw-bold text-start text-md-end'>
                            <i className="bi bi-coin fs-4"></i> Domaine:
                          </div>
                        </Col>
                        <Col>
                          <p className='text-justify fw-3 fs-5'>{session.formation.domaine}</p>
                        </Col>
                      </Row>
                      <Row className=' p-1'>
                        <Col xs={5} md={4}>
                          <div className='fw-bold text-start text-md-end'>
                            <i className="bi bi-9-circle-fill"></i> Places:
                          </div>
                        </Col>
                        <Col>
                          <p className='text-justify fw-3 fs-5'>{session.nb_place_dispo}</p>
                        </Col>
                      </Row>
                      {
                        session.formation.objectifs.length > 0 && <Row className=' p-1 styleCol'>
                          <Col xs={12}>
                            <div className='fw-bold text-start'> Objectifs:</div>
                          </Col>
                          <Col>
                            
                              {session.formation.objectifs.map(objectif => (
                                <li className='text-justify ms-md-5 fs-5' key={objectif.id}>{objectif.libelle}</li>
                              ))}
                            
                          </Col>
                        </Row>
                      }
                      {
                        session.formation.prerequis.length > 0 && <Row className=' p-1 '>
                          <Col xs={12}>
                            <div className='fw-bold text-start'> Prérequis:</div>
                          </Col>
                          <Col>
                            <p className='text-justify ms-md-5  fs-5'>
                              {session.formation.prerequis.map(prerequis => (
                                <li key={prerequis.id}>{prerequis.libelle}</li>
                              ))}
                            </p>
                          </Col>
                        </Row>
                      }
                      {
                        session.formation.criteres.length > 0 && <Row className=' p-1 styleCol'>
                          <Col sm={12} md={4}>
                            <div className=' fw-bold text-start '> Critères:</div>
                          </Col>
                          <Col>
                            <p className='text-justify ms-md-5 fs-5'>
                              {session.formation.criteres.map(criteres => (
                                <li key={criteres.id}>{criteres.titre}</li>
                              ))}
                            </p>
                          </Col>
                        </Row>
                      }

                    </div>
                    <div>
                      <button onClick={toggle} type='button' className='btn mt-3 form-control btnVoirplus'>
                        <span className='fs-4 fw-bold text-end' style={{ color: 'whitesmoke' }}>Reserver une place</span>
                      </button>
                    </div>
                  </Col>
                </CardBody>
              </Card>
            </Col>

            {/* Detaille du formateur ou du cabinet ayant proposer la formation */}
            <Col>
              <Card>
                <CardHeader style={{ backgroundColor: '#03031efc' }}>
                  <h3 className=' fw-bold text-white'>
                    <i className="bi bi-info-square-fill fs-2"></i>
                    {session.formation.utilisateur.type === 'formateur' && <span className='fs-3'> Information du Formateur</span> }
                    {session.formation.utilisateur.type === 'cabinet' && <span className='fs-3'> Information du l'organisme  </span> }
                  </h3>
                </CardHeader>
                <CardBody>
                  <Col className='p-4 d-flex flex-column justify-content-between'>
                    {session.formation.utilisateur.type === 'formateur' &&  <DetailFormateur id={session.formation.utilisateur.id} />}
                    {session.formation.utilisateur.type === 'cabinet' &&  <DetailOrganisme id={session.formation.utilisateur.id}/>}
             
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
              <Col></Col>
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
