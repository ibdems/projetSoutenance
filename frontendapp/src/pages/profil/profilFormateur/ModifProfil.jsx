import React, { useState } from 'react'
import { MyInput, MyLabel } from '../../../components/Forms/Forms'
import { FormGroup, Row } from 'reactstrap'

export default function ModifProfil() {
  const [elements, setElements] = useState({
    telephone: '',
    adresse: '',
    email:'',
    telephone: '',
    dureeExperiance: '',
    niveauEtude: '',
    profession: '',
    linkedin: ''
  })

  const handleInputChange = (name, value) => {
    setElements(prevState => ({
        ...prevState,
        [name]: value
      }
    ))
  }
  return (
    <div>
      <FormGroup>
        <Row><MyLabel text={'Adresse'} /></Row>
        <MyInput type={'text'} name={elements.adresse} value={elements.adresse} onChange={(e) => handleInputChange('adresse', e)}/>
      </FormGroup>
      <FormGroup>
        <Row><MyLabel text={'Email'} /></Row>
        <MyInput type={'mail'} name={elements.email} value={elements.email} onChange={(e) => handleInputChange('email', e)}/>
      </FormGroup>
      <FormGroup>
        <Row><MyLabel text={'Telephone'} /></Row>
        <MyInput type={'text'} name={elements.telephone} value={elements.telephone} onChange={(e) => handleInputChange('telephone', e)}/>
      </FormGroup>
      <FormGroup>
        <Row><MyLabel text={'Profession'} /></Row>
        <MyInput type={'text'} name={elements.profession} value={elements.profession} onChange={(e) => handleInputChange('profession', e)}/>
      </FormGroup>
      <FormGroup>
        <Row><MyLabel text={"Niveau d'etude"} /></Row>
        <MyInput type={'text'} name={elements.niveauEtude} value={elements.niveauEtude} onChange={(e) => handleInputChange('niveauEtude', e)}/>
      </FormGroup>
      <FormGroup>
        <Row><MyLabel text={"Durée d'experience"} /></Row>
        <MyInput type={'text'} name={elements.dureeExperiance} value={elements.dureeExperiance} onChange={(e) => handleInputChange('dureeExperiance', e)}/>
      </FormGroup>
      <FormGroup>
        <Row><MyLabel text={"Linkedin"} /></Row>
        <MyInput type={'text'} name={elements.linkedin} value={elements.linkedin} onChange={(e) => handleInputChange('linkedin', e)}/>
      </FormGroup>
    </div>
  )
}
