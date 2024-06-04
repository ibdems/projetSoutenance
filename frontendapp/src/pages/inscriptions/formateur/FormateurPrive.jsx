import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { Button, Row, Col, Card, CardBody, FormGroup } from 'reactstrap';
import { MyInput, MyLabel, MySelect } from '../../../components/Forms/Forms';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    matiere: Yup.array().of(Yup.string()),
    tempsDisponibilite: Yup.array().of(
        Yup.object().shape({
            jours: Yup.string(),
            heureDebut: Yup.string(),
            heureFin: Yup.string()
        })
    ),
    classe: Yup.array().of(Yup.string()),
});

export default function FormateurPrive() {
    const initialValues = {
        matiere: [''],
        tempsDisponibilite: [{ jours: '', heureDebut: '', heureFin: '' }],
        classe: [''],
    };

    const onSubmit = (values, { resetForm }) => {
        // Soumettre les valeurs au composant parent
        console.log(values);
        // Réinitialiser le formulaire après la soumission
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values }) => (
                <Form>
                    <Row>
                        <Col md='12' lg='12' xl='6'>
                            <Row>
                                <MyLabel forMyLabel="matiere" text='Vos matières à dispenser' />
                            </Row>
                            <Card className='border-secondary'>
                                <CardBody>
                                    <FieldArray name="matiere">
                                        {({ insert, remove, push }) => (
                                            <>
                                                {values.matiere.map((matiere, index) => (
                                                    <Row key={index} className='p-2'>
                                                        <Col xs={1}>
                                                            <h5>{index + 1}</h5>
                                                        </Col>
                                                        <Col xs={9}>
                                                            <FormGroup>
                                                                <MyInput
                                                                    name={`matiere.${index}`}
                                                                    placeholder="Ex: Anglais"
                                                                    type="text"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col xs={1}>
                                                            {index > 0 && (
                                                                <i className='bi bi-dash fs-5 me-3 btnplus' onClick={() => remove(index)}></i>
                                                            )}
                                                        </Col>
                                                    </Row>
                                                ))}
                                                <Button type="button" color="primary" onClick={() => push('')}>Ajouter</Button>
                                            </>
                                        )}
                                    </FieldArray>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* Colonne pour les classes */}
                        <Col md='12' lg='12' xl='6'>
                            <Row>
                                <MyLabel forMyLabel="classe" text="Les différentes classes" />
                            </Row>
                            <Card className='border-secondary'>
                                <CardBody>
                                    <FieldArray name="classe">
                                        {({ insert, remove, push }) => (
                                            <>
                                                {values.classe.map((classe, index) => (
                                                    <Row key={index} className='p-2'>
                                                        <Col xs={1}>
                                                            <h5>{index + 1}</h5>
                                                        </Col>
                                                        <Col xs={9}>
                                                            <FormGroup>
                                                                <MyInput
                                                                    name={`classe.${index}`}
                                                                    placeholder="Ex: Terminal"
                                                                    type="text"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col xs={1}>
                                                            {index > 0 && (
                                                                <i className='bi bi-dash fs-5 me-3 btnplus' onClick={() => remove(index)}></i>
                                                            )}
                                                        </Col>
                                                    </Row>
                                                ))}
                                                <Button type="button" color="primary" onClick={() => push('')}>Ajouter</Button>
                                            </>
                                        )}
                                    </FieldArray>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md='12' lg='12' xl='12' className='mt-2'>
                            <Row>
                                <MyLabel forMyLabel="tempsDisponibilite" text='Temps de disponibilité' />
                            </Row>
                            <Card className='border-secondary'>
                                <CardBody>
                                    <FieldArray name="tempsDisponibilite">
                                        {({ insert, remove, push }) => (
                                            <>
                                                {values.tempsDisponibilite.map((temps, index) => (
                                                    <Row key={index} className='p-2'>
                                                        <Col xs={1}>
                                                            <h5>{index + 1}</h5>
                                                        </Col>
                                                        <Col xs={12} md={4}>
                                                            <FormGroup>
                                                                <MyLabel forMyLabel="jours" text='Jours' />
                                                                <MySelect
                                                                    name={`tempsDisponibilite.${index}.jours`}
                                                                    options={[
                                                                        { label: 'Lundi', value: 'lundi' },
                                                                        { label: 'Mardi', value: 'mardi' },
                                                                        { label: 'Mercredi', value: 'mercredi' },
                                                                        { label: 'Jeudi', value: 'jeudi' },
                                                                        { label: 'Vendredi', value: 'vendredi' },
                                                                        { label: 'Samedi', value: 'samedi' },
                                                                        { label: 'Dimanche', value: 'dimanche' },
                                                                        { label: 'Tous les jours', value: 'tout' }
                                                                    ]}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col xs={12} md={3}>
                                                            <FormGroup>
                                                                <Row><MyLabel forLabel='heureDebut' text='Heure du début' /></Row>
                                                                <MyInput
                                                                    name={`tempsDisponibilite.${index}.heureDebut`}
                                                                    placeholder="L'heure du début"
                                                                    type='time'
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col xs={12} md={3}>
                                                            <FormGroup>
                                                                <Row><MyLabel forLabel='heureFin' text='Heure de fin' /></Row>
                                                                <MyInput
                                                                    name={`tempsDisponibilite.${index}.heureFin`}
                                                                    placeholder="L'heure de fin de la session"
                                                                    type='time'
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col xs={1}>
                                                            {index > 0 && (
                                                                <i className='bi bi-dash fs-5 btnplus' onClick={() => remove(index)}></i>
                                                            )}
                                                        </Col>
                                                    </Row>
                                                ))}
                                                <Button type="button" color="primary" onClick={() => push({ jours: '', heureDebut: '', heureFin: '' })}>Ajouter</Button>
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
