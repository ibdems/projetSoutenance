import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Button, FormGroup } from 'reactstrap';
import Navbar from '../../layoutsPublic/navbar/Navbar';
import ContactezNous from '../accueil/ContactezNous';
import InfoSection from '../accueil/InfoSection';
import Footer from '../accueil/Footer';
import { MyInput, MyLabel, MySelect } from '../../components/Forms/Forms';
import profil from '../../image/profil.svg'



export default function Reservation() {
  const [element, setElements] = useState({
    prenom: '',
    nom: '',
    genre: '',
    dateNaissance: '',
    lieuNaissance: '',
    telephone: '',
    email: '',
    profession: '',
    universite: '',
    specialite: '',
    adresse: '',
    motivation: '',
    validation: '',
  })

  const handleInputChange = (name, value) => {
    setElements(prevState => (
      { ...prevState, [name]: value, }
    ))
  }
  const inputRef = useRef(null);
  const [image, setImage] = useState('')
  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file);
  }

  return (
    <div>
      <Navbar contacteznous={'contacteznous'} />
      <section className="service_section layout_padding">
        <div className="container mt-5">
          <Row>
            <Col></Col>
            <Col>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  {image ? (
                    <img src={URL.createObjectURL(image)} alt="" height={200} width={200} style={{ border: '1px solid black', borderRadius: '50%' }} />
                  ) : (
                    <img src={profil} className='p-2' alt="" height={200} width={200} style={{ border: '1px solid black', borderRadius: '50%' }} />
                  )}
                </div>

                <div>
                  <input type="file" ref={inputRef} className='d-none' onChange={handleImageChange} name="" id="" />
                  <button type='button' onClick={handleImageClick} className={' mt-3 form-control bg-warning text-black fs-3 py-2 px-4 fw-bold'}> Photo</button>
                </div>

              </Col>
            </Col>
            <Col></Col>
          </Row>
          <Row className='me-md-5 ms-md-5'>
            <Col lg={6}>
              <FormGroup>
                <Row>
                  <MyLabel text={'Prénom'} forLabel={'prenom'} />
                </Row>
                <MyInput type={'text'} placeholder={'Ex: Mamadou Alpha'} value={element.prenom} onChange={(value) => handleInputChange(handleInputChange('prenom', value))} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Row>
                  <MyLabel text={'Nom'} forLabel={'nom'} />
                </Row>
                <MyInput type={'text'} placeholder={'Ex: DIALLO'} value={element.nom} onChange={(value) => handleInputChange(handleInputChange('nom', value))} />
              </FormGroup>
            </Col>
          </Row>
          <Row className='me-md-5 ms-md-5'>
            <Col lg={6}>
              <FormGroup>
                <Row>
                  <MyLabel text={'Genre'} forLabel={'prenom'} />
                </Row>
                <MySelect value={element.genre} onChange={(value) => handleInputChange(handleInputChange('genre', value))} options={[
                  {label: 'Masculin', value: 'masculin'},
                  {label: 'Féminin', value: 'feminin'}
                ]}/>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Row>
                  <MyLabel text={'Télephone'} forLabel={'nom'} />
                </Row>
                <MyInput type={'text'} placeholder={'Ex: 650000000'} value={element.telephone} onChange={(value) => handleInputChange(handleInputChange('telephone', value))} />
              </FormGroup>
            </Col>
          </Row>
          <Row className='me-md-5 ms-md-5'>
            <Col lg={6}>
              <FormGroup>
                <Row>
                  <MyLabel text={'Date de naissance'} forLabel={'dateNaissance'} />
                </Row>
                <MyInput type={'date'}  value={element.dateNaissance} onChange={(value) => handleInputChange(handleInputChange('dateNaissance', value))} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Row>
                  <MyLabel text={'Lieu de naissance'} forLabel={'nom'} />
                </Row>
                <MyInput type={'text'} placeholder={'Ex: Mamoun'} value={element.lieuNaissance} onChange={(value) => handleInputChange(handleInputChange('lieuNaissance', value))} />
              </FormGroup>
            </Col>
          </Row>
          <Row className='me-md-5 ms-md-5'>
            <Col lg={6}>
              <FormGroup>
                <Row>
                  <MyLabel text={'Email'} forLabel={'prenom'} />
                </Row>
                <MyInput type={'email'} placeholder={'Ex: ibrahimdemsnwr@gmail.com'} value={element.email} onChange={(value) => handleInputChange(handleInputChange('email', value))} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Row>
                  <MyLabel text={'Profession'} forLabel={'nom'} />
                </Row>
                <MyInput type={'text'} placeholder={'Ex: DIALLO'} value={element.nom} onChange={(value) => handleInputChange(handleInputChange('nom', value))} />
              </FormGroup>
            </Col>
          </Row>
          <Row className='me-md-5 ms-md-5'>
            <Col lg={6}>
              <FormGroup>
                <Row>
                  <MyLabel text={'Adresse'} forLabel={'prenom'} />
                </Row>
                <MyInput type={'text'} placeholder={'Ex: Simbaya'} value={element.adresse} onChange={(value) => handleInputChange(handleInputChange('adresse', value))} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Row>
                  <MyLabel text={'Université (Si vous êtes étudiant)'} forLabel={'nom'} />
                </Row>
                <MyInput type={'text'} placeholder={'Ex: Université Gamal Abdel Nasser de Conakry'} value={element.universite} onChange={(value) => handleInputChange(handleInputChange('universite', value))} />
              </FormGroup>
            </Col>
          </Row>
          <Row className='me-md-5 ms-md-5'>
            <Col>
              <FormGroup>
                <Row>
                  <MyLabel text={'Specialité (Si vous êtes étudiant)'} forLabel={'nom'} />
                </Row>
                <MyInput type={'text'} placeholder={'Ex: Génie Informatique'} value={element.specialite} onChange={(value) => handleInputChange(handleInputChange('specialite', value))} />
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup>
                <Row>
                  <MyLabel text={'Motivation (Vos motivation pour la formation)'} forLabel={'prenom'} />
                </Row>
                <MyInput type={'textarea'} rows={2} placeholder={'Ex: Simbaya'} value={element.adresse} onChange={(value) => handleInputChange(handleInputChange('adresse', value))} />
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col></Col>
            <Col xs={8} md={6}><Link><button type='button' className='form-control text-white fs-4' style={{ backgroundColor: '#03031efc' }} onClick={()=> {}}>Valider</button></Link></Col>
            <Col></Col>
          </Row>
          
        </div>
      </section>

      <div style={{ marginTop: '-150px' }}>
        <ContactezNous />
      </div>

      <InfoSection></InfoSection>
      <Footer />

    </div>
  );
}
