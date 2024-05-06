import React, { useState } from 'react'
import { Form, Row, Col, FormGroup, Label, Input, CardHeader } from 'reactstrap'
import { MyInput, MyButton, MyLabel } from '../../components/Forms/Forms'


export function AjoutSession({clickAnnuler, clickValider}) {
    const [sessions, setSessions] = useState({
        dateDebut: '',
        dateFin: '',
        heureDebut: '',
        heureFin: '',
        lieu: '',
        nombrePlace: '',
        joursSemaine: {
            lundi: false,
            mardi: false,
            mercredi: false,
            jeudi: false,
            vendredi: false,
            samedi: false,
            dimanche: false
        }
    })

    const handleInputChange = (name, value) => {
        setSessions(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleDayChange = (day) => {
        setSessions(prevState => ({
            ...prevState,
            joursSemaine: {
                ...prevState.joursSemaine,
                [day]: !prevState.joursSemaine[day]
            }
        }));
    }
    return (
        <Form>
            <Row>
                <CardHeader className='text-center fs-4 fw-bold mb-4'>
                    Crée une session de formation
                </CardHeader>
                <Col lg={6} xs={12} md={6}>
                    <FormGroup>
                        <Row><MyLabel forLabel='dateDebut' text='Date du début' /></Row>

                        <MyInput id='dateDebut' name='dateDebut' placeholder='La date du début de la session' type='date' value={sessions.dateDebut} onChange={(value) => handleInputChange('dateDebut', value)} />
                    </FormGroup>
                </Col>
                <Col lg={6} xs={12} md={6}>
                    <FormGroup>
                        <Row><MyLabel forLabel='dateFin' text='Date de fin' /></Row>

                        <MyInput id='dateFin' name='dateFin' placeholder='La date de fin de la session' type='date' value={sessions.dateFin} onChange={(value) => handleInputChange('dateFin', value)} />
                    </FormGroup>
                </Col>
                <Col lg={6} xs={12} md={6}>
                    <FormGroup>
                        <Row><MyLabel forLabel='heureDebut' text='Heure du début' /></Row>

                        <MyInput id='heureDebut' name='heureDebut' placeholder="L'heure du début de la session" type='time' value={sessions.heureDebut} onChange={(value) => handleInputChange('heureDebut', value)} />
                    </FormGroup>
                </Col>
                <Col lg={6} xs={12} md={6}>
                    <FormGroup>
                        <Row><MyLabel forLabel='heureFin' text='Heure de Fin' /></Row>

                        <MyInput id='heureFin' name='heureFin' placeholder="L'heure de fin de la session" type='time' value={sessions.heureFin} onChange={(value) => handleInputChange('heureFin', value)} />
                    </FormGroup>
                </Col>
                <Col lg={6} xs={12} md={6}>
                    <FormGroup>
                        <Row><MyLabel forLabel='lieu' text='Lieu' /></Row>

                        <MyInput id='lieu' name='lieu' placeholder='Le lieu du deroulement de la session' type='text' value={sessions.lieu} onChange={(value) => handleInputChange('lieu', value)} />
                    </FormGroup>
                </Col>
                <Col lg={6} xs={12} md={6}>
                    <FormGroup>
                        <Row><MyLabel forLabel='nombrePlace' text='Nombre de Place' /></Row>
                        <MyInput id='nombrePlace' name='nombrePlace' placeholder='Nombre de place' type='number' value={sessions.nombrePlace} onChange={(value) => handleInputChange('nombrePlace', value)} />
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup tag="fieldset">
                        <Row><MyLabel text='Jours de la session'/></Row>
                        
                        <Row>
                            {Object.keys(sessions.joursSemaine).map(day => (
                                <Col key={day} xl={2} md={2} lg={2} xs={4}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input className='border-secondary' type="checkbox" checked={sessions.joursSemaine[day]} onChange={() => handleDayChange(day)} />{' '}
                                            {day.charAt(0).toUpperCase() + day.slice(1)}
                                        </Label>
                                    </FormGroup>
                                </Col>
                            ))}
                        </Row>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <button type='submit' className='form-control btnGestionFormations'><span className='fs-5 fw-600 text-white'>Enregistrer</span> </button>
                </Col>
                <Col>
                <button type='button' className='form-control bg-secondary'><span className='fs-5 fw-600 text-white'>Annuler</span> </button>
                </Col>
                <Col></Col>
            </Row>
        </Form>
    )
}
