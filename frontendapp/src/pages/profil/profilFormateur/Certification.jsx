import React, { useState } from 'react'
import { MyInput, MyLabel } from '../../../components/Forms/Forms'
import { FormGroup, Row } from 'reactstrap'

export default function Certification() {
  const [elements, setElements] = useState({
    libelle: '',
    fichier: '',
    
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
        <Row><MyLabel text={'Libelle'} /></Row>
        <MyInput type={'text'} name={elements.libelle} value={elements.libelle} onChange={(e) => handleInputChange('libelle', e)}/>
      </FormGroup>
      <FormGroup>
        <Row><MyLabel text={'Fichier'} /></Row>
        <MyInput type={'file'} name={elements.fichier} value={elements.fichier} onChange={(e) => handleInputChange('fichier', e)}/>
      </FormGroup>
    </div>
  )
}
