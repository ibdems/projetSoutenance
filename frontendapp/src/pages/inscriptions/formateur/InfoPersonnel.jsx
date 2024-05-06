import React, { useState } from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { MyButton, MyInput, MyLabel } from '../../../components/Forms/Forms'
import '../inscription.scss'
import DetailProfessionnel from './detailProfessionnal'

export default function InfoPersonnel() {
    const [element, setElement] = useState({
        nomComplet: '',
        telephone: '',
        adresse: '',
        profession: '',
        linkedin: ''
    })

    const handleInputChange = (name, value) => {
        setElement(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const [reponse, setReponse] = useState('');

    // Fonction pour mettre à jour le rôle sélectionné
    const handleReponseChange = (event) => {
        setReponse(event.target.value);
    };

    const nextPage = () =>  {
        <DetailProfessionnel />
    }
    return (
        <div>            
                <Row>
                    <Col xs={12} lg={4} className="d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img src="" alt="" height={200} width={200} style={{ border: '1px solid black', borderRadius: '50%' }} />
                        </div>
                        
                        <div>
                            <button type='submit' className={' mt-3 form-control bg-warning text-black fs-3 py-2 px-4 fw-bold'}> Photo</button>
                        </div>

                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12}>
                                <FormGroup>
                                    <Row>
                                        <MyLabel text={'Nom Complet'} forLabel={'nomComplet'} />
                                    </Row>
                                    <MyInput type={'text'} placeholder={'Ex: Alpha Amadou Diallo'} value={element.nomComplet} onChange={(value) => handleInputChange(handleInputChange('nomComplet', value))} />
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
                                        <MyLabel text={'Profession'} forLabel={'profession'} />
                                    </Row>
                                    <MyInput type={'text'} placeholder={'Ex: Enseignant'} value={element.profession} onChange={(value) => handleInputChange(handleInputChange('telephone', value))} />
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
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} xl={7}><h3 className='text-center text-black'>Desirez-vous de donner des cours personnel à l'apprenant ?</h3></Col>
                    <Col className='ms-5 ms-md-5'>
                        <FormGroup check className='ms-md-5'>
                            <Label check>
                                <Input type="radio" className='form-control mt-2 border-black p-2 ms-md-5' name="reponse" value="oui" checked={reponse === 'oui'} onChange={handleReponseChange} />
                                <span className='fw-bold fs-4'> Oui</span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="reponse" className='mt-2 form-control border-black p-2' value="non" checked={reponse === 'non'} onChange={handleReponseChange} />
                                <span className='fw-bold fs-4'>Non</span>
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                
            
        </div>
    )
}
