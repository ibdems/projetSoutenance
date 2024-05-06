import React from 'react'
import { Col, Row } from 'reactstrap'

export default function DetailOrganisme() {
    return (
        <div>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src="" alt="Photo" height={200} width={200} style={{ border: '1px solid black', borderRadius: '50%' }} />
                    </div>
                </Col>
            </Row>
            <Row>
                <h2 className='text-center mt-3'>Tech Evolution</h2>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col md={12} lg={6}>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Descrption</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas nisi temporibus provident dolore earum odit fugit amet, minima nostrum similique quas numquam placeat, magnam aspernatur incidunt ea sequi reiciendis vel?</p>
                </Col>
            </Row>
            <Row className=' p-1 '>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Adresse</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'>Conakry/Hamdallaye</p>
                </Col>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Telephone</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'>620 000 000</p>
                </Col>
            </Row>
            <Row className=' p-1 '>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Email</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'>techEvolution@gmail.com</p>
                </Col>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Site Web</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'>https//:techEvolution.com</p>
                </Col>
            </Row>
            <Row className=' p-1 '>
                <Col>
                    <h5 className='mt-2 text-justify'><i className="bi bi-job fs-3"></i> Domaine</h5>
                </Col>
                <Col>
                    <p className='text-justify fw-3 fs-5 mt-2'><li>Formation</li><li>Developpement Logiciel</li></p>
                </Col>
            </Row>
            
        </div>
    )
}
