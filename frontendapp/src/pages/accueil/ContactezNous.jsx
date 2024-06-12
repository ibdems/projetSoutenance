import React, { useRef } from "react";
import { MyInput } from "../../components/Forms/Forms";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Row } from "reactstrap";
import Axios from "../../components/Axios";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const validationSchema = Yup.object().shape({
  nomComplet: Yup.string()
    .required("Le nom complet est requis")
    .min(3, "Trop court"),
  email: Yup.string()
    .email("Format email invalide")
    .required("L'email est requis"),
  sujet: Yup.string().required("Le susjet est requis"),
  message: Yup.string()
    .required("Le message est requis")
    .min(5, "Le contenu est trop court"),
});
export default function ContactezNous() {
    const toast = useRef(null);
  const handleSubmit = (values, { resetForm }) => {
    let data = {
      ...values,
      destinateur: 11,
      objet: values.sujet,
      contenu: values.message,
      date_envoie: new Date()
    };
    try {
      Axios.post("messages/", data);
      console.log("Données envoyées avec succès");
      toast.current.show({
        severity: "success",
        summary: "Succès",
        detail: "Votre message à été envoyer avec success",
        life: 4000,
      });
      resetForm();
    } catch (err) {
      console.error("Erreur lors de l'envoie du message:", err);
      toast.current.show({
        severity: "error",
        summary: "Erreur",
        detail: "Erreur lors de l'envoie du message",
        life: 5000,
      });
    }

    
  };

  return (
    <>
      <Toast ref={toast} position="top-center" style={{ maxWidth: "300px" }} />
      <section className="client_section layout_padding" id="contacteznous">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center">
                <h1>Contactez nous</h1>
                <span className="line"></span>
                <p className="fs-3">
                  Avez vous des questions à nous posez ou quelques choses vous
                  inquiète t-elle ? Choisiez un des moyens et contactz-nous
                </p>
              </div>
              <div className="section-content">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <Formik
                      initialValues={{
                        nomComplet: "",
                        email: "",
                        sujet: "",
                        message: "",
                      }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                          <div className="mb-3">
                            <MyInput
                              type="text"
                              name="nomComplet"
                              placeholder="Nom Complet"
                            />
                          </div>
                          <div className="mb-3">
                            <MyInput
                              type="email"
                              name="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="mb-3">
                            <MyInput
                              type="text"
                              name="sujet"
                              placeholder="Sujet"
                            />
                          </div>
                          <div className="mb-3">
                            <MyInput
                              type="textarea"
                              name="message"
                              placeholder="Message"
                              rows={3}
                            />
                          </div>
                          <div>
                            <Row>
                              <Col xs={4}>
                                <Button
                                  type="submit"
                                  className="form-control fw-bold"
                                  style={{ backgroundColor: "#000121" }}
                                >
                                  Envoyer
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="contact-info white fs-4">
                      <div className="contact-item media">
                        {" "}
                        <i className="fa fa-map-marker-alt media-left media-right-margin"></i>
                        <div className="media-body">
                          <p className="mb-2">Address :</p>
                          <p className="fw-bold">
                            Université Gamal Abdel Nasser de Conakry
                          </p>
                        </div>
                      </div>
                      <div className="contact-item media">
                        {" "}
                        <i className="fa fa-mobile media-left media-right-margin"></i>
                        <div className="media-body">
                          <p className="mb-2">Telephone :</p>
                          <p className="">
                            <a
                              className="text-black fw-bold"
                              style={{ textDecoration: "none" }}
                              href="tel:+224625149588"
                            >
                              625159588
                            </a>{" "}
                          </p>
                        </div>
                      </div>
                      <div className="contact-item media">
                        {" "}
                        <i className="fa fa-envelope media-left media-right-margin"></i>
                        <div className="media-body">
                          <p className="mb-2">E-mail :</p>
                          <p className="">
                            <a
                              className="text-black fw-bold"
                              href="mailto:ibrahima882001@gmail.com"
                            >
                              ibrahima882001@gmail.com
                            </a>{" "}
                          </p>
                        </div>
                      </div>
                      <div className="contact-item media">
                        {" "}
                        <i className="fa fa-clock media-left media-right-margin"></i>
                        <div className="media-body">
                          <p className="mb-2">Jours de travaille</p>
                          <p className="fw-bold">H24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
