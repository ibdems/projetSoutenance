import React from 'react'
import { MyInput } from '../../components/Forms/Forms'
import {  Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Col, Row } from 'reactstrap';



const validationSchema = Yup.object().shape({
    nomComplet: Yup.string().required('Le nom complet est requis').min(3, 'Trop court'),
    email: Yup.string().email('Format email invalide').required('L\'email est requis'),
    sujet: Yup.string().required('Le susjet est requis'),
    message: Yup.string().required('Le message est requis').min(5, 'Le contenu est trop court'),
});
export default function ContactezNous() {
    const handleSubmit = (values, { resetForm }) => {
        // Traitement de l'envoi du formulaire
        console.log(values);
        // Réinitialiser le formulaire après soumission
        resetForm();
    };


    return (
        <section className="client_section layout_padding" id='contacteznous'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                            <h1>Contactez nous</h1>
                            <span className="line"></span>
                            <p className='fs-3'>Avez vous des questions à nous posez ou quelques choses vous inquiète t-elle ? Choisiez un des moyens et contactz-nous</p>
                        </div>
                        <div className="section-content">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <Formik
                                        initialValues={{
                                            nomComplet: '',
                                            email: '',
                                            sujet: '',
                                            message: '',
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        {(formik) => (
                                            <form onSubmit={formik.handleSubmit}>
                                                <div className='mb-3'>
                                                    <MyInput
                                                        type="text"
                                                        name="nomComplet"
                                                        placeholder="Nom Complet"
                                                    />

                                                </div>
                                                <div className='mb-3'>
                                                    <MyInput
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className='mb-3'>
                                                    <MyInput
                                                        type="text"
                                                        name="sujet"
                                                        placeholder="Sujet"
                                                    />
                                                   
                                                </div>
                                                <div className='mb-3'>
                                                    <MyInput
                                                        type="textarea"
                                                        name="message"
                                                        placeholder="Message"
                                                        rows={3}
                                                    />
                                                   
                                                </div>
                                                <div>
                                                    <Row>
                                                        <Col xs={4}><Button type="submit" className='form-control fw-bold' style={{ backgroundColor: '#000121' }}>Envoyer</Button></Col>
                                                    </Row>

                                                </div>
                                            </form>
                                        )}
                                    </Formik>


                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <div className="contact-info white">
                                        <div className="contact-item media"> <i className="fa fa-map-marker-alt media-left media-right-margin"></i>
                                            <div className="media-body">
                                                <p className="">Address :</p>
                                                <p className="fw-bold">Université Gamal Abdel Nasser de Conakry</p>
                                            </div>
                                        </div>
                                        <div className="contact-item media"> <i className="fa fa-mobile media-left media-right-margin"></i>
                                            <div className="media-body">
                                                <p className="">Telephone :</p>
                                                <p className=""><a className="text-black fw-bold" style={{ textDecoration: 'none' }} href="tel:+15173977100">63874839237</a> </p>
                                            </div>
                                        </div>
                                        <div className="contact-item media"> <i className="fa fa-envelope media-left media-right-margin"></i>
                                            <div className="media-body">
                                                <p className="">E-mail :</p>
                                                <p className=""><a className="text-black fw-bold" href="mailto:ibrahima882001@gmail.com">ibrahima882001@gmail.com</a> </p>
                                            </div>
                                        </div>
                                        <div className="contact-item media"> <i className="fa fa-clock media-left media-right-margin"></i>
                                            <div className="media-body">
                                                <p className="">Jours de travaille</p>
                                                <p className="fw-bold">H24</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
