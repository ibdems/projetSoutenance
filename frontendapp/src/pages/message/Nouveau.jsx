import React, { useState } from 'react';
import { Col, FormGroup, Row } from 'reactstrap';
import { MyInput, MyLabel, MySelect } from '../../components/Forms/Forms';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { users } from '../../data/users';

const validationSchema = Yup.object().shape({
  destinateur: Yup.string().required('Le destinateur est requis'),
  objet: Yup.string().required("L'objet est requis"),
  contenu: Yup.string().required('Le contenu est requis'),
});

export default function Nouveau() {
  const initialValues = {
    destinateur: '',
    objet: '',
    contenu: '',
  };

  const handleSubmit = (values) => {
    // Logique pour la soumission du formulaire
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form>
            <Row>
              <Col xs={3}><MyLabel text={'Destinateur:'} /></Col>
              <Col xs={9}>
                <MySelect
                  value={values.destinateur}
                  name="destinateur"
                  onChange={handleChange}
                  options={users.map(user => ({ label: user.nomComplet, value: user.id }))}
                />
              </Col>
            </Row>

            <Row className='mt-2'>
              <Col xs={3}><MyLabel text={'Objet:'} /></Col>
              <Col xs={9}>
                <MyInput
                  placeholder={"Pourquoi votre message"}
                  name='objet'
                  value={values.objet}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <FormGroup className='mt-3'>
              <MyInput
                type={'textarea'}
                placeholder={'Votre message ....'}
                name='contenu'
                rows={8}
                value={values.contenu}
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
}
