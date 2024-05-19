import React, { useState } from 'react';
import { Form, Row, Col, FormGroup, Card, CardBody, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { MyButton, MyLabel, MyInput, MySelect } from '../../components/Forms/Forms.jsx';
import { ajouterFormation, formations } from './dataFormation.js';
import './formation.scss';
import { Link, NavLink } from 'react-router-dom';

export default function AjoutFormation() {
  const [elements, setElements] = useState({
    titre: '',
    description: '',
    duree: '',
    prix: '',
    domaine: '',
    langue: '',
    tags: '',
    format: 'presentielle',
    niveau: 'debutant',
    prerequis: [''],
    objectifs: [''],
    criteres: [''],
  }); // État pour stocker les elements

  const clickPlus = (type) => {
    setElements(prevState => ({
      ...prevState,
      [type]: [...prevState[type], '']
    }));
  }


  const removeElement = (type, index) => {
    setElements(prevState => ({
      ...prevState,
      [type]: prevState[type].filter((item, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appel de la fonction pour ajouter une nouvelle formation avec les données saisies dans le formulaire
    ajouterFormation(elements);
    // Réinitialisation du formulaire après l'ajout de la formation
    setElements({
      titre: '',
      description: '',
      duree: '',
      prix: '',
      domaine: '',
      format: '',
      langue: '',
      tags: '',
      niveau: '',
      prerequis: [''],
      objectifs: [''],
      criteres: [''],
    });
    console.log(formations)
  };

  const handleInputChange = (name, value) => {

    setElements(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Methode pour  la mise a jour du state de  prerequis, criteres et objectifs
  const handleInput = (type, value, index) => {
    // Copiez les éléments actuels du tableau correspondant de l'état
    const updatedElements = [...elements[type]];
    // Mettez à jour l'élément spécifié par l'index avec la nouvelle valeur
    updatedElements[index] = value;
    // Mettez à jour l'état avec les nouveaux éléments du tableau correspondant
    setElements(prevState => ({
      ...prevState,
      [type]: updatedElements
    }));
  };


  return (

    <div>
      <Breadcrumb listTag="div">
        <BreadcrumbItem >
          <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Accueil</Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
          <Link to='/admin/formation/ajoutformation' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Ajout</Link>
        </BreadcrumbItem> 
      </Breadcrumb>
      <h2 className='text-center mt-2'>Ajout d'une formation</h2>


      <Form className={` bg-white ${window.innerWidth <= 576 ? ' p-1' : 'ms-4 '}`} onSubmit={handleSubmit}>

        <Row>
          <Col xl={7}>
            <FormGroup>
              <MyLabel forMyLabel="titreFormation" text='Titre' />
              <MyInput id="titreFormation" name="titre" placeholder="Entrez le titre" type="text" value={elements.titre} onChange={(value) => handleInputChange('titre', value)} />
            </FormGroup>
            <Row>
              <Col xl={6}>
                <FormGroup>
                  <MyLabel forMyLabel="dureFormation" text='Durée' />
                  <MyInput id="dureFormation" name="duree" placeholder="Entrez la durée de la formation" type="text" value={elements.duree} onChange={(value) => handleInputChange('duree', value)} />
                </FormGroup>
              </Col>
              <Col xl={6}>
                <FormGroup>
                  <MyLabel forMyLabel="prix" text='Prix' />
                  <MyInput id="prix" name="prix" placeholder="Entrez le prix de la formation" type="text" value={elements.prix} onChange={(value) => handleInputChange('prix', value)} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col xl={5}>
            <FormGroup>
              <MyLabel forMyLabel="description" text='Description' />
              <MyInput id="description" name="description" type="textarea" rows={4} value={elements.description} onChange={(value) => handleInputChange('description', value)} />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md='12' xl='4'>
            <FormGroup>
              <MyLabel forMyLabel="domaine" text='Domaine' />
              <MyInput id="domaine" name="domaine" placeholder="Entrez le domaine de la formation" type="text" value={elements.domaine} onChange={(value) => handleInputChange('domaine', value)} />
            </FormGroup>
          </Col>
          <Col md='6' xl='4'>
            <FormGroup>
              <MyLabel forMyLabel="format" text='Format' />
              <MySelect id="format" name="format" value={elements.format} onChange={(value) => handleInputChange('format', value)} options={[
                { label: 'Présentielle', value: 'presentielle' },
                { label: 'En ligne', value: 'ligne' },
                { label: 'À domicile', value: 'domicile' }
              ]} />
            </FormGroup>
          </Col>
          <Col md='6' xl='4'>
            <FormGroup>
              <MyLabel forMyLabel="niveau" text='Niveau' />
              <MySelect id="niveau" name="niveau" value={elements.niveau} onChange={(value) => handleInputChange('niveau', value)} options={[
                { label: 'Débutant', value: 'debutant' },
                { label: 'Intermédiaire', value: 'intermediaire' },
                { label: 'Supérieur', value: 'superieur' }
              ]} />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md='12' xl='4'>
            <FormGroup>
              <MyLabel forMyLabel="langue" text='Langue' />
              <MyInput id="langue" name="langue" placeholder="Entrez la langue de la formation" type="text" value={elements.langue} onChange={(value) => handleInputChange('langue', value)} />
            </FormGroup>
          </Col>

          <Col md='12' xl='8'>
            <FormGroup>
              <MyLabel forMyLabel="tags" text='Tags' />
              <MyInput id="tags" name="tags" placeholder="Entrez des mots cles qui definissent la formation" type="text" value={elements.tags} onChange={(value) => handleInputChange('tags', value)} />

            </FormGroup>
          </Col>
        </Row>


        <Row>
          <Col md='12' lg='12' xl='6'>
            {/* Objectifs */}
            <Row>
              <MyLabel forMyLabel="objectifs" text='Objectifs (Optionnel)' />
            </Row>
            <Card className='border-secondary'>
              <CardBody>
                {elements.objectifs && elements.objectifs.map((objectif, index) => (
                  <Row key={index} className='p-2'>
                    <Col xs={1}>
                      <h5>{index + 1}</h5>
                    </Col>
                    <Col xs={9}>
                      <FormGroup>
                        <MyInput id={`objectif-${index}`} name={`objectif-${index}`} placeholder="Entrez un objectif à atteindre" type="text" value={objectif} onChange={(value) => handleInput('objectifs', value, index)} />
                      </FormGroup>
                    </Col>
                    <Col xs={1}>
                      <i className='bi bi-plus fs-5  btnplus' onClick={() => clickPlus('objectifs')}></i>
                      {index > 0 && (
                        <i className='bi bi-dash fs-5  btnplus' onClick={() => removeElement('objectifs', index)}></i>
                      )}
                    </Col>
                  </Row>
                ))}
              </CardBody>
            </Card>
          </Col>
          <Col md='12' lg='12' xl='6'>
            {/* Prérequis */}
            <Row>
              <MyLabel forMyLabel="prerequis" text='Prérequis (Optionnel)' />
            </Row>
            <Card className='border-secondary'>
              <CardBody>
                {elements.prerequis && elements.prerequis.map((prerequis, index) => (
                  <Row key={index} className='p-2'>
                    <Col xs={1}>
                      <h5>{index + 1}</h5>
                    </Col>
                    <Col xs={9}>
                      <FormGroup>
                        <MyInput id={`prerequis-${index}`} name={`prerequis-${index}`} placeholder="Entrez un prérequis" type="text" value={prerequis} onChange={(value) => handleInput('prerequis', value, index)} />
                      </FormGroup>
                    </Col>
                    <Col xs={1}>
                      <i className='bi bi-plus fs-5 me-3 btnplus' onClick={() => clickPlus('prerequis')}></i>
                      {index > 0 && (
                        <i className='bi bi-dash fs-5 me-3 btnplus' onClick={() => removeElement('prerequis', index)}></i>
                      )}
                    </Col>
                  </Row>
                ))}
              </CardBody>
            </Card>
          </Col>
          {/* Colonne pour les criteres */}
          <Col md='12' lg='12' xl='6' className='mt-3'>
            {/* Critères */}
            <Row>
              <MyLabel forMyLabel="criteres" text='Critères (Optionnel)' />
            </Row>
            <Card className='border-secondary'>
              <CardBody>
                {elements.criteres && elements.criteres.map((critere, index) => (
                  <Row key={index} className='p-2'>
                    <Col xs={1}>
                      <h5>{index + 1}</h5>
                    </Col>
                    <Col xs={9}>
                      <FormGroup>
                        <MyInput id={`critere-${index}`} name={`critere-${index}`} placeholder="Entrez un critère" type="text" value={critere} onChange={(value) => handleInput('criteres', value, index)} />
                      </FormGroup>
                    </Col>
                    <Col xs={1}>
                      <i className='bi bi-plus fs-5 me-5 btnplus' onClick={() => clickPlus('criteres')}></i>
                      {index > 0 && (
                        <i className='bi bi-dash fs-5 me-5 btnplus' onClick={() => removeElement('criteres', index)}></i>
                      )}
                    </Col>
                  </Row>
                ))}
              </CardBody>
            </Card>
          </Col>

          {/* Colonne pour la photo */}
          <Col md='12' lg='12' xl='6' className='mt-3'>
            {/* Critères */}
            <Row>
              <MyLabel forMyLabel="criteres" text='Image (Optionnel)' />
            </Row>
            <Card className='border-secondary'>
              <CardBody>
                {/* <MyInputImage /> */}
              </CardBody>
            </Card>
          </Col>
          <Row className='mt-3'>
            <Col></Col>
            <Col xs={6} md={4}><button onClick={() => { }} className=' form-control text-white ' style={{ background: 'linear-gradient(to right, rgba(1, 1, 32, 0.85), rgba(22, 22, 91, 0.801))' }}> Enregistrer</button></Col>
            <Col xs={2} md={4}><button onClick={() => { }} className='form-control text-black ' style={{ outline: '1px solid blue' }}> Annuler</button></Col>
            <Col></Col>
          </Row>
        </Row>


      </Form>


    </div>
  )
}
