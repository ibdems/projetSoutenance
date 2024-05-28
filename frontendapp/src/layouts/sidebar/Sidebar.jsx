import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import './sidebar.css';

function Sidebar({ size }) {
  const [open, setOpen] = useState('');

  const toggle = (id) => {
    setOpen(open === id ? '' : id);
  };

  const change = size === '250px';
  const sidebarClass = change ? 'expanded' : 'collapsed';

  const styleIconeBody = change ? { marginLeft: '0' } : { marginLeft: '-20px' };

  return (
    <div className={`styleSidebar ${sidebarClass} ${size <= 1200 ? 'd-md-none' : ''}`} style={{ width: size }}>
      <div className="sidebar-header">
        <div className="sidebar-title">
          {change && <h3>MatchSavoir</h3>}
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <SidebarLink to="/admin" icon="bi bi-speedometer2" title="Tableau de bord" change={change} />

          <Accordion open={open} toggle={toggle} className="sidebar-accordion">
            <AccordionItem>
              <AccordionHeader targetId="formations">
                <i className="bi bi-mortarboard-fill" title={change ? '' : 'Formations'}></i>
                {change && <span className="me-3">Formations</span>}
              </AccordionHeader>
              <AccordionBody accordionId="formations">
                <ul>
                  <li>
                    <Link to="/admin/formation/list" className="sidebar-link">
                      <i className='bi bi-eye' style={styleIconeBody} title={change ? '' : 'Liste'}></i>
                      {change && <span>Liste</span>}
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/formation/ajoutformation" className="sidebar-link">
                      <i className='bi bi-plus' style={styleIconeBody} title={change ? '' : 'Ajouter'}></i>
                      {change && <span>Ajout</span>}
                    </Link>
                  </li>
                </ul>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="formateurs">
                <i className="bi bi-person-lines-fill" title={change ? '' : 'Formateurs'}></i>
                {change && <span className="me-3">Formateurs</span>}
              </AccordionHeader>
              <AccordionBody accordionId="formateurs">
                <ul>
                  <li>
                    <Link to="/admin/formateur" className="sidebar-link">
                      <i className='bi bi-eye' style={styleIconeBody} title={change ? '' : 'Liste'}></i>
                      {change && <span>Liste</span>}
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/formateur/ajoutformateurcabinet" className="sidebar-link">
                      <i className='bi bi-plus' style={styleIconeBody} title={change ? '' : 'Ajouter'}></i>
                      {change && <span>Ajout</span>}
                    </Link>
                  </li>
                </ul>
              </AccordionBody>
            </AccordionItem>
          </Accordion>

          <SidebarLink to="/admin/gestionInscription" icon="bi bi-clipboard-check-fill" title="Inscriptions" change={change} />
          <SidebarLink to="/admin/utilisateurs" icon="bi bi-people-fill" title="Utilisateurs" change={change} />
          <SidebarLink to="/admin/messages" icon="bi bi-chat-right-fill" title="Messages" change={change} />
          <SidebarLink to="/admin/payement" icon="bi bi-cash-coin" title="Payements" change={change} />
          <SidebarLink to="/admin/profil" icon="bi bi-person-circle" title="Profil" change={change} />
          <SidebarLink to="/deconnexion" icon="bi bi-box-arrow-in-right" title="Déconnexion" change={change} />
        </ul>
      </div>
    </div>
  );
}

const SidebarLink = ({ to, icon, title, change }) => (
  <Link to={to} className="sidebar-link">
    <li className={change ? '' : 'sidebar-link-collapsed'}>
      <i className={icon} title={change ? '' : title}></i>
      {change && <span>{title}</span>}
      {!change && <span style={{ fontSize: '10px' }}>{title}</span>}
    </li>
  </Link>
);

export default Sidebar;
