import React, { useRef, useState } from 'react';
import { Col, FormGroup, Row, Button } from 'reactstrap';
import { MyInput, MyLabel } from '../../../components/Forms/Forms';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import '../inscription.scss';

// Schéma de validation Yup
const validationSchema = yup.object().shape({
    nomComplet: yup.string().required('Nom Complet est requis'),
    telephone: yup.string().required('Telephone est requis'),
    adresse: yup.string().required('Adresse est requise'),
    profession: yup.string().required('Profession est requise'),
    linkedin: yup.string().url('LinkedIn invalide').required('LinkedIn est requis'),
});

export default function InfoDesirant() {
    const [image, setImage] = useState('');
    const inputRef = useRef(null);

    const initialValues = {
        nomComplet: '',
        telephone: '',
        adresse: '',
        profession: '',
        linkedin: '',
    };

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

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values, handleChange, handleBlur, errors, touched }) => (
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
                                    <input type="file" ref={inputRef} className='d-none' onChange={handleImageChange} name="" id="" />
                                    <button type='button' onClick={handleImageClick} className={'mt-3 form-control bg-warning text-black fs-3 py-2 px-4 fw-bold'}>Photo</button>
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
                                            {errors.nomComplet && touched.nomComplet ? <div className="text-danger">{errors.nomComplet}</div> : null}
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel text={'Telephone'} forLabel={'telephone'} />
                                            </Row>
                                            <MyInput
                                                type="text"
                                                name="telephone"
                                                placeholder="Ex: 600000000"
                                                value={values.telephone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.telephone && touched.telephone ? <div className="text-danger">{errors.telephone}</div> : null}
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
                                            {errors.adresse && touched.adresse ? <div className="text-danger">{errors.adresse}</div> : null}
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
                                            {errors.profession && touched.profession ? <div className="text-danger">{errors.profession}</div> : null}
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
                                                placeholder="Ex: DialloIbrahima"
                                                value={values.linkedin}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.linkedin && touched.linkedin ? <div className="text-danger">{errors.linkedin}</div> : null}
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
