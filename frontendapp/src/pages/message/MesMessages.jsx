import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Breadcrumb, BreadcrumbItem, Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { messages } from '../../data/message';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nouveau from './Nouveau';
import ReponseMessage from './Reponse';

export default function MesMessages() {
  const [open, setOpen] = useState('');

  const toggle = (id) => {
    setOpen(open === id ? '' : id);
  };
  const [modalReponse, setModalReponse] = useState(false)
  const toggleReponse = () => setModalReponse(!modalReponse);

  const [modalNouveau, setModalNouveau] = useState(false)
  const toggleNouveau = () => setModalNouveau(!modalNouveau);

  const [selectedMessage, setSelectedMessage] = useState(null)
  const openModalReponse = (reponse) => {
    setSelectedMessage(reponse)
    toggleReponse()
  }
  return (
    <div>
      <Breadcrumb listTag="div">
        <BreadcrumbItem>
          <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Accueil</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='/admin/demande/list' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Mes messages</Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className='mt-3'>
        <Row className='m-md-4 mb-2'>
          <Col></Col>
          <Col lg={2} md={3} xs={5}>
            <Button type='button' className='form-control fw-bold px-0' onClick={toggleNouveau} style={{ backgroundColor: '#03031efc' }}>
              <i className='bi bi-plus fs-5'></i> Nouveau
            </Button>
          </Col>
        </Row>
        <Accordion open={open} toggle={toggle}>
          {messages.map((message) => (
            <AccordionItem key={message.id}>
              <AccordionHeader targetId={message.id}>

                {message.expediteur === 'Bangoura Hawa' ? (
                  <Row className='d-flex w-100 justify-content-between align-items-center'>
                    <Col xs='auto'>
                      <i className="bi bi-arrow-right-circle-fill text-primary" title="Message sortant"></i>
                    </Col>
                    <Col xs={10} md={6} className='fw-bold'>{message.objet}</Col>
                    <Col xs={10} md={5} className='mt-2 mt-md-0 text-end fw-bold'>Envoyé le {message.dateDenvoie}</Col>

                  </Row>
                ) : (
                  <Row className='d-flex w-100 justify-content-between align-items-center'>
                    <Col xs="auto">
                      <i className="bi bi-arrow-left-circle-fill text-secondary" title="Message entrant"></i>
                    </Col>
                    <Col xs={10} md={6} className='fw-bold'>{message.objet}</Col>
                    <Col xs={10} md={5} className='text-end fw-bold'>Reçu le {message.dateDenvoie}</Col>

                  </Row>

                )}


              </AccordionHeader>
              <AccordionBody accordionId={message.id}>
                {message.expediteur === 'Bangoura Hawa' ? (
                  <div>
                    <div className='fw-bold'>A : <span >{message.destinateur}</span></div>
                    <div className='mt-3'>
                      {message.contenue}
                    </div>
                  </div>
                ) : (
                  <div>
                    <Row className='d-flex w-100 justify-content-between align-items-center'>
                      <div>
                        <div className='fw-bold'>De : <span >{message.destinateur}</span></div>
                        <div className='mt-3'>
                          {message.contenue}
                        </div>
                      </div>
                    </Row>
                    <hr className='bg-secondary'/>
                    <Row className='mb-2'>
                      <Col></Col>
                      <Col lg={2} md={3} xs={7}>
                        <Button type='button' className='form-control fw-bold px-0' onClick={() => openModalReponse(message)} style={{ backgroundColor: '#03031efc' }}>
                          <i className='bi bi-pen fs-5'></i> Repondre
                        </Button>
                      </Col>
                    </Row>
                  </div>


                )}
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      
            {/* Modal pour l'ajout d'un nouveau message */}
            <Modal isOpen={modalNouveau} toggle={toggleNouveau} centered={true} scrollable={true} className='fs-5' style={{ maxHeight: '80vh' }}>
                <ModalHeader toggle={toggleNouveau} className='text-center fs-4 fw-bold text-white' style={{ backgroundColor: '#03031efc' }}>Nouveau message</ModalHeader>
                <ModalBody>
                    
                    <Nouveau />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleNouveau} style={{ backgroundColor: '#03031efc' }}>Envoyer</Button>{' '}
                    <Button color="secondary" onClick={toggleNouveau}>Annuler</Button>
                </ModalFooter>
            </Modal>

            
            {/* Modal for personal details */}
            <Modal isOpen={modalReponse} toggle={toggleReponse} centered={true} scrollable={true} className='fs-5' style={{ maxHeight: '80vh' }}>
                <ModalHeader toggle={toggleReponse} className='text-center fs-4 fw-bold text-white' style={{ backgroundColor: '#03031efc' }}>Ma reponse</ModalHeader>
                <ModalBody>
                    {
                      selectedMessage && <ReponseMessage expediteur={selectedMessage.expediteur} objet={selectedMessage.objet}/>
                    }
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleReponse} style={{ backgroundColor: '#03031efc' }}>Envoyer</Button>{' '}
                    <Button color="secondary" onClick={toggleReponse}>Annuler</Button>
                </ModalFooter>
            </Modal>
    </div>
  );
}
