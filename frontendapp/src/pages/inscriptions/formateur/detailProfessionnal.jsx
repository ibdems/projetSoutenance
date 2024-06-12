import React from 'react';
import { Formik, FieldArray, Form } from 'formik';
import { Card, CardBody, Col, FormGroup, Row, Button } from 'reactstrap';
import * as Yup from 'yup';
import { MyInput, MyLabel } from '../../../components/Forms/Forms';

// Validation Schema
const validationSchema = Yup.object().shape({
  competances: Yup.array().of(Yup.string().required('Champ obligatoire')),
  domaineExpertises: Yup.array().of(Yup.string().required('Champ obligatoire')),
  certifications: Yup.array().of(
    Yup.object().shape({
      libelle: Yup.string().required('Champ obligatoire'),
      file: Yup.mixed().required('Fichier obligatoire')
    })
  )
});

export default function DetailProfessionnel() {
  return (
    <Formik
      initialValues={{
        competances: [''],
        domaineExpertises: [''],
        certifications: [{ libelle: '', file: null }]
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <Row>
            <Col md='12' lg='12' xl='6'>
              <Row>
                <MyLabel forMyLabel="competances" text='Compétences' />
              </Row>
              <Card className='border-secondary'>
                <CardBody>
                  <FieldArray name="competances">
                    {({ remove, push }) => (
                      <>
                        {values.competances.map((competance, index) => (
                          <Row key={index} className='p-2'>
                            <Col xs={1}>
                              <h5>{index + 1}</h5>
                            </Col>
                            <Col xs={9}>
                              <FormGroup>
                                <MyInput
                                  id={`competance-${index}`}
                                  name={`competances`}
                                  placeholder="Ex: Maîtrise de la langue Anglaise"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col xs={1}>
                              <i className='bi bi-plus fs-5 me-3 btnplus' onClick={() => push('')}></i>
                              {index > 0 && (
                                <i className='bi bi-dash fs-5 me-3 btnplus' onClick={() => remove(index)}></i>
                              )}
                            </Col>
                          </Row>
                        ))}
                      </>
                    )}
                  </FieldArray>
                </CardBody>
              </Card>
            </Col>
            <Col md='12' lg='12' xl='6'>
              <Row>
                <MyLabel forMyLabel="domaineExpertises" text="Domaines d'expertise" />
              </Row>
              <Card className='border-secondary'>
                <CardBody>
                  <FieldArray name="domaineExpertises">
                    {({ remove, push }) => (
                      <>
                        {values.domaineExpertises.map((domaineExpertise, index) => (
                          <Row key={index} className='p-2'>
                            <Col xs={1}>
                              <h5>{index + 1}</h5>
                            </Col>
                            <Col xs={9}>
                              <FormGroup>
                                <MyInput
                                  id={`domaineExpertise-${index}`}
                                  name={`domaineExpertises[${index}]`}
                                  placeholder="Ex: Développement mobile"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col xs={1}>
                              <i className='bi bi-plus fs-5 me-5 btnplus' onClick={() => push('')}></i>
                              {index > 0 && (
                                <i className='bi bi-dash fs-5 me-5 btnplus' onClick={() => remove(index)}></i>
                              )}
                            </Col>
                          </Row>
                        ))}
                      </>
                    )}
                  </FieldArray>
                </CardBody>
              </Card>
            </Col>
            <Col md='12' lg='12' xl='12' className='mt-2'>
              <Row>
                <MyLabel forMyLabel="certifications" text='Certifications' />
              </Row>
              <Card className='border-secondary'>
                <CardBody>
                  <FieldArray name="certifications">
                    {({ remove, push }) => (
                      <>
                        {values.certifications.map((certification, index) => (
                          <Row key={index} className='p-2'>
                            <Col xs={1}>
                              <h5>{index + 1}</h5>
                            </Col>
                            <Col xs={12} md={6}>
                              <FormGroup>
                                <Row>
                                  <MyLabel forMyLabel={`certification-libelle-${index}`} text='Libellé' />
                                </Row>
                                <MyInput
                                  id={`certification-libelle-${index}`}
                                  name={`certifications[${index}].libelle`}
                                  placeholder="Ex: Diplôme en Ingénierie Logiciel"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col xs={12} md={4}>
                              <FormGroup>
                                <Row>
                                  <MyLabel forMyLabel={`certification-file-${index}`} text='Fichier' />
                                </Row>
                                <MyInput
                                  id={`certification-file-${index}`}
                                  name={`certifications[${index}].file`}
                                  type="file"
                                 
                                  
                                />
                              </FormGroup>
                            </Col>
                            <Col xs={1}>
                              <i className='bi bi-plus fs-5 btnplus' onClick={() => push({ libelle: '', file: null })}></i>
                              {index > 0 && (
                                <i className='bi bi-dash fs-5 btnplus' onClick={() => remove(index)}></i>
                              )}
                            </Col>
                          </Row>
                        ))}
                      </>
                    )}
                  </FieldArray>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
