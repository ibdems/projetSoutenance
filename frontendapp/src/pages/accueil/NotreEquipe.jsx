import React from 'react'
import dems from './images/afficherPhotoUtilisateur.jpeg'
import aissata from './images/team-1.jpg'
import saidou from './images/team-2.jpg'
import { Link } from 'react-router-dom'

export default function NotreEquipe() {
    return (
        <section className="team_section layout_padding">
            <div className="container-fluid">
                <div className="heading_container heading_center">
                    <h2 className="">
                        Notre <span> Equipe</span>
                    </h2>
                </div>
                <div className="team_container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="box ">
                                <div className="img-box">
                                    <img src={dems} className="img1" alt="" />
                                </div>
                                <div className="detail-box text-center">
                                    <h5>Diallo Ibrahima</h5>
                                    <p>Developpeur Web</p>
                                </div>
                                <div className="social_box">
                                    <Link to="#">
                                        <i className="bi bi-facebook" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-twitter" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-linkedin" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-instagram" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-youtube-play" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="box ">
                                <div className="img-box">
                                    <img src={aissata} className="img1" alt="" />
                                </div>
                                <div className="detail-box text-center">
                                    <h5>Barry Aissata</h5>
                                    <p>Admin Reseau</p>
                                </div>
                                <div className="social_box">
                                    <Link to="#">
                                        <i className="bi bi-facebook" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-twitter" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-linkedin" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-instagram" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-youtube-play" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="box ">
                                <div className="img-box">
                                    <img src={saidou} className="img1" alt="" />
                                </div>
                                <div className="detail-box text-center">
                                    <h5>Diallo Mamadou Saidou</h5>
                                    <p>Developpeur Web</p>
                                </div>
                                <div className="social_box">
                                    <Link to="#">
                                        <i className="bi bi-facebook" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-twitter" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-linkedin" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-instagram" aria-hidden="true" />
                                    </Link>
                                    <Link to="#">
                                        <i className="bi bi-youtube-play" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
