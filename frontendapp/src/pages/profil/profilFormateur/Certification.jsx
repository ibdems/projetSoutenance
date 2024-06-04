import React, { useState } from 'react'
import { MyInput, MyLabel } from '../../../components/Forms/Forms'
import { FormGroup, Row } from 'reactstrap'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function Certification() {
  const initialValues = {
    libelle: '',
    fichier: '',

  }
  const validationSchema = Yup.object().shape({
    libelle: Yup.string().required('Libelle est requis'),
    fichier: Yup.string().required('Fichier est requis'),
  });

  const onSubmit = (values) => {
    // Logique pour la soumission du formulaire
    console.log(values);
  };
  return (
    <div>
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {
          ({ values, handleChange, handleBlur }) => (
            <Form>
              <FormGroup>
                <Row><MyLabel text={'Libelle'} /></Row>
                <MyInput type={'text'} name={'libelle'} value={values.libelle} onChange={handleChange} onBlur={handleBlur} />
              </FormGroup>
              <FormGroup>
                <Row><MyLabel text={'Fichier'} /></Row>
                <MyInput type={'file'} name={'fichier'} value={values.fichier} onChange={handleChange} onBlur={handleBlur} />
              </FormGroup>
            </Form>
          )
        }
      </Formik>

    </div>
  )
}
