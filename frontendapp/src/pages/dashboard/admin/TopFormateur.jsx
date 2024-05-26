import React from 'react'
import { topformateur } from '../../../data/formateur'
import { Col, Row } from 'reactstrap';
import image from '../../../image/afficherPhotoUtilisateur.jpeg'


function TopFormateur() {
  return (
    <>
      <div className=''>
       {
        topformateur.map(formateur => (
          <Row key={formateur.id} className='mt-2'>
            <Col xs={3}>
              <img src={image} alt="image" height={45} width={45} style={{borderRadius: '50%'}}/>
            </Col>
            <Col className='' xs={6}>
              <div style={{fontSize: '10px', marginLeft: '-9px'}} className='fw-bold mt-1'>{formateur.nomComplet}</div>
              <div style={{fontSize: '10px', marginLeft: '-13px'}}>{formateur.email}</div>
            </Col>
            
            <Col xs={3}>
              <div className='mt-2 fw-bold'>{formateur.nombreSession}</div>
            </Col>
          </Row>
        ))
       }
    </div>
    </>
  )
}

export default TopFormateur