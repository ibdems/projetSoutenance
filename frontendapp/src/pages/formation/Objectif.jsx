import React from "react";
import axios from 'axios';
import { Formik, FieldArray } from "formik";
import { Button, Col, FormGroup, Row } from "reactstrap";
import { MyInput } from "../../components/Forms/Forms";
import * as yup from 'yup';

// Validation schema
const validationSchemaEtape2 = yup.object().shape({
  objectifs: yup.array().of(yup.string().required('Ce champ est requis')),
});

// Initial values
const initialValues = {
  objectifs: [''],
};

// Handle submit
const handleSubmit = async (values, toggleLoading) => { // Passer la fonction toggleLoading comme argument
  toggleLoading(true); // Indiquer que la requête est en cours
  try {
    const formationId = 1; // Remplacez ceci par l'ID de formation approprié
    for (const objectif of values.objectifs) {
      await axios.post('http://localhost:8000/api/formations/objectifs', {
        libelle: objectif,
        formation: formationId
      });
    }
    alert('Objectifs ajoutés avec succès');
  } catch (error) {
    console.error("Il y a eu une erreur!", error);
    alert('Erreur lors de l\'ajout des objectifs');
  } finally {
    toggleLoading(false); // Indiquer que la requête est terminée
  }
};

export default function Objectif() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaEtape2}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting); // Passer setSubmitting pour indiquer si la soumission est en cours
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FieldArray
              name="objectifs"
              render={(arrayHelpers) => (
                <div>
                  {values.objectifs.map((objectif, index) => (
                    <Row key={index} className="p-2">
                      <Col xs={1}>
                        <h5>{index + 1}</h5>
                      </Col>
                      <Col xs={9}>
                        <FormGroup>
                          <MyInput
                            id={`objectif-${index}`}
                            name={`objectifs[${index}]`}
                            placeholder="Entrez un objectif à atteindre"
                            type="text"
                            value={objectif}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </FormGroup>
                      </Col>
                      <Col xs={1}>
                        <i
                          className="bi bi-plus fs-5 btnplus"
                          onClick={() => arrayHelpers.push('')}
                        ></i>
                        {index > 0 && (
                          <i
                            className="bi bi-dash fs-5 btnplus"
                            onClick={() => arrayHelpers.remove(index)}
                          ></i>
                        )}
                      </Col>
                    </Row>
                  ))}
                </div>
              )}
            />
            <Row>
              <Button type="submit" className='form-control fw-bold' style={{ backgroundColor: '#03031efc' }}>
                Valider
              </Button>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
}
