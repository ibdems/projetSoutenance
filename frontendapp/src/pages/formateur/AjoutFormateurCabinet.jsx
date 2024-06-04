import React, { useRef, useState } from "react";
import { Formik, Form, Field, FieldArray } from 'formik';
import * as yup from 'yup';
import { Breadcrumb, BreadcrumbItem, Button, Card, Col, FormGroup, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { MyButton, MyInput, MyLabel, MySelect } from "../../components/Forms/Forms";
import DetailProfessionnel from "../inscriptions/formateur/detailProfessionnal";

const validationSchemaEtape1 = yup.object().shape({
  nomComplet: yup.string().required('Nom complet est requis').min(5, 'Trop court').max(30, 'Trop long').nonNullable(),
  telephone: yup.string().required('Numéro de téléphone est requis'),
  adresse: yup.string().required('Adresse est requise'),
  profession: yup.string().required('Profession est requise'),
  linkedin: yup.string().required('LinkedIn est requis'),
  email: yup.string().email('Email invalide').required('Email est requis'),
  niveauEtude: yup.string().required('Niveau d\'étude est requis'),
});

const validationSchemaEtape2 = yup.object().shape({
  competances: yup.array().of(yup.string().required('Champ obligatoire')),
  domaineExpertises: yup.array().of(yup.string().required('Champ obligatoire')),
  certifications: yup.array().of(
    yup.object().shape({
      libelle: yup.string().required('Champ obligatoire'),
      file: yup.mixed().when('libelle', {
        is: libelle => libelle && libelle.length > 0,
        then: yup.mixed().required('Fichier obligatoire')
      })
    })
  )
});

function AjoutFormateurCabinet() {
  const [image, setImage] = useState('');
  const inputRef = useRef(null);
  const [etape, setEtape] = useState(1);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const etapeSuivante = (isValid) => {
    if (isValid) {
      setEtape(prevState => prevState + 1);
    }
  };

  const etapePrecedent = () => {
    setEtape(prevState => prevState - 1);
  };

  return (
    <div>
      <Breadcrumb listTag="div" className="">
        <BreadcrumbItem>
          <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Accueil</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Ajout</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Row className="ps-1">
        <Col xs={10} lg={4} className="ms-2 text-white text-center fs-3" style={{ backgroundColor: '#03031efc' }}>
          Ajout d'un formateur
        </Col>
        <Col></Col>
      </Row>
      <Card style={{ border: '3px  solid #03031efc', borderRadius: '0' }} className="p-3">
        <Formik
          initialValues={{
            nomComplet: '',
            telephone: '',
            adresse: '',
            profession: '',
            linkedin: '',
            email: '',
            niveauEtude: '',
            competances: [''],
            domaineExpertises: [''],
            certifications: [{ libelle: '', file: null }]
          }}
          validationSchema={etape === 1 ? validationSchemaEtape1 : validationSchemaEtape2}
          onSubmit={values => {
            if (etape === 1) {
              etapeSuivante(true);
            } else {
              console.log(values);
            }
          }}
        >
          {({ handleSubmit, errors, isValid }) => (
            <Form onSubmit={handleSubmit}>
              {etape === 1 && (
                <div>
                  <h4 className="text-center mb-1">Etape 1/2: Informations personnelles</h4>
                  <Row>
                    <Col xs={12} lg={4} className="d-flex flex-column justify-content-center align-items-center">
                      <div>
                        {image ? (
                          <img src={URL.createObjectURL(image)} alt="" height={200} width={200} style={{ border: '1px solid black', borderRadius: '50%' }} />
                        ) : (
                          <img src='' alt="" height={200} width={200} style={{ border: '1px solid black', borderRadius: '50%' }} />
                        )}
                      </div>
                      <div>
                        <input type="file" ref={inputRef} className='d-none' onChange={handleImageChange} />
                        <button type='button' onClick={handleImageClick} className='mt-3 form-control bg-warning text-black fs-3 py-2 px-4 fw-bold'> Photo</button>
                      </div>
                    </Col>
                    <Col>
                      <Row>
                        <Col xs={12}>
                          <FormGroup>
                            <Row>
                              <MyLabel text='Nom Complet' forLabel='nomComplet' />
                            </Row>
                            <MyInput type='text' name='nomComplet' placeholder='Ex: Alpha Amadou Diallo' />
                          </FormGroup>
                        </Col>
                        <Col lg={6}>
                          <FormGroup>
                            <Row>
                              <MyLabel text='Téléphone' forLabel='telephone' />
                            </Row>
                            <MyInput type='text' name='telephone' placeholder='Ex: 600000000' />
                          </FormGroup>
                        </Col>
                        <Col lg={6}>
                          <FormGroup>
                            <Row>
                              <MyLabel text='Adresse' forLabel='adresse' />
                            </Row>
                            <MyInput type='text' name='adresse' placeholder='Ex: Wanindara' />
                          </FormGroup>
                        </Col>
                        <Col lg={6}>
                          <FormGroup>
                            <Row>
                              <MyLabel text='Profession' forLabel='profession' />
                            </Row>
                            <MyInput type='text' name='profession' placeholder='Ex: Enseignant' />
                          </FormGroup>
                        </Col>
                        <Col lg={6}>
                          <FormGroup>
                            <Row>
                              <MyLabel text='LinkedIn' forLabel='linkedin' />
                            </Row>
                            <MyInput type='text' name='linkedin' placeholder='Ex: ibrahimaDiallo' />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Row>
                          <MyLabel text='Email' forLabel='email' />
                        </Row>
                        <MyInput type='email' name='email' placeholder='Ex: ibrahima9999@gmail.com' />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Row>
                          <MyLabel text="Niveau d'étude le plus élevé" forLabel='niveauEtude' />
                        </Row>
                        <MyInput type='text' name='niveauEtude' placeholder='Ex: Bac+4' />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              )}
              {etape === 2 && (
                <div>
                  <h4 className="text-center mb-2">Etape 2/2: Informations professionnelles</h4>
                  <DetailProfessionnel />
                </div>
              )}
              <Row className={etape === 1 ? 'mt-1' : 'mt-4'}>
                <Col></Col>
                <Col lg={2}>
                  {etape === 2 && <Button className='form-control bg-warning text-black fw-bold' type="button" onClick={etapePrecedent}>Précédent</Button>}
                </Col>
                <Col lg={2}>
                  {etape === 1 && <Button type="button" className='form-control bg-warning text-black fw-bold' onClick={() => etapeSuivante(isValid)}>Suivant</Button>}
                  {etape === 2 && <Button type='submit' className='form-control fw-bold' style={{ backgroundColor: '#03031efc' }}>Valider</Button>}
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default AjoutFormateurCabinet;
