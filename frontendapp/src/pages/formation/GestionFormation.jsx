import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardHeader, CardTitle, CardFooter } from 'reactstrap';
import { getFormationById } from './dataFormation'; // Utilisez la fonction pour récupérer la formation par ID
import { useParams } from 'react-router-dom';
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
      <h3>Gestion de la formation</h3>
      <Row className='m-lg-2 m-sm-0 mt-5 bg-white'>
        <Col md={11} lg={6}>
          <Card>
            <CardHeader>
              <CardTitle className='text-center fs-4 fw-bold'>Information de la formation</CardTitle>
            </CardHeader>
            <CardBody className='contenueFormation'>
              {/* Affichez les détails de la formation */}
              <h3 className='titre'>{formation.titre}</h3>
              <div className=' mt-3'> {formation.description}</div>
              <div > <span className=' fw-bold'>- Durée :</span> {formation.duree}</div>
              <div > <span className=' fw-bold'>- Prix :</span> {formation.prix}</div>
              <div > <span className=' fw-bold'>- Niveau :</span> {formation.niveau}</div>
              <div > <span className=' fw-bold'>- Langue :</span> {formation.langue}</div>
              <div > <span className=' fw-bold'>- Domaine :</span> {formation.domaine}</div>
              <div > <span className=' fw-bold'>- Les Prerequis :</span>
                <ul>
                  {formation.prerequis.map(prerequis => (
                    <li key={prerequis.id}>{prerequis.libelle}</li>
                  ))}
                </ul>
              </div>
              {formation.criteres !== '' && <div > <span className=' fw-bold'>- Les Critères :</span>
                <ul>
                  {formation.criteres.map(critere => (
                    <li key={critere.id}>{critere.libelle}</li>
                  ))}
                </ul>
              </div>}
              <div > <span className=' fw-bold'>- Les Objectifs :</span>
                <ul>
                  {formation.objectifs.map(objectifs => (
                    <li key={objectifs.id}>{objectifs.libelle}</li>
                  ))}
                </ul>
              </div>
            </CardBody>
            <CardFooter>
              <Row className='mt-1'>
                <Col lg={6} md={6} className='mb-2'>
                  <button onClick={displayAdd} type='button' className='form-control btnGestionFormations'> <i class="bi bi-plus-square-fill  fw-bold text-white align-right m-1"></i> <span className='fs-5 fw-600 text-white'>Créer une session</span> </button>
                </Col>
                <Col lg={6} md={6} className='mb-2'>
                  <button onClick={displaySessions} type='button' className='form-control btnGestionFormations'> <i class="bi bi-eye-fill fs-5 fw-bold text-white align-right m-1"></i> <span className='fs-5 fw-600 text-white'>Voir les sessions</span> </button>
                </Col>
                <Col lg={6} md={6} className='mb-2'>
                  <button type='button' className='form-control btnGestionFormations'> <i class="bi bi-pencil-square fs-5 fw-bold text-white align-right m-1"></i> <span className='fs-5 fw-600 text-white'>Modifier</span> </button>
                </Col>
                <Col lg={6} md={6} className='mb-2'>
                  <button type='button' className='form-control btnGestionFormations'> <i class="bi bi-trash3-fill fs-5 fw-bold text-white align-right m-1"></i> <span className='fs-5 fw-600 text-white'>Supprimer</span> </button>
                </Col>

              </Row>
            </CardFooter>
          </Card>
        </Col>
        <Col md={11} lg={6}>
          <Card className='p-2'>
            {col2}
          </Card>
          
        </Col>
      </Row>
    </div>
  );
}
