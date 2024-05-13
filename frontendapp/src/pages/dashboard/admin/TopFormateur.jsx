import React from 'react'
import { topformateur } from '../../../data/formateur'
import { Col, Row } from 'reactstrap';
import image from '../../../image/afficherPhotoUtilisateur.jpeg'
import '../dashboard.scss'


function TopFormateur() {
  return (
    <>
      <div className=''>
       {
        topformateur.map(formateur => (
          <Row key={formateur.id} className='mt-3'>
            <Col xs={3}>
              <img src={image} alt="image" height={50} width={50} style={{borderRadius: '50%'}}/>
            </Col>
            <Col className='' xs={6}>
              <div style={{fontSize: '13px', marginLeft: '-9px'}} className='fw-bold mt-2'>{formateur.nomComplet}</div>
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