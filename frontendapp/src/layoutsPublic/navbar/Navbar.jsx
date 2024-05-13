import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'


export default function Navbar({contacteznous }) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" aria-label="Offcanvas navbar large" style={{ backgroundColor: '#03031efc', padding: '15px 0 15px 0', marginTop: '-10px' }}>
            <div className="container-fluid">
                <Link className="navbar-brand text-white" href="#">
                    MatchSavoir
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
                        <ul className="ml-auto navbar-nav mt-3">
                            <li className="nav-item me-2 mb-2">
                                <Link to={'/inscription'}>
                                    <button className='form-control fw-bold bg-warning fs-5 border-none' style={{ color: '#03031efc' }}>
                                        <i className="bi bi-person-fill-add fs-5 me-2" aria-hidden="true" /> S'inscrire
                                    </button>
                                </Link>
                                
                            </li>
                            <li className="nav-item me-2">
                                <Link to={'/connexion'}>
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
