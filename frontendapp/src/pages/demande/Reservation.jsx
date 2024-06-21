import React, { useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import Navbar from "../../layoutsPublic/navbar/Navbar";
import ContactezNous from "../accueil/ContactezNous";
import InfoSection from "../accueil/InfoSection";
import Footer from "../accueil/Footer";
import { MyInput, MyLabel, MySelect } from "../../components/Forms/Forms";
import './reservation.scss';
import Axios from "../../components/Axios";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

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
  const toast = useRef(null);
  const initialValues = {
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
  }
  const { sessionId } = useParams();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("prenom", values.prenom);
      formData.append("nom", values.nom);
      formData.append("genre", values.genre);
      formData.append("telephone", values.telephone);
      formData.append("date_naissance", values.dateNaissance);
      formData.append("lieu_naissance", values.lieuNaissance);
      formData.append("email", values.email);
      formData.append("adresse", values.adresse);
      formData.append("universite", values.universite);
      formData.append("specialite", values.specialite);
      formData.append("motivation", values.motivation);
      formData.append("session", sessionId);
      formData.append("utilisateur", 5);
      // Ajouter la date actuelle au format AAAA-MM-JJ
      const today = new Date();
      const formattedDate = today.toISOString();
      // .split('T')[0] pour avoir juste la date et non le temps
      formData.append("date", formattedDate);

      const demandeResponse = await Axios.post("sessions/demande/", formData);

      console.log(demandeResponse.data);
      toast.current.show({
        severity: "success",
        summary: "Succès",
        detail: "Demande d'inscription envoyée avec succès",
        life: 4000
      });

      // Réinitialiser le formulaire après le succès
      resetForm();
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
      toast.current.show({
        severity: "error",
        summary: "Erreur",
        detail: "Erreur lors de la soumission du formulaire",
        life: 5000
      });
    }
  };


  return (
    <div>
      <Toast ref={toast} position="top-center" style={{ maxWidth: '300px' }} />
      <Navbar contacteznous={"contacteznous"} />
      <section className="service_section layout_padding">
        <Card className="container">
          <CardHeader className="text-white" style={{ backgroundColor: '#03031efc', border: '1px solid #03031efc' }}>
            <h3 className="text-center mb-3">
              Demande d'inscription
            </h3>
          </CardHeader>
          <CardBody className="container p-2" style={{ border: '1px solid #03031efc' }}>
            <Formik
              initialValues={initialValues}
              validationSchema={schemaValidation}
              onSubmit={(handleSubmit)}
            >
              {({ handleChange, values, setFieldValue }) => (
                <Form>
                  <Row className="me-md-5 ms-md-5">
                    <Col className="mb-3" lg={6}>
                      <Row>
                        <MyLabel text={"Prénom"} forLabel={"prenom"} />
                      </Row>

                      <MyInput
                        type={"text"}
                        name="prenom"
                        value={values.prenom}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col className="mb-3">
                      <Row>
                        <MyLabel text={"Nom"} forLabel={"nom"} />
                      </Row>

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
                      <Row>
                        <MyLabel text={"Genre"} forLabel={"genre"} />
                      </Row>

                      <MySelect
                        name="genre"
                        value={values.genre}
                        onChange={(option) => setFieldValue('genre', option.value)}
                        options={[
                          { label: "Masculin", value: "masculin" },
                          { label: "Féminin", value: "feminin" },
                        ]}
                      />
                    </Col>
                    <Col className="mb-3">
                      <Row>
                        <MyLabel text={"Téléphone"} forLabel={"telephone"} />
                      </Row>

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
                      <Row>
                        <MyLabel text={"Email"} forLabel={"email"} />
                      </Row>

                      <MyInput
                        type={"email"}
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col className="mb-3">
                      <Row>
                        <MyLabel text={"Profession"} forLabel={"profession"} />
                      </Row>

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
                      <Row>
                        <MyLabel text={"Adresse"} forLabel={"adresse"} />
                      </Row>

                      <MyInput
                        type={"text"}
                        name="adresse"
                        value={values.adresse}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col className="mb-3">
                      <Row>
                        <MyLabel
                          text={"Université (Si vous êtes étudiant)"}
                          forLabel={"universite"}
                        />
                      </Row>

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
                      <Row>
                        <MyLabel
                          text={"Spécialité (Si vous êtes étudiant)"}
                          forLabel={"specialite"}
                        />
                      </Row>

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
                          text={"Motivation (Vos motivations pour la session)"}
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
          </CardBody>

        </Card>
      </section>

      <div style={{ marginTop: "-150px" }}>
        <ContactezNous />
      </div>

      <InfoSection />
      <Footer />
    </div>
  );
}
