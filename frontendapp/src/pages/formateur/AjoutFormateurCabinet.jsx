import React, { useRef, useState } from "react"
import InfoPersonnel from '../inscriptions/formateur/InfoPersonnel'
import DetailProfessionnel from "../inscriptions/formateur/detailProfessionnal"
import { Breadcrumb, BreadcrumbItem, Card, Col, FormGroup, Row } from "reactstrap"
import { Link } from "react-router-dom"
import { MyButton, MyInput, MyLabel } from "../../components/Forms/Forms"

function AjoutFormateurCabinet() {
    const [element, setElement] = useState({
        nomComplet: '',
        telephone: '',
        adresse: '',
        profession: '',
        linkedin: '',
        email: '',
        niveauEtude: ''
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

    const [etape, setEtape] = useState(1)
    const etapeSuivante = () => {
        setEtape(prevState => prevState + 1)
    }
    const etapePrecedent = () => {
        setEtape(prevState => prevState - 1)
    }
    return (
        <div>
            <Breadcrumb listTag="div" className="mt-2">
                <BreadcrumbItem>
                    <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Accueil</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Ajout</Link>
                </BreadcrumbItem>
            </Breadcrumb>
            <Row className="ps-1 mt-4">
                <Col xs={10} lg={4} className=" p-2 ms-2 text-white text-center fs-3" style={{ backgroundColor: '#03031efc' }}>
                    Ajout d'un formateur
                </Col>
                <Col></Col>
            </Row>
            <Card style={{ border: '3px  solid #03031efc', borderRadius: '0' }} className="p-3">
                {
                    etape === 1 &&
                    <div>
                        <h3 className="text-center mb-2">Etape 1/2: Informations personnelle</h3>
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
                                    <input type="file" ref={inputRef} className='d-none' onChange={handleImageChange} name="" id="" />
                                    <button type='button' onClick={handleImageClick} className={' mt-3 form-control bg-warning text-black fs-3 py-2 px-4 fw-bold'}> Photo</button>
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
                                            <MyInput type={'text'} placeholder={'Ex: Wanindara'} value={element.adresse} onChange={(value) => handleInputChange(handleInputChange('adresse', value))} />
                                        </FormGroup>
                                    </Col>

                                    <Col lg={6}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel text={'Profession'} forLabel={'profession'} />
                                            </Row>
                                            <MyInput type={'text'} placeholder={'Ex: Enseignant'} value={element.profession} onChange={(value) => handleInputChange(handleInputChange('profession', value))} />
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel text={'Linkdine'} forLabel={'linkdin'} />
                                            </Row>
                                            <MyInput type={'text'} placeholder={'Ex: ibrahimaDiallo'} value={element.linkedin} onChange={(value) => handleInputChange(handleInputChange('linkdin', value))} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Row>
                                        <MyLabel text={'Email'} forLabel={'email'} />
                                    </Row>
                                    <MyInput type={'email'} placeholder={'Ex: ibrahima9999@gmail.com'} value={element.email} onChange={(value) => handleInputChange(handleInputChange('email', value))} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Row>
                                        <MyLabel text={'Niveau Etude le plus eleve'} forLabel={'niveauEtude'} />
                                    </Row>
                                    <MyInput type={'text'} placeholder={'Ex: Bac+4'} value={element.profession} onChange={(value) => handleInputChange(handleInputChange('profession', value))} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>


                }
                {
                    etape === 2 &&
                    <div>
                        <h3 className="text-center mb-2">Etape 2/2: Informations professionnelle</h3>
                        <DetailProfessionnel />
                    </div>
                    
                }
                <Row className={etape === 1 ? 'mt-1' : 'mt-4'}>
                    <Col></Col>
                    <Col lg={2}>
                        {
                            etape === 2 && <MyButton text={'Précedent'} className={''} bgColor={'#03031efc'} onClick={etapePrecedent} />
                        }
                    </Col>
                    <Col lg={2}>
                        {
                            etape === 1 && <MyButton text={'Suivant'} className={''} bgColor={'#03031efc'} onClick={etapeSuivante} />
                        }
                        {
                            etape === 2 && <MyButton text={'Valider'} bgColor={'#03031efc'} className={''} onClick={() => { }} />
                        }

                    </Col>
                </Row>


            </Card>

        </div>
    )
}

export default AjoutFormateurCabinet