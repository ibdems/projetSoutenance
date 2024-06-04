import React, { useRef, useState } from 'react';
import { Card, CardBody, Col, FormGroup, Row, Button } from 'reactstrap';
import { MyInput, MyLabel } from '../../../components/Forms/Forms';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

export default function InfoCabinet() {
    const validationSchema = yup.object().shape({
        nomComplet: yup.string().required('Nom du Cabinet est requis'),
        telephone: yup.string().required('Telephone est requis'),
        adresse: yup.string().required('Adresse est requise'),
        siret: yup.string().required('Siret est requis'),
        siteWeb: yup.string().url('Site Web invalide').required('Site Web est requis'),
        description: yup.string().required('Description est requise'),
        domaineExpertise: yup.array().of(yup.string().required('Domaine d\'expertise est requis')),
    });

    const initialValues = {
        nomComplet: '',
        telephone: '',
        adresse: '',
        siret: '',
        siteWeb: '',
        description: '',
        domaineExpertise: [''],
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    const [image, setImage] = useState('');
    const inputRef = useRef(null);

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values, handleChange, handleBlur, errors, touched, setFieldValue }) => (
                    <Form>
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
                                    <button type='button' onClick={handleImageClick} className={'mt-3 form-control bg-warning text-black fs-3 py-2 px-4 fw-bold'}>Photo</button>
                                </div>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel text={'Nom du Cabinet'} forLabel={'nomComplet'} />
                                            </Row>
                                            <MyInput
                                                type="text"
                                                name="nomComplet"
                                                placeholder="Nom du Cabinet"
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
                                                placeholder="Telephone"
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
                                                placeholder="Adresse"
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
                                                <MyLabel text={'Siret'} forLabel={'siret'} />
                                            </Row>
                                            <MyInput
                                                type="text"
                                                name="siret"
                                                placeholder="Siret"
                                                value={values.siret}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.siret && touched.siret ? <div className="text-danger">{errors.siret}</div> : null}
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel text={'Site Web'} forLabel={'siteWeb'} />
                                            </Row>
                                            <MyInput
                                                type="text"
                                                name="siteWeb"
                                                placeholder="Site Web"
                                                value={values.siteWeb}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.siteWeb && touched.siteWeb ? <div className="text-danger">{errors.siteWeb}</div> : null}
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
                                    <MyInput
                                        type="textarea"
                                        name="description"
                                        placeholder="Description"
                                        value={values.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.description && touched.description ? <div className="text-danger">{errors.description}</div> : null}
                                </FormGroup>
                            </Col>
                            <Col md="12" lg="6" xl="6">
                                <Row>
                                    <MyLabel text={"Domaine d'expertise"} />
                                </Row>
                                <Card className='border-black text-black'>
                                    <CardBody>
                                        {values.domaineExpertise.map((domaine, index) => (
                                            <Row key={index} className='p-1'>
                                                <Col xs={1}>
                                                    <h5>{index + 1}</h5>
                                                </Col>
                                                <Col xs={9}>
                                                    <MyInput
                                                        type="text"
                                                        name={`domaineExpertise[${index}]`}
                                                        placeholder="Domaine d'expertise"
                                                        value={domaine}
                                                        onChange={(e) => {
                                                            const newDomaineExpertise = [...values.domaineExpertise];
                                                            newDomaineExpertise[index] = e.target.value;
                                                            setFieldValue('domaineExpertise', newDomaineExpertise);
                                                        }}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.domaineExpertise && errors.domaineExpertise[index] && touched.domaineExpertise && touched.domaineExpertise[index] ? (
                                                        <div className="text-danger">{errors.domaineExpertise[index]}</div>
                                                    ) : null}
                                                </Col>
                                                <Col xs={1}>
                                                    {index > 0 && (
                                                        <i className='bi bi-dash fs-5 btnplus' onClick={() => {
                                                            const newDomaineExpertise = [...values.domaineExpertise];
                                                            newDomaineExpertise.splice(index, 1);
                                                            setFieldValue('domaineExpertise', newDomaineExpertise);
                                                        }}></i>
                                                    )}
                                                </Col>
                                            </Row>
                                        ))}
                                        <button type="button" onClick={() => setFieldValue('domaineExpertise', [...values.domaineExpertise, ''])} className='btn btn-link'>Ajouter domaine d'expertise</button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
