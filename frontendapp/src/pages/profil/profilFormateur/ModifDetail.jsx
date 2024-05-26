import React, { useState } from 'react'
import { MyInput, MyLabel } from '../../../components/Forms/Forms'
import { FormGroup, Row } from 'reactstrap'

export default function ModifDetail() {
  const [libelle, setlibelle] = useState('')

  const handleInputChange = (e) => {
    setlibelle(e)
  }
  return (
    <div>
      <FormGroup>
        <Row><MyLabel text={'Libelle'} /></Row>
        <MyInput type={'text'} name={libelle} value={libelle} onChange={handleInputChange}/>
      </FormGroup>
      
    </div>
  )
}
