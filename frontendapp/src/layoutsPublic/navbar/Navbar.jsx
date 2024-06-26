import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import Titre from '../../components/titre/Titre'
import logoF from "../../image/logo.jpg";



export default function Navbar({ contacteznous }) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" aria-label="Offcanvas navbar" style={{ backgroundColor: '#03031efc' }}>
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
                    <div className="offcanvas-header" style={{ backgroundColor: '#03031efc' }}>
                        <button
                            type="button"
                            className="btn-close btn-close-white fs-3 bg-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            style={{ border: '1px solid white', }}
                        />
                    </div>
                    <div className="offcanvas-body text-center" style={{ backgroundColor: '#03031efc' }}>
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active text-white fs-4" aria-current="page" to='/'>
                                    Accueil
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-4" href={`#${contacteznous}`}>
                                    Contactez-nous
                                </a>
                            </li>
                        </ul>
                        <ul className="ml-auto navbar-nav">
                            <li className="nav-item me-2 mb-2">
                                <Link to={'/inscription'} style={{ textDecoration: 'none' }}>
                                    <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                                        <i className="bi bi-person-fill-add fs-5 me-2" aria-hidden="true" /> S'inscrire
                                    </button>
                                </Link>

                            </li>
                            <li className="nav-item me-2">
                                <Link to={'/connexion'} style={{ textDecoration: 'none' }}>
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
    )
}
