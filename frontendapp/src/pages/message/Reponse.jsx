import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyInput } from '../../components/Forms/Forms';

const validationSchema = Yup.object().shape({
  contenue: Yup.string().required('Le contenu de la réponse est requis'),
});

export default function ReponseMessage({ expediteur, objet }) {
 

  const handleSubmit = (values) => {
    // Logique pour la soumission du formulaire
    console.log(values);
  };

  return (
    <div>
      <div className='fw-bold' style={{ fontSize: '18px' }}>
        A: <span>{expediteur}</span>
      </div>
      <div className='fw-bold mb-2' style={{ fontSize: '18px' }}>
        Objet: <span>{objet}</span>
      </div>

      <Formik
        initialValues={{ contenue: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form>
            <MyInput
              type={'textarea'}
              rows={8}
              name="contenue"
              value={values.contenue}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
