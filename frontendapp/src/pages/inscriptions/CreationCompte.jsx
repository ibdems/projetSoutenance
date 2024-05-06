import React, { useState } from 'react'
import { MyInput, MyLabel } from '../../components/Forms/Forms';
import { Col, FormGroup, Row } from 'reactstrap';

export default function CreationCompte() {
    const [element, setElement] = useState({
        email: '',
        password: '',
        passwordConfirmed: '',
    })

    const handleInputChange = (name, value) => {
        setElement(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    return (
        <div className='container'>
            <Row>
                <Col></Col>
                <Col xs={12} md={10} lg={8} xl={6}>
                    <Row>
                        <Col xs={12}>
                            <FormGroup>
                                <Row>
                                    <MyLabel text={'Email'} forLabel={'email'} />
                                </Row>
                                <MyInput type={'email'} placeholder={'Ex: demsnoir@gmail.com'} value={element.email} onChange={(value) => handleInputChange(handleInputChange('email', value))} />
                            </FormGroup>
                        </Col>
                        <Col xs={12}>
                            <FormGroup>
                                <Row>
                                    <MyLabel text={'Mot de Passe'} forLabel={'password'} />
                                </Row>
                                <MyInput type={'password'} placeholder={''} value={element.password} onChange={(value) => handleInputChange(handleInputChange('password', value))} />
                            </FormGroup>
                        </Col>
                        <Col xs={12}>
                            <FormGroup>
                                <Row>
                                    <MyLabel text={'Confirmation'} forLabel={'confirmation'} />
                                </Row>
                                <MyInput type={'password'} placeholder={'Ressaisissez votre mot de passe'} value={element.passwordConfirmed} onChange={(value) => handleInputChange(handleInputChange('passwordConfirmed', value))} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>

        </div>
    )
}
