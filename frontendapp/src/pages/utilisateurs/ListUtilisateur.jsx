import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, FormGroup, Row, Col, ModalBody, Modal, ModalFooter, Button, Input } from 'reactstrap';
import { MyInput, MyLabel, MySelect } from '../../components/Forms/Forms';
import { MyTable } from '../../components/table/Table';
import { users as usersData } from '../../data/users.js';
import photo from '../../image/team-2.jpg';
import Select from 'react-select'

function ListUtilisateur() {
  const [elements, setElements] = useState({
    option: null,
    recherche: '',
    type: null,
    statut: null,
  });

  const [filteredUtilisateurs, setFilteredUtilisateurs] = useState(usersData);
  const [page, setPage] = useState(1);
  const elementsPerPage = 2; // Nombre d'éléments par page
  const [modal, setModal] = useState(false);
  const [selectedUtilisateur, setSelectedUtilisateur] = useState(null);

  const toggle = () => setModal(!modal);

  const openModal = (utilisateur) => {
    setSelectedUtilisateur(utilisateur);
    toggle();
  }

  const handleInputChange = (name, value) => {
    setElements(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleReset = (fieldName) => {
    setElements(prevState => ({
      ...prevState,
      [fieldName]: null
    }));
  };

  useEffect(() => {
    const filterUtilisateurs = () => {
      let filtered = usersData;

      // Filter by type
      if (elements.type) {
        filtered = filtered.filter(utilisateur => utilisateur.type.toLowerCase().includes(elements.type.value.toLowerCase()));
      }

      // Filter by statut
      if (elements.statut) {
        filtered = filtered.filter(utilisateur => utilisateur.statut.includes(elements.statut.value));
      }

      // Search by selected option
      if (elements.option && elements.recherche) {
        filtered = filtered.filter(utilisateur => {
          switch (elements.option.value) {
            case 'numero':
              return utilisateur.code.toLowerCase().includes(elements.recherche.toLowerCase());
            case 'nomPrenom':
              return utilisateur.nomComplet.toLowerCase().includes(elements.recherche.toLowerCase());
            case 'adresse':
              return utilisateur.adresse.toLowerCase().includes(elements.recherche.toLowerCase());
            default:
              return true;
          }
        });
      }

      setFilteredUtilisateurs(filtered);
    };

    filterUtilisateurs();
  }, [elements]);

  // Calcule l'index de début et de fin pour la pagination
  const startIndex = (page - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;

  // Sélectionne les éléments à afficher sur la page actuelle
  const currentElements = filteredUtilisateurs.slice(startIndex, endIndex);

  // Fonctions pour passer à la page précédente et suivante
  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    if (endIndex < filteredUtilisateurs.length) {
      setPage(page + 1);
    }
  };

  return (
    <div className='mb-5'>
      <Breadcrumb listTag="div">
        <BreadcrumbItem>
          <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Accueil</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Liste des utilisateurs</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col lg={6} md={12}>
          <Card className='px-1'>
            <Row>
              <Col xs={12} md={6}>
                <Row><MyLabel text={'Option de recherche'} /></Row>
                <Select
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      height: 'auto',
                      minHeight: '40px',
                      border: '1px solid black',
                      color: 'black'
                    }),
                  }}
                  value={elements.option}
                  onChange={(selectedOption) => handleInputChange('option', selectedOption)}
                  options={[
                    { label: 'Numero', value: 'numero' },
                    { label: 'Nom ou prénom', value: 'nomPrenom' },
                    { label: 'Adresse', value: 'adresse' },
                  ]}
                />
              </Col>
              <Col>
                <FormGroup>
                  <Row><MyLabel text={'Rechercher'} /></Row>
                  <Input
                    className='p-2 border-black text-black'
                    id="search"
                    placeholder="Rechercher"
                    type="text"
                    value={elements.recherche}
                    onChange={(e) => handleInputChange('recherche', e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className='px-1'>
            <Row>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Row>
                    <MyLabel text={'Trie par type'} />
                  </Row>
                  <Row>
                    <Col xs={10} lg={9}>
                      <Select
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            height: 'auto',
                            minHeight: '40px',
                            border: '1px solid black',
                            color: 'black'
                          }),
                        }}
                        value={elements.type}
                        onChange={(selectedOption) => handleInputChange('type', selectedOption)}
                        options={[
                          { label: 'Formateur', value: 'formateur' },
                          { label: 'Organisme', value: 'organisme' },
                          { label: 'Désirant', value: 'désirant' },
                        ]}
                      />
                    </Col>
                    <Col><i className="bi bi-x-lg fs-5 fw-bold" onClick={() => handleReset('type')}></i></Col>
                  </Row>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Row>
                    <MyLabel text={'Trie par statut'} />
                  </Row>
                  <Row>
                    <Col xs={10} lg={9}>
                      <Select
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            height: 'auto',
                            minHeight: '40px',
                            border: '1px solid black',
                            color: 'black'
                          }),
                        }}
                        value={elements.statut}
                        onChange={(selectedOption) => handleInputChange('statut', selectedOption)}
                        options={[
                          { label: 'Actif', value: 'actif' },
                          { label: 'Bloqué', value: 'bloque' },
                        ]}
                      />
                    </Col>
                    <Col><i className="bi bi-x-lg fs-5 fw-bold" onClick={() => handleReset('statut')}></i></Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <MyTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Numero</th>
              <th>Photo</th>
              <th>Prénom & Nom</th>
              <th>Téléphone</th>
              <th>Adresse</th>
              <th>Email</th>
              <th>Type</th>
              <th>Statut</th>
              <th colSpan={2}>Option</th>
              <th>Détail</th>
            </tr>
          </thead>
          <tbody>
            {currentElements.map((utilisateur, index) => (
              <tr key={utilisateur.id}>
                <td>{startIndex + index + 1}</td>
                <td>{utilisateur.code}</td>
                <td><img src={photo} alt="" height={40} width={40} style={{ borderRadius: '50%' }} /></td>
                <td>{utilisateur.nomComplet}</td>
                <td>{utilisateur.telephone}</td>
                <td>{utilisateur.adresse}</td>
                <td>{utilisateur.email}</td>
                <td>{utilisateur.type}</td>
                <td>{utilisateur.statut ? 'Actif' : 'Bloqué'}</td>
                <td><i className="bi bi-pen fs-5 fw-bold text-success" onClick={() => { }} title='Modifier'></i></td>
                <td>{utilisateur.statut ?
                  <i className="bi bi-x-lg fs-5 fw-bold text-danger" onClick={() => { }} title='Bloqué'></i>
                  :
                  <i className="bi bi-check-lg fs-5 fw-bold" onClick={() => { }} title='Debloqué'></i>}
                </td>
                <td><i className="bi bi-eye-fill" onClick={() => openModal(utilisateur)}></i></td>
              </tr>
            ))}
          </tbody>
        </MyTable>
      </div>
      <Row>
        <Col></Col>
        <Col xs={12} md={5} lg={5} xl={4}>
          <div className="ms-5">
            <button onClick={goToPreviousPage} disabled={page === 1} className='btn text-white fw-bold' style={{ backgroundColor: '#03031efc' }}><i className="bi fs-5 bi-arrow-left"></i></button>
            <span className='mx-2 fs-4 fw-bold'>Page {page}</span>
            <button onClick={goToNextPage} disabled={endIndex >= filteredUtilisateurs.length} className='btn text-white fw-bold' style={{ backgroundColor: '#03031efc' }}> <i className="bi fs-5 bi-arrow-right"></i></button>
          </div>
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={toggle} scrollable={true} className='fs-5' style={{ maxHeight: '80vh', width: '200vw', marginTop: '10vh' }}>

        <ModalBody>
          {selectedUtilisateur && (
            <div>
              {selectedUtilisateur.type === 'Formateur' && (
                <div>
                  <Row>
                    <Col></Col>
                    <Col><img src={photo} alt="photo" height={200} style={{ borderRadius: '40%' }} /></Col>
                    <Col></Col>

                  </Row>
                  <h2 className='text-center fs-1 fw-bold mt-2'>{selectedUtilisateur && selectedUtilisateur.nomComplet}</h2>
                  <Row>
                    <Col>
                      <Row className=' p-1 mt-2 styleCol'>
                        <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-geo-alt fs-5 fw-bold"></i> Adresse: </div></Col>
                        <Col>{selectedUtilisateur.adresse}</Col>
                      </Row>
                      <Row className=' p-1 mt-2'>
                        <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-telephone fs-5 fw-bold"></i> Telephone: </div></Col>
                        <Col>{selectedUtilisateur.telephone}</Col>
                      </Row>
                      <Row className=' p-1 mt-2 styleCol'>
                        <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-envelope fs-5 fw-bold"></i> Email: </div></Col>
                        <Col>{selectedUtilisateur.email}</Col>
                      </Row>
                      <Row className=' p-1 mt-2 '>
                        <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Linkdein :</div></Col>
                        <Col>{selectedUtilisateur.linkedin}</Col>
                      </Row>
                      <Row className=' p-1 mt-2 styleCol'>
                        <Col xs={6} md={5}><div className='fs-5 text-justify fw-bold'> Niveau études: </div></Col>
                        <Col>{selectedUtilisateur.niveauEtude}</Col>
                      </Row>
                      <Row className=' p-1 mt-2'>
                        <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Competances: </div></Col>
                        <Col>{selectedUtilisateur.competances.map(competances => (<li key={competances.id} >{competances.libelle}</li>))}</Col>
                      </Row>
                      <Row className=' p-1 mt-2 styleCol'>
                        <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Domaine d'expertises:</div></Col>
                        <Col>{selectedUtilisateur.domaineExpertise.map(domaineExpertise => (<li key={domaineExpertise.id} >{domaineExpertise.libelle}</li>))}</Col>
                      </Row>
                      <Row className=' p-1 mt-2 '>
                        <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Certifications: </div></Col>
                        <Col>{selectedUtilisateur.certifications.map(certifications => (<li key={certifications.id} >{certifications.libelle}</li>))}</Col>
                      </Row>

                    </Col>
                  </Row>
                </div>
              )}

              {selectedUtilisateur.type === 'Désirant' && (
                <div>
                  <div>
                    <div>
                      <Row>
                        <Col></Col>
                        <Col><img src={photo} alt="photo" height={200} style={{ borderRadius: '40%' }} /></Col>
                        <Col></Col>

                      </Row>
                      <h2 className='text-center fs-1 fw-bold mt-2'>{selectedUtilisateur && selectedUtilisateur.nomComplet}</h2>
                      <Row>
                        <Col>
                          <Row className=' p-1 mt-2 styleCol'>
                            <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-geo-alt fs-5 fw-bold"></i> Adresse: </div></Col>
                            <Col>{selectedUtilisateur.adresse}</Col>
                          </Row>
                          <Row className=' p-1 mt-2'>
                            <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-telephone fs-5 fw-bold"></i> Telephone: </div></Col>
                            <Col>{selectedUtilisateur.telephone}</Col>
                          </Row>
                          <Row className=' p-1 mt-2 styleCol'>
                            <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-envelope fs-5 fw-bold"></i> Email: </div></Col>
                            <Col>{selectedUtilisateur.email}</Col>
                          </Row>


                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              )}

              {selectedUtilisateur.type === 'Organisme' && (
                <div>
                  <div>
                    <Row>
                      <Col></Col>
                      <Col><img src={photo} alt="photo" height={200} style={{ borderRadius: '40%' }} /></Col>
                      <Col></Col>

                    </Row>
                    <h2 className='text-center fs-1 fw-bold mt-2'>{selectedUtilisateur && selectedUtilisateur.nomComplet}</h2>
                    <Row>
                      <Col>
                        <Row className=' p-1 mt-2 styleCol'>
                          <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-geo-alt fs-5 fw-bold"></i> Adresse: </div></Col>
                          <Col>{selectedUtilisateur.adresse}</Col>
                        </Row>
                        <Row className=' p-1 mt-2'>
                          <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-telephone fs-5 fw-bold"></i> Telephone: </div></Col>
                          <Col>{selectedUtilisateur.telephone}</Col>
                        </Row>
                        <Row className=' p-1 mt-2 styleCol'>
                          <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-envelope fs-5 fw-bold"></i> Email: </div></Col>
                          <Col>{selectedUtilisateur.email}</Col>
                        </Row>
                        <Row className=' p-1 mt-2 '>
                          <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Site web :</div></Col>
                          <Col>{selectedUtilisateur.siteWeb}</Col>
                        </Row>
                        <Row className=' p-1 mt-2 styleCol'>
                          <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Siret: </div></Col>
                          <Col>{selectedUtilisateur.numeroSiret}</Col>
                        </Row>
                        <Row className=' p-1 mt-2 '>
                          <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Formateurs: </div></Col>
                          <Col>{selectedUtilisateur.nombreFormateur}</Col>
                        </Row>
                        <Row className=' p-1 mt-2 styleCol'>
                          <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Domaine d'expertises:</div></Col>
                          <Col>{selectedUtilisateur.domaineExpertise.map(domaineExpertise => (<li key={domaineExpertise.id} >{domaineExpertise.libelle}</li>))}</Col>
                        </Row>
                        <Row className=' p-1 mt-2 '>
                          <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Description: </div></Col>
                          <Col>{selectedUtilisateur.description}</Col>
                        </Row>

                      </Col>
                    </Row>
                  </div>
                </div>
              )}
            </div>
          )}
        </ModalBody>

        <ModalFooter>
          <Row>
            <Col></Col>
            <Col>
            </Col>
            <Col>
              <button type='button' onClick={toggle} className='p-2 fw-bold form-control bg-warning text-black'>
                Fermer
              </button>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ListUtilisateur;

