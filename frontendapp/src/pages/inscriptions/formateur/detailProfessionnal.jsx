import React, { useState } from 'react'
import { Card, CardBody, Col, FormGroup, Row } from 'reactstrap'
import { MyInput, MyLabel } from '../../../components/Forms/Forms'

export default function DetailProfessionnel() {
    const [elements, setElements] = useState({
        competances: [''],
        certifications: [''],
        domaineExpertises: [''],
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
                    {/* certifications */}
                    <Row>
                        <MyLabel forMyLabel="certifications" text='Certifications' />
                    </Row>
                    <Card className='border-secondary'>
                        <CardBody>
                            {elements.certifications && elements.certifications.map((objectif, index) => (
                                <Row key={index} className='p-2'>
                                    <Col xs={1}>
                                        <h5>{index + 1}</h5>
                                    </Col>
                                    <Col xs={9}>
                                        <FormGroup>
                                            <MyInput id={`objectif-${index}`} name={`objectif-${index}`} placeholder="Entrez un objectif à atteindre" type="file" accepted={'pdf'} value={objectif} onChange={(value) => handleInput('certifications', value, index)} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={1}>
                                        <i className='bi bi-plus fs-5  btnplus' onClick={() => clickPlus('certifications')}></i>
                                        {index > 0 && (
                                            <i className='bi bi-dash fs-5  btnplus' onClick={() => removeElement('certifications', index)}></i>
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
                        <MyLabel forMyLabel="competances" text='Competances' />
                    </Row>
                    <Card className='border-secondary'>
                        <CardBody>
                            {elements.competances && elements.competances.map((competances, index) => (
                                <Row key={index} className='p-2'>
                                    <Col xs={1}>
                                        <h5>{index + 1}</h5>
                                    </Col>
                                    <Col xs={9}>
                                        <FormGroup>
                                            <MyInput id={`competances-${index}`} name={`competances-${index}`} placeholder="Ex: Maitrise de la langue Anglaise" type="text" value={competances} onChange={(value) => handleInput('competances', value, index)} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={1}>
                                        <i className='bi bi-plus fs-5 me-3 btnplus' onClick={() => clickPlus('competances')}></i>
                                        {index > 0 && (
                                            <i className='bi bi-dash fs-5 me-3 btnplus' onClick={() => removeElement('competances', index)}></i>
                                        )}
                                    </Col>
                                </Row>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                {/* Colonne pour les domaineExpertises */}
                <Col md='12' lg='12' xl='6' className='mt-3'>
                    {/* Critères */}
                    <Row>
                        <MyLabel forMyLabel="domaineExpertises" text="Domaine d'expertises" />
                    </Row>
                    <Card className='border-secondary'>
                        <CardBody>
                            {elements.domaineExpertises && elements.domaineExpertises.map((critere, index) => (
                                <Row key={index} className='p-2'>
                                    <Col xs={1}>
                                        <h5>{index + 1}</h5>
                                    </Col>
                                    <Col xs={9}>
                                        <FormGroup>
                                            <MyInput id={`critere-${index}`} name={`critere-${index}`} placeholder="Ex: Developpement mobile" type="text" value={critere} onChange={(value) => handleInput('domaineExpertises', value, index)} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={1}>
                                        <i className='bi bi-plus fs-5 me-5 btnplus' onClick={() => clickPlus('domaineExpertises')}></i>
                                        {index > 0 && (
                                            <i className='bi bi-dash fs-5 me-5 btnplus' onClick={() => removeElement('domaineExpertises', index)}></i>
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
