import React from 'react'
import { Carousel } from 'react-bootstrap';
import imgCarousel1 from '../../image/slider-img.png'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Carroussel() {
    return (
        <div className="container-fluid">
            <Carousel interval={5000} prevLabel="Précédent" nextLabel="Suivant" indicators={true}>
                <Carousel.Item>

                    <div className="row">
                        <div className="col-md-6">
                            <p className='text-center p-4 fs-4 text-white'>
                                Vous êtes élève, étudiant ou professionnel et vous souhaitez ameliorer vos competances
                                ou vous reconvertir, cette plateforme est pour vous.
                            </p>
                            <h2 className='text-warning text-center '>Trouvez la formation qui vous convient</h2>
                            <Row>
                                <Col></Col>
                                <Col md={8}>
                                    <Link style={{textDecoration: 'none'}} to={'/rechercheformation'}>
                                        <button className='form-control fs-5 fw-bold bg-warning border-none' style={{ color: '#03031efc' }}>
                                            <i className="bi bi-search" aria-hidden="true" /> Rechercher
                                        </button>
                                    </Link>

                                </Col>
                                <Col></Col>
                            </Row>

                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={imgCarousel1} alt="" />
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>

                    <div className="row">
                        <div className="col-md-6">
                            <p className='text-center p-4 fs-4 text-white'>
                                Vous êtes un formateur independant ou un cabinet, créer vos formations et obtenez plus
                                de demandes et gérer
                                les demandes d'inscriptions
                            </p>
                            <h2 className='text-warning text-center '>Créer votre compte</h2>
                            <Row>
                                <Col></Col>
                                <Col md={8}>
                                    <Link style={{textDecoration: 'none'}} to={'/inscription'}>
                                        <button className='form-control fw-bold bg-warning fs-4 border-none' style={{ color: '#03031efc' }}>
                                            <i className="bi bi-person-fill-add" aria-hidden="true" /> M'inscrire
                                        </button>
                                    </Link>

                                </Col>
                                <Col></Col>
                            </Row>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={imgCarousel1} alt="" />
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>

                    <div className="row">
                        <div className="col-md-6">
                            <p className='text-center p-4 fs-4 text-white'>
                                Vous êtes à la recherche d'un formateur pour vos votre formation ou celle de vos enfants selon votre
                                disponibilité, vous êtes au bon endroit
                            </p>
                            <h2 className='text-warning text-center '>Trouver mon formateur</h2>
                            <Row>
                                <Col></Col>
                                <Col md={8}>
                                    <Link style={{textDecoration: 'none'}} to={'/rechercheformateur'}>
                                        <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                                            <i className="bi bi-search" aria-hidden="true" /> Rechercher
                                        </button>
                                    </Link>

                                </Col>
                                <Col></Col>
                            </Row>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={imgCarousel1} alt="" />
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>
        </div>
    )
}
