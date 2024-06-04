import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Card, Col, FormGroup, Input, Modal, ModalBody, ModalFooter, Row } from 'reactstrap';
import { MyButton, MyLabel } from '../../components/Forms/Forms';
import image from '../../image/team-3.jpg';
import { formateurCabinet as formateurCabinetData } from '../../data/formateur';
import Select from 'react-select';
import { MyTable } from '../../components/table/Table';

function ListFormateur() {
  const [elements, setElements] = useState({
    option: null,
    recherche: '',
  });

  const [modal, setModal] = useState(false);
  const [filteredFormateur, setFilteredFormateur] = useState(formateurCabinetData);
  const [page, setPage] = useState(1);
  const elementsPerPage = 3; // Nombre d'éléments par page

  const [selectedFormateur, setSelectedFormateur] = useState(null);

  const toggle = () => setModal(!modal);

  const handleInputChange = (name, value) => {
    setElements(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const openModal = (formateur) => {
    setSelectedFormateur(formateur);
    toggle();
  };

  useEffect(() => {
    const filterFormateur = () => {
      let filtered = formateurCabinetData;

      if (elements.option && elements.recherche) {
        filtered = filtered.filter(formateur => {
          const searchValue = elements.recherche.toLowerCase();
          switch (elements.option.value) {
            case 'numero':
              return formateur.code.toLowerCase().includes(searchValue);
            case 'nomPrenom':
              return formateur.nomComplet.toLowerCase().includes(searchValue);
            case 'profession':
              return formateur.profession.toLowerCase().includes(searchValue);
            default:
              return true;
          }
        });
      }

      setFilteredFormateur(filtered);
    };

    filterFormateur();
  }, [elements]);

  // Calcule l'index de début et de fin pour la pagination
  const startIndex = (page - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;

  // Sélectionne les éléments à afficher sur la page actuelle
  const currentElements = filteredFormateur.slice(startIndex, endIndex);

  // Fonctions pour passer à la page précédente et suivante
  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    if (endIndex < filteredFormateur.length) {
      setPage(page + 1);
    }
  };

  return (
    <div className='mb-5'>
      <Breadcrumb listTag="div" style={{ top: 'fixed' }}>
        <BreadcrumbItem>
          <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Accueil</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Liste de nos formateurs</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col lg={2} className='mt-lg-3'>
          <Link to={'/admin/formateur/ajoutformateurcabinet'}><MyButton text={'Ajouter '} bgColor={'#03031efc'} icone={'bi bi-plus'} /></Link>
          
        </Col>
        <Col></Col>
        <Col xs={12} lg={6} md={12}>
          <Card className='px-1 '>
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
                    { label: 'Nom ou prenom', value: 'nomPrenom' },
                    { label: 'Profession', value: 'profession' },
                  ]}
                />
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Row><MyLabel text={'Rechercher'} /></Row>
                  <Input
                    className='form-control p-2 border-black text-black'
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


      </Row>
      <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <MyTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Numero</th>
              <th>Photo</th>
              <th>Prenom & Nom</th>
              <th>Adresse</th>
              <th>Telephone</th>
              <th>Email</th>
              <th>Profession</th>
              <th colSpan={2}>Option</th>
              <th>Plus</th>
            </tr>
          </thead>
          <tbody >
            {currentElements.map((formateur, index) => (
              <tr key={formateur.id}>
                <td>{startIndex + index + 1}</td>
                <td>{formateur.code}</td>
                <td><img src={image} alt="" height={40} width={40} style={{ borderRadius: '50%' }} /></td>
                <td>{formateur.nomComplet}</td>
                <td>{formateur.adresse}</td>
                <td>{formateur.telephone}</td>
                <td>{formateur.email}</td>
                <td>{formateur.profession}</td>
                <td><i className="bi bi-pen fs-5 fw-bold text-success" onClick={() => { }} title='Modifier'></i></td>
                <td><i className="bi bi-trash fs-5 fw-bold text-danger" onClick={() => { }} title='Supprimer'></i></td>
                <td><i className="bi bi-eye-fill" onClick={() => openModal(formateur)}></i></td>
              </tr>
            ))}
          </tbody>
        </MyTable>
      </div>
      <Row>
        <Col></Col>
        <Col xs={12} md={5} lg={4} xl={4}>
          <div className="ms-5">
            <button onClick={goToPreviousPage} disabled={page === 1} className='btn text-white fw-bold' style={{ backgroundColor: '#03031efc' }}><i className="bi fs-5 bi-arrow-left"></i></button>
            <span className='mx-2 fs-4 fw-bold'>Page {page}</span>
            <button onClick={goToNextPage} disabled={endIndex >= filteredFormateur.length} className='btn text-white fw-bold' style={{ backgroundColor: '#03031efc' }}> <i className="bi fs-5 bi-arrow-right"></i></button>
          </div>
        </Col>
      </Row>
      {/* Modal pour les detailles du formateurs */}
      <Modal isOpen={modal} toggle={toggle} centered={true} scrollable={true} className='fs-5' style={{ maxHeight: '80vh' }}>

        <ModalBody>
          {selectedFormateur && (
            <div>
              <Row>
                <Col></Col>
                <Col><img src={image} alt="photo" height={200} style={{ borderRadius: '50%' }} /></Col>
                <Col></Col>

              </Row>
              <h2 className='text-center fs-1 fw-bold mt-2'>{selectedFormateur && selectedFormateur.nomComplet}</h2>
              <Row>
                <Col>
                  <Row className=' p-1 mt-2 styleCol'>
                    <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-geo-alt fs-5 fw-bold"></i> Adresse: </div></Col>
                    <Col>{selectedFormateur.adresse}</Col>
                  </Row>
                  <Row className=' p-1 mt-2'>
                    <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-telephone fs-5 fw-bold"></i> Telephone: </div></Col>
                    <Col>{selectedFormateur.telephone}</Col>
                  </Row>
                  <Row className=' p-1 mt-2 styleCol'>
                    <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'><i className="bi bi-envelope fs-5 fw-bold"></i> Email: </div></Col>
                    <Col>{selectedFormateur.email}</Col>
                  </Row>
                  <Row className=' p-1 mt-2 '>
                    <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Linkdein :</div></Col>
                    <Col>{selectedFormateur.linkedin}</Col>
                  </Row>
                  <Row className=' p-1 mt-2 styleCol'>
                    <Col xs={6} md={5}><div className='fs-5 text-justify fw-bold'> Niveau études: </div></Col>
                    <Col>{selectedFormateur.niveauEtude}</Col>
                  </Row>
                  <Row className=' p-1 mt-2'>
                    <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Competances: </div></Col>
                    <Col>{selectedFormateur.competances.map(competances => (<li key={competances.id} >{competances.libelle}</li>))}</Col>
                  </Row>
                  <Row className=' p-1 mt-2 styleCol'>
                    <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Domaine d'expertises:</div></Col>
                    <Col>{selectedFormateur.domaineExpertise.map(domaineExpertise => (<li key={domaineExpertise.id} >{domaineExpertise.libelle}</li>))}</Col>
                  </Row>
                  <Row className=' p-1 mt-2 '>
                    <Col xs={6} md={4}><div className='fs-5 text-justify fw-bold'> Certifications: </div></Col>
                    <Col>{selectedFormateur.certifications.map(certifications => (<li key={certifications.id} >{certifications.libelle}</li>))}</Col>
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
              <Button type='button' onClick={toggle} className='p-2 fw-bold form-control bg-warning text-black'>
                Fermer
              </Button>
            </Col>
          </Row>



        </ModalFooter>
      </Modal>

      

    </div>
  )
}

export default ListFormateur