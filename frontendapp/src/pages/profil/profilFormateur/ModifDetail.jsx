import React, { useState } from 'react'
import { MyInput, MyLabel } from '../../../components/Forms/Forms'
import { FormGroup, Row } from 'reactstrap'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function ModifDetail() {
  const initialValues = {
    libelle: '',
  }
  const validationSchema = Yup.object().shape({
    libelle: Yup.string().required('Libelle est requis'),
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
            </Form>
          )
        }
      </Formik>
      
      
    </div>
  )
}
