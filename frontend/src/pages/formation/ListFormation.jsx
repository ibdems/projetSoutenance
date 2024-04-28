import React, { useState } from 'react';
import {
  Col, Row, Modal,
  ModalHeader,
  ModalBody,
  ModalFooter, Button
} from 'reactstrap';
import './formation.scss';
import { formations } from './dataFormation.js';
import PropTypes from 'prop-types';
import { AjoutSession } from './AjoutSession.jsx';
import { MyInput } from '../../components/Forms/Forms.jsx';

function ListFormation(props) {
  const { className } = props;
  const [modalAjoutSession, setModal] = useState(false);

  const [modalListSession, setModalList] = useState(false);

  // const editFormation = () => {
  //   console.log('edit');
  // }
  const toggleAjout = () => setModal(!modalAjoutSession);
  const toggleList = () => setModalList(!modalListSession);
  const [search, setSearch] = useState('')
  const searchFormation = (e) => {
    setSearch(e.target.value)
  }


  const deleteFormation = () => {
    console.log('delete');
  }
  return (
    <div>
      <h3>Liste des formations</h3>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <MyInput type='text' name='searchFormation' value={search} placeholder='Recherchez vos formations' onChange={searchFormation}/>
        </Col>
        <Col></Col>
      </Row>
      <Row className='justify-content-center'>
        {formations.map(formation => (
          <Col key={formation.id} xs={11} sm={8} xl={4} lg={5} md={5} className='contenueCard m-4 p-2 mb-3'>
            <h3 className='titre'>{formation.titre}</h3>
            <div className=' mt-3'> {formation.description}</div>
            <div > <span className=' fw-bold'>Durée :</span> {formation.duree}</div>
            <div > <span className=' fw-bold'>Prix :</span> {formation.prix}</div>
            <div > <span className=' fw-bold'>Niveau :</span> {formation.niveau}</div>
            <div > <span className=' fw-bold'>Langue :</span> {formation.langue}</div>
            <div > <span className=' fw-bold'>Domaine :</span> {formation.domaine}</div>
            <div > <span className=' fw-bold'>Prerequis :</span>
              <ul>
                {formation.prerequis.map(prerequis => (
                  <li key={prerequis.id}>{prerequis.libelle}</li>
                ))}
              </ul>
            </div>
            {formation.criteres !== '' && <div > <span className=' fw-bold'>Critères :</span>
              <ul>
                {formation.criteres.map(critere => (
                  <li key={critere.id}>{critere.libelle}</li>
                ))}
              </ul>
            </div>}
            <div > <span className=' fw-bold'>Objectifs :</span>
              <ul>
                {formation.objectifs.map(objectifs => (
                  <li key={objectifs.id}>{objectifs.libelle}</li>
                ))}
              </ul>
            </div>
            <hr />
            <Row className=' p-2 align-items-center' key={formation.id}>
              {/* Button pour modifier la formation */}
              <Col className="text-center iconeButton"  >
                <span className="bi bi-pencil-square "></span>
              </Col>
              {/* Button pour ajouter une session a la formation */}
              <Col className="text-center iconeButton" onClick={toggleAjout}>
                <i className="bi bi-plus-lg" ></i>
              </Col>
              {/* Button pour voir les formations associers */}
              <Col className="text-center iconeButton" onClick={toggleList}>
                <i className="bi bi-eye-fill " ></i>
              </Col>

              {/* Button pour supprimer une formation */}
              <Col className="text-center iconeButton" onClick={deleteFormation}>
                <i className="bi bi-trash-fill" ></i>
              </Col>
            </Row>
            <Modal isOpen={modalAjoutSession} toggle={toggleAjout} className={className} backdrop='static' keyboard={true} centered style={{ maxWidth: '800px' }}>
              <ModalHeader toggle={toggleAjout}>{formation.titre}</ModalHeader>
              <ModalBody style={{ fontSize: '20px' }}>
                <AjoutSession clickAnnuler={toggleAjout} />
              </ModalBody>

            </Modal>
          </Col>

        ))}
      </Row>



      <Modal isOpen={modalListSession} toggle={toggleList} className={className} backdrop='static' keyboard={true} centered >
        <ModalHeader toggle={toggleList}>Modal title</ModalHeader>
        <ModalBody style={{ fontSize: '20px' }}>

        </ModalBody>
      </Modal>
    </div>
  );
}
ListFormation.propTypes = {
  className: PropTypes.string,
};
export default ListFormation;
