import React from 'react'
import { Col, Form, FormGroup, Row } from 'reactstrap'
import { MyInput, MyLabel } from '../../components/Forms/Forms'
import { Link } from 'react-router-dom'


export default function FormLogin() {
  return (
    <div >
        <Row className='mt-5'>
            <Col></Col>
            <Col xs={3} xl={2} md={2} lg={3} className='mt-md-5 mt-lg-3'>
                <img src="" alt="" height={100} width={100}/>
            </Col>
            <Col></Col>
        </Row>
        <Row className='mt-3'>
            <Col></Col>
            <Col xs={9} md={7} xl={6} >
                <Form>
                    <FormGroup>
                        <Row><MyLabel forLabel={'email'} text={'Email'} className={'text-white'}></MyLabel></Row>
                        <input type={'text'} className='form-control bg-transparent fs-5 p-2 text-white'/>

                    </FormGroup>
                
                    <FormGroup>
                        <Row><MyLabel forLabel={'password'} text={'Mot de passe'} className={'text-white'}></MyLabel></Row>
                        <input type={'password'} className='form-control bg-transparent fs-4 p-2 text-white'/>
                    </FormGroup>
                    <Row>
                        <Col></Col>
                        <Col xs={8} md={6} lg={7}>
                            <button className='form-control bg-warning fw-bold mt-3' > Se Connecter</button>
                        </Col>
                        <Col></Col>
                    </Row>
                    <div className='text-white text-center mt-3 mb-lg-3 fs-5'>J'ai pas de compte! <span><Link>M'inscrire</Link></span> </div>
                    
                </Form>
            </Col>
            <Col></Col>
        </Row>
    </div>
  )
}
