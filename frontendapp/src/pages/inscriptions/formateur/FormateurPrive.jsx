import React, { useState } from 'react'
import { Card, CardBody, Col, FormGroup, Row } from 'reactstrap'
import { MyInput, MyLabel, MySelect } from '../../../components/Forms/Forms'

export default function FormateurPrive() {
    const [elements, setElements] = useState({
        matiere: [''],
        tempsDisponibilite: [''],
        classe: [''],
        jours: '',
        heureDebut: '',
        heureFin: ''
    });

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
    const handleInputChange = (name, value) => {

        setElements(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

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
            <Row>
                <Col md='12' lg='12' xl='6'>
                    {/* Prérequis */}
                    <Row>
                        <MyLabel forMyLabel="matiere" text='Vos matières à dispenser' />
                    </Row>
                    <Card className='border-secondary'>
                        <CardBody>
                            {elements.matiere && elements.matiere.map((matiere, index) => (
                                <Row key={index} className='p-2'>
                                    <Col xs={1}>
                                        <h5>{index + 1}</h5>
                                    </Col>
                                    <Col xs={9}>
                                        <FormGroup>
                                            <MyInput id={`matiere-${index}`} name={`matiere-${index}`} placeholder="Ex: Anglais" type="text" value={matiere} onChange={(value) => handleInput('matiere', value, index)} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={1}>
                                        <i className='bi bi-plus fs-5 me-3 btnplus' onClick={() => clickPlus('matiere')}></i>
                                        {index > 0 && (
                                            <i className='bi bi-dash fs-5 me-3 btnplus' onClick={() => removeElement('matiere', index)}></i>
                                        )}
                                    </Col>
                                </Row>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                {/* Colonne pour les classe */}
                <Col md='12' lg='12' xl='6'>
                    {/* Critères */}
                    <Row>
                        <MyLabel forMyLabel="classe" text="Les differentes classes" />
                    </Row>
                    <Card className='border-secondary'>
                        <CardBody>
                            {elements.classe && elements.classe.map((critere, index) => (
                                <Row key={index} className='p-2'>
                                    <Col xs={1}>
                                        <h5>{index + 1}</h5>
                                    </Col>
                                    <Col xs={9}>
                                        <FormGroup>
                                            <MyInput id={`critere-${index}`} name={`critere-${index}`} placeholder="Ex: Terminal" type="text" value={critere} onChange={(value) => handleInput('classe', value, index)} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={1}>
                                        <i className='bi bi-plus fs-5 me-5 btnplus' onClick={() => clickPlus('classe')}></i>
                                        {index > 0 && (
                                            <i className='bi bi-dash fs-5 me-5 btnplus' onClick={() => removeElement('classe', index)}></i>
                                        )}
                                    </Col>
                                </Row>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col md='12' lg='12' xl='12' className='mt-2'>
                    {/* tempsDisponibilite */}
                    <Row>
                        <MyLabel forMyLabel="tempsDisponibilite" text='Temps de disponibilité' />
                    </Row>
                    <Card className='border-secondary'>
                        <CardBody>
                            {elements.tempsDisponibilite && elements.tempsDisponibilite.map((tempsDisponibilite, index) => (
                                <Row key={index} className='p-2'>
                                    <Col xs={1}>
                                        <h5>{index + 1}</h5>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <FormGroup>
                                            <MyLabel forMyLabel="jours" text='Jours' />
                                            <MySelect id="jours" name="jours" value={elements.jours} onChange={(value) => handleInputChange('jours', value)} options={[
                                                { label: 'Lundi', value: 'lundi' },
                                                { label: 'Mardi', value: 'mardi' },
                                                { label: 'Mercredi', value: 'mercredi' },
                                                { label: 'Jeudi', value: 'jeudi' },
                                                { label: 'Vendredi', value: 'vendredi' },
                                                { label: 'Samedi', value: 'samedi' },
                                                { label: 'Dimanche', value: 'dimanche' },
                                                { label: 'Tout les jours', value: 'tout' }
                                            ]} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <FormGroup>
                                            <Row><MyLabel forLabel='heureDebut' text='Heure du début' /></Row>

                                            <MyInput id='heureDebut' name='heureDebut' placeholder="L'heure du début" type='time' value={elements.heureDebut} onChange={(value) => handleInputChange('heureDebut', value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <FormGroup>
                                            <Row><MyLabel forLabel='heureFin' text='Heure de Fin' /></Row>

                                            <MyInput id='heureFin' name='heureFin' placeholder="L'heure de fin de la session" type='time' value={elements.heureFin} onChange={(value) => handleInputChange('heureFin', value)} />
                                        </FormGroup>
                                    </Col>
                                  
                                    <Col xs={1}>
                                        <i className='bi bi-plus fs-5  btnplus' onClick={() => clickPlus('tempsDisponibilite')}></i>
                                        {index > 0 && (
                                            <i className='bi bi-dash fs-5  btnplus' onClick={() => removeElement('tempsDisponibilite', index)}></i>
                                        )}
                                    </Col>
                                </Row>
                            ))}
                        </CardBody>
                    </Card>
                </Col>



            </Row>
        </div>
    )
}
