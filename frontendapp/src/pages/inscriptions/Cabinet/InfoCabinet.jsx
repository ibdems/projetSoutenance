import React, { useRef, useState } from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { MyButton, MyInput, MyLabel } from '../../../components/Forms/Forms'

export default function InfoCabinet() {
    const [element, setElement] = useState({
        nomComplet: '',
        telephone: '',
        adresse: '',
        siret: '',
        siteWeb: '',
        description: '',
        domaineExpertise: [''],
    })
    const inputRef = useRef(null);
    const [image, setImage] = useState('')
    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setImage(file);
    }



    const handleInputChange = (name, value) => {
        setElement(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const clickPlus = (type) => {
        setElement(prevState => ({
            ...prevState,
            [type]: [...prevState[type], '']
        }));
    }


    const removeElement = (type, index) => {
        setElement(prevState => ({
            ...prevState,
            [type]: prevState[type].filter((item, i) => i !== index)
        }));
    };

    const handleInput = (type, value, index) => {
        // Copiez les éléments actuels du tableau correspondant de l'état
        const updatedElements = [...element[type]];
        // Mettez à jour l'élément spécifié par l'index avec la nouvelle valeur
        updatedElements[index] = value;
        // Mettez à jour l'état avec les nouveaux éléments du tableau correspondant
        setElement(prevState => ({
            ...prevState,
            [type]: updatedElements
        }));
    };


    return (
        <div>
            <Row>
                <Col xs={12} lg={4} className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        {image ? (
                            <img src={URL.createObjectURL(image)} alt="" height={200} width={200} style={{ border: '1px solid black', borderRadius: '20%' }} />
                        ) : (
                            <img src='' alt="" height={200} width={200} style={{ border: '1px solid black', borderRadius: '20%' }} />
                        )}
                    </div>

                    <div>
                        <input type="file" ref={inputRef} className='d-none' onChange={handleImageChange} name="" id="" />
                        <button type='button' onClick={handleImageClick} className={' mt-3 form-control bg-warning text-black fs-3 py-2 px-4 fw-bold'}> Photo</button>
                    </div>

                </Col>
                <Col>
                    <Row>
                        <Col xs={12}>
                            <FormGroup>
                                <Row>
                                    <MyLabel text={'Nom du Cabinet'} forLabel={'nomComplet'} />
                                </Row>
                                <MyInput type={'text'} placeholder={'Ex: Global Tech '} value={element.nomComplet} onChange={(value) => handleInputChange(handleInputChange('nomComplet', value))} />
                            </FormGroup>
                        </Col>

                        <Col lg={6}>
                            <FormGroup>
                                <Row>
                                    <MyLabel text={'Telephone'} forLabel={'telephone'} />
                                </Row>
                                <MyInput type={'text'} placeholder={'Ex: 600000000'} value={element.telephone} onChange={(value) => handleInputChange(handleInputChange('telephone', value))} />
                            </FormGroup>
                        </Col>
                        <Col lg={6}>
                            <FormGroup>
                                <Row>
                                    <MyLabel text={'Adresse'} forLabel={'adresse'} />
                                </Row>
                                <MyInput type={'text'} placeholder={'Ex: Wanindara'} value={element.adresse} onChange={(value) => handleInputChange(handleInputChange('telephone', value))} />
                            </FormGroup>
                        </Col>

                        <Col lg={6}>
                            <FormGroup>
                                <Row>
                                    <MyLabel text={'Siret'} forLabel={'siret'} />
                                </Row>
                                <MyInput type={'text'} placeholder={'Ex: E0012U89I'} value={element.siret} onChange={(value) => handleInputChange(handleInputChange('telephone', value))} />
                            </FormGroup>
                        </Col>
                        <Col lg={6}>
                            <FormGroup>
                                <Row>
                                    <MyLabel text={'Site Web'} forLabel={'siteWeb'} />
                                </Row>
                                <MyInput type={'text'} placeholder={'Ex: https://cabinetabc.com'} value={element.siteWeb} onChange={(value) => handleInputChange(handleInputChange('siteWeb', value))} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <FormGroup>
                        <Row>
                            <MyLabel text={'Description'} forLabel={'description'} />
                        </Row>
                        <MyInput type={'textarea'} rows={3} placeholder={'Parlez de votre cabinet de formation'} value={element.description} onChange={(value) => handleInputChange(handleInputChange('description', value))} />
                    </FormGroup>
                </Col>
                <Col md='12' lg='6' xl='6'>
                    {/* certifications */}
                    <Row>
                        <MyLabel forMyLabel="domaineExpertise" text="Domaine d'expertise" />
                    </Row>
                    <Card className='border-black text-black'>
                        <CardBody>
                            {element.domaineExpertise && element.domaineExpertise.map((domaineExpertise, index) => (
                                <Row key={index} className='p-1'>
                                    <Col xs={1}>
                                        <h5>{index + 1}</h5>
                                    </Col>
                                    <Col xs={9}>
                                        <FormGroup>
                                            <MyInput id={`domaineExpertise-${index}`} name={`domaineExpertise-${index}`} placeholder="Entrer un domaine d'expertise" type="text" value={domaineExpertise} onChange={(value) => handleInput('domaineExpertise', value, index)} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={1}>
                                        <i className='bi bi-plus fs-5  btnplus' onClick={() => clickPlus('domaineExpertise')}></i>
                                        {index > 0 && (
                                            <i className='bi bi-dash fs-5  btnplus' onClick={() => removeElement('domaineExpertise', index)}></i>
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
