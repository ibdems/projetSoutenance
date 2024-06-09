import React, { useState } from 'react'
import hero from '../../image/hero-bg.png'
import NotreEquipe from './NotreEquipe';

import ContactezNous from './ContactezNous';
import { Link } from 'react-router-dom'

import InfoSection from './InfoSection';
import Footer from './Footer';
import NosChiffre from './NosChiffre';
import Carroussel from './Carroussel';
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
                        <nav className="navbar navbar-expand-lg fixed-top" aria-label="Offcanvas navbar large" style={{ backgroundColor: '#03031efc', padding: '15px 0 15px 0', marginTop: '-10px' }} >
                            <div className="container-fluid">
                                <Link className="navbar-brand text-white" > {/* Ajout de la classe text-white */}
                                    MacthSavoir
                                </Link>
                                <button
                                    className="navbar-toggler text-white"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasNavbar2"
                                    aria-controls="offcanvasNavbar2"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="bi bi-blockquote-left fs-1" />
                                </button>
                                <div
                                    className="offcanvas offcanvas-end text-white"
                                    tabIndex={-1}
                                    id="offcanvasNavbar2"
                                    aria-labelledby="offcanvasNavbar2Label"
                                >
                                    <div className="offcanvas-header" style={{ backgroundColor: '#03031efc' }}>

                                        <button
                                            type="button fs-1"
                                            className="btn-close btn-close-white"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="offcanvas-body text-center" style={{ backgroundColor: '#03031efc' }}>
                                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 mx-auto">
                                            <li className="nav-item ">
                                                <a className="nav-link active text-white fs-4" to={'/'} aria-current="page" >
                                                    Accueil
                                                </a>
                                            </li>
                                            <a className="nav-link text-white fs-4" href={`#proposition`}>
                                                Propositions
                                            </a>
                                            <a className="nav-link text-white fs-4" href={`#apropos`}>
                                                A Propos
                                            </a>
                                            <a className="nav-link text-white fs-4" href={`#contacteznous`}>
                                                Contactez-nous
                                            </a>

                                        </ul>
                                        <ul className="ml-auto navbar-nav">
                                            <li className="nav-item me-2 mb-2">
                                                <Link style={{textDecoration: 'none'}} to={'/inscription'}>
                                                    <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                                                        <i className="bi bi-person-fill-add fs-5 me-2" aria-hidden="true" /> S'inscrire
                                                    </button>
                                                </Link>

                                            </li>
                                            <li className="nav-item me-2">
                                                <Link style={{textDecoration: 'none'}} to={'/connexion'}>
                                                    <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                                                        <i className="bi bi-box-arrow-in-right fs-5 me-2" aria-hidden="true" />Se Connecter
                                                    </button>
                                                </Link>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>

                    </div>
                </header>
                {/* Section pour les carouselles */}
                <section className='slider_section ' style={{marginTop: '-50px'}}>
                    <Carroussel />
                </section>
            </div>
            {/* Section pour nos propositions */}
            <section className="service_section layout_padding" id='proposition'>
                <div className="service_container">
                    <div className="container ">
                        <div className="heading_container heading_center">
                            <h2>
                                Nos <span className='fs-2'>Propositions</span>
                            </h2>
                            <p className='fs-5 fw-300'>
                                Afin de vous faciliter la mise en relation entre vous qui desirez trouver des formations selons
                                vos besoins et ceux qui souhaite avoir des apprenants, nous avons les propositions suivantes
                            </p>
                        </div>
                        <div className="row" >
                            <div className="col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="./images/s1.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6 className='text-center fs-5 fw-bold'>Trouver une formation</h6>
                                        <p className='text-justify'>
                                            Vous êtes élève, étudiant ou professionnel et vous souhaitez ameliorer vos competances
                                            ou vous reconvertir, cette plateforme est pour vous.
                                        </p>
                                        <Link style={{textDecoration: 'none'}} to="/rechercheformation">
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
                                        <Link style={{textDecoration: 'none'}} to={'/inscription'}>
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
                                        <Link style={{textDecoration: 'none'}} to="/rechercheformateur">
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
                            Apropos de <span className='fs-2'>Nous</span>
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
