import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../../layoutsPublic/navbar/Navbar';
import InfoSection from '../../accueil/InfoSection';
import Footer from '../../accueil/Footer';
import ContactezNous from '../../accueil/ContactezNous';
import { Col, Row } from 'reactstrap';
import { sessions } from '../../formation/dataSession';
import '../recherche.scss'
import DetailFormateur from './DetailFormateur';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import FormLogin from '../../connexion/FormLogin';
import image from '../../../image/fontPetite.jpg'

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
              <h2 className='text-center fw-bold text-blue mt-5'><i className="bi bi-file fs-2"></i>Detaille de la formation</h2>

              {session && (

                <Col className='p-4 d-flex flex-column justify-content-between detailFormation'>

                  <div>
                    <h2 className='fw-bold text-center'>{' ' + session.formation.nom}</h2>
                    <Row className=' p-1 styleCol'>
                      <Col sm={12} md={6}>
                        <h5 className='mt-2 text-justify'>DESCRIPTION</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.formation.description}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1 '>
                      <Col>
                        <h5 className='mt-2 text-justify'> <i class="bi bi-calendar-month fs-3"></i> DUREE DE LA FORMATION</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.formation.duree + ' jours'}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1 styleCol'>
                      <Col>
                        <h5 className='mt-2 text-justify'><i className="bi bi-geo-alt fs-3"> </i> Adresse</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.lieu}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1'>
                      <Col>
                        <h5 className='mt-2 text-justify'><i class="bi bi-book-half fs-3"></i> TYPE D'ENSEIGNEMENT</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.formation.format}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1 styleCol'>
                      <Col>
                        <h5 className='mt-2 text-justify'><i class="bi bi-water fs-3"></i> NIVEAU</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.formation.niveau}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1'>
                      <Col>
                        <h5 className='mt-2 text-justify'><i className="bi bi-calendar-range fs-3"></i> CALENDRIER</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{'  Du ' + session.dateDebut + ' au ' + session.dateFin}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1 styleCol'>
                      <Col>
                        <h5 className='mt-2 text-justify'><i className="bi bi-alarm fs-3"></i> HEURE</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{'  De ' + session.heureDebut + ' à   ' + session.heureFin}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1'>
                      <Col sm={12} md={6}>
                        <h5 className='mt-2 text-center'> <i class="bi bi-calendar2-day-fill fs-3"></i> JOURS</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.joursSemaine.map(jours => (
                          <li key={jours.id}>{jours.libelle}</li>
                        ))}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1 styleCol'>
                      <Col>
                        <h5 className='mt-2 text-justify'><i className="bi bi-coin fs-3"></i> TARIF</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{' ' + session.formation.prix + ' Fg'}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1'>
                      <Col>
                        <h5 className='mt-2 text-justify'><i class="bi bi-translate fs-3"></i> LANGUE</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.formation.langue}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1 styleCol'>
                      <Col>
                        <h5 className='mt-2 text-justify'><i className="bi bi-coin fs-3"></i> DOMAINE</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.formation.domaine}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1'>
                      <Col>
                        <h5 className='mt-2 text-justify'><i class="bi bi-9-circle-fill"></i> NOMBRE DE PLACE</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.nombrePlace}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1 styleCol'>
                      <Col sm={12} md={6}>
                        <h5 className='mt-2 text-center'> OBJECTIFS</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.formation.objectifs.map(objectif => (
                          <li key={objectif.id}>{objectif.nom}</li>
                        ))}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1 '>
                      <Col sm={12} md={6}>
                        <h5 className='mt-2 text-center'> PREREQUIS</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.formation.prerequis.map(prerequis => (
                          <li key={prerequis.id}>{prerequis.nom}</li>
                        ))}</p>
                      </Col>
                    </Row>
                    <Row className=' p-1 styleCol'>
                      <Col sm={12} md={6}>
                        <h5 className='mt-2 text-center'> CRITERES</h5>
                      </Col>
                      <Col>
                        <p className='text-justify fw-3 fs-5 mt-2'>{session.formation.criteres.map(criteres => (
                          <li key={criteres.id}>{criteres.nom}</li>
                        ))}</p>
                      </Col>
                    </Row>
                  </div>
                  <div>

                    <button onClick={toggle} type='button' className='btn mt-3 form-control btnVoirplus'> <span className='fs-3 fw-bold text-end' style={{ color: 'whitesmoke' }}>Reserver une place</span>   </button>

                  </div>
                </Col>

              )}

            </Col>

            {/* Detaille du formateur ou du cabinet ayant proposer la formation */}
            <Col>
              <h2 className='text-center fw-bold text-blue mt-5'><i className="bi bi-file fs-2"></i>Detaille de l'organisme</h2>
              <Col className='p-4 d-flex flex-column justify-content-between detailFormation'>
                <DetailFormateur />
                {/* <DetailOrganisme /> */}
              </Col>

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
            <FormLogin lienConnexion={'/reservation'}/>
          </ModalBody>
          <ModalFooter>
            <Row>
              <Col></Col>
              <Col>
              </Col>
              <Col>
                <Button type='button' onClick={toggle} className='p-2 fw-bold form-control bg-warning text-black'>
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
