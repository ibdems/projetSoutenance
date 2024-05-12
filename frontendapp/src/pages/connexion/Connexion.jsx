import React from 'react'
import FormLogin from './FormLogin'
import { Col, Row } from 'reactstrap'
import './connexion.scss'

function Connexion() {
  return (
    <div className='contenuConnexion'>
      {/* Votre arrière-plan fixe pour toute la page */}

      <div className='container mb-lg-2 mt-lg-5' style={{marginTop: '5em'}}>
        {/* Le bloc de ligne avec deux colonnes éloignées */}
        <Row className=" container-special" >
          <Col className='special-col  d-none d-lg-block'></Col> {/* Première colonne spéciale */}
          <Col className='special-col-login'><FormLogin /></Col> {/* Deuxième colonne pour le formulaire de connexion */}
          
        </Row>
      </div>
    </div>
  )
}

export default Connexion
