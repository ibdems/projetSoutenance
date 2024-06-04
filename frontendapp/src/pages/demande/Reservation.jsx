import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Navbar from "../../layoutsPublic/navbar/Navbar";
import ContactezNous from "../accueil/ContactezNous";
import InfoSection from "../accueil/InfoSection";
import Footer from "../accueil/Footer";
import { MyInput, MyLabel, MySelect } from "../../components/Forms/Forms";
import profil from "../../image/profil.svg";

// Schéma de validation avec Yup
const schemaValidation = Yup.object().shape({
  prenom: Yup.string().required("Le prénom est requis"),
  nom: Yup.string().required("Le nom est requis"),
  genre: Yup.string().required("Le genre est requis"),
  dateNaissance: Yup.date().required("La date de naissance est requise"),
  lieuNaissance: Yup.string().required("Le lieu de naissance est requis"),
  telephone: Yup.string().required("Le téléphone est requis"),
  email: Yup.string()
    .email("Adresse email invalide")
    .required("L'adresse email est requise"),
  profession: Yup.string().required("La profession est requise"),
  universite: Yup.string(),
  specialite: Yup.string(),
  adresse: Yup.string().required("L'adresse est requise"),
  motivation: Yup.string().required("La motivation est requise"),
});

export default function Reservation() {
  const handleSubmit = (values) => {
    // Gérer la soumission du formulaire ici
    console.log(values);
  };

  return (
    <div>
      <Navbar contacteznous={"contacteznous"} />
      <section className="service_section layout_padding">
        <div className="container mt-5">
          <h3 className="text-center mb-3">
            Inscription à la formation Développement Web
          </h3>

          <Formik
            initialValues={{
              prenom: "",
              nom: "",
              genre: "",
              dateNaissance: "",
              lieuNaissance: "",
              telephone: "",
              email: "",
              profession: "",
              universite: "",
              specialite: "",
              adresse: "",
              motivation: "",
            }}
            validationSchema={schemaValidation}
            onSubmit={handleSubmit}
          >
            {({ handleChange, values }) => (
              <Form>
                <Row className="me-md-5 ms-md-5">
                  <Col className="mb-3" lg={6}>
                    <Row><MyLabel text={"Prénom"} forLabel={"prenom"} /></Row>
                    
                    <MyInput
                      type={"text"}
                      name="prenom"
                      value={values.prenom}
                      onChange={handleChange}
                    />
                    
                  </Col>
                  <Col className="mb-3">
                    <Row><MyLabel text={"Nom"} forLabel={"nom"} /></Row>
                    
                    <MyInput
                      type={"text"}
                      name="nom"
                      value={values.nom}
                      onChange={handleChange}
                    />
                    
                  </Col>
                </Row>
                <Row className="me-md-5 ms-md-5">
                  <Col className="mb-3" lg={6}>
                    <Row><MyLabel text={"Genre"} forLabel={"genre"} /></Row>
                    
                    <MySelect
                      name="genre"
                      value={values.genre}
                      onChange={handleChange}
                      options={[
                        { label: "Masculin", value: "masculin" },
                        { label: "Féminin", value: "feminin" },
                      ]}
                    />
                   
                  </Col>
                  <Col className="mb-3">
                      <Row><MyLabel text={"Téléphone"} forLabel={"telephone"} /></Row>
                    
                    <MyInput
                      type={"text"}
                      name="telephone"
                      value={values.telephone}
                      onChange={handleChange}
                    />
                    
                  </Col>
                </Row>
                <Row className="me-md-5 ms-md-5">
                  <Col className="mb-3" lg={6}>
                    <Row>
                      <MyLabel
                        text={"Date de naissance"}
                        forLabel={"dateNaissance"}
                      />
                    </Row>

                    <MyInput
                      type={"date"}
                      name="dateNaissance"
                      value={values.dateNaissance}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col className="mb-3">
                    <Row>
                    <MyLabel
                      text={"Lieu de naissance"}
                      forLabel={"lieuNaissance"}
                    />
                    </Row>
                    
                    <MyInput
                      type={"text"}
                      name="lieuNaissance"
                      value={values.lieuNaissance}
                      onChange={handleChange}
                    />
                    
                  </Col>
                </Row>
                <Row className="me-md-5 ms-md-5">
                  <Col className="mb-3" lg={6}>
                    <Row><MyLabel text={"Email"} forLabel={"email"} /></Row>
                    
                    <MyInput
                      type={"email"}
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    
                  </Col>
                  <Col className="mb-3">
                      <Row><MyLabel text={"Profession"} forLabel={"profession"} /></Row>
                    
                    <MyInput
                      type={"text"}
                      name="profession"
                      value={values.profession}
                      onChange={handleChange}
                    />
                    
                  </Col>
                </Row>
                <Row className="me-md-5 ms-md-5">
                  <Col className="mb-3" lg={6}>
                    <Row><MyLabel text={"Adresse"} forLabel={"adresse"} /></Row>
                    
                    <MyInput
                      type={"text"}
                      name="adresse"
                      value={values.adresse}
                      onChange={handleChange}
                    />
                    
                  </Col>
                  <Col className="mb-3">
                      <Row><MyLabel
                      text={"Université (Si vous êtes étudiant)"}
                      forLabel={"universite"}
                    /></Row>
                    
                    <MyInput
                      type={"text"}
                      name="universite"
                      value={values.universite}
                      onChange={handleChange}
                    />
                    
                  </Col>
                </Row>
                <Row className="me-md-5 ms-md-5">
                  <Col className="mb-3">
                      <Row><MyLabel
                      text={"Spécialité (Si vous êtes étudiant)"}
                      forLabel={"specialite"}
                    /></Row>
                    
                    <MyInput
                      type={"text"}
                      name="specialite"
                      value={values.specialite}
                      onChange={handleChange}
                    />
                    
                  </Col>
                  <Col className="mb-3" lg={6}>
                    <Row>
                    <MyLabel
                      text={"Motivation (Vos motivations pour la formation)"}
                      forLabel={"motivation"}
                    />
                    </Row>
                    
                    <MyInput
                      type={"textarea"}
                      rows={2}
                      name="motivation"
                      value={values.motivation}
                      onChange={handleChange}
                    />
                    
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-3"></Col>
                  <Col className="mb-3" xs={8} md={4}>
                    <button
                      type="submit"
                      className="form-control text-white fs-4"
                      style={{ backgroundColor: "#03031efc" }}
                    >
                      Valider
                    </button>
                  </Col>
                  <Col className="mb-3"></Col>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      <div style={{ marginTop: "-150px" }}>
        <ContactezNous />
      </div>

      <InfoSection></InfoSection>
      <Footer />
    </div>
  );
}
