import React, { useState } from 'react'
import { Col, Form, FormGroup, Row } from 'reactstrap'
import { MyInput, MyLabel } from '../../components/Forms/Forms'
import { Link } from 'react-router-dom'


export default function FormLogin({lienConnexion}) {
    const [elements, setElements] = useState({  
        email: '',
        password: ''
    })

    const handleInputChange = (name, value) => {
        setElements(prevState => ({
            ...prevState, [name]: value
        }));
    }
  return (
    <div >
        <Row className='mt-5'>
            <Col></Col>
            <Col xs={3} xl={3} md={2} lg={3} className='mt-md-5 mt-lg-3'>
                <img src="" alt="" height={100} width={100}/>
            </Col>
            <Col></Col>
        </Row>
        <Row className='mt-3'>
            <Col></Col>
            <Col xs={9} md={7} xl={8} >
                <Form>
                    <FormGroup>
                        <Row><MyLabel forLabel={'email'} text={'Email'} className={'text-white'}></MyLabel></Row>
                        <MyInput type={'text'} className='form-control border-white bg-transparent fs-5 p-2 text-white' value={elements.email} onChange={(value) => handleInputChange('email', value)}/>

                    </FormGroup>
                
                    <FormGroup>
                        <Row><MyLabel forLabel={'password'} text={'Mot de passe'} className={'text-white'}></MyLabel></Row>
                        <MyInput type={'password'} className='form-control border-white  bg-transparent fs-4 p-2 text-white' value={elements.password} onChange={(value) => handleInputChange('password', value)}/>
                    </FormGroup>
                    <Row>
                        <Col></Col>
                        <Col xs={8}  md={8} lg={10}>
                            <Link to={lienConnexion}>
                                <button className='form-control bg-warning fs-5 fw-bold mt-3' > Se Connecter</button>
                            </Link>
                            
                        </Col>
                        <Col></Col>
                    </Row>
                    <div className='text-white text-center mt-3 mb-lg-3 fs-5'>J'ai pas de compte! <span className='text-warning'><Link to={'/inscription'}>M'inscrire</Link></span> </div>
                    
                </Form>
            </Col>
            <Col></Col>
        </Row>
    </div>
  )
}
