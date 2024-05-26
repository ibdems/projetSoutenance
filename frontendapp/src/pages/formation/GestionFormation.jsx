import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardHeader, CardTitle, CardFooter, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { getFormationById } from './dataFormation'; // Utilisez la fonction pour récupérer la formation par ID
import { Link, useParams } from 'react-router-dom';
import ListSession from './ListSession'
import { AjoutSession } from './AjoutSession'

export default function GestionFormation() {
  const { formationId } = useParams();
  const [formation, setFormation] = useState(null);
  const [affichage, setAffichage] = useState('');

  useEffect(() => {
    // Convertissez l'ID de la chaîne en nombre
    const id = parseInt(formationId, 10);
    // Utilisez la fonction pour récupérer la formation par ID
    const selectedFormation = getFormationById(id);
    setFormation(selectedFormation);
  }, [formationId]); // Exécuter l'effet uniquement lorsque formationId change

  // Si la formation n'est pas trouvée, affichez un message approprié
  if (!formation) {
    return <div>Formation introuvable</div>;
  }

  const displaySessions = () => {
    setAffichage('displaySession')
  }

  const displayAdd = () => {
    setAffichage('displayAdd')
  }
  var col2 = ''
  if (affichage === 'displaySession') {
    col2 = <ListSession />
  } else if (affichage === 'displayAdd') {
    col2 = <AjoutSession />
  }

  // Si la formation est trouvée, affichez les détails de la formation
  return (
    <div>
      <Breadcrumb listTag="div">
        <BreadcrumbItem >
          <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Accueil</Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
          <Link to='/admin/formation/list' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Liste</Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
          <span className='fs-5 fw-bold text-black'>Gestion</span>
        </BreadcrumbItem>
      </Breadcrumb>
      <h3 className='text-center fs-bold'>Gestion de la formation</h3>
      <Row className='m-lg-2 m-sm-0 mt-1 bg-white'>
        <Col md={11} lg={6}>
          <Card >
            
            <CardTitle className='text-center fs-4 fw-bold'>Information sur la formation</CardTitle>

            <CardBody className='' style={{ overflowY: 'auto', maxHeight: '390px' }}>
              {/* Affichez les détails de la formation */}
              <h3 className='titre'>{formation.titre}</h3>
              <div className=''> {formation.description}</div>
              <div > <span className=' fw-bold'>- Durée :</span> {formation.duree}</div>
              <div > <span className=' fw-bold'>- Prix :</span> {formation.prix}</div>
              <div > <span className=' fw-bold'>- Niveau :</span> {formation.niveau}</div>
              <div > <span className=' fw-bold'>- Langue :</span> {formation.langue}</div>
              <div > <span className=' fw-bold'>- Domaine :</span> {formation.domaine}</div>
              <Row className=' styleCol'>
                <Col xs={12}>
                  <Row>
                    <Col><span className=' fw-bold'>- Les Prerequis :</span></Col>
                    <Col xs={2}><i className='bi bi-plus iconePlus' onClick={null}></i></Col>
                  </Row>
                </Col>
                {
                  formation.prerequis.map(domaine => (
                    <Col key={domaine.id}>
                      <Row>
                        <Col><li className='ms-2'><span className='liText text-justify'>{domaine.libelle}</span></li></Col>
                        <Col xs={3} lg={3} className='text-end'>
                          <i className='bi bi-pen  fw-bold' title='modifier' onClick={null}></i>
                          <i className='bi bi-trash  fw-bold ms-2 text-danger' title='Supprimer'></i>
                        </Col>
                      </Row>
                    </Col>
                  ))
                }
              </Row>
              
              
              <Row className=' styleCol mt-1'>
                <Col xs={12}>
                  <Row>
                    <Col><span className=' fw-bold'>- Les Critères :</span></Col>
                    <Col xs={2}><i className='bi bi-plus iconePlus' onClick={null}></i></Col>
                  </Row>
                </Col>
                {
                  formation.criteres.map(domaine => (
                    <Col key={domaine.id}>
                      <Row>
                        <Col><li className='ms-2'><span className='liText text-justify'>{domaine.libelle}</span></li></Col>
                        <Col xs={3} lg={3} className='text-end'>
                          <i className='bi bi-pen  fw-bold' title='modifier' onClick={null}></i>
                          <i className='bi bi-trash  fw-bold ms-2 text-danger' title='Supprimer'></i>
                        </Col>
                      </Row>
                    </Col>
                  ))
                }
              </Row>

              <Row className=' styleCol mt-1'>
                <Col xs={12}>
                  <Row>
                    <Col><span className=' fw-bold'>- Les Objectifs :</span></Col>
                    <Col xs={2}><i className='bi bi-plus iconePlus' onClick={null}></i></Col>
                  </Row>
                </Col>
                {
                  formation.objectifs.map(domaine => (
                    <Col key={domaine.id}>
                      <Row>
                        <Col><li className='ms-2'><span className='liText text-justify'>{domaine.libelle}</span></li></Col>
                        <Col xs={3} lg={3} className='text-end'>
                          <i className='bi bi-pen  fw-bold' title='modifier' onClick={null}></i>
                          <i className='bi bi-trash  fw-bold ms-2 text-danger' title='Supprimer'></i>
                        </Col>
                      </Row>
                    </Col>
                  ))
                }
              </Row>
              
            </CardBody>
            <CardFooter>
              <Row className='mt-1'>
                <Col lg={6} md={6} className='mb-2'>
                  <button onClick={displayAdd} type='button' className='form-control btnGestionFormations'> <i class="bi bi-plus-square-fill  fw-bold text-white align-right m-1"></i> <span className='fs-5 fw-600 text-white'>Créer une session</span> </button>
                </Col>
                <Col lg={6} md={6} className='mb-2'>
                  <button onClick={displaySessions} type='button' className='form-control btnGestionFormations'> <i class="bi bi-eye-fill fs-5 fw-bold text-white align-right m-1"></i> <span className='fs-5 fw-600 text-white'>Voir les sessions</span> </button>
                </Col>
                <Col lg={6} md={6} className='mb-2 mb-md-0'>
                  <button type='button' className='form-control btnGestionFormations'> <i class="bi bi-pencil-square fs-5 fw-bold text-white align-right m-1"></i> <span className='fs-5 fw-600 text-white'>Modifier</span> </button>
                </Col>
                <Col lg={6} md={6} className='mb-2 mb-md-0'>
                  <button type='button' className='form-control btnGestionFormations'> <i class="bi bi-trash3-fill fs-5 fw-bold text-white align-right m-1"></i> <span className='fs-5 fw-600 text-white'>Supprimer</span> </button>
                </Col>

              </Row>
            </CardFooter>
          </Card>
        </Col>
        <Col md={11} lg={6}>
          <Card className='p-2' style={{ overflowY: 'auto', maxHeight: '550px'}}>
            {col2}
          </Card>

        </Col>
      </Row>
    </div>
  );
}
