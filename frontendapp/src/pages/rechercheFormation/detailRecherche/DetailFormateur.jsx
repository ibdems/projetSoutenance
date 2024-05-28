import React from 'react'
import { Col, Row } from 'reactstrap'

export default function DetailFormateur() {
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
                <h2 className='text-center mt-3'>Ibrahim Dems</h2>
            </Row>
            <Row className=' px-1 styleCol'>
                <Col xs={4}>
                    <div className='fw-bold text-start text-md-end'><i className="bi bi-job fs-3"></i> Profession:</div>
                </Col>
                <Col>
                    <p className='text-justify fs-5 mt-1'>Developpeur Web & Mobile</p>
                </Col>
            </Row>
            <Row className=' px-1 '>
                <Col xs={4}>
                    <div className='fw-bold text-start text-md-end'><i className="bi bi-job fs-3"></i> Adresse:</div>
                </Col>
                <Col>
                    <p className='text-justify fs-5 mt-1'>Conakry/Hamdallaye</p>
                </Col>
            </Row>
            <Row className=' px-1 styleCol'>
                <Col xs={4}>
                    <div className='fw-bold text-start text-md-end'><i className="bi bi-job fs-3"></i> Telephone:</div>
                </Col>
                <Col>
                    <p className='text-justify fs-5 mt-1'>620 000 000</p>
                </Col>
            </Row>
            <Row className=' px-1 '>
                <Col xs={4}>
                    <div className='fw-bold text-start text-md-end'><i className="bi bi-job fs-3"></i> Email:</div>
                </Col>
                <Col>
                    <p className='text-justify fs-5 mt-1'>ibrahima2ds@gmail.com</p>
                </Col>
            </Row>
            <Row className=' px-1 styleCol'>
                <Col xs={4}>
                    <div className='fw-bold text-start text-md-end'><i className="bi bi-job fs-3"></i> Linkdin:</div>
                </Col>
                <Col>
                    <p className='text-justify fs-5 mt-1'>@IbrahimaDiallo</p>
                </Col>
            </Row>
            <Row className=' px-1'>
                <Col xs={12} md={4}>
                    <div className='fw-bold text-start text-md-end'><i className="bi bi-job fs-3"></i> Competances:</div>
                </Col>
                <Col>
                    <p className='text-justify fs-5 mt-1'><li>Developpement Web</li><li>Developpement Mobile</li></p>
                </Col>
            </Row>
            <Row className=' px-1 styleCol'>
                <Col xs={12} md={4}>
                    <div className='fw-bold text-start text-md-end'><i className="bi bi-job fs-3"></i> Domaine d'expertise:</div>
                </Col>
                <Col>
                    <p className='text-justify fs-5 mt-1'><li>Analyse et modelisation</li><li>ReactJs</li></p>
                </Col>
            </Row>
            <Row className=' px-1'>
                <Col xs={12} md={4}>
                    <div className='fw-bold text-start text-md-end'><i className="bi bi-job fs-3"></i> Certifications:</div>
                </Col>
                <Col>
                    <p className='text-justify fs-5 mt-1'><li>Diplomé en Genie Informatique de Guinée</li><li>DevOps</li></p>
                </Col>
            </Row>
        </div>
    )
}
