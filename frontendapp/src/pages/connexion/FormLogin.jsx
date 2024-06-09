import React from 'react';
import { Col, Form, FormGroup, Row } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MyInput, MyLabel } from '../../components/Forms/Forms';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const validationSchema = yup.object().shape({
    email: yup.string().email('Email invalide').required('Email est requis'),
    password: yup.string().required('Mot de passe est requis'),
});

export default function FormLogin({ lienConnexion }) {
    const navigate = useNavigate();

    return (
        <div>
            <Row className='mt-2 mt-lg-5'>
                <Col></Col>
                <Col xs={3} xl={3} md={2} lg={3} className='mt-md-5 mt-lg-3'>
                    <img src="" alt="" height={100} width={100} />
                </Col>
                <Col></Col>
            </Row>
            <Row className='mt-1'>
                <Col></Col>
                <Col xs={9} md={7} xl={8}>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting, setErrors }) => {
                            try {
                                // Remplacer cette URL par votre endpoint d'API de connexion
                                const response = await axios.post('http://127.0.0.1:8000/api/login/', values);
                                const { token, user } = response.data;
                                console.log(response.data)
                                // Enregistrer le token dans le localStorage ou un état global
                                localStorage.setItem('token', token);

                                // Rediriger l'utilisateur en fonction de son type
                                if (user.type === 'admin') {
                                    navigate('/admin');
                                } else if (user.type === 'formateur') {
                                    navigate('/admin');
                                } else if (user.type === 'cabinet') {
                                    navigate('/admin');
                                } else if (user.type === 'desirant') {
                                    navigate(lienConnexion);
                                }
                            } catch (error) {
                                // Gérer les erreurs
                                setErrors({ email: 'Connexion échouée', password: 'Connexion échouée' });
                            }
                            setSubmitting(false);
                        }}
                    >
                        {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Row>
                                        <MyLabel forLabel={'email'} text={'Email'} className={'text-white'} />
                                    </Row>
                                    <MyInput
                                        type={'text'}
                                        className='form-control border-white bg-transparent fs-5 p-2 text-white'
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <MyLabel forLabel={'password'} text={'Mot de passe'} className={'text-white'} />
                                    </Row>
                                    <MyInput
                                        type={'password'}
                                        className='form-control border-white bg-transparent fs-4 p-2 text-white'
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </FormGroup>
                                <Row>
                                    <Col></Col>
                                    <Col xs={8} md={8} lg={10}>
                                        <button type="submit" className='form-control bg-warning fs-5 fw-bold mt-3' disabled={isSubmitting}>
                                            {isSubmitting ? 'Connexion...' : 'Se Connecter'}
                                        </button>
                                    </Col>
                                    <Col></Col>
                                </Row>
                                <div className='text-white text-center mt-3 mb-3 fs-5'>Je n'ai pas de compte! <span className='text-warnin'><Link to={'/inscription'} style={{ textDecoration: 'none' }} className='text-warning'>M'inscrire</Link></span> </div>
                            </Form>
                        )}
                    </Formik>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}
