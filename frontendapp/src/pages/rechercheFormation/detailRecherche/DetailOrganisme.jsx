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
                <Col xs={12}>
                    <div className='fw-bold text-justify'><i className="bi bi-job fs-3"></i> Descrption:</div>
                </Col>
                <Col>
                    <p className='mt-1 text-justify  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas nisi temporibus provident dolore earum odit fugit amet, minima nostrum similique quas numquam placeat, magnam aspernatur incidunt ea sequi reiciendis vel?</p>
                </Col>
            </Row>
            <Row className=' p-1 '>
                <Col xs={5} md={4}>
                    <div className=' text-start text-md-end fw-bold'><i className="bi bi-geo-alt"></i> Adresse:</div>
                </Col>
                <Col>
                    <p className='text-justify  fw-3 fs-5 '>Conakry/Hamdallaye</p>
                </Col>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col xs={5} md={4}>
                    <div className=' text-start text-md-end fw-bold'><i className="bi bi-telephone "></i> Telephone:</div>
                </Col>
                <Col>
                    <p className='mt-1 text-justify  '>620 000 000</p>
                </Col>
            </Row>
            <Row className=' p-1 '>
                <Col xs={5} md={4}>
                    <div className=' text-start text-md-end fw-bold'><i className="bi bi-envelope"></i> Email:</div>
                </Col>
                <Col>
                    <p className='mt-1 text-justify  '>techEvolution@gmail.com</p>
                </Col>
            </Row>
            <Row className=' p-1 styleCol'>
                <Col xs={5} md={4}>
                    <div className=' text-start text-md-end fw-bold'><i className="bi bi-job fs-3"></i> Site Web :</div>
                </Col>
                <Col>
                    <p className='mt-1 text-justify  '>https//:techEvolution.com</p>
                </Col>
            </Row>
            <Row className=' p-1 '>
                <Col md={4}>
                    <div className=' text-start text-md-end fw-bold'><i className="bi bi-job fs-3"></i> Domaine:</div>
                </Col>
                <Col>
                    <p className='mt-1 text-justify  '><li>Formation</li><li>Developpement Logiciel</li></p>
                </Col>
            </Row>
            
        </div>
    )
}
