import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap';
import './formation.scss';
import { formations } from './dataFormation.js';
import PropTypes from 'prop-types';
import { MyInput, MyButton } from '../../components/Forms/Forms.jsx';
import { Link, NavLink } from 'react-router-dom';


function ListFormation(props) {
  const [search, setSearch] = useState('');

  const searchFormation = (value) => {
    setSearch(value);
  };

  return (
    <div>
      <Breadcrumb listTag="div">
        <BreadcrumbItem >
          <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Accueil</Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
          <Link to='/admin/formation/list' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Liste</Link>
        </BreadcrumbItem> 
      </Breadcrumb>
      <h3 className='text-center fw-bold mt-3 fs-1 mb-2'>Liste des formations</h3>
      <Row>
        <Col></Col>
        <Col xs={12} md={10} lg={8}>
          <MyInput type='text' name='searchFormation' value={search} placeholder='Recherchez vos formations' onChange={(value) => searchFormation(value)} />
        </Col>
        <Col></Col>
      </Row>
      <Row className='justify-content-center mt-2'>
        {formations.filter((formation) => formation.titre.toLowerCase().includes(search.toLowerCase()))
          .map(formation => (
            <Col key={formation.id} xs={11} sm={8} xl={3} lg={3} md={5} className='contenueCard m-3 p-2 d-flex flex-column justify-content-between'>
              <div>
                <h3 className='titre'>{formation.titre}</h3>
                <div className=' mt-3'> {formation.description}</div>
                <div > <span className=' fw-bold'>Prix :</span> {formation.prix}</div>
              </div>
              <div>
                <NavLink to={`/admin/formation/gestion/${formation.id}`} className='lien-gestion'>
                  <button type='button' className='btn btn-outline-secondary mt-3 form-control'> <span className='fs-3 fw-bold text-white'>Gérer</span>   <i className="bi bi-arrow-right-square fs-3 fw-bold text-white align-right m-1"></i> </button>
                </NavLink>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
}

ListFormation.propTypes = {
  className: PropTypes.string,
};

export default ListFormation;
