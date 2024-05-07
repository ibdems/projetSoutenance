import React from 'react'
import { Col, Form, FormGroup, Row } from 'reactstrap'
import { MyInput, MyLabel } from '../../components/Forms/Forms'

export default function FormLogin() {
  return (
    <div>
        <Row>
            <Col></Col>
            <Col>
                <span className='text-white'>Logo</span>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col xs={10}>
                <Form>
                    <FormGroup>
                        <Row><MyLabel forLabel={'email'} text={'Email'}></MyLabel></Row>
                        <input type={'text'} className='form-control bg-transparent fs-5 p-2 text-white'/>

                    </FormGroup>
                </Form>
                <Form>
                    <FormGroup>
                        <Row><MyLabel forLabel={'password'} text={'Mot de passe'}></MyLabel></Row>
                        <input type={'password'} className='form-control bg-transparent fs-4 p-2 text-white'/>
                    </FormGroup>
                </Form>
            </Col>
            <Col></Col>
        </Row>
    </div>
  )
}
