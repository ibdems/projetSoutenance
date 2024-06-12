import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function InfoSection() {
  const [emailSouscription, setEmailSouscription] = useState("");

  return (
    <section className="info_section layout_padding2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 info_col">
            <div className="info_contact">
              <h4>Address</h4>
              <div className="contact_link_box">
                <Link style={{ textDecoration: "none" }} to="">
                  <i className="bi bi-geo" aria-hidden="true" />
                  <span>Université Gamal Abdel Nasser de Conakry</span>
                </Link>
                <Link style={{ textDecoration: "none" }} to="">
                  <i className="bi bi-phone" aria-hidden="true" />
                  <span>Tel 6236273678</span>
                </Link>
                <Link style={{ textDecoration: "none" }} to="">
                  <i className="bi bi-envelope" aria-hidden="true" />
                  <span>ibrahima882001@gmail.com</span>
                </Link>
              </div>
            </div>
            <div className="info_social">
              <Link to="">
                <i className="bi bi-facebook" aria-hidden="true" />
              </Link>
              <Link to="">
                <i className="bi bi-twitter" aria-hidden="true" />
              </Link>
              <Link to="">
                <i className="bi bi-linkedin" aria-hidden="true" />
              </Link>
              <Link to="">
                <i className="bi bi-instagram" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 info_col">
            <div className="info_detail">
              <h4>Info</h4>
              <p>
                Bienvenue sur notre plateforme dédiée à la mise en relation de
                formateurs qualifiés et de personnes à la recherche de
                formations adaptées à leurs besoins. Que vous soyez un étudiant
                cherchant à améliorer vos compétences, un professionnel en
                reconversion ou un parent recherchant un formateur à domicile
                pour vos enfants, notre site est conçu pour vous aider. Nous
                facilitons également la gestion complète des formations, des
                demandes d'inscription à la planification des sessions.
                Simplifiez votre recherche de formation ou de formateur avec
                notre outil intuitif et efficace.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 info_col ">
            <h4>Souscrivez-vous pour recevoir les dernières infos </h4>
            <form action="#">
              <input
                type="text"
                placeholder="Enter email"
                name="emailSouscription"
                value={emailSouscription}
                onChange={(e) => setEmailSouscription(e.target.value)}
              />
              <button type="submit">Soumettre</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
