import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Card, Col, FormGroup, Row } from 'reactstrap'
import { payement as payementData } from '../../data/payement';
import { MyInput, MyLabel, MySelect } from '../../components/Forms/Forms';
import { MyTable } from '../../components/table/Table';

function ListPayement() {
  const [elements, setElements] = useState({
    option: null,
    recherche: '',
    date: ''
  });

  const [page, setPage] = useState(1);
  const [filteredPayements, setFilteredPayements] = useState(payementData);
  const elementsPerPage = 3;

  // Calcule l'index de début et de fin pour la pagination
  const startIndex = (page - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;

  // Fonctions pour passer à la page précédente et suivante
  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    if (endIndex < filteredPayements.length) {
      setPage(page + 1);
    }
  };

  const handleInputChange = (name, value) => {
    setElements(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    const filterPayements = () => {
      let filtered = payementData;

      // Filter by date
      if (elements.date) {
        filtered = filtered.filter(payement => payement.date === elements.date);
      }

      // Search by selected option
      if (elements.option && elements.recherche) {
        const searchValue = elements.recherche.toLowerCase();
        filtered = filtered.filter(payement => {
          switch (elements.option.value) {
            case 'numero':
              return payement.code.toLowerCase().includes(searchValue);
            case 'payant':
              return payement.payant.toLowerCase().includes(searchValue);
            case 'session':
              return payement.session.toLowerCase().includes(searchValue);
            case 'formation':
              return payement.formation.toLowerCase().includes(searchValue);
            default:
              return true;
          }
        });
      }

      setFilteredPayements(filtered);
      setPage(1); // Reset to first page whenever filter changes
    };

    filterPayements();
  }, [elements]);

  return (
    <div>
      <Breadcrumb listTag="div" style={{ top: 'fixed' }}>
        <BreadcrumbItem>
          <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Accueil</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link style={{ textDecoration: 'none' }} className='fs-5 fw-bold text-black'>Liste</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col xs={12} lg={6} md={12}>
          <Card className='p-1 mt-2'>
            <Row>
              <Col xs={12} md={6}>
                <Row><MyLabel text={'Option de recherche'} /></Row>
                <MySelect
                  value={elements.option}
                  onChange={(selectedOption) => handleInputChange('option', selectedOption)}
                  options={[
                    { label: 'Numero', value: 'numero' },
                    { label: 'Payant', value: 'payant' },
                    { label: 'Session', value: 'session' },
                    { label: 'Formation', value: 'formation' },
                  ]}
                />
              </Col>
              <Col xs={12} md={6}>
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
        <Col xs={12} lg={3} md={10}>
          <Card className='p-1 mt-2'>
            <FormGroup>
              <Row><MyLabel text={'Rechercher une date'} /></Row>
              <MyInput
                id="date"
                type="date"
                value={elements.date}
                onChange={(e) => handleInputChange('date', e)}
              />
            </FormGroup>
          </Card>
        </Col>
      </Row>
      <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <MyTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Numero</th>
              <th>Montant</th>
              <th>Date Payement</th>
              <th>Payant</th>
              <th>Identifiant</th>
              <th>Formation</th>
              <th>Session</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayements.slice(startIndex, endIndex).map((payement, index) => (
              <tr key={payement.id}>
                <td>{startIndex + index + 1}</td>
                <td>{payement.code}</td>
                <td>{payement.montant}</td>
                <td>{payement.date}</td>
                <td>{payement.payant}</td>
                <td>{payement.numCompte}</td>
                <td>{payement.formation}</td>
                <td>{payement.session}</td>
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
            <button onClick={goToNextPage} disabled={endIndex >= filteredPayements.length} className='btn text-white fw-bold' style={{ backgroundColor: '#03031efc' }}> <i className="bi fs-5 bi-arrow-right"></i></button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ListPayement;
