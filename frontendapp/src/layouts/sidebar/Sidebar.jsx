import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import './sidebar.css';

function Sidebar({ size }) {
  const [open, setOpen] = useState('');

  const toggle = (id) => {
    setOpen(open === id ? '' : id);
  };

  const change = size === '300px';
  const styleIcone = change ? { marginLeft: '0' } : { marginLeft: '-25px' };
  const styleIconeHeader = change ? { marginLeft: '0' } : { marginLeft: '-40px' };
  const styleIconeBody = change ? { marginLeft: '0' } : { marginLeft: '-50px' };

  return (
    <div className={`styleSidebar ${size <= 1200 ? 'd-md-none' : ''}`} style={{ width: size }}>
      <div className="sidebar-header">
        <div className="sidebar-title">
          {change && <h1>MacthSavoir</h1>}
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li className="active">
            <Link to="/admin">
              <i className="bi bi-speedometer2" style={styleIcone} title={change ? '' : 'Tableau de bord'}></i>
              {change && <span>Tableau de bord</span>}
            </Link>
          </li>
          <div class="accordion custom-accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header ">
                <button class="accordion-button fs-5 fw-bold"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <i className="bi bi-mortarboard-fill" style={styleIconeHeader} title={change ? '' : 'Formations'}></i>{change && <span>Formations</span>}
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <Link to="/admin/formation/list"> <i className='bi bi-eye'style={styleIconeBody} title={change ? '' : 'Liste'}></i>{change && <span>Liste</span>}</Link>
                    </li>
                    <li>
                      <Link to="/admin/formation/ajoutformation"> <i className='bi bi-plus'style={styleIconeBody} title={change ? '' : 'Ajouter'}></i>{change && <span>Ajout</span>}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          
          <li>
            <Link to="/admin/gestionInscription">
              <i className="bi bi-clipboard-check" style={styleIcone} title={change ? '' : 'Inscriptions'}></i>
              {change && <span>Inscriptions</span>}
            </Link>
          </li>
          <div class="accordion custom-accordion" id="nosFormateurs">
            <div class="accordion-item">
              <h2 class="accordion-header ">
                <button class="accordion-button fs-5 fw-bold"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneNosFormateurs" aria-expanded="true" aria-controls="collapseOne">
                  <i className="bi bi-person-lines-fill" style={styleIconeHeader} title={change ? '' : 'Nos Formateurs'}></i>{change && <span>Nos Formateurs</span>}
                </button>
              </h2>
              <div id="collapseOneNosFormateurs" class="accordion-collapse collapse" data-bs-parent="#nosFormateurs">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <Link to="/admin/formateur"> <i className='bi bi-eye'style={styleIconeBody} title={change ? '' : 'Liste'}></i>{change && <span>Liste</span>}</Link>
                    </li>
                    <li>
                      <Link to="/admin/formateur/ajoutformateurcabinet"> <i className='bi bi-plus'style={styleIconeBody} title={change ? '' : 'Ajouter'}></i>{change && <span>Ajout</span>}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          
          <li>
            <Link to="/admin/utilisateurs">
              <i className="bi bi-people-fill" style={styleIcone} title={change ? '' : 'Utilisateurs'}></i>
              {change && <span>Utilisateurs</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/payement">
              <i className="bi bi-cash-coin" style={styleIcone} title={change ? '' : 'Payements'}></i>
              {change && <span>Payements</span>}
            </Link>
          </li>
          <li>
            <Link to="/admin/profil">
              <i className="bi bi-person-circle" style={styleIcone} title={change ? '' : 'Profil'}></i>
              {change && <span>Profil</span>}
            </Link>
          </li>
          <li>
            <Link to="/deconnexion">
              <i className="bi bi-box-arrow-in-right" style={styleIcone} title={change ? '' : 'Déconnexion'}></i>
              {change && <span>Déconnexion</span>}
            </Link>
          </li>
        </ul>

      </div>

    </div>
  );
}

export default Sidebar;
