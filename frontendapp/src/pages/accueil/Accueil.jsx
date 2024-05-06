import React, { useState } from 'react'
import hero from './images/hero-bg.png'
import NotreEquipe from './NotreEquipe';
import imgCarousel1 from './images/slider-img.png'
import { Col, Row } from 'react-bootstrap';
import Navbar from '../../layoutsPublic/navbar/Navbar';
import ContactezNous from './ContactezNous';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import InfoSection from './InfoSection';
import Footer from './Footer';
import NosChiffre from './NosChiffre';
export default function Accueil() {





    return (
        <>
            <div className="hero_area" >
                <div className="hero_bg_box">
                    <div className="bg_img_box">
                        <img src={hero} alt="" />
                    </div>
                </div>
                {/* header section strats */}
                <header className="header_section" style={{ backgroundColor: '#03031efc' }}>
                    <div className="container-fluid">
                        <Navbar apropos='apropos' contacteznous='contacteznous' proposition='proposition' />

                    </div>
                </header>
                {/* Section pour les carouselles */}
                <section className='slider_section '>
                    <div className="container-fluid">
                        <Carousel interval={5000} prevLabel="Précédent" nextLabel="Suivant" indicators={true}>
                            <Carousel.Item>

                                <div className="row">
                                    <div className="col-md-6">
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
                                        <p className='text-center p-4 fs-3 text-white'>
                                            Vous êtes à la recherche d'un formateur pour vos votre formation ou celle de vos enfants selon votre
                                            disponibilité, vous êtes au bon endroit
                                        </p>
                                        <h2 className='text-warning text-center '>Trouver mon formateur</h2>
                                        <Row>
                                            <Col></Col>
                                            <Col md={8}>
                                                <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                                                    <i className="bi bi-search" aria-hidden="true" /> Rechercher
                                                </button>
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

                </section>
            </div>
            {/* Section pour nos propositions */}
            <section className="service_section layout_padding" id='proposition'>
                <div className="service_container">
                    <div className="container ">
                        <div className="heading_container heading_center">
                            <h2>
                                Nos <span>Propositions</span>
                            </h2>
                            <p className='fs-5 fw-300'>
                                Afin de vous faciliter la mise en relation entre vous qui desirez trouver des formations selons
                                vos besoins et ceux qui souhaite avoir des apprenants, nous avons les propositions suivantes
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="./images/s1.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6 className='text-center fs-5 fw-bold'>Trouver une formation</h6>
                                        <p>
                                            Vous êtes élève, étudiant ou professionnel et vous souhaitez ameliorer vos competances
                                            ou vous reconvertir, cette plateforme est pour vous.
                                        </p>
                                        <Link to="/rechercheformation">
                                            <button className='form-control fs-5 fw-bold bg-warning border-none' style={{ color: '#03031efc' }}>
                                                <i className="bi bi-search" aria-hidden="true" /> Rechercher
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="images/s2.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6 className='text-center fs-5 fw-bold'>Proposer des formations</h6>
                                        <p>
                                            Vous êtes un formateur independant ou un cabinet, créer vos formations et obtenez plus
                                            de demandes et gérer
                                            les demandes d'inscriptions
                                        </p>
                                        <Link to={'/inscription'}>
                                            <button className='form-control fw-bold bg-warning fs-5  border-none' style={{ color: '#03031efc' }}>
                                                <i className="bi bi-person-fill-add" aria-hidden="true" /> M'inscrire
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="images/s3.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6 className='text-center fs-5 fw-bold'>Trouver un formateur</h6>
                                        <p className='text-justify'>
                                            Vous êtes à la recherche d'un formateur pour vos votre formation ou celle de vos enfants selon votre
                                            disponibilité, vous êtes au bon endroit
                                        </p>
                                        <Link to="">
                                            <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                                                <i className="bi bi-search" aria-hidden="true" /> Rechercher
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* end service section */}
            {/* nos chiffre section */}
            <NosChiffre />

            {/* Section a propos de nous */}
            <section className="why_section layout_padding" id='apropos'>
                <div className="container  ">
                    <div className="heading_container heading_center">
                        <h2>
                            Apropos de <span>Nous</span>
                        </h2>

                    </div>
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="img-box">
                                <img src="images/about-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <p>Nous Somme MatchSavoir</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quae tempore fugit adipisci cupiditate libero quo veritatis magnam. Facilis ipsa doloribus reiciendis labore consequatur quidem ad provident vel quas rerum!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat repellendus maiores ut, facere, commodi voluptates libero magni molestias in quibusdam ipsam omnis quod consequuntur exercitationem sint neque quos laborum.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section notre equipe */}
            <NotreEquipe />

            {/* Section contactez-nous */}
            <ContactezNous />

            {/* info section */}
            <InfoSection />

            {/* footer section */}
            <Footer />

        </>

    )
}