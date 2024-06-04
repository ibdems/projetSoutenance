import React, { useState } from 'react'
import { MyInput, MyLabel } from '../../../components/Forms/Forms'
import { FormGroup, Row } from 'reactstrap'
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

export default function Disponibilite() {

  const initialValues = {
    jour: '',
    heureDebut: '',
    heureFin: '',
  }

  const validationSchema = Yup.object().shape({
    jour: Yup.string().required('Le Jour est requis'),
    heureDebut: Yup.string().required('Heure de debut est requis'),
    heureFin: Yup.string().required('Heure de fin est requis'),
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
          ({ values}) => (
            <Form>
              <FormGroup>
                <Row><MyLabel text={'Jours'} /></Row>
                <MyInput type={'text'} name={'jour'} value={values.jour} />
              </FormGroup>
              <FormGroup>
                <Row><MyLabel text={'Heure début'} /></Row>
                <MyInput type={'time'} name={'heureDebut'} value={values.heureDebut}/>
              </FormGroup>
              <FormGroup>
                <Row><MyLabel text={'Heure Fin'} /></Row>
                <MyInput type={'time'} name={'heureFin'} value={values.heureFin} />
              </FormGroup>
            </Form>
          )
        }
      </Formik>

    </div>
  )
}
