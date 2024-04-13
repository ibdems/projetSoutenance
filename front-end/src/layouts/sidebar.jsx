import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Importez le fichier CSS personnalisé
import { BsDashboard, BsBook, BsPersonFill, BsBriefcaseFill, BsPersonCircle, BsPeopleFill, BsCashCoin, BsDoorOpen } from 'react-icons/bs'; // Importez les icônes Bootstrap

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo et titre du tableau de bord */}
      <div className="sidebar-header">
        <img src="/logo.png" alt="Logo" />
        <span>Dashboard</span>
      </div>

      {/* Menu de navigation */}
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">
              <BsDashboard className="sidebar-icon" />
              Tableau de bord
            </Link>
          </li>
          <li>
            <Link to="/formations">
              <BsBook className="sidebar-icon" />
              Formations
            </Link>
          </li>
          <li>
            <Link to="/demande-inscription">
              <BsPersonFill className="sidebar-icon" />
              Demande d'inscription
            </Link>
          </li>
          <li>
            <Link to="/formateurs">
              <BsBriefcaseFill className="sidebar-icon" />
              Formateurs
            </Link>
          </li>
          <li>
            <Link to="/profil">
              <BsPersonCircle className="sidebar-icon" />
              Profil
            </Link>
          </li>
          <li>
            <Link to="/utilisateurs">
              <BsPeopleFill className="sidebar-icon" />
              Utilisateurs
            </Link>
          </li>
          <li>
            <Link to="/paiements">
              <BsCashCoin className="sidebar-icon" />
              Paiements
            </Link>
          </li>
          <li>
            <Link to="/deconnexion">
              <BsDoorOpen className="sidebar-icon" />
              Déconnexion
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
