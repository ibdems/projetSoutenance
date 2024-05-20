import React, { useState } from 'react'
import { Card, CardBody, Col, FormGroup, Row } from 'reactstrap'
import { MyInput, MyLabel } from '../../../components/Forms/Forms'

export default function DetailProfessionnel() {
    const [elements, setElements] = useState({
        competances: [''],
        certifications: [
            {
                libelle: '',
                file: ''
            }
        ],
        domaineExpertises: ['']
    });

    const clickPlus = (type) => {
        const newElement = type === 'certifications' ? { libelle: '', file: '' } : '';
        setElements(prevState => ({
            ...prevState,
            [type]: [...prevState[type], newElement]
        }));
    };

    const removeElement = (type, index) => {
        setElements(prevState => ({
            ...prevState,
            [type]: prevState[type].filter((item, i) => i !== index)
        }));
    };

    const handleInput = (type, value, index, field = null) => {
        const updatedElements = [...elements[type]];
        if (field) {
            updatedElements[index][field] = value;
        } else {
            updatedElements[index] = value;
        }
        setElements(prevState => ({
            ...prevState,
            [type]: updatedElements
        }));
    };

    return (
        <div>
            <Row>
                <Col md='12' lg='12' xl='6'>
                    <Row>
                        <MyLabel forMyLabel="competances" text='Competances' />
                    </Row>
                    <Card className='border-secondary'>
                        <CardBody>
                            {elements.competances && elements.competances.map((competance, index) => (
                                <Row key={index} className='p-2'>
                                    <Col xs={1}>
                                        <h5>{index + 1}</h5>
                                    </Col>
                                    <Col xs={9}>
                                        <FormGroup>
                                            <MyInput id={`competance-${index}`} name={`competance-${index}`} placeholder="Ex: Maitrise de la langue Anglaise" type="text" value={competance} onChange={(e) => handleInput('competances', e.target.value, index)} />
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
                <Col md='12' lg='12' xl='6'>
                    <Row>
                        <MyLabel forMyLabel="domaineExpertises" text="Domaine d'expertises" />
                    </Row>
                    <Card className='border-secondary'>
                        <CardBody>
                            {elements.domaineExpertises && elements.domaineExpertises.map((domaineExpertise, index) => (
                                <Row key={index} className='p-2'>
                                    <Col xs={1}>
                                        <h5>{index + 1}</h5>
                                    </Col>
                                    <Col xs={9}>
                                        <FormGroup>
                                            <MyInput id={`domaineExpertise-${index}`} name={`domaineExpertise-${index}`} placeholder="Ex: Developpement mobile" type="text" value={domaineExpertise} onChange={(e) => handleInput('domaineExpertises', e.target.value, index)} />
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
                <Col md='12' lg='12' xl='12' className='mt-2'>
                    <Row>
                        <MyLabel forMyLabel="certifications" text='Certifications' />
                    </Row>
                    <Card className='border-secondary'>
                        <CardBody>
                            {elements.certifications && elements.certifications.map((certification, index) => (
                                <Row key={index} className='p-2'>
                                    <Col xs={1}>
                                        <h5>{index + 1}</h5>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel forMyLabel={`certification-libelle-${index}`} text='Libelle' />
                                            </Row>
                                            <MyInput id={`certification-libelle-${index}`} name={`certification-libelle-${index}`} placeholder="Ex: Diplome en Ingenierie Logiciel" type="text" value={certification.libelle} onChange={(e) => handleInput('certifications', e, index, 'libelle')} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel forMyLabel={`certification-file-${index}`} text='Fichier' />
                                            </Row>
                                            <MyInput id={`certification-file-${index}`} name={`certification-file-${index}`} type="file" onChange={(e) => handleInput('certifications', e, index, 'file')} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={1}>
                                        <i className='bi bi-plus fs-5 btnplus' onClick={() => clickPlus('certifications')}></i>
                                        {index > 0 && (
                                            <i className='bi bi-dash fs-5 btnplus' onClick={() => removeElement('certifications', index)}></i>
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
