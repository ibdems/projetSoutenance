import React, { useState } from 'react'
import { MyInput, MyLabel } from '../../../components/Forms/Forms'
import { FormGroup, Row } from 'reactstrap'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

export default function ModifProfil() {
  const validationSchema = Yup.object().shape({
    nomComplet: Yup.string().required('Nom complet est requis'),
    telephone: Yup.string().required('Téléphone est requis'),
    adresse: Yup.string().required('Adresse est requise'),
    profession: Yup.string().required('Profession est requise'),
    linkedin: Yup.string().required('LinkedIn est requis'),
    reponse: Yup.string().required('Réponse est requise'),
    dureeExperiance: Yup.string().required('Durée d\'experience est requise'),
    niveauEtude: Yup.string().required('Niveau d\'étude est requis'),
    email: Yup.string().required('Email est requise').email('Email non valid'),
  });
  const initialValues = {
    nomComplet: '',
    telephone: '',
    adresse: '',
    email: '',
    telephone: '',
    dureeExperiance: '',
    niveauEtude: '',
    profession: '',
    linkedin: ''
  }

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
        {({ values, handleChange, handleBlur, setFieldValue }) => (
          <Form>
            <FormGroup>
              <Row><MyLabel text={'Nom Complet'} /></Row>
              <MyInput type={'text'} name={'nomComplet'} value={values.nomComplet} onChange={handleChange} onBlur={handleBlur}/>
            </FormGroup>
            <FormGroup>
              <Row><MyLabel text={'Adresse'} /></Row>
              <MyInput type={'text'} name={'adresse'} value={values.adresse}  />
            </FormGroup>
            <FormGroup>
              <Row><MyLabel text={'Email'} /></Row>
              <MyInput type={'mail'} name={'email'} value={values.email} />
            </FormGroup>
            <FormGroup>
              <Row><MyLabel text={'Telephone'} /></Row>
              <MyInput type={'text'} name={'telephone'} value={values.telephone}  />
            </FormGroup>
            <FormGroup>
              <Row><MyLabel text={'Profession'} /></Row>
              <MyInput type={'text'} name={'profession'} value={values.profession} />
            </FormGroup>
            <FormGroup>
              <Row><MyLabel text={"Niveau d'etude"} /></Row>
              <MyInput type={'text'} name={'niveauEtude'} value={values.niveauEtude} />
            </FormGroup>
            <FormGroup>
              <Row><MyLabel text={"Durée d'experience"} /></Row>
              <MyInput type={'text'} name={'dureeExperiance'} value={values.dureeExperiance}/>
            </FormGroup>
            <FormGroup>
              <Row><MyLabel text={"Linkedin"} /></Row>
              <MyInput type={'text'} name={'linkedin'} value={values.linkedin} />
            </FormGroup>


          </Form>
        )}
      </Formik>

    </div>
  )
}
