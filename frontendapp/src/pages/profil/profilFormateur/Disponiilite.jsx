import React, { useState } from 'react'
import { MyInput, MyLabel } from '../../../components/Forms/Forms'
import { FormGroup, Row } from 'reactstrap'

export default function Disponibilite() {
  const [elements, setElements] = useState({
    jour: '',
    heureDebut: '',
    heureFin: '',
    
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
        <Row><MyLabel text={'Jours'} /></Row>
        <MyInput type={'text'} name={elements.jour} value={elements.jour} onChange={(e) => handleInputChange('jour', e)}/>
      </FormGroup>
      <FormGroup>
        <Row><MyLabel text={'Heure début'} /></Row>
        <MyInput type={'time'} name={elements.heureDebut} value={elements.heureDebut} onChange={(e) => handleInputChange('heureDebut', e)}/>
      </FormGroup>
      <FormGroup>
        <Row><MyLabel text={'Heure Fin'} /></Row>
        <MyInput type={'time'} name={elements.heureFin} value={elements.heureFin} onChange={(e) => handleInputChange('heureFin', e)}/>
      </FormGroup>
    </div>
  )
}
