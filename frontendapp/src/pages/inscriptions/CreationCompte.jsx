import React from 'react';
import { Formik, Form } from 'formik';
import { Col, FormGroup, Row, Button } from 'reactstrap';
import { MyInput, MyLabel } from '../../components/Forms/Forms';
import * as Yup from 'yup';

// Schéma de validation Yup
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalide').required('Email est requis'),
    password: Yup.string().required('Mot de passe est requis').min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
    passwordConfirmed: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
        .required('Confirmation du mot de passe est requise'),
});

export default function CreationCompte() {
    const initialValues = {
        email: '',
        password: '',
        passwordConfirmed: '',
    };

    const onSubmit = (values) => {
        // Logique pour la soumission du formulaire
        console.log(values);
    };

    return (
        <div className='container'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values, handleChange, handleBlur, errors, touched }) => (
                    <Form>
                        <Row>
                            <Col></Col>
                            <Col xs={12} md={10} lg={8} xl={6}>
                                <Row>
                                    <Col xs={12}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel text={'Email'} forLabel={'email'} />
                                            </Row>
                                            <MyInput 
                                                type={'email'}
                                                name="email"
                                                placeholder={'Ex: demsnoir@gmail.com'}
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel text={'Mot de Passe'} forLabel={'password'} />
                                            </Row>
                                            <MyInput 
                                                type={'password'}
                                                name="password"
                                                placeholder={''}
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12}>
                                        <FormGroup>
                                            <Row>
                                                <MyLabel text={'Confirmation'} forLabel={'passwordConfirmed'} />
                                            </Row>
                                            <MyInput 
                                                type={'password'}
                                                name="passwordConfirmed"
                                                placeholder={'Ressaisissez votre mot de passe'}
                                                value={values.passwordConfirmed}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                            </Col>
                            <Col></Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
