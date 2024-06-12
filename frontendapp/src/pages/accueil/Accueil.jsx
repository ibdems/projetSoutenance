import React, { useState } from "react";
import hero from "../../image/hero-bg.png";
import NotreEquipe from "./NotreEquipe";

import ContactezNous from "./ContactezNous";
import { Link } from "react-router-dom";
import logoF from "../../image/logo.jpg";
import logo from "../../image/logoF.jpg";
import TrouverFormation from "../../image/trouverFormation.jpg";
import formation from "../../image/formation.jpg";
import formateur from "../../image/formateur.jpg";
import InfoSection from "./InfoSection";
import Footer from "./Footer";
import NosChiffre from "./NosChiffre";
import Carroussel from "./Carroussel";
import Titre from "../../components/titre/Titre";
export default function Accueil() {
  return (
    <>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src={hero} alt="" />
          </div>
        </div>
        {/* header section strats */}
        <header
          className="header_section"
          style={{ backgroundColor: "#03031efc" }}
        >
          <div className="container-fluid">
            <nav
              className="navbar navbar-expand-lg fixed-top"
              aria-label="Offcanvas navbar large"
              style={{ backgroundColor: "#03031efc", paddingTop: "-1em" }}
            >
              <div className="container-fluid">
                <Link className="navbar-brand text-white">
                  <img src={logoF} alt="" height={40} className="d-lg-none" />
                  <span className="d-none d-lg-block">
                    <Titre />
                  </span>
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
                  <div
                    className="offcanvas-header"
                    style={{ backgroundColor: "#03031efc" }}
                  >
                    <button
                      type="button fs-1"
                      className="btn-close btn-close-white"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div
                    className="offcanvas-body text-center"
                    style={{ backgroundColor: "#03031efc" }}
                  >
                    <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 mx-auto">
                      <li className="nav-item ">
                        <a
                          className="nav-link active text-white fs-4"
                          to={"/"}
                          aria-current="page"
                        >
                          Accueil
                        </a>
                      </li>
                      <a
                        className="nav-link text-white fs-4"
                        href={`#proposition`}
                      >
                        Propositions
                      </a>
                      <a className="nav-link text-white fs-4" href={`#apropos`}>
                        A Propos
                      </a>
                      <a
                        className="nav-link text-white fs-4"
                        href={`#contacteznous`}
                      >
                        Contactez-nous
                      </a>
                    </ul>
                    <ul className="ml-auto navbar-nav">
                      <li className="nav-item me-2 mb-2">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={"/inscription"}
                        >
                          <button
                            className="form-control fw-bold bg-warning fs-5 border-none"
                            style={{ color: "#03031efc" }}
                          >
                            <i
                              className="bi bi-person-fill-add fs-5 me-2"
                              aria-hidden="true"
                            />{" "}
                            S'inscrire
                          </button>
                        </Link>
                      </li>
                      <li className="nav-item me-2">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={"/connexion"}
                        >
                          <button
                            className="form-control fw-bold bg-warning fs-5 border-none"
                            style={{ color: "#03031efc" }}
                          >
                            <i
                              className="bi bi-box-arrow-in-right fs-5 me-2"
                              aria-hidden="true"
                            />
                            Se Connecter
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
        <section className="slider_section " style={{ marginTop: "-50px" }}>
          <Carroussel />
        </section>
      </div>
      {/* Section pour nos propositions */}
      <section
        className="service_section layout_padding"
        id="proposition"
        style={{ marginTop: "-40px" }}
      >
        <div className="service_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h1>Nos Propositions</h1>
              <p className="fs-5 fw-300">
                Afin de vous faciliter la mise en relation entre vous qui
                desirez trouver des formations selons vos besoins et ceux qui
                souhaite avoir des apprenants, nous avons les propositions
                suivantes
              </p>
            </div>
            <div className="row d-flex">
              <div className="col-md-4 d-flex align-items-stretch">
                <div className="box w-100 d-flex flex-column p-3">
                  <div className="img-box mb-3">
                    <img
                      src={TrouverFormation}
                      alt=""
                      width={200}
                      className="img-fluid"
                    />
                  </div>
                  <div className="detail-box flex-grow-1 d-flex flex-column justify-content-between">
                    <h6 className="text-center fs-2 fw-bold">
                      Trouver une formation
                    </h6>
                    <p className="text-justify fs-5">
                      Vous êtes élève, étudiant ou professionnel et vous
                      souhaitez améliorer vos compétences ou vous reconvertir,
                      cette plateforme est pour vous.
                    </p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/rechercheformation"
                    >
                      <button
                        className="form-control fs-5 fw-bold bg-warning border-none"
                        style={{ color: "#03031efc" }}
                      >
                        <i className="bi bi-search" aria-hidden="true" />{" "}
                        Rechercher
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-stretch">
                <div className="box w-100 d-flex flex-column p-3">
                  <div className="img-box mb-3">
                    <img src={formation} alt="" className="img-fluid" />
                  </div>
                  <div className="detail-box flex-grow-1 d-flex flex-column justify-content-between">
                    <h6 className="text-center fs-2 fw-bold">
                      Proposer des formations
                    </h6>
                    <p className="text-justify fs-5">
                      Vous êtes un formateur indépendant ou un cabinet, créez
                      vos formations et obtenez plus de demandes et gérez les
                      demandes d'inscriptions.
                    </p>
                    <Link style={{ textDecoration: "none" }} to="/inscription">
                      <button
                        className="form-control fw-bold bg-warning fs-5 border-none"
                        style={{ color: "#03031efc" }}
                      >
                        <i
                          className="bi bi-person-fill-add"
                          aria-hidden="true"
                        />{" "}
                        M'inscrire
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-stretch">
                <div className="box w-100 d-flex flex-column p-3">
                  <div className="img-box mb-3">
                    <img src={formateur} alt="" className="img-fluid" />
                  </div>
                  <div className="detail-box flex-grow-1 d-flex flex-column justify-content-between">
                    <h6 className="text-center fs-2 fw-bold">
                      Trouver un formateur
                    </h6>
                    <p className="text-justify fs-5">
                      Vous êtes à la recherche d'un formateur pour votre
                      formation ou celle de vos enfants selon votre
                      disponibilité, vous êtes au bon endroit.
                    </p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/rechercheformateur"
                    >
                      <button
                        className="form-control fw-bold bg-warning fs-5 border-none"
                        style={{ color: "#03031efc" }}
                      >
                        <i className="bi bi-search" aria-hidden="true" />{" "}
                        Rechercher
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
      <section
        className="why_section layout_padding"
        id="apropos"
        style={{ marginTop: "-4em" }}
      >
        <div className="container  ">
          <div className="heading_container heading_center">
            <h1>
              Apropos de <span className="fs-2 text-warning">Nous</span>
            </h1>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="img-box">
                <img
                  src={logo}
                  height={300}
                  width={400}
                  alt="Logo MatchSavoir"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="detail-box fw-bold">
                <p>
                  Nous sommes MatchSavoir, votre plateforme de référence pour
                  connecter formateurs qualifiés et chercheurs de formations.
                </p>
                <p>
                  Que vous soyez étudiant, professionnel en reconversion ou
                  parent cherchant un formateur à domicile, nous facilitons la
                  recherche et la gestion de formations adaptées à vos besoins.
                  Notre mission est de simplifier le processus de formation pour
                  que chacun puisse atteindre ses objectifs d'apprentissage.
                </p>
                <p>
                  Sur MatchSavoir, vous pouvez trouver des formations variées et
                  des formateurs experts prêts à partager leurs connaissances.
                  Inscrivez-vous pour accéder à un large éventail de cours et
                  bénéficiez d'un accompagnement personnalisé pour optimiser
                  votre parcours de formation.
                </p>
                <p>
                  Rejoignez-nous dès aujourd'hui et découvrez comment
                  MatchSavoir peut vous aider à réaliser vos ambitions
                  éducatives et professionnelles.
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
  );
}
