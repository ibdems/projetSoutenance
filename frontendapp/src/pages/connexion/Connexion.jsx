import React from 'react'
import FormLogin from './FormLogin'
import { Col, Row } from 'reactstrap'
import './connexion.scss'
import { Carousel } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Connexion() {
  return (
    <div className='contenuConnexion'>
      {/* Votre arrière-plan fixe pour toute la page */}

      <div className='container mb-lg-2 mt-lg-5' style={{ marginTop: '5em' }}>
        {/* Le bloc de ligne avec deux colonnes éloignées */}
        <Row className=" container-special" >
          <Col lg={6} className='special-col  d-none d-lg-block'>
            <div className="container-fluid">
              <Carousel interval={5000} prevLabel="Précédent" nextLabel="Suivant" indicators={false} style={{marginTop: '10em'}}>
                <Carousel.Item>

                  <div className="row">

                    <p className='text-center p-4 fs-3 text-white'>
                      Vous êtes élève, étudiant ou professionnel et vous souhaitez ameliorer vos competances
                      ou vous reconvertir, cette plateforme est pour vous.
                    </p>
                    <h2 className='text-warning text-center '>Trouvez la formation qui vous convient</h2>
                    <Row>
                      <Col></Col>
                      <Col md={8}>
                        <Link to={'/rechercheformation'}>
                          <button className='form-control fs-5 fw-bold bg-warning border-none' style={{ color: '#03031efc' }}>
                            <i className="bi bi-search" aria-hidden="true" /> Rechercher
                          </button>
                        </Link>

                      </Col>
                      <Col></Col>
                    </Row>



                  </div>

                </Carousel.Item>
                <Carousel.Item>

                  <div className="row">
                    <div>
                      <p className='text-center p-4 fs-3 text-white'>
                        Vous êtes un formateur independant ou un cabinet, créer vos formations et obtenez plus
                        de demandes et gérer
                        les demandes d'inscriptions
                      </p>
                      <h2 className='text-warning text-center '>Créer votre compte</h2>
                      <Row>
                        <Col></Col>
                        <Col md={8}>
                          <Link to={'/inscription'}>
                            <button className='form-control fw-bold bg-warning fs-4 border-none' style={{ color: '#03031efc' }}>
                              <i className="bi bi-person-fill-add" aria-hidden="true" /> M'inscrire
                            </button>
                          </Link>

                        </Col>
                        <Col></Col>
                      </Row>
                    </div>

                  </div>

                </Carousel.Item>
                <Carousel.Item>

                  <div className="row">
                    <div>
                      <p className='text-center p-4 fs-3 text-white'>
                        Vous êtes à la recherche d'un formateur pour votre formation ou celle de vos enfants selon votre
                        disponibilité, vous êtes au bon endroit
                      </p>
                      <h2 className='text-warning text-center '>Trouver mon formateur</h2>
                      <Row>
                        <Col></Col>
                        <Col md={8}>
                          <Link to={'/rechercheformateur'}>
                            <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                              <i className="bi bi-search" aria-hidden="true" /> Rechercher
                            </button>
                          </Link>

                        </Col>
                        <Col></Col>
                      </Row>
                    </div>

                  </div>

                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col className='special-col-login'><FormLogin lienConnexion={'/admin'}/></Col> {/* Deuxième colonne pour le formulaire de connexion */}

        </Row>
      </div>
    </div>
  )
}

export default Connexion
