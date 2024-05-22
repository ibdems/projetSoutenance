import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, FormGroup, Row, Col, ModalBody, Modal, ModalFooter, Button } from 'reactstrap';
import { MyInput, MyLabel, MySelect } from '../../components/Forms/Forms';
import { MyTable } from '../../components/table/Table';
import { demande as demandeData } from '../../data/demande.js';
import photo from '../../image/team-2.jpg';
import Select from 'react-select';


function ListDemande() {
  const [elements, setElements] = useState({
    option: null,
    recherche: '',
    profession: null,
    genre: null,
  });

  const [filteredDemandes, setFilteredDemandes] = useState(demandeData);
  const [page, setPage] = useState(1);
  const elementsPerPage = 2; // Nombre d'éléments par page
  const [modal, setModal] = useState(false);
  const [selectedDemande, setSelectedDemande] = useState(null);

  const toggle = () => setModal(!modal);

  const openModal = (demande) => {
    setSelectedDemande(demande);
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
    const filterDemandes = () => {
      let filtered = demandeData;

      // Filter by profession
      if (elements.profession) {
        filtered = filtered.filter(demande => demande.profession.toLowerCase().includes(elements.profession.value.toLowerCase()));
      }

      // Filter by genre
      if (elements.genre) {
        filtered = filtered.filter(demande => demande.genre.toLowerCase().includes(elements.genre.value.toLowerCase()));
      }

      // Search by selected option
      if (elements.option && elements.recherche) {
        filtered = filtered.filter(demande => {
          switch (elements.option.value) {
            case 'numero':
              return demande.code.toLowerCase().includes(elements.recherche.toLowerCase());
            case 'nomPrenom':
              return demande.nomPrenom.toLowerCase().includes(elements.recherche.toLowerCase());
            case 'formation':
              return demande.formation.toLowerCase().includes(elements.recherche.toLowerCase());
            case 'session':
              return demande.session.toLowerCase().includes(elements.recherche.toLowerCase());
            default:
              return true;
          }
        });
      }

      setFilteredDemandes(filtered);
    };

    filterDemandes();
  }, [elements]);

  // Calcule l'index de début et de fin pour la pagination
  const startIndex = (page - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;

  // Sélectionne les éléments à afficher sur la page actuelle
  const currentElements = filteredDemandes.slice(startIndex, endIndex);

  // Fonctions pour passer à la page précédente et suivante
  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    if (endIndex < filteredDemandes.length) {
      setPage(page + 1);
    }
  };

  return (
    <div className='mb-5 mt-4'>
      <Breadcrumb listTag="div">
        <BreadcrumbItem>
          <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Accueil</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='/admin/demande/list' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Liste des demandes d'inscription</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col lg={6} md={12}>
          <Card className='p-1'>
            <Row>
              <Col xs={12} md={6}>
                <Row><MyLabel text={'Option de recherche'} /></Row>
                <MySelect
                  value={elements.option}
                  onChange={(selectedOption) => handleInputChange('option', selectedOption)}
                  options={[
                    { label: 'Numero', value: 'numero' },
                    { label: 'Nom ou prenom', value: 'nomPrenom' },
                    { label: 'Formation', value: 'formation' },
                    { label: 'Session', value: 'session' },
                  ]}
                />
              </Col>
              <Col>
                <FormGroup>
                  <Row><MyLabel text={'Rechercher'} /></Row>
                  <MyInput
                    id="search"

                    placeholder="Rechercher"
                    type="text"
                    value={elements.recherche}
                    onChange={(e) => handleInputChange('recherche', e)}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className='p-1'>
            <Row>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Row>
                    <MyLabel text={'Trie par statut'} />

                  </Row>
                  <Row>
                    <Col xs={10} lg={9}>
                      <MySelect
                        value={elements.profession}
                        onChange={(selectedOption) => handleInputChange('profession', selectedOption)}
                        options={[
                          { label: 'Eleve', value: 'eleve' },
                          { label: 'Etudiant', value: 'etudiant' },
                          { label: 'Employe', value: 'employe' },
                        ]}
                      />
                    </Col>
                    <Col><i className="bi bi-x-lg fs-5 fw-bold" onClick={() => handleReset('profession')}></i></Col>
                  </Row>

                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Row>
                    <MyLabel text={'Trie par genre'} />

                  </Row>
                  <Row>
                    <Col xs={10} lg={9}>
                      <MySelect
                        value={elements.genre}
                        onChange={(selectedOption) => handleInputChange('genre', selectedOption)}
                        options={[
                          { label: 'Masculin', value: 'masculin' },
                          { label: 'Feminin', value: 'feminin' },
                        ]}
                      />
                    </Col>
                    <Col><i className="bi bi-x-lg fs-5 fw-bold" onClick={() => handleReset('genre')}></i></Col>
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
            <th>Prenom & Nom</th>
            <th>Formation</th>
            <th>Session</th>
            <th>Genre</th>
            <th>Profession</th>
            <th colSpan={2}>Reponse</th>
            <th>Plus</th>
          </tr>
        </thead>
        <tbody>
          {currentElements.map((demande, index) => (
            <tr key={demande.id}>
              <td>{startIndex + index + 1}</td>
              <td>{demande.code}</td>
              <td><img src={photo} alt="" height={50} width={50} style={{ borderRadius: '50%' }} /></td>
              <td>{demande.nomPrenom}</td>
              <td>{demande.formation}</td>
              <td>{demande.session}</td>
              <td>{demande.genre}</td>
              <td>{demande.profession}</td>
              <td><i className="bi bi-check-lg fs-3 fw-bold text-success" onClick={() => { }} title='Accepter'></i></td>
              <td><i className="bi bi-x-lg fs-3 fw-bold text-danger" onClick={() => { }} title='Réfuser'></i></td>
              <td><i className="bi bi-eye-fill" onClick={() => openModal(demande)}></i></td>
            </tr>
          ))}
        </tbody>
      </MyTable>
      </div>
      <Row>
        <Col></Col>
        <Col xs={12} md={5} lg={4} xl={3}>
          <div className="ms-5">
            <button onClick={goToPreviousPage} disabled={page === 1} className='btn text-white fw-bold' style={{ backgroundColor: '#03031efc' }}><i className="bi fs-5 bi-arrow-left"></i></button>
            <span className='mx-2 fs-4 fw-bold'>Page {page}</span>
            <button onClick={goToNextPage} disabled={endIndex >= filteredDemandes.length} className='btn text-white fw-bold' style={{ backgroundColor: '#03031efc' }}> <i className="bi fs-5 bi-arrow-right"></i></button>
          </div>
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={toggle}  scrollable={true} className='fs-5'   style={{ maxHeight: '80vh', width: '200vw' , marginTop: '10vh'}}>

        <ModalBody>
          {selectedDemande && (
            <div>
              <Row>
                <Col></Col>
                <Col><img src={photo} alt="photo" height={200} style={{ borderRadius: '50%' }} /></Col>
                <Col></Col>

              </Row>
              <h2 className='text-center fs-1 fw-bold mt-2'>{selectedDemande && selectedDemande.nomPrenom}</h2>
              <Row>
                <Col>
                <Row className=' p-1 styleCol'>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'> Formation :</div></Col>
                    <Col className='text-justify'>{selectedDemande.formation}</Col>
                  </Row>
                  <Row className=' p-1 '>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'> Session :</div></Col>
                    <Col>{selectedDemande.session}</Col>
                  </Row>
                  <Row className=' p-1 styleCol'>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-geo-alt fs-5 fw-bold"></i> Adresse: </div></Col>
                    <Col>{selectedDemande.adresse}</Col>
                  </Row>
                  <Row className=' p-1'>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-telephone fs-5 fw-bold"></i> Telephone: </div></Col>
                    <Col>{selectedDemande.telephone}</Col>
                  </Row>
                  <Row className=' p-1 styleCol'>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-envelope fs-5 fw-bold"></i> Email: </div></Col>
                    <Col>{selectedDemande.email}</Col>
                  </Row>
                  <Row className='p-1 styleCol'>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'> Profession: </div></Col>
                    <Col>{selectedDemande.profession}</Col>
                  </Row>
                  <Row className=' p-1'>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'> Genre: </div></Col>
                    <Col>{selectedDemande.genre}</Col>
                  </Row>
                  <Row className=' p-1 styleCol'>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'> Date de Naissance :</div></Col>
                    <Col>{selectedDemande.dateNaissance}</Col>
                  </Row>
                  <Row className=' p-1 '>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'> Lieu de Naissance :</div></Col>
                    <Col>{selectedDemande.lieuNaissance}</Col>
                  </Row>
                  <Row className=' p-1 styleCol'>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'> Univerité :</div></Col>
                    <Col>{selectedDemande.universite}</Col>
                  </Row>
                  <Row className=' p-1 '>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'> Specialité :</div></Col>
                    <Col>{selectedDemande.specialite}</Col>
                  </Row>
                  <Row className=' p-1 styleCol '>
                    <Col xs={4}><div className='fs-5 text-justify fw-bold'> Motivation :</div></Col>
                    <Col>{selectedDemande.motivation}</Col>
                  </Row>
                </Col>
              </Row>
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

export default ListDemande;

