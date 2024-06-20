import React, { useRef, useState } from "react";
import { Formik, Form as FormikForm, FieldArray } from "formik";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Card,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import {
  MyButton,
  MyLabel,
  MyInput,
  MySelect,
} from "../../components/Forms/Forms.jsx";
import "./formation.scss";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Axios from "../../components/Axios.jsx";

const validationSchemaEtape1 = yup.object().shape({
  titre: yup
    .string()
    .required("Le titre est requis")
    .min(3, "Minimum 3 caractères"),
  description: yup
    .string()
    .required("La description est requise")
    .min(10, "Minimum 10 caractères"),
  domaine: yup.string().required("Le domaine est requis"),
  format: yup.string().required("Le format est requis"),
  langue: yup.string().required("La langue est requise"),
  tags: yup.string().required("Les tags sont requis"),
  niveau: yup.string().required("Le niveau est requis"),
  public_vise: yup.string(),
});

const validationSchemaEtape2 = yup.object().shape({
  objectifs: yup.array().of(yup.string()),
  prerequis: yup.array().of(yup.string()),
  criteres: yup.array().of(yup.string()),
});

export default function AjoutFormation() {
  const toast = useRef(null);
  const [etape, setEtape] = useState(1);
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const initialValues = {
    titre: "",
    description: "",
    domaine: "",
    langue: "",
    tags: "",
    public_vise: "",
    format: "presentielle",
    niveau: "debutant",
    prerequis: [""],
    objectifs: [""],
    criteres: [""],
  };

  const handleSubmit = async (values, actions) => {
    try {
      // Créer un objet FormData
      const formData = new FormData();
      formData.append("titre", values.titre);
      formData.append("description", values.description);
      formData.append("format", values.format);
      formData.append("niveau", values.niveau);
      formData.append("photo", image);
      formData.append("tags", values.tags);
      formData.append("langue", values.langue);
      formData.append("domaine", values.domaine);
      formData.append("public_vise", values.public_vise);
      formData.append("utilisateur", 3); // ou récupéré dynamiquement

      // Envoyer les données de formation via FormData
      const formationResponse = await Axios.post(
        "formations/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Formation Response:", formationResponse); // Log entire response to debug

      const formationId = formationResponse.data.id;
      console.log("Formation ID:", formationId);

      // Ajouter l'ID de la formation aux objectifs, critères, prérequis et année
      for (const objectif of values.objectifs) {
        await Axios.post("formations/objectifs", {
          libelle: objectif,
          formation: formationId,
        });
      }

      for (const critere of values.criteres) {
        await Axios.post("formations/criteres", {
          libelle: critere,
          formation: formationId,
        });
      }

      for (const prerequi of values.prerequis) {
        await Axios.post("formations/prerequis", {
          libelle: prerequi,
          formation: formationId,
        });
      }

      const anneeData = {
        libelle: new Date().getFullYear().toString(),
        formation: formationId,
      };

      await Axios.post("formations/annee", anneeData);

      console.log("Données envoyées avec succès");
      toast.current.show({
        severity: "success",
        summary: "Succès",
        detail: "Formation ajouter avec succès",
        life: 3000
      });
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
      toast.current.show({
        severity: "error",
        summary: "Erreur",
        detail: "Erreur lors de la soumission du formulaire",
        life: 4000
      });
    }
  };

  return (
    <div>
      <Toast ref={toast} position="top-center" style={{ maxWidth: '300px' }} />
      <Formik
        initialValues={initialValues}
        validationSchema={
          etape === 1 ? validationSchemaEtape1 : validationSchemaEtape2
        }
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
          setEtape(1);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          validateForm,
        }) => (
          <div>
            <Breadcrumb listTag="div">
              <BreadcrumbItem>
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="fs-5 fw-bold text-black"
                >
                  Accueil
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link
                  to="/admin/formation/ajoutformation"
                  style={{ textDecoration: "none" }}
                  className="fs-5 fw-bold text-black"
                >
                  Ajout
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
            <Row className="ps-1 mt-2">
              <Col
                xs={10}
                lg={4}
                className="p-2 ms-2 text-white text-center fs-3"
                style={{ backgroundColor: "#03031efc" }}
              >
                Ajout d'une formation
              </Col>
              <Col></Col>
            </Row>

            <Card
              style={{ border: "3px solid #03031efc", borderRadius: "0" }}
              className="p-3"
            >
              <FormikForm
                className={`bg-white ${window.innerWidth <= 576 ? "" : ""}`}
                onSubmit={handleSubmit}
              >
                {etape === 1 && (
                  <div>
                    <h4 className="text-center mb-2">
                      Etape 1/2: Informations obligatoires
                    </h4>
                    <Row>
                      <Col xl={7}>
                        <FormGroup>
                          <MyLabel forMyLabel="titreFormation" text="Titre" />
                          <MyInput
                            id="titreFormation"
                            name="titre"
                            placeholder="Entrez le titre"
                            type="text"
                            value={values.titre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </FormGroup>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Row><MyLabel
                                forMyLabel="public_vise"
                                text="Public visé"
                              /></Row>
                              <MyInput
                                id="public_vise"
                                name="public_vise"
                                placeholder="Ex: Etudiant, Eleve"
                                type="text"
                                value={values.public_vise}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                      <Col xl={5}>
                        <FormGroup>
                          <MyLabel
                            forMyLabel="description"
                            text="Description"
                          />
                          <MyInput
                            id="description"
                            name="description"
                            type="textarea"
                            rows={4}
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12" xl="4">
                        <FormGroup>
                          <MyLabel forMyLabel="domaine" text="Domaine" />
                          <MyInput
                            id="domaine"
                            name="domaine"
                            placeholder="Entrez le domaine de la formation"
                            type="text"
                            value={values.domaine}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6" xl="4">
                        <FormGroup>
                          <MyLabel forMyLabel="format" text="Format" />
                          <MySelect
                            id="format"
                            name="format"
                            value={values.format}
                            onChange={(option) =>
                              setFieldValue("format", option.value)
                            }
                            options={[
                              { label: "Présentielle", value: "presentielle" },
                              { label: "En ligne", value: "ligne" },
                              { label: "À domicile", value: "domicile" },
                            ]}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6" xl="4">
                        <FormGroup>
                          <MyLabel forMyLabel="niveau" text="Niveau" />
                          <MySelect
                            id="niveau"
                            name="niveau"
                            value={values.niveau}
                            onChange={(option) =>
                              setFieldValue("niveau", option.value)
                            }
                            options={[
                              { label: "Débutant", value: "debutant" },
                              {
                                label: "Intermédiaire",
                                value: "intermediaire",
                              },
                              { label: "Supérieur", value: "superieur" },
                            ]}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="12" lg="4">
                        <FormGroup>
                          <MyLabel forMyLabel="langue" text="Langue" />
                          <MyInput
                            id="langue"
                            name="langue"
                            placeholder="Entrez la langue de la formation"
                            type="text"
                            value={values.langue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </FormGroup>
                      </Col>

                      <Col md="12" lg="8">
                        <FormGroup>
                          <MyLabel forMyLabel="tags" text="Tags" />
                          <MyInput
                            id="tags"
                            name="tags"
                            placeholder="Entrez des mots clés qui définissent la formation"
                            type="text"
                            value={values.tags}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </FormGroup>
                      </Col>

                    </Row>
                  </div>
                )}
                {etape === 2 && (
                  <div>
                    <h3 className="text-center mb-2">
                      Etape 2/2: Informations optionnelles
                    </h3>
                    <Row>
                      <Col md="12" lg="12" xl="6">
                        <Row>
                          <MyLabel
                            forMyLabel="objectifs"
                            text="Objectifs (Optionnel)"
                          />
                        </Row>
                        <Card className="border-secondary">
                          <CardBody>
                            <FieldArray
                              name="objectifs"
                              render={(arrayHelpers) => (
                                <div>
                                  {values.objectifs &&
                                    values.objectifs.map((objectif, index) => (
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
                                            onClick={() =>
                                              arrayHelpers.push("")
                                            }
                                          ></i>
                                          {index > 0 && (
                                            <i
                                              className="bi bi-dash fs-5 btnplus"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              }
                                            ></i>
                                          )}
                                        </Col>
                                      </Row>
                                    ))}
                                </div>
                              )}
                            />
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="12" lg="12" xl="6">
                        <Row>
                          <MyLabel
                            forMyLabel="prerequis"
                            text="Prérequis (Optionnel)"
                          />
                        </Row>
                        <Card className="border-secondary">
                          <CardBody>
                            <FieldArray
                              name="prerequis"
                              render={(arrayHelpers) => (
                                <div>
                                  {values.prerequis &&
                                    values.prerequis.map((prerequis, index) => (
                                      <Row key={index} className="p-2">
                                        <Col xs={1}>
                                          <h5>{index + 1}</h5>
                                        </Col>
                                        <Col xs={9}>
                                          <FormGroup>
                                            <MyInput
                                              id={`prerequis-${index}`}
                                              name={`prerequis[${index}]`}
                                              placeholder="Entrez un prérequis"
                                              type="text"
                                              value={prerequis}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                            />
                                          </FormGroup>
                                        </Col>
                                        <Col xs={1}>
                                          <i
                                            className="bi bi-plus fs-5 me-3 btnplus"
                                            onClick={() =>
                                              arrayHelpers.push("")
                                            }
                                          ></i>
                                          {index > 0 && (
                                            <i
                                              className="bi bi-dash fs-5 me-3 btnplus"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              }
                                            ></i>
                                          )}
                                        </Col>
                                      </Row>
                                    ))}
                                </div>
                              )}
                            />
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="12" lg="12" xl="6" className="mt-3">
                        <Row>
                          <MyLabel
                            forMyLabel="criteres"
                            text="Critères (Optionnel)"
                          />
                        </Row>
                        <Card className="border-secondary">
                          <CardBody>
                            <FieldArray
                              name="criteres"
                              render={(arrayHelpers) => (
                                <div>
                                  {values.criteres &&
                                    values.criteres.map((critere, index) => (
                                      <Row key={index} className="p-2">
                                        <Col xs={1}>
                                          <h5>{index + 1}</h5>
                                        </Col>
                                        <Col xs={9}>
                                          <FormGroup>
                                            <MyInput
                                              id={`critere-${index}`}
                                              name={`criteres[${index}]`}
                                              placeholder="Entrez un critère"
                                              type="text"
                                              value={critere}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                            />
                                          </FormGroup>
                                        </Col>
                                        <Col xs={1}>
                                          <i
                                            className="bi bi-plus fs-5 me-5 btnplus"
                                            onClick={() =>
                                              arrayHelpers.push("")
                                            }
                                          ></i>
                                          {index > 0 && (
                                            <i
                                              className="bi bi-dash fs-5 me-5 btnplus"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              }
                                            ></i>
                                          )}
                                        </Col>
                                      </Row>
                                    ))}
                                </div>
                              )}
                            />
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="12" lg="12" xl="6" className="mt-3">
                        <Row>
                          <MyLabel
                            forMyLabel="criteres"
                            text="Image (Optionnel)"
                          />
                        </Row>
                        <Card className="border-secondary">
                          <CardBody>
                            <Row>
                              <Col xs={6} className="text-end">
                                {image ? (
                                  <img
                                    src={URL.createObjectURL(image)}
                                    alt=""
                                    height={100}
                                    width={100}
                                    style={{
                                      border: "1px solid black",
                                      borderRadius: "10%",
                                    }}
                                  />
                                ) : (
                                  <img
                                    src=""
                                    alt=""
                                    className='class="bi bi-image-alt"'
                                    height={100}
                                    width={100}
                                    style={{
                                      border: "1px solid black",
                                      borderRadius: "10%",
                                    }}
                                  />
                                )}
                              </Col>
                              <Col xs={6} md={3} className="mt-4">
                                <input
                                  type="file"
                                  ref={inputRef}
                                  className="d-none"
                                  onChange={handleImageChange}
                                  name="image"
                                  id=""
                                />
                                <button
                                  type="button"
                                  onClick={handleImageClick}
                                  className={
                                    "mt-3 form-control bg-warning text-black fs-5 fw-bold"
                                  }
                                >
                                  Photo
                                </button>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                )}

                <Row className={etape === 1 ? "mt-1" : "mt-4"}>
                  <Col></Col>
                  <Col lg={2}>
                    {etape === 2 && (
                      <Button
                        className="form-control bg-warning text-black fw-bold"
                        onClick={() => setEtape(etape - 1)}
                      >
                        Précédent
                      </Button>
                    )}
                  </Col>
                  <Col lg={2}>
                    {etape === 1 && (
                      <Button
                        className="form-control bg-warning text-black fw-bold"
                        onClick={() => {
                          validateForm().then((errors) => {
                            if (Object.keys(errors).length === 0) {
                              setEtape(2);
                            }
                          });
                        }}
                      >
                        Suivant
                      </Button>
                    )}
                    {etape === 2 && (
                      <Button
                        type="submit"
                        className="form-control fw-bold"
                        style={{ backgroundColor: "#03031efc" }}
                      >
                        Valider
                      </Button>
                    )}
                  </Col>
                </Row>
              </FormikForm>
            </Card>
          </div>
        )}
      </Formik>
    </div>
  );
}
