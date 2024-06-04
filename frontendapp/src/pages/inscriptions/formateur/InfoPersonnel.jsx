import React, { useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import { Col, FormGroup, Input, Label, Row, Button } from 'reactstrap';
import { MyInput, MyLabel } from '../../../components/Forms/Forms';
import * as Yup from 'yup';
import '../inscription.scss';

// Schéma de validation Yup
const validationSchema = Yup.object().shape({
    nomComplet: Yup.string().required('Nom complet est requis'),
    telephone: Yup.string().required('Téléphone est requis'),
    adresse: Yup.string().required('Adresse est requise'),
    profession: Yup.string().required('Profession est requise'),
    linkedin: Yup.string().required('LinkedIn est requis'),
    reponse: Yup.string().required('Réponse est requise'),
});

export default function InfoPersonnel({ updateReponse }) {
    const initialValues = {
        nomComplet: '',
        telephone: '',
        adresse: '',
        profession: '',
        linkedin: '',
    };

    const inputRef = useRef(null);
    const [image, setImage] = useState('');

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const onSubmit = (values) => {
        // Logique pour la soumission du formulaire
        console.log(values);
    };
    const [reponse, setReponse] = useState('non')
    // Fonction pour mettre à jour le rôle sélectionné
    const handleReponseChange = (event) => {
        setReponse(event.target.value);
        updateReponse(event.target.value);
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, handleChange, handleBlur, setFieldValue }) => (
                <Form>
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
                                <input type="file" ref={inputRef} className='d-none' onChange={(e) => {
                                    handleImageChange(e);
                                    setFieldValue("image", e.currentTarget.files[0]);
                                }} name="image" id="image" />
                                <Button type='button' onClick={handleImageClick} className={'mt-3 form-control bg-warning text-black fs-3 py-2 px-4 fw-bold'}> Photo</Button>
                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup>
                                        <Row>
                                            <MyLabel text={'Nom Complet'} forLabel={'nomComplet'} />
                                        </Row>
                                        <MyInput
                                            type="text"
                                            name="nomComplet"
                                            placeholder="Ex: Alpha Amadou Diallo"
                                            value={values.nomComplet}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg={6}>
                                    <FormGroup>
                                        <Row>
                                            <MyLabel text={'Téléphone'} forLabel={'telephone'} />
                                        </Row>
                                        <MyInput
                                            type="text"
                                            name="telephone"
                                            placeholder="Ex: 600000000"
                                            value={values.telephone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg={6}>
                                    <FormGroup>
                                        <Row>
                                            <MyLabel text={'Adresse'} forLabel={'adresse'} />
                                        </Row>
                                        <MyInput
                                            type="text"
                                            name="adresse"
                                            placeholder="Ex: Wanindara"
                                            value={values.adresse}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg={6}>
                                    <FormGroup>
                                        <Row>
                                            <MyLabel text={'Profession'} forLabel={'profession'} />
                                        </Row>
                                        <MyInput
                                            type="text"
                                            name="profession"
                                            placeholder="Ex: Enseignant"
                                            value={values.profession}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg={6}>
                                    <FormGroup>
                                        <Row>
                                            <MyLabel text={'LinkedIn'} forLabel={'linkedin'} />
                                        </Row>
                                        <MyInput
                                            type="text"
                                            name="linkedin"
                                            placeholder="Ex: ibrahimaDiallo"
                                            value={values.linkedin}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} xl={7}><h3 className='text-center text-black'>Désirez-vous donner des cours personnels à l'apprenant ?</h3></Col>
                        <Col className='ms-5 ms-md-5'>
                            <FormGroup check className='ms-md-5'>
                                <Label check>
                                    <Input
                                        type="radio"
                                        className='form-control mt-2 border-black p-2 ms-md-5'
                                        name="reponse"
                                        value="oui"
                                        checked={reponse === 'oui'}
                                        onChange={handleReponseChange}
                                        onBlur={handleBlur}
                                    />
                                    <span className='fw-bold fs-4'> Oui</span>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="reponse"
                                        className='mt-2 form-control border-black p-2'
                                        value="non"
                                        checked={reponse === 'non'}
                                        onChange={handleReponseChange}
                                        onBlur={handleBlur}
                                    />
                                    <span className='fw-bold fs-4'>Non</span>
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    
                </Form>
            )}
        </Formik>
    );
}
