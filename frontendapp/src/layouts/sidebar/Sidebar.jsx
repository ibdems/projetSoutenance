import {React} from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar({size}) {
  const change = size === '300px';
  return (
    <div className={`styleSidebar ${size <= 1024 ? 'd-md-none' : ''}`} style={{ width: size }}>
      <div className="sidebar-header">
        <div className="sidebar-title">
          {change && <h1>MacthSavoir</h1>}
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li className="active">
            <Link to="/admin">
              <i className="bi bi-speedometer2" style={{marginLeft: change ? '0' : '-25px'}} title={change ? '' :'Tableau de bord'}></i>
              {change && <span>Tableau de bord</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/formation/list">
              <i className="bi bi-mortarboard-fill" style={{marginLeft: change ? '0' : '-25px'}} title={change ? '' :'Formations'}></i>
              {change && <span>Formations</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/gestionInscription">
              <i className="bi bi-clipboard-check" style={{marginLeft: change ? '0' : '-25px'}} title={change ? '' :'Inscriptions'}></i>
              {change && <span>Inscriptions</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/formateur">
              <i className="bi bi-person-lines-fill " style={{marginLeft: change ? '0' : '-25px'}} title={change ? '' :'Nos Formateurs'}></i>
              {change && <span>Nos Formateurs</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/utilisateurs">
              <i className="bi bi-people-fill" style={{marginLeft: change ? '0' : '-25px'}} title={change ? '' :'Utilisateurs'}></i>
              {change && <span>Utilisateurs</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/payement">
              <i className="bi bi-cash-coin" style={{marginLeft: change ? '0' : '-25px'}} title={change ? '' :'Payements'}></i>
             {change &&  <span>Payements</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/profil">
              <i className="bi bi-person-circle" style={{marginLeft: change ? '0' : '-25px'}} title={change ? '' :'Profil'}></i>
              {change && <span>Profil</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/deconnexion">
              <i className="bi bi-box-arrow-in-right" style={{marginLeft: change ? '0' : '-25px'}} title={change ? '' :'Déconnexion'}></i>
              {change && <span>Déconnexion</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
