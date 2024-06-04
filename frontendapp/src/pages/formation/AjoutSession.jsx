import React from 'react';
import { MyInput, MyLabel } from '../../components/Forms/Forms';
import { FormGroup, Row, Col, CardHeader, Label } from 'reactstrap';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  dateDebut: Yup.date().required('La date du début est obligatoire'),
  dateFin: Yup.date().required('La date de fin est obligatoire'),
  heureDebut: Yup.string().required("L'heure du début est obligatoire"),
  heureFin: Yup.string().required("L'heure de fin est obligatoire"),
  lieu: Yup.string().required('Le lieu est obligatoire'),
  nombrePlace: Yup.number().required('Le nombre de places est obligatoire').positive('Le nombre de places doit être positif').integer('Le nombre de places doit être un nombre entier'),
  joursSemaine: Yup.object().shape({
    lundi: Yup.boolean(),
    mardi: Yup.boolean(),
    mercredi: Yup.boolean(),
    jeudi: Yup.boolean(),
    vendredi: Yup.boolean(),
    samedi: Yup.boolean(),
    dimanche: Yup.boolean(),
  }).test(
    'at-least-one-day',
    'Au moins un jour doit être sélectionné',
    value => Object.values(value).some(val => val)
  )
});

export  function AjoutSession({ clickAnnuler, clickValider }) {
  const initialValues = {
    dateDebut: '',
    dateFin: '',
    heureDebut: '',
    heureFin: '',
    lieu: '',
    nombrePlace: '',
    joursSemaine: {
      lundi: false,
      mardi: false,
      mercredi: false,
      jeudi: false,
      vendredi: false,
      samedi: false,
      dimanche: false,
    },
  };

  const handleSubmit = (values) => {
    clickValider(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <CardHeader className='text-center fs-4 fw-bold' style={{ marginTop: '-10px' }}>
              Crée une session de formation
            </CardHeader>
            <Row>
              <Col lg={6} xs={12} md={6}>
                <FormGroup>
                  <Row><MyLabel text='Date du début' /></Row>
                  <MyInput
                    type='date'
                    name='dateDebut'
                    value={values.dateDebut}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
              </Col>
              <Col lg={6} xs={12} md={6}>
                <FormGroup>
                  <Row><MyLabel text='Date de fin' /></Row>
                  <MyInput
                    type='date'
                    name='dateFin'
                    value={values.dateFin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
              </Col>
              <Col lg={6} xs={12} md={6}>
                <FormGroup>
                  <Row><MyLabel text='Heure du début' /></Row>
                  <MyInput
                    type='time'
                    name='heureDebut'
                    value={values.heureDebut}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
              </Col>
              <Col lg={6} xs={12} md={6}>
                <FormGroup>
                  <Row><MyLabel text='Heure de fin' /></Row>
                  <MyInput
                    type='time'
                    name='heureFin'
                    value={values.heureFin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
              </Col>
              <Col lg={6} xs={12} md={6}>
                <FormGroup>
                  <Row><MyLabel text='Lieu' /></Row>
                  <MyInput
                    type='text'
                    name='lieu'
                    value={values.lieu}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
              </Col>
              <Col lg={6} xs={12} md={6}>
                <FormGroup>
                  <Row><MyLabel text='Nombre de Places' /></Row>
                  <MyInput
                    type='number'
                    name='nombrePlace'
                    value={values.nombrePlace}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
              </Col>
              <Col xs={12}>
                <FormGroup tag="fieldset">
                  <Row><Label for="joursSemaine" className="fs-6 fw-bold">Jours de la session</Label></Row>
                  <Row className='p-2 me-2'>
                    {Object.keys(values.joursSemaine).map(day => (
                      <Col key={day} xl={2} md={2} lg={2} xs={4}>
                        <FormGroup check>
                          <input
                            type="checkbox"
                            name={`joursSemaine.${day}`}
                            checked={values.joursSemaine[day]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <Label for={`joursSemaine.${day}`} className=" fw-bold">{day.charAt(0).toUpperCase() + day.slice(1)}</Label>
                        </FormGroup>
                      </Col>
                    ))}
                  </Row>
                </FormGroup>
              </Col>

            </Row>
            <Row style={{ marginTop: '-20px' }}>
              <Col></Col>
              <Col>
                <button type='submit' className='form-control btnGestionFormations'>
                  <span className='fs-5 fw-600 text-white'>Enregistrer</span>
                </button>
              </Col>
              <Col>
                <button type='button' className='form-control bg-secondary' onClick={clickAnnuler}>
                  <span className='fs-5 fw-600 text-white'>Annuler</span>
                </button>
              </Col>
              <Col></Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}
