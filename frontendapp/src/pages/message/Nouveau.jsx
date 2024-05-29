import React, { useState } from 'react'
import { Col, FormGroup, Row } from 'reactstrap'
import { MyInput, MyLabel, MySelect } from '../../components/Forms/Forms'
import { users } from '../../data/users'

export default function Nouveau() {
  const [elements, setElements] = useState({
    destinateur: '',
    obget: '',
    contenue: '',
  })

  const handleInputChange = (name, value) => {
    setElements (prevState => (
      {
        ...prevState,
        [name] : value,
      }
    ))
  }
  return (
    <div>

      <Row>
        <Col xs={3}><MyLabel text={'Destinateur:'} /></Col>
        <Col xs={9}>
          <MySelect className={'fs-5'} value={elements.destinateur} onChange={(value) => handleInputChange('destinateur', value)}
            options={
              users.map(users => (

                { label: users.nomComplet, value: users.id }

              ))
            } 
          />
        </Col>
      </Row>

      <Row className='mt-2'>
        <Col xs={3}><MyLabel text={'Objet:'} /></Col>
        <Col xs={9}>
          <MyInput placeholder={"Pourquoi votre message"} value={elements.obget} onChange={(value) => handleInputChange('objet', value)}/>
        </Col>
      </Row>

      <FormGroup className='mt-3'>
        <MyInput type={'textarea'} placeholder={'Votre message ....'} rows={8} value={elements.contenue} onChange={(value) => handleInputChange('contenue', value)}/>
      </FormGroup>

    </div>
  )
}
